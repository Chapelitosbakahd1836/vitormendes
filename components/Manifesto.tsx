'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { manifestoMedia } from '@/content/media'
import { useT } from '@/lib/i18n'
import MediaFrame from './Media'

gsap.registerPlugin(ScrollTrigger)

export default function Manifesto() {
  const t = useT()
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.to('[data-manifesto-img]', {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '[data-manifesto-img]', start: 'top 85%' },
        })

        gsap.from('[data-manifesto-img] img', {
          scale: 1.08,
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: { trigger: '[data-manifesto-img]', start: 'top 85%' },
        })

        // Parallax da foto de apoio
        gsap.to('[data-manifesto-img]', {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            markers: process.env.NODE_ENV === 'development',
          },
        })

        gsap.from('[data-manifesto-title]', {
          opacity: 0,
          y: 28,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: { trigger: '[data-manifesto-title]', start: 'top 80%' },
        })
      })
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      className="halo grid grid-cols-12 gap-y-16 px-[max(1.25rem,4vw)] py-[clamp(6rem,16vh,12rem)]"
      style={{ ['--halo-x' as string]: '82%', ['--halo-y' as string]: '38%' }}
      aria-labelledby="manifesto-title"
    >
      <div className="col-span-12 lg:col-span-7 lg:col-start-1">
        <p data-lang-text className="eyebrow mb-8">
          {t('manifesto.eyebrow')}
        </p>

        <h2
          id="manifesto-title"
          data-manifesto-title
          data-lang-text
          className="display display-gold max-w-[18ch]"
          style={{ fontSize: 'var(--text-section)' }}
        >
          {t('manifesto.title')}
        </h2>
      </div>

      <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:self-end">
        <div data-manifesto-img className="reveal-clip">
          <MediaFrame item={manifestoMedia} sizes="(max-width: 1024px) 100vw, 33vw" />
        </div>
      </div>
    </section>
  )
}
