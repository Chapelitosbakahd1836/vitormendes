'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { cenaMedia } from '@/content/media'
import { useT } from '@/lib/i18n'
import MediaFrame from './Media'

gsap.registerPlugin(ScrollTrigger)

/**
 * Grid editorial assimétrico: posição, largura e velocidade de parallax
 * diferentes por item. Nada de repetir a mesma célula cinco vezes.
 */
const LAYOUT = [
  { cell: 'lg:col-span-5 lg:col-start-1', speed: -34, sizes: '(max-width: 1023px) 92vw, 40vw' },
  { cell: 'lg:col-span-6 lg:col-start-7 lg:mt-[14vh]', speed: -14, sizes: '(max-width: 1023px) 92vw, 48vw' },
  { cell: 'lg:col-span-4 lg:col-start-2 lg:mt-[8vh]', speed: -46, sizes: '(max-width: 1023px) 92vw, 32vw' },
  { cell: 'lg:col-span-4 lg:col-start-8 lg:mt-[-6vh]', speed: -22, sizes: '(max-width: 1023px) 92vw, 32vw' },
  { cell: 'lg:col-span-5 lg:col-start-3 lg:mt-[6vh]', speed: -30, sizes: '(max-width: 1023px) 92vw, 40vw' },
]

export default function GalleryCena() {
  const t = useT()
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray<HTMLElement>('[data-cena-item]').forEach((item, index) => {
          const frame = item.querySelector('[data-frame]')
          const img = item.querySelector('img')

          gsap.to(frame, {
            clipPath: 'inset(0% 0 0 0)',
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 88%' },
          })

          if (img) {
            gsap.from(img, {
              scale: 1.08,
              duration: 1.3,
              ease: 'power3.out',
              scrollTrigger: { trigger: item, start: 'top 88%' },
            })
          }

          // Velocidades diferentes por coluna
          gsap.to(item, {
            yPercent: LAYOUT[index % LAYOUT.length].speed * 0.35,
            ease: 'none',
            scrollTrigger: {
              trigger: item,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
              markers: process.env.NODE_ENV === 'development',
            },
          })
        })
      })
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      className="halo px-[max(1.25rem,4vw)] py-[clamp(5rem,14vh,11rem)]"
      style={{ ['--halo-x' as string]: '16%', ['--halo-y' as string]: '30%', ['--halo-size' as string]: '50vw' }}
      aria-labelledby="cena-title"
    >
      <header className="mb-16 lg:sticky lg:top-[max(1.25rem,4vw)] lg:z-10 lg:mb-0 lg:float-left lg:w-[24%]">
        <p data-lang-text className="eyebrow mb-3">
          {t('cena.eyebrow')}
        </p>
        <h2
          id="cena-title"
          data-lang-text
          className="display display-gold max-w-[12ch]"
          style={{ fontSize: 'var(--text-section)' }}
        >
          {t('cena.title')}
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-[3vw] lg:gap-y-[10vh] lg:pt-[46vh]">
        {cenaMedia.map((item, index) => (
          <figure
            key={item.slot}
            data-cena-item
            className={`w-full ${LAYOUT[index % LAYOUT.length].cell}`}
          >
            <div data-frame className="reveal-clip">
              <MediaFrame item={item} sizes={LAYOUT[index % LAYOUT.length].sizes} />
            </div>
          </figure>
        ))}
      </div>
    </section>
  )
}
