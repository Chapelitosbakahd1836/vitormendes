'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { CONTACT_LINKS, type ContactKind } from '@/content/links'
import { useDict, useT } from '@/lib/i18n'

gsap.registerPlugin(SplitText, ScrollTrigger)

export default function Contato() {
  const t = useT()
  const dict = useDict()
  const root = useRef<HTMLElement>(null)

  const links = Object.entries(dict.contato.links) as [
    ContactKind,
    { label: string; value: string },
  ][]

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
      className="halo px-[max(1.25rem,4vw)] pt-[clamp(5rem,14vh,11rem)] pb-10"
      style={{ ['--halo-x' as string]: '50%', ['--halo-y' as string]: '30%', ['--halo-size' as string]: '80vw' }}
      aria-labelledby="contato-title"
    >
      <p data-lang-text className="eyebrow mb-6">
        {t('contato.eyebrow')}
      </p>

      <h2
        id="contato-title"
        data-contato-title
        className="display mb-12 overflow-hidden"
        style={{ fontSize: 'var(--text-display)' }}
      >
        {t('contato.title')}
      </h2>

      {/* Contatos como botões: o WhatsApp é a ação principal, os outros dois
          repetem a forma em contorno. */}
      <ul className="mb-16 flex flex-wrap gap-4">
        {links.map(([kind, link]) => (
          <li key={kind}>
            <a
              data-lang-text
              href={CONTACT_LINKS[kind]}
              target={kind === 'email' ? undefined : '_blank'}
              rel={kind === 'email' ? undefined : 'noreferrer'}
              className={
                kind === 'whatsapp'
                  ? 'btn btn-solid'
                  : 'btn btn-outline'
              }
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <hr className="rule-gold mb-6" />

      <p data-lang-text className="eyebrow">
        {t('footer.year')}
      </p>
    </footer>
  )
}
