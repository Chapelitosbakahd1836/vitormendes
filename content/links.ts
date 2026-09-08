/**
 * Links externos de contato.
 * As chaves espelham `contato.links` do dicionário: o rótulo e o texto visível
 * são traduzidos, a URL é a mesma em qualquer idioma.
 */
export const CONTACT_LINKS = {
  whatsapp: 'https://wa.link/lcjivx',
  instagram: 'https://www.instagram.com/vitor_mendescirco',
  email: 'mailto:algustomendesvitor@gmail.com',
} as const

export type ContactKind = keyof typeof CONTACT_LINKS
