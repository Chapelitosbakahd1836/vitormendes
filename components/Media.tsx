'use client'

import Image from 'next/image'
import type { MediaItem } from '@/content/media'
import { useT } from '@/lib/i18n'

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b)
}

/** `1535x1025` -> `3:2`. Mostrado no placeholder para o slot ficar legível. */
function ratio(width: number, height: number): string {
  const d = gcd(width, height) || 1
  return `${Math.round(width / d)}:${Math.round(height / d)}`
}

interface MediaFrameProps {
  item: MediaItem
  /** `sizes` do next/image. Obrigatório para não servir imagem gigante no mobile. */
  sizes: string
  priority?: boolean
  className?: string
  /** Classe da <img> interna — usada no scale(1.08 -> 1) das galerias. */
  imageClassName?: string
}

/**
 * Moldura de mídia com proporção declarada.
 * A altura vem sempre de `aspect-ratio` + `width`/`height`, então o layout
 * não desloca quando a imagem carrega (zero CLS), com foto ou com placeholder.
 */
export default function MediaFrame({
  item,
  sizes,
  priority = false,
  className = '',
  imageClassName = '',
}: MediaFrameProps) {
  const t = useT()

  return (
    <div
      className={`relative overflow-hidden bg-[#141416] ${className}`}
      style={{ aspectRatio: `${item.width} / ${item.height}` }}
    >
      {item.src ? (
        <Image
          src={item.src}
          alt={t(item.altKey)}
          width={item.width}
          height={item.height}
          sizes={sizes}
          priority={priority}
          className={`h-full w-full object-cover ${imageClassName}`}
        />
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-1 border border-[color:var(--color-hairline)] text-center"
          role="img"
          aria-label={t(item.altKey)}
        >
          <span className="eyebrow">{item.slot}</span>
          <span className="eyebrow text-[color:var(--color-hairline)]">
            {ratio(item.width, item.height)}
          </span>
          <span className="eyebrow mt-2 text-[10px]">
            {item.type === 'image' ? t('ui.imagePlaceholder') : t('ui.videoPlaceholder')}
          </span>
        </div>
      )}
      <span className="vignette" aria-hidden="true" />
    </div>
  )
}
