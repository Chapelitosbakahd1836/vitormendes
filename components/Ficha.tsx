'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { fichaMedia } from '@/content/media'
import { CONTACT_LINKS } from '@/content/links'
import { useDict, useT } from '@/lib/i18n'
import MediaFrame from './Media'

gsap.registerPlugin(ScrollTrigger)

export default function Ficha() {
  const t = useT()
  const dict = useDict()
  const root = useRef<HTMLElement>(null)

  const rows = Object.entries(dict.ficha.rows)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('[data-ficha-title]', {
          opacity: 0,
          y: 28,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '[data-ficha-title]',
            start: 'top 85%',
            markers: process.env.NODE_ENV === 'development',
          },
        })

        gsap.from('[data-ficha-row]', {
          opacity: 0,
          y: 18,
          duration: 0.6,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: { trigger: '[data-ficha-rows]', start: 'top 85%' },
        })

        gsap.to('[data-ficha-img]', {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '[data-ficha-img]', start: 'top 85%' },
        })

        gsap.from('[data-ficha-img] img', {
          scale: 1.08,
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: { trigger: '[data-ficha-img]', start: 'top 85%' },
        })
      })
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      className="halo px-[max(1.25rem,4vw)] py-[clamp(5rem,14vh,11rem)]"
      style={{ ['--halo-x' as string]: '80%', ['--halo-y' as string]: '42%' }}
      aria-labelledby="ficha-title"
    >
      <header className="mb-14">
        <p data-lang-text className="eyebrow mb-3">
          {t('ficha.eyebrow')}
        </p>
        <h2
          id="ficha-title"
          data-ficha-title
          data-lang-text
          className="display display-gold max-w-[14ch]"
          style={{ fontSize: 'var(--text-section)' }}
        >
          {t('ficha.title')}
        </h2>
      </header>

      <div className="grid grid-cols-12 gap-y-14">
        <dl data-ficha-rows className="col-span-12 lg:col-span-6">
          {rows.map(([key, row]) => (
            <div
              key={key}
              data-ficha-row
              className="grid grid-cols-1 gap-1 border-t border-[color:var(--color-hairline)] py-5 sm:grid-cols-[9rem_1fr] sm:gap-6"
            >
              <dt data-lang-text className="eyebrow pt-1">
                {row.label}
              </dt>
              <dd data-lang-text className="text-[color:var(--color-paper)]/85">
                {key === 'email' ? (
                  <a
                    href={CONTACT_LINKS.email}
                    className="underline-offset-4 transition-colors hover:text-[color:var(--color-accent)] hover:underline"
                  >
                    {row.value}
                  </a>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className="col-span-12 lg:col-span-5 lg:col-start-8">
          <div data-ficha-img className="reveal-clip">
            <MediaFrame item={fichaMedia} sizes="(max-width: 1023px) 92vw, 40vw" />
          </div>
        </div>
      </div>
    </section>
  )
}
