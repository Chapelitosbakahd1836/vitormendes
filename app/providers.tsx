'use client'

import { useEffect } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { LanguageProvider } from '@/lib/i18n'
import 'lenis/dist/lenis.css'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/**
 * Um único driver de RAF: o ticker do GSAP move o Lenis.
 * `autoRaf: false` no ReactLenis impede o segundo loop.
 */
function LenisGsapSync() {
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return

    lenis.on('scroll', ScrollTrigger.update)

    // Só em dev: dá acesso à instância no console para inspecionar o scroll.
    if (process.env.NODE_ENV === 'development') {
      ;(window as unknown as { lenis?: unknown }).lenis = lenis
    }

    const raf = (time: number) => {
      lenis.raf(time * 1000) // ticker do GSAP vem em segundos; Lenis quer ms
    }

    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.off('scroll', ScrollTrigger.update)
      gsap.ticker.remove(raf)
    }
  }, [lenis])

  // Posições de trigger só ficam corretas depois que fontes e imagens assentam.
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()

    if (document.fonts?.ready) {
      document.fonts.ready.then(refresh)
    }
    window.addEventListener('load', refresh)

    return () => window.removeEventListener('load', refresh)
  }, [])

  return null
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ autoRaf: false, respectReducedMotion: true }}>
      <LenisGsapSync />
      <LanguageProvider>{children}</LanguageProvider>
    </ReactLenis>
  )
}
