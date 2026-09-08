'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useLenis } from 'lenis/react'
import { reelMedia, videoMedia, type MediaItem } from '@/content/media'
import { useT } from '@/lib/i18n'
import MediaFrame from './Media'

/** Prévia muda que só toca quando entra na viewport. Nunca com som. */
function Preview({
  item,
  sizes,
  onOpen,
}: {
  item: MediaItem
  sizes: string
  onOpen: (item: MediaItem) => void
}) {
  const t = useT()
  const ref = useRef<HTMLVideoElement>(null)
  const playable = Boolean(item.src || item.embedUrl)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void el.play().catch(() => {
            // autoplay bloqueado: o poster continua no lugar
          })
        } else {
          el.pause()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Sem arquivo ainda: placeholder com a proporção correta.
  if (!item.src) {
    return (
      <figure className="w-full">
        <MediaFrame item={item} sizes={sizes} />
        {item.captionKey && (
          <figcaption data-lang-text className="eyebrow mt-3">
            {t(item.captionKey)}
          </figcaption>
        )}
      </figure>
    )
  }

  return (
    <figure className="w-full">
      <button
        type="button"
        onClick={() => onOpen(item)}
        disabled={!playable}
        className="group relative block w-full cursor-pointer overflow-hidden"
        style={{ aspectRatio: `${item.width} / ${item.height}` }}
        aria-label={`${t(item.altKey)} — ${t('ui.videoPlay')}`}
      >
        <video
          ref={ref}
          src={item.src}
          poster={item.poster ?? undefined}
          width={item.width}
          height={item.height}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <span className="vignette" aria-hidden="true" />
        <span
          data-lang-text
          className="eyebrow absolute bottom-3 left-3 text-[color:var(--color-paper)]"
        >
          {t('ui.videoPlay')}
        </span>
      </button>
      {item.captionKey && (
        <figcaption data-lang-text className="eyebrow mt-3">
          {t(item.captionKey)}
        </figcaption>
      )}
    </figure>
  )
}

export default function VideoSection() {
  const t = useT()
  const lenis = useLenis()
  const [open, setOpen] = useState<MediaItem | null>(null)
  const dialog = useRef<HTMLDivElement>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  const lastFocused = useRef<HTMLElement | null>(null)

  const close = useCallback(() => {
    setOpen(null)
    lenis?.start()
    lastFocused.current?.focus()
  }, [lenis])

  const openItem = useCallback(
    (item: MediaItem) => {
      lastFocused.current = document.activeElement as HTMLElement
      setOpen(item)
      lenis?.stop()
    },
    [lenis],
  )

  // Esc para fechar e foco preso dentro do lightbox.
  useEffect(() => {
    if (!open) return

    closeButton.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
        return
      }

      if (event.key !== 'Tab') return

      const focusables = dialog.current?.querySelectorAll<HTMLElement>(
        'button, [href], video[controls], [tabindex]:not([tabindex="-1"])',
      )
      if (!focusables || focusables.length === 0) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, close])

  return (
    <section
      className="px-[max(1.25rem,4vw)] py-[clamp(5rem,14vh,11rem)]"
      aria-labelledby="video-title"
    >
      <header className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p data-lang-text className="eyebrow mb-3">
            {t('video.eyebrow')}
          </p>
          <h2
            id="video-title"
            data-lang-text
            className="display"
            style={{ fontSize: 'var(--text-section)' }}
          >
            {t('video.title')}
          </h2>
        </div>
        <p data-lang-text className="max-w-[40ch] text-[color:var(--color-paper)]/70">
          {t('video.body')}
        </p>
      </header>

      {/* Showreel principal, largura quase total */}
      <div className="mb-3">
        <Preview item={reelMedia} sizes="100vw" onOpen={openItem} />
      </div>

      {/* Grade de cortes curtos */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {videoMedia.map((item) => (
          <Preview
            key={item.slot}
            item={item}
            sizes="(max-width: 1023px) 46vw, 24vw"
            onOpen={openItem}
          />
        ))}
      </div>

      {open && (
        <div
          ref={dialog}
          role="dialog"
          aria-modal="true"
          aria-label={t('ui.lightboxLabel')}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[#0b0b0c]/95 p-4"
          onClick={(event) => {
            if (event.target === event.currentTarget) close()
          }}
        >
          <button
            ref={closeButton}
            type="button"
            onClick={close}
            className="eyebrow absolute top-6 right-6 text-[color:var(--color-paper)]"
          >
            {t('ui.videoClose')}
          </button>

          {open.embedUrl ? (
            <iframe
              src={open.embedUrl}
              title={t(open.altKey)}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="aspect-video w-full max-w-[1200px]"
            />
          ) : (
            <video
              src={open.src ?? undefined}
              poster={open.poster ?? undefined}
              controls
              autoPlay
              playsInline
              className="max-h-[85vh] w-full max-w-[1200px]"
              aria-label={t(open.altKey)}
            />
          )}
        </div>
      )}
    </section>
  )
}
