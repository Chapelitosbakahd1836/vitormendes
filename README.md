# Vitor Mendes — site portfólio

One-page trilíngue (PT · ES · EN), sem header e sem menu: a navegação é só o scroll.
Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · GSAP (ScrollTrigger + SplitText) · Lenis.

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run typecheck
```

## Como trocar uma foto

1. Coloque o arquivo em `public/media/<pasta>/` — `aereo`, `cena`, `maquiagem`, `perfil` ou `video`.
2. Abra `content/media.ts` e ajuste `src`, `width` e `height` na linha daquele slot.
3. Pronto. `width` e `height` precisam ser os reais: é deles que sai a proporção e é isso que evita o layout pular quando a imagem carrega.

Slot com `src: null` renderiza um placeholder sólido com o nome e a proporção — o layout continua navegável sem foto real.

## Como editar os textos

Tudo que aparece na tela está em `content/pt.json`, `content/es.json` e `content/en.json`.
Não existe texto solto no JSX, nem alt text hardcoded.

As três chaves precisam existir nos três arquivos: `content/dict.ts` força `es` e `en` a satisfazerem o formato de `pt`, então **faltar chave em um idioma quebra o build**, não a produção.

Para trocar um texto, edite a chave nos três arquivos. A `copy.md` na mesma pasta é a fonte editorial, com a copy comentada seção por seção.

## Como fazer deploy na Vercel

```bash
npx vercel
```

Ou conecte o repositório em vercel.com — o Next é detectado sozinho, sem variável de ambiente.
Depois do primeiro deploy, troque `SITE_URL` em `app/layout.tsx` para o domínio real: é ele que monta a URL absoluta da imagem de Open Graph e o `alternates.languages`.

## Estrutura

```
app/            layout (metadata, fontes), providers (Lenis + GSAP), page
components/     uma seção por arquivo
content/        dicionários dos 3 idiomas, manifesto de mídia, copy.md
lib/i18n.tsx    LanguageProvider, useT, useDict, useLang
public/media/   fotos e vídeos
```

## Decisões que valem saber

**Um único driver de RAF.** O ticker do GSAP move o Lenis (`autoRaf: false`). Dois loops competindo é a causa clássica de jank em site com scroll suave.

**Sem `scroll-behavior: smooth`** em lugar nenhum do CSS: conflita com o Lenis.

**`gsap.matchMedia()` em todas as seções.** No mobile não há pin nem scroll horizontal — a galeria de faixas vira stack vertical. Em `prefers-reduced-motion: reduce` o site inteiro entrega estático e legível, e o preloader nem roda.

**`markers` só em dev**, atrás de `process.env.NODE_ENV === 'development'`.

**Links de contato com placeholder** (valores entre colchetes) renderizam como texto, não como link quebrado. Assim que você trocar `[e-mail]` pelo e-mail real no JSON, vira `mailto:` sozinho.

**Release em PDF**: coloque em `public/media/release.pdf` e troque `HAS_RELEASE_PDF` para `true` em `content/media.ts`.

## Pendências de conteúdo

Ver `content/PENDENCIAS.md`. São dados factuais que ainda não foram confirmados e **não devem ir ao ar como estão**.
