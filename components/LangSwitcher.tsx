'use client'

import { LANGS, type Lang } from '@/content/dict'
import { useLang, useT } from '@/lib/i18n'

const LABEL_KEY: Record<Lang, string> = {
  pt: 'ui.langPt',
  es: 'ui.langEs',
  en: 'ui.langEn',
}

/**
 * Único elemento fixo do site. Sem header, sem menu.
 * `mix-blend-mode: difference` mantém legibilidade sobre foto clara ou escura.
 */
export default function LangSwitcher() {
  const { lang, setLang } = useLang()
  const t = useT()

  return (
    <nav
      aria-label={t('ui.langNav')}
      className="fixed top-0 right-0 z-50 flex items-center gap-3 p-[max(1rem,env(safe-area-inset-top))] pr-[max(1rem,env(safe-area-inset-right))] mix-blend-difference"
    >
      {LANGS.map((code, index) => (
        <span key={code} className="flex items-center gap-3">
          {index > 0 && (
            <span aria-hidden="true" className="text-[0.6rem] text-white/40">
              ·
            </span>
          )}
          <button
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            aria-label={`${t(LABEL_KEY[code])}${lang === code ? ` — ${t('ui.langActive')}` : ''}`}
            className={`text-[0.72rem] tracking-[0.22em] text-white uppercase transition-opacity duration-200 ${
              lang === code ? 'font-medium opacity-100' : 'opacity-45 hover:opacity-80'
            }`}
          >
            {t(LABEL_KEY[code])}
          </button>
        </span>
      ))}
    </nav>
  )
}
