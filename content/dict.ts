import pt from './pt.json'
import es from './es.json'
import en from './en.json'

/**
 * O dicionário PT é a fonte da verdade da forma.
 * ES e EN são forçados a satisfazer `Dict`: se faltar uma chave em
 * qualquer idioma, o build quebra aqui — nunca em produção.
 */
export type Dict = typeof pt

export const LANGS = ['pt', 'es', 'en'] as const
export type Lang = (typeof LANGS)[number]

const ptDict: Dict = pt
const esDict: Dict = es
const enDict: Dict = en

export const dicts: Record<Lang, Dict> = {
  pt: ptDict,
  es: esDict,
  en: enDict,
}

/** `lang` do documento e do hreflang, por idioma. */
export const HTML_LANG: Record<Lang, string> = {
  pt: 'pt-BR',
  es: 'es',
  en: 'en',
}

export const DEFAULT_LANG: Lang = 'pt'
