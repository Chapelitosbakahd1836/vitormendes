'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { heroMedia } from '@/content/media'
import { useT } from '@/lib/i18n'
import { introDone } from './Preloader'

gsap.registerPlugin(SplitText, ScrollTrigger)

export default function Hero() {
  const t = useT()
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(
        {
          motion: '(prefers-reduced-motion: no-preference)',
          reduced: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { reduced } = context.conditions as { motion: boolean; reduced: boolean }

          if (reduced) {
            // Tudo estático e visível.
            gsap.set('[data-hero-title], [data-hero-sub], [data-hero-eyebrow]', {
              opacity: 1,
              y: 0,
            })
            return
          }

          // `words,chars` e não só `chars`: sem o span de palavra, cada
          // caractere vira ponto de quebra e o nome parte no meio no mobile.
          const split = new SplitText('[data-hero-title]', { type: 'words,chars' })

          const tl = gsap.timeline({ paused: true })

          tl.from('[data-hero-eyebrow]', { opacity: 0, y: 14, duration: 0.5 })
            .from(
              split.chars,
              { yPercent: 115, opacity: 0, duration: 0.9, stagger: 0.028, ease: 'power3.out' },
              '-=0.25',
            )
            .from('[data-hero-sub]', { opacity: 0, y: 16, duration: 0.6 }, '-=0.5')
            .from('[data-hero-scroll]', { opacity: 0, duration: 0.5 }, '-=0.3')

          // Encadeado direto no fim da cortina do preloader.
          introDone.then(() => tl.play())

          // Parallax leve do vídeo enquanto o hero sai de cena.
          gsap.to('[data-hero-media]', {
            yPercent: 14,
            ease: 'none',
            scrollTrigger: {
              trigger: root.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
              markers: process.env.NODE_ENV === 'development',
            },
          })

          return () => split.revert()
        },
      )
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      className="relative flex h-[100svh] w-full items-end overflow-hidden"
      aria-label={t('hero.title')}
    >
      {/*
        z-0, não -z-10: um índice negativo empurraria o vídeo para trás do
        fundo opaco do body e ele sumiria.
      */}
      <div data-hero-media className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover"
          src={heroMedia.src ?? undefined}
          poster={heroMedia.poster ?? undefined}
          width={heroMedia.width}
          height={heroMedia.height}
          autoPlay
          muted
          loop
          playsInline
          aria-label={t('hero.media.alt')}
        />
        {/* Gradiente para garantir contraste AA do texto sobre a foto */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-[#0b0b0c]/45 to-[#0b0b0c]/25"
        />
      </div>

      <div className="relative z-10 w-full px-[max(1.25rem,4vw)] pb-[max(2rem,6vh)]">
        <p data-hero-eyebrow data-lang-text className="eyebrow mb-4 text-[color:var(--color-paper)]/70">
          {t('hero.eyebrow')}
        </p>

        <h1
          data-hero-title
          className="display text-[color:var(--color-paper)]"
          style={{ fontSize: 'var(--text-display)' }}
        >
          {t('hero.title')}
        </h1>

        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <p
            data-hero-sub
            data-lang-text
            className="max-w-[26ch] text-[color:var(--color-paper)]/85"
            style={{ fontSize: 'var(--text-lead)' }}
          >
            {t('hero.subtitle')}
          </p>

          <p data-hero-scroll data-lang-text className="eyebrow flex items-center gap-2">
            {t('hero.scroll')}
            <span aria-hidden="true" className="inline-block h-px w-8 bg-[color:var(--color-muted)]" />
          </p>
        </div>
      </div>
    </section>
  )
}
