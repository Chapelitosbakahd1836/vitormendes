'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { fichaMedia } from '@/content/media'
import { useDict, useT } from '@/lib/i18n'
import MediaFrame from './Media'

gsap.registerPlugin(ScrollTrigger)

export default function Ficha() {
  const t = useT()
  const dict = useDict()
  const root = useRef<HTMLElement>(null)

  const stats = Object.entries(dict.ficha.stats)
  const rows = Object.entries(dict.ficha.rows)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray<HTMLElement>('[data-counter]').forEach((el) => {
          const target = Number(el.dataset.counter ?? '0')
          const state = { value: 0 }

          gsap.to(state, {
            value: target,
            duration: 1.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
              markers: process.env.NODE_ENV === 'development',
            },
            onUpdate: () => {
              el.textContent = String(Math.round(state.value))
            },
          })
        })

        gsap.from('[data-ficha-row]', {
          opacity: 0,
          y: 18,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: { trigger: '[data-ficha-rows]', start: 'top 85%' },
        })
      })
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      className="px-[max(1.25rem,4vw)] py-[clamp(5rem,14vh,11rem)]"
      aria-labelledby="ficha-title"
    >
      <header className="mb-16">
        <p data-lang-text className="eyebrow mb-3">
          {t('ficha.eyebrow')}
        </p>
        <h2
          id="ficha-title"
          data-lang-text
          className="display"
          style={{ fontSize: 'var(--text-section)' }}
        >
          {t('ficha.title')}
        </h2>
        <p data-lang-text className="mt-6 max-w-[46ch] text-[color:var(--color-paper)]/70">
          {t('ficha.body')}
        </p>
      </header>

      <dl className="mb-20 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
        {stats.map(([key, stat]) => (
          <div key={key}>
            <dd
              className="display text-[color:var(--color-accent)]"
              style={{ fontSize: 'var(--text-section)' }}
            >
              <span data-counter={stat.value}>{stat.value}</span>
            </dd>
            <dt data-lang-text className="eyebrow mt-2">
              {stat.label}
            </dt>
          </div>
        ))}
      </dl>

      <div className="grid grid-cols-12 gap-y-14">
        <dl data-ficha-rows className="col-span-12 lg:col-span-7">
          {rows.map(([key, row]) => (
            <div
              key={key}
              data-ficha-row
              className="grid grid-cols-1 gap-1 border-t border-[color:var(--color-hairline)] py-5 sm:grid-cols-[10rem_1fr] sm:gap-6"
            >
              <dt data-lang-text className="eyebrow pt-1">
                {row.label}
              </dt>
              <dd data-lang-text className="text-[color:var(--color-paper)]/85">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="col-span-12 lg:col-span-4 lg:col-start-9">
          <MediaFrame item={fichaMedia} sizes="(max-width: 1023px) 92vw, 32vw" />
        </div>
      </div>
    </section>
  )
}
