'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { HAS_RELEASE_PDF, RELEASE_PDF_PATH } from '@/content/media'
import { useDict, useT } from '@/lib/i18n'

gsap.registerPlugin(SplitText, ScrollTrigger)

/** Placeholder de conteúdo — vira texto simples em vez de link quebrado. */
function isPlaceholder(value: string) {
  return value.trim().startsWith('[')
}

function href(kind: string, value: string): string | null {
  if (isPlaceholder(value)) return null
  if (kind === 'email') return `mailto:${value}`
  if (kind === 'whatsapp') return `https://wa.me/${value.replace(/\D/g, '')}`
  if (kind === 'instagram') return `https://instagram.com/${value.replace(/^@/, '')}`
  return value.startsWith('http') ? value : `https://${value}`
}

export default function Contato() {
  const t = useT()
  const dict = useDict()
  const root = useRef<HTMLElement>(null)

  const links = Object.entries(dict.contato.links)
  const emailHref = href('email', dict.contato.links.email.value)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const split = new SplitText('[data-contato-title]', { type: 'words,chars' })

        gsap.from(split.chars, {
          yPercent: 110,
          opacity: 0,
          duration: 0.8,
          stagger: 0.025,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '[data-contato-title]',
            start: 'top 85%',
            markers: process.env.NODE_ENV === 'development',
          },
        })

        return () => split.revert()
      })
    },
    { scope: root },
  )

  return (
    <footer
      ref={root}
      className="px-[max(1.25rem,4vw)] pt-[clamp(5rem,14vh,11rem)] pb-10"
      aria-labelledby="contato-title"
    >
      <p data-lang-text className="eyebrow mb-6">
        {t('contato.eyebrow')}
      </p>

      <h2
        id="contato-title"
        data-contato-title
        className="display mb-10 overflow-hidden"
        style={{ fontSize: 'var(--text-display)' }}
      >
        {t('contato.title')}
      </h2>

      <p
        data-lang-text
        className="mb-14 max-w-[46ch] text-[color:var(--color-paper)]/80"
        style={{ fontSize: 'var(--text-lead)', lineHeight: 1.34 }}
      >
        {t('contato.body')}
      </p>

      <div className="mb-14 flex flex-wrap items-center gap-8">
        {emailHref ? (
          <a
            data-lang-text
            href={emailHref}
            className="eyebrow border-b border-[color:var(--color-accent)] pb-1 text-[color:var(--color-paper)] transition-colors hover:text-[color:var(--color-accent)]"
          >
            {t('contato.cta')}
          </a>
        ) : (
          <span data-lang-text className="eyebrow text-[color:var(--color-paper)]/40">
            {t('contato.cta')}
          </span>
        )}

        {HAS_RELEASE_PDF ? (
          <a
            data-lang-text
            href={RELEASE_PDF_PATH}
            download
            className="eyebrow border-b border-[color:var(--color-hairline)] pb-1 transition-colors hover:text-[color:var(--color-accent)]"
          >
            {t('contato.download')}
          </a>
        ) : (
          <span data-lang-text className="eyebrow text-[color:var(--color-paper)]/40">
            {t('contato.download')}
          </span>
        )}
      </div>

      <ul className="mb-16 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
        {links.map(([kind, link]) => {
          const url = href(kind, link.value)

          return (
            <li key={kind} className="border-t border-[color:var(--color-hairline)] py-5">
              <p data-lang-text className="eyebrow mb-2">
                {link.label}
              </p>
              {url ? (
                <a
                  data-lang-text
                  href={url}
                  target={kind === 'email' ? undefined : '_blank'}
                  rel={kind === 'email' ? undefined : 'noreferrer'}
                  className="text-[color:var(--color-paper)] underline-offset-4 transition-colors hover:text-[color:var(--color-accent)] hover:underline"
                >
                  {link.value}
                </a>
              ) : (
                <span data-lang-text className="text-[color:var(--color-paper)]/50">
                  {link.value}
                </span>
              )}
            </li>
          )
        })}
      </ul>

      <div className="flex flex-wrap items-end justify-between gap-6 border-t border-[color:var(--color-hairline)] pt-6">
        <p data-lang-text className="eyebrow">
          {t('footer.year')}
        </p>
        <p data-lang-text className="eyebrow">
          {t('footer.photoCredit')}
        </p>
        <p data-lang-text className="eyebrow">
          {t('footer.siteCredit')}
        </p>
      </div>
    </footer>
  )
}
