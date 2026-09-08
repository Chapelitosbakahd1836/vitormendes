# Pendências de conteúdo — não publicar sem resolver

Os valores abaixo estão no site como **placeholder**. Nenhum deles foi confirmado.
Onde é texto, o placeholder aparece entre colchetes e é visível na tela.
Onde é número, o placeholder é um número plausível — e é aí que mora o risco: **parece verdade**.

## Números inventados (aparecem como número, sem aviso na tela)

Em `content/{pt,es,en}.json`, chave `ficha.stats`:

| Chave | Valor no site | O que é |
|---|---|---|
| `ficha.stats.01.value` | `12` | anos em cena |
| `ficha.stats.02.value` | `9` | países |
| `ficha.stats.03.value` | `8` | metros de altura de trabalho |
| `ficha.stats.04.value` | `400` | apresentações |

Também em `aereo.body`, nos três idiomas: **"altura de até 8 m"**.
E em `contato.body`: **"respondo em até 48h"**.
E em `video.body`: **"showreel de 2 min"**.

## Texto entre colchetes (visível como placeholder na tela)

- `ficha.rows.base.value` — `[cidade, país]`
- `ficha.rows.formacao.value` — `[escola, ano]`, `[formação complementar]`
- `ficha.rows.festivais.value` — `[festival 1] · [festival 2] · [festival 3]`
- `ficha.rows.tecnica.value` — `[X kN]`, `[X m]`
- `contato.links.email.value` — `[e-mail]`
- `contato.links.whatsapp.value` — `[telefone]`
- `contato.links.instagram.value` — `[@usuario]`
- `contato.links.vimeo.value` — `[Vimeo/YouTube]`
- `footer.photoCredit` — `[créditos]` (a marca d'água nas fotos de palco diz *Rubens Santos Fotografia* — confirmar a grafia)
- `footer.siteCredit` — `[crédito]`

## Legendas ainda genéricas

- `cena.items.*.caption` — hoje descrevem a pose ("Serpente — agachamento com a rede"). Falta o espetáculo e a companhia.
- `maquiagem.items.*.caption` — hoje descrevem a etapa do camarim. Se as criações têm nome, entra aqui.

## Mídia faltando

- **Retrato da ficha técnica** — arquivo não está no projeto. Salvar em `public/media/perfil/perfil-01.jpg` e apontar `fichaMedia.src` em `content/media.ts`.
- **Showreel e 4 cortes curtos** — seção 06 renderiza placeholder. Arquivo local em `public/media/video/` com `type: 'video'`, ou YouTube/Vimeo com `type: 'embed'` + `embedUrl`. Poster é obrigatório nos dois casos.
- **Release em PDF** — `public/media/release.pdf` + `HAS_RELEASE_PDF = true`.

## Domínio

`SITE_URL` em `app/layout.tsx` está como `https://vitormendes.vercel.app`. Trocar pelo domínio real depois do deploy — é a base da imagem de Open Graph e do `hreflang`.
