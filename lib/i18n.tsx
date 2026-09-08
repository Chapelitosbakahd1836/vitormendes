'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import gsap from 'gsap'
import { DEFAULT_LANG, HTML_LANG, LANGS, dicts, type Dict, type Lang } from '@/content/dict'

const STORAGE_KEY = 'vm-lang'

function isLang(value: string | null): value is Lang {
  return value !== null && (LANGS as readonly string[]).includes(value)
}

/** Primeira visita: navegador. Depois disso: sempre o valor salvo. */
function detectLang(): Lang {
  if (typeof window === 'undefined') return DEFAULT_LANG

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (isLang(saved)) return saved
  } catch {
    // localStorage pode lançar (aba privada, cookies bloqueados)
  }

  const nav = window.navigator.language?.toLowerCase() ?? ''
  if (nav.startsWith('es')) return 'es'
  if (nav.startsWith('en')) return 'en'
  return DEFAULT_LANG
}

/** Lê `a.b.c` de um objeto aninhado. */
function resolve(dict: Dict, path: string): unknown {
  return path
    .split('.')
    .reduce<unknown>(
      (acc, key) =>
        acc && typeof acc === 'object' ? (acc as Record<string, unknown>)[key] : undefined,
      dict,
    )
}

interface LanguageContextValue {
  lang: Lang
  setLang: (next: Lang) => void
  dict: Dict
  t: (path: string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG)
  const textRoot = useRef<HTMLDivElement>(null)
  const mounted = useRef(false)

  // Idioma real só é conhecido no cliente: o servidor sempre entrega PT.
  useEffect(() => {
    const detected = detectLang()
    setLangState(detected)
    document.documentElement.lang = HTML_LANG[detected]
    mounted.current = true
  }, [])

  const setLang = useCallback(
    (next: Lang) => {
      if (next === lang) return

      try {
        window.localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // sem persistência é aceitável; a troca continua valendo nesta sessão
      }

      // A troca é síncrona de propósito: nada de trocar o idioma dentro do
      // callback de uma animação — se o tween não completar, o site fica preso
      // no idioma anterior.
      setLangState(next)
      document.documentElement.lang = HTML_LANG[next]
    },
    [lang],
  )

  // O fade/blur é enfeite em cima de uma troca que já aconteceu.
  // Alvo é `[data-lang-text]`, então as imagens não piscam.
  const first = useRef(true)

  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }

    const root = textRoot.current
    if (!root) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const targets = root.querySelectorAll('[data-lang-text]')
    if (targets.length === 0) return

    const tween = gsap.fromTo(
      targets,
      { opacity: 0, filter: 'blur(6px)' },
      { opacity: 1, filter: 'blur(0px)', duration: 0.25, ease: 'power2.out', overwrite: 'auto' },
    )

    return () => {
      tween.kill()
      gsap.set(targets, { clearProps: 'opacity,filter' })
    }
  }, [lang])

  const value = useMemo<LanguageContextValue>(() => {
    const dict = dicts[lang]
    return {
      lang,
      setLang,
      dict,
      t: (path: string) => {
        const found = resolve(dict, path)
        if (typeof found === 'string') return found
        if (typeof found === 'number') return String(found)
        // Chave inexistente é erro de conteúdo: aparece no console em dev,
        // e na tela mostra a própria chave em vez de quebrar a página.
        if (process.env.NODE_ENV === 'development') {
          console.warn(`[i18n] chave ausente ou não textual: "${path}" (${lang})`)
        }
        return path
      },
    }
  }, [lang, setLang])

  return (
    <LanguageContext.Provider value={value}>
      <div ref={textRoot}>{children}</div>
    </LanguageContext.Provider>
  )
}

function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage precisa estar dentro de <LanguageProvider>')
  return ctx
}

/** Função de tradução por chave em dot-notation. */
export function useT() {
  return useLanguage().t
}

/** Dicionário inteiro, para dados estruturados (ficha técnica, contadores). */
export function useDict() {
  const { dict } = useLanguage()
  return dict
}

export function useLang() {
  const { lang, setLang } = useLanguage()
  return { lang, setLang }
}
