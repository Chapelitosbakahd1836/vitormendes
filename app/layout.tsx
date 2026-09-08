import type { Metadata } from 'next'
import { Archivo, Bodoni_Moda } from 'next/font/google'
import { dicts } from '@/content/dict'
import Providers from './providers'
import './globals.css'

const bodoni = Bodoni_Moda({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700'],
  variable: '--font-bodoni',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  variable: '--font-archivo',
  display: 'swap',
})

const SITE_URL = 'https://vitormendes.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: dicts.pt.meta.title,
  description: dicts.pt.meta.description,
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
      es: '/',
      en: '/',
    },
  },
  openGraph: {
    title: dicts.pt.meta.title,
    description: dicts.pt.meta.description,
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['es_ES', 'en_US'],
    images: [
      {
        url: '/media/video/hero-loop-poster.jpg',
        width: 1280,
        height: 720,
        alt: dicts.pt.meta.ogAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: dicts.pt.meta.title,
    description: dicts.pt.meta.description,
    images: ['/media/video/hero-loop-poster.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${bodoni.variable} ${archivo.variable}`}>
      <body className="grain">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
