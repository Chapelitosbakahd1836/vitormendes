'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { aereoMedia } from '@/content/media'
import { useT } from '@/lib/i18n'
import MediaFrame from './Media'

gsap.registerPlugin(ScrollTrigger)

/** Alturas alternadas: o trilho não vira uma fita de retângulos iguais. */
const HEIGHTS = ['58vh', '74vh', '50vh', '66vh']
const ALIGN = ['self-end', 'self-start', 'self-center', 'self-end']

export default function GalleryAereo() {
  const t = useT()
  const root = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      // Desktop com movimento: pin + scroll horizontal.
      mm.add(
        '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
        () => {
          const el = track.current
          if (!el) return

          // No trilho horizontal a revelação acontece na entrada da seção,
          // não item a item — senão as fotos ficariam presas em inset(100%).
          gsap.to('[data-aereo-item]', {
            clipPath: 'inset(0% 0 0 0)',
            duration: 0.9,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: { trigger: root.current, start: 'top 70%' },
          })

          const distance = () => el.scrollWidth - window.innerWidth

          gsap.to(el, {
            x: () => -distance(),
            ease: 'none',
            scrollTrigger: {
              trigger: root.current,
              start: 'top top',
              end: () => `+=${distance()}`,
              pin: true,
              scrub: true,
              invalidateOnRefresh: true,
              anticipatePin: 1,
              markers: process.env.NODE_ENV === 'development',
            },
          })
        },
      )

      // Mobile, ou reduced motion: stack vertical com reveals leves.
      mm.add(
        '(max-width: 1023px), (prefers-reduced-motion: reduce)',
        () => {
          gsap.utils.toArray<HTMLElement>('[data-aereo-item]').forEach((item) => {
            gsap.to(item, {
              clipPath: 'inset(0% 0 0 0)',
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: { trigger: item, start: 'top 88%' },
            })
          })
        },
      )
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      className="relative overflow-hidden py-[clamp(4rem,10vh,8rem)] lg:h-[100svh] lg:py-0"
      aria-labelledby="aereo-title"
    >
      <header className="px-[max(1.25rem,4vw)] lg:absolute lg:top-[max(1.25rem,4vw)] lg:left-[max(1.25rem,4vw)] lg:z-10">
        <p data-lang-text className="eyebrow mb-3">
          {t('aereo.eyebrow')}
        </p>
        <h2
          id="aereo-title"
          data-lang-text
          className="display max-w-[12ch]"
          style={{ fontSize: 'var(--text-section)' }}
        >
          {t('aereo.title')}
        </h2>
      </header>

      <div
        ref={track}
        className="mt-14 flex flex-col gap-14 px-[max(1.25rem,4vw)] lg:mt-0 lg:h-full lg:flex-row lg:items-center lg:gap-[5vw] lg:px-0 lg:pr-[18vw] lg:pl-[38vw]"
      >
        {aereoMedia.map((item, index) => (
          <figure
            key={item.slot}
            data-aereo-item
            className={`reveal-clip w-full shrink-0 lg:w-auto ${ALIGN[index % ALIGN.length]}`}
            style={{ ['--h' as string]: HEIGHTS[index % HEIGHTS.length] }}
          >
            <div className="lg:h-[var(--h)]">
              <MediaFrame
                item={item}
                sizes="(max-width: 1023px) 92vw, 46vw"
                className="lg:h-full lg:w-auto"
              />
            </div>
          </figure>
        ))}
      </div>
    </section>
  )
}
