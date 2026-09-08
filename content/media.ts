/**
 * Manifesto único de mídia.
 *
 * Para trocar uma foto: coloque o arquivo em `public/media/<pasta>/` e ajuste
 * `src`, `width` e `height` na linha correspondente. Nada mais.
 * Com `src: null` o site renderiza um placeholder sólido no lugar, com o nome
 * do slot e a proporção correta — o layout continua navegável sem foto real.
 */

export type MediaType = 'image' | 'video' | 'embed'
export type Orientation = 'portrait' | 'landscape' | 'square'

export interface MediaItem {
  /** Identificador do slot, mostrado no placeholder. Ex.: `aereo-01`. */
  slot: string
  /** Caminho a partir de `public/`, ou `null` enquanto não houver arquivo. */
  src: string | null
  /** Chave do alt no dicionário (dot-notation). O alt é traduzido. */
  altKey: string
  /** Chave da legenda no dicionário. Opcional. */
  captionKey?: string
  width: number
  height: number
  orientation: Orientation
  type: MediaType
  /** Poster obrigatório em vídeo, para não gerar CLS. */
  poster?: string | null
  /** URL de embed (YouTube/Vimeo) quando `type: 'embed'`. */
  embedUrl?: string | null
}

/** 01 — Hero: vídeo em loop, mudo, tela cheia. */
export const heroMedia: MediaItem = {
  slot: 'hero',
  src: '/media/video/hero-loop.mp4',
  altKey: 'hero.media.alt',
  width: 1280,
  height: 720,
  orientation: 'landscape',
  type: 'video',
  poster: '/media/video/hero-loop-poster.jpg',
}

/** 02 — Manifesto: imagem de apoio em parallax. */
export const manifestoMedia: MediaItem = {
  slot: 'manifesto',
  src: '/media/aereo/aereo-01.jpg',
  altKey: 'manifesto.media.alt',
  width: 1535,
  height: 1025,
  orientation: 'landscape',
  type: 'image',
}

/**
 * 03 — Faixas aéreas: scroll horizontal com pin.
 * Sem `aereo-01`: essa foto já é a do manifesto, e repetir a mesma imagem
 * na mesma página empobrece as duas.
 */
export const aereoMedia: MediaItem[] = [
  {
    slot: 'aereo-02',
    src: '/media/aereo/aereo-02.jpg',
    altKey: 'aereo.items.02.alt',
    width: 1535,
    height: 1025,
    orientation: 'landscape',
    type: 'image',
  },
  {
    slot: 'aereo-03',
    src: '/media/aereo/aereo-03.jpg',
    altKey: 'aereo.items.03.alt',
    width: 1535,
    height: 1025,
    orientation: 'landscape',
    type: 'image',
  },
  {
    slot: 'aereo-04',
    src: '/media/aereo/aereo-04.jpg',
    altKey: 'aereo.items.04.alt',
    width: 1535,
    height: 1025,
    orientation: 'landscape',
    type: 'image',
  },
]

/** 04 — Personagem: grid editorial assimétrico. */
export const cenaMedia: MediaItem[] = [
  {
    slot: 'cena-01',
    src: '/media/cena/cena-01.jpg',
    altKey: 'cena.items.01.alt',
    width: 1066,
    height: 1600,
    orientation: 'portrait',
    type: 'image',
  },
  {
    slot: 'cena-02',
    src: '/media/cena/cena-02.jpg',
    altKey: 'cena.items.02.alt',
    width: 1600,
    height: 1160,
    orientation: 'landscape',
    type: 'image',
  },
  {
    slot: 'cena-03',
    src: '/media/cena/cena-03.jpg',
    altKey: 'cena.items.03.alt',
    width: 1080,
    height: 1600,
    orientation: 'portrait',
    type: 'image',
  },
  {
    slot: 'cena-04',
    src: '/media/cena/cena-04.jpg',
    altKey: 'cena.items.04.alt',
    width: 979,
    height: 1469,
    orientation: 'portrait',
    type: 'image',
  },
  {
    slot: 'cena-05',
    src: '/media/cena/cena-05.jpg',
    altKey: 'cena.items.05.alt',
    width: 915,
    height: 1373,
    orientation: 'portrait',
    type: 'image',
  },
]

/** 05 — Maquiagem: mosaico denso. */
export const maquiagemMedia: MediaItem[] = [
  {
    slot: 'maquiagem-01',
    src: '/media/maquiagem/maquiagem-01.jpg',
    altKey: 'maquiagem.items.01.alt',
    width: 1200,
    height: 1600,
    orientation: 'portrait',
    type: 'image',
  },
  {
    slot: 'maquiagem-02',
    src: '/media/maquiagem/maquiagem-02.jpg',
    altKey: 'maquiagem.items.02.alt',
    width: 1200,
    height: 1600,
    orientation: 'portrait',
    type: 'image',
  },
  {
    slot: 'maquiagem-03',
    src: '/media/maquiagem/maquiagem-03.jpg',
    altKey: 'maquiagem.items.03.alt',
    width: 1200,
    height: 1600,
    orientation: 'portrait',
    type: 'image',
  },
]

/**
 * 06 — Vídeo: showreel principal + grade de cortes curtos.
 * Ainda sem arquivo: renderizam placeholder com a proporção correta.
 * Para arquivo local use `type: 'video'` + `src`; para YouTube/Vimeo use
 * `type: 'embed'` + `embedUrl` (o poster continua obrigatório).
 */
export const reelMedia: MediaItem = {
  slot: 'showreel',
  src: null,
  altKey: 'video.reel.alt',
  captionKey: 'video.reelCaption',
  width: 1920,
  height: 1080,
  orientation: 'landscape',
  type: 'video',
  poster: null,
  embedUrl: null,
}

export const videoMedia: MediaItem[] = [
  {
    slot: 'video-01',
    src: null,
    altKey: 'video.items.01.alt',
    captionKey: 'video.items.01.caption',
    width: 1280,
    height: 720,
    orientation: 'landscape',
    type: 'video',
    poster: null,
  },
  {
    slot: 'video-02',
    src: null,
    altKey: 'video.items.02.alt',
    captionKey: 'video.items.02.caption',
    width: 1280,
    height: 720,
    orientation: 'landscape',
    type: 'video',
    poster: null,
  },
  {
    slot: 'video-03',
    src: null,
    altKey: 'video.items.03.alt',
    captionKey: 'video.items.03.caption',
    width: 1280,
    height: 720,
    orientation: 'landscape',
    type: 'video',
    poster: null,
  },
  {
    slot: 'video-04',
    src: null,
    altKey: 'video.items.04.alt',
    captionKey: 'video.items.04.caption',
    width: 1280,
    height: 720,
    orientation: 'landscape',
    type: 'video',
    poster: null,
  },
]

/** 07 — Ficha técnica: retrato de perfil. */
export const fichaMedia: MediaItem = {
  slot: 'perfil-01',
  src: '/media/perfil/perfil-01.jpg',
  altKey: 'ficha.media.alt',
  width: 1000,
  height: 667,
  orientation: 'landscape',
  type: 'image',
}
