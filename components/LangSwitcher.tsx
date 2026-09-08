'use client'

import { LANGS, type Lang } from '@/content/dict'
import { useLang, useT } from '@/lib/i18n'

const LABEL_KEY: Record<Lang, string> = {
  pt: 'ui.langPt',
  es: 'ui.langEs',
  en: 'ui.langEn',
}

/**
 * Bandeiras em SVG, não emoji: no Windows o emoji de bandeira cai para as
 * letras do país ("BR"), o que quebraria o alinhamento e a leitura.
 */
function Flag({ lang }: { lang: Lang }) {
  const common = {
    width: 22,
    height: 15,
    viewBox: '0 0 22 15',
    'aria-hidden': true,
    className: 'shrink-0 rounded-[2px]',
  } as const

  if (lang === 'pt') {
    return (
      <svg {...common}>
        <rect width="22" height="15" fill="#009b3a" />
        <path d="M11 1.6 20.2 7.5 11 13.4 1.8 7.5Z" fill="#fedf00" />
        <circle cx="11" cy="7.5" r="3.4" fill="#002776" />
      </svg>
    )
  }

  if (lang === 'es') {
    return (
      <svg {...common}>
        <rect width="22" height="15" fill="#c60b1e" />
        <rect y="4" width="22" height="7" fill="#ffc400" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <rect width="22" height="15" fill="#b22234" />
      {[1, 3, 5, 7, 9, 11, 13].map((y) => (
        <rect key={y} y={y} width="22" height="1" fill="#fff" />
      ))}
      <rect width="9.5" height="8" fill="#3c3b6e" />
    </svg>
  )
}

/** Único elemento fixo do site. Sem header, sem menu. */
export default function LangSwitcher() {
  const { lang, setLang } = useLang()
  const t = useT()

  return (
    <nav
      aria-label={t('ui.langNav')}
      className="fixed inset-x-0 top-0 z-50 flex justify-center pt-[max(0.75rem,env(safe-area-inset-top))]"
    >
      <ul className="flex items-center gap-1 rounded-full border border-[color:var(--color-hairline)] bg-[rgb(11_11_12/0.55)] px-2 py-1.5 backdrop-blur-md">
        {LANGS.map((code) => {
          const active = lang === code

          return (
            <li key={code}>
              <button
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={active}
                aria-label={`${t(LABEL_KEY[code])}${active ? ` — ${t('ui.langActive')}` : ''}`}
                className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.68rem] tracking-[0.18em] uppercase transition-colors duration-200 ${
                  active
                    ? 'bg-[rgb(212_175_55/0.16)] text-[color:var(--color-accent)]'
                    : 'text-[color:var(--color-paper)]/55 hover:text-[color:var(--color-paper)]'
                }`}
              >
                <Flag lang={code} />
                <span data-lang-text>{t(LABEL_KEY[code])}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
