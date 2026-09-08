'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useLenis } from 'lenis/react'
import { useT } from '@/lib/i18n'

let resolveIntro: () => void = () => {}

/** Resolve quando a cortina termina de subir. O hero encadeia o reveal nisso. */
export const introDone: Promise<void> = new Promise((resolve) => {
  resolveIntro = resolve
})

const SEEN_KEY = 'vm-intro-seen'

export default function Preloader() {
  const t = useT()
  const lenis = useLenis()
  const root = useRef<HTMLDivElement>(null)
  const counter = useRef<HTMLSpanElement>(null)
  const [gone, setGone] = useState(false)
  const timeline = useRef<gsap.core.Timeline | null>(null)

  const { contextSafe } = useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      let seen = false
      try {
        seen = window.sessionStorage.getItem(SEEN_KEY) === '1'
        window.sessionStorage.setItem(SEEN_KEY, '1')
      } catch {
        // sem sessionStorage: roda a versão completa
      }

      const finish = () => {
        setGone(true)
        lenis?.start()
        resolveIntro()
      }

      // Reduced motion, ou retorno com tudo em cache: sem intro.
      if (reduced || seen) {
        finish()
        return
      }

      lenis?.stop()

      const count = { value: 0 }

      timeline.current = gsap
        .timeline({ onComplete: finish })
        .to(count, {
          value: 100,
          duration: 1.1,
          ease: 'power2.inOut',
          onUpdate: () => {
            if (counter.current) {
              counter.current.textContent = String(Math.round(count.value)).padStart(3, '0')
            }
          },
        })
        .to('[data-preloader-counter]', { opacity: 0, duration: 0.2 }, '-=0.1')
        .to(root.current, { yPercent: -100, duration: 0.55, ease: 'power3.inOut' })
    },
    { scope: root },
  )

  const skip = contextSafe(() => {
    timeline.current?.progress(1)
  })

  if (gone) return null

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] flex items-end justify-between bg-[color:var(--color-ink)] p-6 sm:p-10"
      role="status"
      aria-live="polite"
      aria-label={t('ui.preloaderLabel')}
    >
      <span
        ref={counter}
        data-preloader-counter
        className="display text-[color:var(--color-paper)]"
        style={{ fontSize: 'var(--text-section)' }}
      >
        000
      </span>
      <button
        type="button"
        onClick={skip}
        className="eyebrow transition-colors hover:text-[color:var(--color-paper)]"
      >
        {t('ui.skipIntro')}
      </button>
    </div>
  )
}
