'use client'

import Preloader from '@/components/Preloader'
import LangSwitcher from '@/components/LangSwitcher'
import Hero from '@/components/Hero'
import Manifesto from '@/components/Manifesto'
import GalleryAereo from '@/components/GalleryAereo'
import GalleryCena from '@/components/GalleryCena'
import GalleryMaquiagem from '@/components/GalleryMaquiagem'
import VideoSection from '@/components/VideoSection'
import Ficha from '@/components/Ficha'
import Contato from '@/components/Contato'

export default function Page() {
  return (
    <>
      <Preloader />
      <LangSwitcher />

      <main>
        <Hero />
        <Manifesto />
        <GalleryAereo />
        <GalleryCena />
        <GalleryMaquiagem />
        <VideoSection />
        <Ficha />
      </main>

      <Contato />
    </>
  )
}
