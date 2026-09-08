'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { maquiagemMedia } from '@/content/media'
import { useT } from '@/lib/i18n'
import MediaFrame from './Media'

gsap.registerPlugin(ScrollTrigger)

export default function GalleryMaquiagem() {
  const t = useT()
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.to('[data-maq-frame]', {
          clipPath: 'inset(0% 0 0 0)',
          duration: 0.9,
          stagger: 0.09,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '[data-maq-grid]',
            start: 'top 85%',
            markers: process.env.NODE_ENV === 'development',
          },
        })
      })
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      className="halo px-[max(1.25rem,4vw)] py-[clamp(5rem,14vh,11rem)]"
      style={{ ['--halo-x' as string]: '50%', ['--halo-y' as string]: '18%', ['--halo-size' as string]: '55vw' }}
      aria-labelledby="maquiagem-title"
    >
      <header className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p data-lang-text className="eyebrow mb-3">
            {t('maquiagem.eyebrow')}
          </p>
          <h2
            id="maquiagem-title"
            data-lang-text
            className="display display-gold max-w-[14ch]"
            style={{ fontSize: 'var(--text-section)' }}
          >
            {t('maquiagem.title')}
          </h2>
        </div>
      </header>

      {/*
        Mobile: carrossel com snap. Desktop: mosaico denso, sem respiro entre
        as peças — o oposto do grid arejado da seção anterior.
      */}
      <div
        data-maq-grid
        className="-mx-[max(1.25rem,4vw)] flex snap-x snap-mandatory gap-1 overflow-x-auto px-[max(1.25rem,4vw)] pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-1 md:overflow-visible md:px-0 md:pb-0"
      >
        {maquiagemMedia.map((item) => (
          <figure
            key={item.slot}
            className="group relative w-[78vw] shrink-0 snap-center md:w-auto"
          >
            <div data-maq-frame className="reveal-clip overflow-hidden">
              <MediaFrame
                item={item}
                sizes="(max-width: 767px) 78vw, 33vw"
                imageClassName="transition-transform duration-[700ms] ease-out group-hover:scale-[1.05]"
              />
            </div>

          </figure>
        ))}
      </div>
    </section>
  )
}
