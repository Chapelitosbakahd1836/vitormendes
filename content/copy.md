# Copy — Site Vitor Mendes
Fase 1. Nenhum código escrito ainda.

**Artista:** Vitor Mendes (assina com nome completo)
**Aparelho:** faixas aéreas (aerial straps) — decisão do artista: o site fala só de faixas.
**Repertório de cena:** faixas aéreas · flexibilidade e contorção · teatro físico · criação de personagem · maquiagem artística
**Tom:** seco, físico, concreto. Corpo em 1ª pessoa; rótulos e ficha técnica em 3ª.
**Idiomas:** PT-BR (padrão) · ES · EN (transcriação, não tradução literal)

**Hero:** vídeo de fundo em loop, mudo, com `poster`. Arquivos já no projeto:
- `public/media/video/hero-loop.mp4` — 1280×720, 5,04s, h264, 1,4 MB, sem faixa de áudio
- `public/media/video/hero-loop-poster.jpg` — frame 0, 59 KB
O último frame é praticamente igual ao primeiro, então o loop fecha sem salto visível.

**Fotos já no projeto** (contagem de slots ajustada ao que existe de verdade):
- `apresentações/` → 4 fotos → galeria 01 (faixas + solo de chão)
- `personagem/` → 5 fotos → galeria 02 — **todas do mesmo personagem: uma serpente, sem nome próprio — é o único personagem do site**, em dois figurinos (píton amarelo/preto e verde-menta)
- `maquiagem/` → 3 fotos → galeria 03 — **camarim, construção do rosto dessa mesma serpente**
- retrato da ficha técnica → **ainda fora das pastas**, precisa ser salvo no projeto

Convenções de chave: `secao.campo` — usar exatamente estas chaves nos três JSONs.
Tudo marcado `[PRECISO CONFIRMAR]` é placeholder factual inventado. Não publicar sem checar.

---
---

# PT-BR

## 00 — MICROCOPY / UI
Strings de interface. Nenhuma string visível pode ficar fora do dicionário.

- `ui.langNav` — `Idioma`
- `ui.langPt` — `PT`
- `ui.langEs` — `ES`
- `ui.langEn` — `EN`
- `ui.langActive` — `Idioma ativo`
- `ui.preloaderLabel` — `Carregando`
- `ui.skipIntro` — `Pular`
- `ui.scrollHint` — `role`
- `ui.videoPlay` — `Assistir com som`
- `ui.videoClose` — `Fechar`
- `ui.videoMuted` — `Prévia sem som`
- `ui.lightboxLabel` — `Reprodutor de vídeo`
- `ui.imagePlaceholder` — `foto em breve`
- `ui.copyEmail` — `Copiar e-mail`
- `ui.copied` — `Copiado`

**SEO**
- `meta.title` — `Vitor Mendes — Artista aéreo e intérprete cênico`
- `meta.description` — `Faixas aéreas e flexibilidade extrema. Teatro físico, criação de personagem e maquiagem artística. Disponível para temporada, festival e evento.`
- `meta.ogAlt` — `Vitor Mendes suspenso nas faixas aéreas em espacate, cortina vermelha ao fundo.`

---

## 01 — HERO
Vídeo de fundo em loop, mudo, tela cheia. Nome em display gigante por cima.

- `hero.eyebrow` — `Artista aéreo · Intérprete`
- `hero.title` — `Vitor Mendes`
- `hero.subtitle` — `Faixas, teatro físico, personagem.`
- `hero.scroll` — `role`

**Alt text / poster**
- `hero.media.alt` — `Vitor Mendes suspenso pelas faixas aéreas em espacate aberto, braços estendidos, cortina vermelha ao fundo.`
- `hero.media.posterAlt` — `Frame de abertura: corpo em espacate suspenso no ar, palco escuro.`

> O mesmo texto de `hero.media.alt` vai no `aria-label` do `<video>` e no `alt` do `poster`.

---

## 02 — MANIFESTO

- `manifesto.eyebrow` — `Manifesto`
- `manifesto.title` — `Altura não é truque`
- `manifesto.body` — `Subo porque a mentira não se sustenta lá em cima. A faixa marca a pele, o ombro trava, o espacate abre no ar sem rede embaixo. Cada figura é uma decisão tomada em dois segundos, na frente de todo mundo.`

**Alt text**
- `manifesto.media.alt` — `Detalhe das mãos de Vitor Mendes fechadas na faixa, pele marcada, luz dura.`

---

## 03 — GALERIA: FAIXAS AÉREAS
4 slots — um por foto de `apresentações/`.

- `aereo.eyebrow` — `01 — Faixas`
- `aereo.title` — `Um aparelho, o corpo inteiro`
- `aereo.body` — `Faixas aéreas. Força travada no ombro para subir, espacate aberto no alto, o chão como continuação do número. Trabalho em altura de até [PRECISO CONFIRMAR: X m], com rig próprio ou na estrutura da casa.`

**Legendas dos slots**
- `aereo.items.01.caption` — `Faixas — planche horizontal`
- `aereo.items.02.caption` — `Faixas — espacate suspenso`
- `aereo.items.03.caption` — `Faixas — penché em apoio`
- `aereo.items.04.caption` — `Solo — espacate em apoio de ombros`

**Alt text**
- `aereo.items.01.alt` — `Vitor Mendes nas faixas aéreas, corpo na horizontal a meia altura, braços travados acima da cabeça.`
- `aereo.items.02.alt` — `Vitor Mendes suspenso pelas faixas em espacate aberto, braços estendidos, cortina vermelha ao fundo.`
- `aereo.items.03.alt` — `Vitor Mendes em pé no palco, uma perna na vertical junto à faixa, tronco alinhado.`
- `aereo.items.04.alt` — `Espacate horizontal em apoio de ombros no piso do picadeiro, pernas totalmente abertas.`

---

## 04 — GALERIA: PERSONAGEM
5 slots — um por foto de `personagem/`. **As 5 fotos são o mesmo personagem: uma serpente.**

- `cena.eyebrow` — `02 — Personagem`
- `cena.title` — `Personagem antes do número`
- `cena.body` — `Não entro no ar sem saber quem sobe. A serpente veio antes de qualquer figura: o jeito de rastejar, o peso na mão aberta, a cara. O aparelho é consequência do personagem — nunca o contrário.`

**Legendas dos slots**
- `cena.items.01.caption` — `Serpente — agachamento com a rede`
- `cena.items.02.caption` — `Serpente — retrato de capuz`
- `cena.items.03.caption` — `Serpente — figurino verde, coxia`
- `cena.items.04.caption` — `Serpente — abertura no picadeiro`
- `cena.items.05.caption` — `Serpente — extensão para trás`

**Alt text**
- `cena.items.01.alt` — `Vitor Mendes como serpente, macacão amarelo e preto de pele de cobra, coroa de escamas, agachado sobre uma rede de corda branca com o braço estendido.`
- `cena.items.02.alt` — `Retrato de perfil da serpente: capuz verde-menta de escamas, sobrancelhas verdes, rosto branco e boca verde-escura.`
- `cena.items.03.alt` — `Serpente em figurino verde de corpo inteiro, braços abertos e cabeça erguida, diante de uma cortina azul-petróleo.`
- `cena.items.04.alt` — `Serpente agachada de frente no picadeiro, pernas abertas e mãos no chão, luz verde ao fundo.`
- `cena.items.05.alt` — `Serpente em extensão para trás, cabeça invertida entre os braços, mãos abertas para a plateia.`

---

## 05 — GALERIA: MAQUIAGEM ARTÍSTICA
3 slots — um por foto de `maquiagem/`. **As 3 fotos são o camarim: a construção do rosto da serpente.**

- `maquiagem.eyebrow` — `03 — Maquiagem`
- `maquiagem.title` — `A cara vem antes`
- `maquiagem.body` — `Desenho a serpente no espelho, com a mão, camada por camada. Base branca, escama pintada na têmpora, boca verde. Uma hora de camarim decide o que o corpo vai poder fazer no ar.`
- `maquiagem.hoverHint` — `passe o cursor`

**Legendas dos slots**
- `maquiagem.items.01.caption` — `Escama na têmpora — camarim`
- `maquiagem.items.02.caption` — `Sobrancelha e boca — camarim`
- `maquiagem.items.03.caption` — `Rosto pronto — antes de entrar`

**Alt text**
- `maquiagem.items.01.alt` — `Close do rosto de Vitor Mendes no camarim: base branca, escamas verdes pintadas na têmpora, sobrancelha verde e boca verde com glitter.`
- `maquiagem.items.02.alt` — `Rosto frontal com maquiagem de serpente pronta: máscara branca, sobrancelhas verdes desenhadas, lábios verde-limão e escamas na lateral da cabeça.`
- `maquiagem.items.03.alt` — `Maquiagem finalizada em luz natural: escamas amarelo-ouro descendo pela lateral do rosto, olhos delineados em preto, boca verde em degradê.`

---

## 06 — VÍDEO

- `video.eyebrow` — `04 — Vídeo`
- `video.title` — `Em movimento`
- `video.body` — `Showreel de [PRECISO CONFIRMAR: 2 min] e cortes curtos. Sem trilha épica, sem corte a cada meio segundo: o número inteiro, como acontece no palco.`
- `video.cta` — `Assistir showreel`
- `video.reelCaption` — `Showreel [PRECISO CONFIRMAR: ano]`

**Legendas dos clipes**
- `video.items.01.caption` — `Faixas — número completo`
- `video.items.02.caption` — `Faixas — [PRECISO CONFIRMAR: festival, ano]`
- `video.items.03.caption` — `Solo de flexibilidade`
- `video.items.04.caption` — `Cena — [PRECISO CONFIRMAR: título]`

**Alt text / poster**
- `video.reel.alt` — `Frame do showreel: Vitor Mendes no alto das faixas, palco escuro.`
- `video.items.01.alt` — `Frame do número de faixas aéreas.`
- `video.items.02.alt` — `Frame do número de faixas em festival.`
- `video.items.03.alt` — `Frame do solo de flexibilidade no chão.`
- `video.items.04.alt` — `Frame de cena teatral com personagem.`

---

## 07 — FICHA TÉCNICA
Seção com retrato — arquivo ainda precisa ser salvo no projeto.

- `ficha.eyebrow` — `05 — Ficha técnica`
- `ficha.title` — `Dados de trabalho`
- `ficha.body` — `Ficha resumida para produção e curadoria. Release completo e rider técnico sob pedido.`

**Contadores** (`value` anima de 0 até o número)
- `ficha.stats.01.value` / `.label` — `[PRECISO CONFIRMAR: 12]` / `anos em cena`
- `ficha.stats.02.value` / `.label` — `[PRECISO CONFIRMAR: 9]` / `países`
- `ficha.stats.03.value` / `.label` — `[PRECISO CONFIRMAR: 8]` / `metros de altura`
- `ficha.stats.04.value` / `.label` — `[PRECISO CONFIRMAR: 400]` / `apresentações`

**Lista**
- `ficha.rows.aparelhos.label` / `.value` — `Aparelho` / `Faixas aéreas (aerial straps)`
- `ficha.rows.linguagens.label` / `.value` — `Linguagens` / `Circo contemporâneo · teatro físico · flexibilidade e contorção · criação de personagem · maquiagem artística`
- `ficha.rows.base.label` / `.value` — `Base` / `[PRECISO CONFIRMAR: cidade, país] — disponível para viagem`
- `ficha.rows.formacao.label` / `.value` — `Formação` / `[PRECISO CONFIRMAR: escola, ano] · [PRECISO CONFIRMAR: formação complementar]`
- `ficha.rows.festivais.label` / `.value` — `Festivais` / `[PRECISO CONFIRMAR: festival 1] · [festival 2] · [festival 3]`
- `ficha.rows.idiomas.label` / `.value` — `Idiomas` / `Português · espanhol · inglês [PRECISO CONFIRMAR: níveis]`
- `ficha.rows.formatos.label` / `.value` — `Formatos` / `Número solo (6–8 min) · intervenção · temporada · criação sob medida`
- `ficha.rows.tecnica.label` / `.value` — `Técnica` / `Ponto de rigging mínimo [PRECISO CONFIRMAR: X kN] · pé-direito mínimo [PRECISO CONFIRMAR: X m] · rider sob pedido`

**Alt text**
- `ficha.media.alt` — `Retrato de Vitor Mendes em cena, maquiagem de palco e figurino vermelho com pedrarias, cortina vermelha ao fundo.`

---

## 08 — CONTATO / BOOKING + RODAPÉ

- `contato.eyebrow` — `06 — Booking`
- `contato.title` — `Vitor Mendes`
- `contato.body` — `Temporada, festival, evento corporativo e criação sob medida. Escreva com data, cidade e pé-direito do espaço — respondo em até [PRECISO CONFIRMAR: 48h].`
- `contato.cta` — `Escrever agora`
- `contato.links.email.label` / `.value` — `E-mail` / `[PRECISO CONFIRMAR: e-mail]`
- `contato.links.whatsapp.label` / `.value` — `WhatsApp` / `[PRECISO CONFIRMAR: telefone]`
- `contato.links.instagram.label` / `.value` — `Instagram` / `[PRECISO CONFIRMAR: @usuario]`
- `contato.links.vimeo.label` / `.value` — `Vídeos` / `[PRECISO CONFIRMAR: Vimeo/YouTube]`
- `contato.download` — `Baixar release (PDF)`

**Rodapé**
- `footer.year` — `© 2026 Vitor Mendes`
- `footer.photoCredit` — `Fotos: [PRECISO CONFIRMAR: créditos]`
- `footer.siteCredit` — `Site: [PRECISO CONFIRMAR]`

---
---

# ES — transcriación

## 00 — MICROCOPY / UI
- `ui.langNav` — `Idioma`
- `ui.langPt` — `PT` · `ui.langEs` — `ES` · `ui.langEn` — `EN`
- `ui.langActive` — `Idioma activo`
- `ui.preloaderLabel` — `Cargando`
- `ui.skipIntro` — `Saltar`
- `ui.scrollHint` — `desliza`
- `ui.videoPlay` — `Ver con sonido`
- `ui.videoClose` — `Cerrar`
- `ui.videoMuted` — `Vista previa sin sonido`
- `ui.lightboxLabel` — `Reproductor de vídeo`
- `ui.imagePlaceholder` — `foto pronto`
- `ui.copyEmail` — `Copiar correo`
- `ui.copied` — `Copiado`

**SEO**
- `meta.title` — `Vitor Mendes — Artista aéreo e intérprete escénico`
- `meta.description` — `Straps aéreos y flexibilidad extrema. Teatro físico, creación de personaje y maquillaje artístico. Disponible para temporada, festival y evento.`
- `meta.ogAlt` — `Vitor Mendes suspendido en los straps aéreos en spagat, telón rojo al fondo.`

## 01 — HERO
- `hero.eyebrow` — `Artista aéreo · Intérprete`
- `hero.title` — `Vitor Mendes`
- `hero.subtitle` — `Straps, teatro físico, personaje.`
- `hero.scroll` — `desliza`
- `hero.media.alt` — `Vitor Mendes suspendido de los straps aéreos en spagat abierto, brazos extendidos, telón rojo al fondo.`
- `hero.media.posterAlt` — `Fotograma de apertura: cuerpo en spagat suspendido en el aire, escenario oscuro.`

## 02 — MANIFIESTO
- `manifesto.eyebrow` — `Manifiesto`
- `manifesto.title` — `La altura no es truco`
- `manifesto.body` — `Subo porque allá arriba la mentira no aguanta. El strap marca la piel, el hombro se traba, el spagat se abre en el aire sin red debajo. Cada figura es una decisión tomada en dos segundos, delante de todos.`
- `manifesto.media.alt` — `Detalle de las manos de Vitor Mendes cerradas sobre el strap, piel marcada, luz dura.`

## 03 — GALERÍA: STRAPS AÉREOS
- `aereo.eyebrow` — `01 — Straps`
- `aereo.title` — `Un aparato, todo el cuerpo`
- `aereo.body` — `Straps aéreos. Fuerza trabada en el hombro para subir, spagat abierto allá arriba, el suelo como continuación del número. Trabajo a una altura de hasta [PRECISO CONFIRMAR: X m], con rig propio o en la estructura de la sala.`
- `aereo.items.01.caption` — `Straps — plancha horizontal`
- `aereo.items.02.caption` — `Straps — spagat suspendido`
- `aereo.items.03.caption` — `Straps — penché en apoyo`
- `aereo.items.04.caption` — `Suelo — spagat en apoyo de hombros`
- `aereo.items.01.alt` — `Vitor Mendes en los straps aéreos, cuerpo horizontal a media altura, brazos bloqueados sobre la cabeza.`
- `aereo.items.02.alt` — `Vitor Mendes suspendido de los straps en spagat abierto, brazos extendidos, telón rojo al fondo.`
- `aereo.items.03.alt` — `Vitor Mendes de pie en el escenario, una pierna en vertical junto al strap, torso alineado.`
- `aereo.items.04.alt` — `Spagat horizontal en apoyo de hombros sobre la pista, piernas totalmente abiertas.`

## 04 — GALERÍA: PERSONAJE
- `cena.eyebrow` — `02 — Personaje`
- `cena.title` — `Primero el personaje`
- `cena.body` — `No subo sin saber quién sube. La serpiente existió antes que cualquier figura: la forma de reptar, el peso en la mano abierta, la cara. El aparato es consecuencia del personaje, nunca al revés.`
- `cena.items.01.caption` — `Serpiente — cuclillas con la red`
- `cena.items.02.caption` — `Serpiente — retrato con capucha`
- `cena.items.03.caption` — `Serpiente — vestuario verde, entre cajas`
- `cena.items.04.caption` — `Serpiente — apertura en la pista`
- `cena.items.05.caption` — `Serpiente — extensión hacia atrás`
- `cena.items.01.alt` — `Vitor Mendes como serpiente, maillot amarillo y negro de piel de serpiente, corona de escamas, en cuclillas sobre una red de cuerda blanca con el brazo extendido.`
- `cena.items.02.alt` — `Retrato de perfil de la serpiente: capucha verde menta de escamas, cejas verdes, rostro blanco y boca verde oscura.`
- `cena.items.03.alt` — `Serpiente con vestuario verde de cuerpo entero, brazos abiertos y cabeza erguida, ante un telón azul petróleo.`
- `cena.items.04.alt` — `Serpiente en cuclillas de frente en la pista, piernas abiertas y manos en el suelo, luz verde al fondo.`
- `cena.items.05.alt` — `Serpiente en extensión hacia atrás, cabeza invertida entre los brazos, manos abiertas hacia el público.`

## 05 — GALERÍA: MAQUILLAJE ARTÍSTICO
- `maquiagem.eyebrow` — `03 — Maquillaje`
- `maquiagem.title` — `La cara va primero`
- `maquiagem.body` — `Dibujo la serpiente en el espejo, a mano, capa por capa. Base blanca, escama pintada en la sien, boca verde. Una hora de camerino decide lo que el cuerpo podrá hacer en el aire.`
- `maquiagem.hoverHint` — `pasa el cursor`
- `maquiagem.items.01.caption` — `Escama en la sien — camerino`
- `maquiagem.items.02.caption` — `Ceja y boca — camerino`
- `maquiagem.items.03.caption` — `Rostro listo — antes de entrar`
- `maquiagem.items.01.alt` — `Primer plano del rostro de Vitor Mendes en el camerino: base blanca, escamas verdes pintadas en la sien, ceja verde y boca verde con glitter.`
- `maquiagem.items.02.alt` — `Rostro frontal con el maquillaje de serpiente terminado: máscara blanca, cejas verdes dibujadas, labios verde lima y escamas en el lateral de la cabeza.`
- `maquiagem.items.03.alt` — `Maquillaje finalizado con luz natural: escamas amarillo oro bajando por el lateral del rostro, ojos delineados en negro, boca verde en degradado.`

## 06 — VÍDEO
- `video.eyebrow` — `04 — Vídeo`
- `video.title` — `En movimiento`
- `video.body` — `Showreel de [PRECISO CONFIRMAR: 2 min] y cortes cortos. Sin música épica, sin corte cada medio segundo: el número entero, como pasa en el escenario.`
- `video.cta` — `Ver showreel`
- `video.reelCaption` — `Showreel [PRECISO CONFIRMAR: año]`
- `video.items.01.caption` — `Straps — número completo`
- `video.items.02.caption` — `Straps — [PRECISO CONFIRMAR: festival, año]`
- `video.items.03.caption` — `Solo de flexibilidad`
- `video.items.04.caption` — `Escena — [PRECISO CONFIRMAR: título]`
- `video.reel.alt` — `Fotograma del showreel: Vitor Mendes en lo alto de los straps, escenario oscuro.`
- `video.items.01.alt` — `Fotograma del número de straps aéreos.`
- `video.items.02.alt` — `Fotograma del número de straps en festival.`
- `video.items.03.alt` — `Fotograma del solo de flexibilidad en el suelo.`
- `video.items.04.alt` — `Fotograma de escena teatral con personaje.`

## 07 — FICHA TÉCNICA
- `ficha.eyebrow` — `05 — Ficha técnica`
- `ficha.title` — `Datos de trabajo`
- `ficha.body` — `Ficha resumida para producción y curaduría. Dossier completo y rider técnico a pedido.`
- `ficha.stats.01.value` / `.label` — `[PRECISO CONFIRMAR: 12]` / `años en escena`
- `ficha.stats.02.value` / `.label` — `[PRECISO CONFIRMAR: 9]` / `países`
- `ficha.stats.03.value` / `.label` — `[PRECISO CONFIRMAR: 8]` / `metros de altura`
- `ficha.stats.04.value` / `.label` — `[PRECISO CONFIRMAR: 400]` / `funciones`
- `ficha.rows.aparelhos.label` / `.value` — `Aparato` / `Straps aéreos`
- `ficha.rows.linguagens.label` / `.value` — `Lenguajes` / `Circo contemporáneo · teatro físico · flexibilidad y contorsión · creación de personaje · maquillaje artístico`
- `ficha.rows.base.label` / `.value` — `Base` / `[PRECISO CONFIRMAR: ciudad, país] — disponible para viajar`
- `ficha.rows.formacao.label` / `.value` — `Formación` / `[PRECISO CONFIRMAR: escuela, año] · [PRECISO CONFIRMAR: formación complementaria]`
- `ficha.rows.festivais.label` / `.value` — `Festivales` / `[PRECISO CONFIRMAR: festival 1] · [festival 2] · [festival 3]`
- `ficha.rows.idiomas.label` / `.value` — `Idiomas` / `Portugués · español · inglés [PRECISO CONFIRMAR: niveles]`
- `ficha.rows.formatos.label` / `.value` — `Formatos` / `Número solo (6–8 min) · intervención · temporada · creación a medida`
- `ficha.rows.tecnica.label` / `.value` — `Técnica` / `Punto de rigging mínimo [PRECISO CONFIRMAR: X kN] · altura libre mínima [PRECISO CONFIRMAR: X m] · rider a pedido`
- `ficha.media.alt` — `Retrato de Vitor Mendes en escena, maquillaje de escenario y vestuario rojo con pedrería, telón rojo al fondo.`

## 08 — CONTACTO / BOOKING + PIE
- `contato.eyebrow` — `06 — Booking`
- `contato.title` — `Vitor Mendes`
- `contato.body` — `Temporada, festival, evento corporativo y creación a medida. Escribe con fecha, ciudad y altura libre del espacio — respondo en [PRECISO CONFIRMAR: 48h].`
- `contato.cta` — `Escribir ahora`
- `contato.links.email.label` / `.value` — `Correo` / `[PRECISO CONFIRMAR]`
- `contato.links.whatsapp.label` / `.value` — `WhatsApp` / `[PRECISO CONFIRMAR]`
- `contato.links.instagram.label` / `.value` — `Instagram` / `[PRECISO CONFIRMAR]`
- `contato.links.vimeo.label` / `.value` — `Vídeos` / `[PRECISO CONFIRMAR]`
- `contato.download` — `Descargar dossier (PDF)`
- `footer.year` — `© 2026 Vitor Mendes`
- `footer.photoCredit` — `Fotos: [PRECISO CONFIRMAR: créditos]`
- `footer.siteCredit` — `Sitio: [PRECISO CONFIRMAR]`

---
---

# EN — transcreation

## 00 — MICROCOPY / UI
- `ui.langNav` — `Language`
- `ui.langPt` — `PT` · `ui.langEs` — `ES` · `ui.langEn` — `EN`
- `ui.langActive` — `Active language`
- `ui.preloaderLabel` — `Loading`
- `ui.skipIntro` — `Skip`
- `ui.scrollHint` — `scroll`
- `ui.videoPlay` — `Watch with sound`
- `ui.videoClose` — `Close`
- `ui.videoMuted` — `Muted preview`
- `ui.lightboxLabel` — `Video player`
- `ui.imagePlaceholder` — `photo coming`
- `ui.copyEmail` — `Copy email`
- `ui.copied` — `Copied`

**SEO**
- `meta.title` — `Vitor Mendes — Aerial straps artist and performer`
- `meta.description` — `Aerial straps and extreme flexibility. Physical theatre, character creation and artistic make-up. Available for seasons, festivals and events.`
- `meta.ogAlt` — `Vitor Mendes hanging from aerial straps in a full split, red theatre curtain behind him.`

## 01 — HERO
- `hero.eyebrow` — `Aerialist · Performer`
- `hero.title` — `Vitor Mendes`
- `hero.subtitle` — `Straps, physical theatre, character.`
- `hero.scroll` — `scroll`
- `hero.media.alt` — `Vitor Mendes hanging from aerial straps in a wide open split, arms extended, red theatre curtain behind him.`
- `hero.media.posterAlt` — `Opening frame: a body held in a split in mid-air, dark stage.`

## 02 — MANIFESTO
- `manifesto.eyebrow` — `Manifesto`
- `manifesto.title` — `Height is not a trick`
- `manifesto.body` — `I go up because nothing false holds up there. The strap marks the skin, the shoulder locks, the split opens in mid-air with no net under it. Every shape is a decision made in two seconds, in front of everyone.`
- `manifesto.media.alt` — `Close detail of two hands gripping the strap, skin marked, hard light.`

## 03 — GALLERY: AERIAL STRAPS
- `aereo.eyebrow` — `01 — Straps`
- `aereo.title` — `One apparatus, whole body`
- `aereo.body` — `Aerial straps. Locked shoulder strength on the climb, a full split at the top, the floor as the rest of the act. I work at heights up to [PRECISO CONFIRMAR: X m], on my own rig or the venue rig.`
- `aereo.items.01.caption` — `Straps — horizontal planche`
- `aereo.items.02.caption` — `Straps — suspended split`
- `aereo.items.03.caption` — `Straps — supported penché`
- `aereo.items.04.caption` — `Floor — shoulder-stand split`
- `aereo.items.01.alt` — `Vitor Mendes on aerial straps, body horizontal at mid height, arms locked overhead.`
- `aereo.items.02.alt` — `Vitor Mendes hanging from the straps in a wide open split, arms extended, red curtain behind.`
- `aereo.items.03.alt` — `Vitor Mendes standing on stage, one leg vertical beside the strap, torso aligned.`
- `aereo.items.04.alt` — `Horizontal split on the shoulders on the ring floor, legs fully open.`

## 04 — GALLERY: CHARACTER
- `cena.eyebrow` — `02 — Character`
- `cena.title` — `Character before trick`
- `cena.body` — `I do not go up without knowing who is going up. The serpent existed before any shape did: the way it crawls, the weight on an open hand, the face. The apparatus follows the character — never the other way round.`
- `cena.items.01.caption` — `Serpent — crouch with the net`
- `cena.items.02.caption` — `Serpent — hooded portrait`
- `cena.items.03.caption` — `Serpent — green costume, in the wings`
- `cena.items.04.caption` — `Serpent — open stance in the ring`
- `cena.items.05.caption` — `Serpent — backbend`
- `cena.items.01.alt` — `Vitor Mendes as a serpent in a yellow and black snakeskin suit and scaled crown, crouched on a white rope net with one arm extended.`
- `cena.items.02.alt` — `Profile portrait of the serpent: mint-green scaled hood, green brows, white face and dark green mouth.`
- `cena.items.03.alt` — `The serpent in a full green costume, arms open and head lifted, against a deep teal curtain.`
- `cena.items.04.alt` — `The serpent crouched face-on in the ring, legs wide and hands on the floor, green light behind.`
- `cena.items.05.alt` — `The serpent in a deep backbend, head upside down between the arms, hands open toward the audience.`

## 05 — GALLERY: ARTISTIC MAKE-UP
- `maquiagem.eyebrow` — `03 — Make-up`
- `maquiagem.title` — `The face comes first`
- `maquiagem.body` — `I draw the serpent in the mirror, by hand, layer by layer. White base, scales painted at the temple, green mouth. One hour in the dressing room decides what the body can do in the air.`
- `maquiagem.hoverHint` — `hover`
- `maquiagem.items.01.caption` — `Scales at the temple — dressing room`
- `maquiagem.items.02.caption` — `Brow and mouth — dressing room`
- `maquiagem.items.03.caption` — `Face finished — before going on`
- `maquiagem.items.01.alt` — `Close-up of Vitor Mendes in the dressing room: white base, green scales painted at the temple, green brow and glittered green mouth.`
- `maquiagem.items.02.alt` — `Face-on shot of the finished serpent make-up: white mask, drawn green brows, lime-green lips and scales along the side of the head.`
- `maquiagem.items.03.alt` — `Finished make-up in daylight: gold-yellow scales running down the side of the face, eyes lined in black, green ombré mouth.`

## 06 — VIDEO
- `video.eyebrow` — `04 — Video`
- `video.title` — `In motion`
- `video.body` — `A [PRECISO CONFIRMAR: 2 min] showreel plus short cuts. No epic score, no cut every half second: the full act, the way it happens on stage.`
- `video.cta` — `Watch showreel`
- `video.reelCaption` — `Showreel [PRECISO CONFIRMAR: year]`
- `video.items.01.caption` — `Straps — full act`
- `video.items.02.caption` — `Straps — [PRECISO CONFIRMAR: festival, year]`
- `video.items.03.caption` — `Flexibility solo`
- `video.items.04.caption` — `Stage — [PRECISO CONFIRMAR: title]`
- `video.reel.alt` — `Showreel frame: Vitor Mendes at the top of the straps, dark stage.`
- `video.items.01.alt` — `Frame from the aerial straps act.`
- `video.items.02.alt` — `Frame from the straps act at a festival.`
- `video.items.03.alt` — `Frame from the floor flexibility solo.`
- `video.items.04.alt` — `Frame from a theatre scene in character.`

## 07 — TECHNICAL SHEET
- `ficha.eyebrow` — `05 — Technical sheet`
- `ficha.title` — `Working details`
- `ficha.body` — `Short sheet for producers and programmers. Full press kit and technical rider on request.`
- `ficha.stats.01.value` / `.label` — `[PRECISO CONFIRMAR: 12]` / `years on stage`
- `ficha.stats.02.value` / `.label` — `[PRECISO CONFIRMAR: 9]` / `countries`
- `ficha.stats.03.value` / `.label` — `[PRECISO CONFIRMAR: 8]` / `metres of height`
- `ficha.stats.04.value` / `.label` — `[PRECISO CONFIRMAR: 400]` / `performances`
- `ficha.rows.aparelhos.label` / `.value` — `Apparatus` / `Aerial straps`
- `ficha.rows.linguagens.label` / `.value` — `Disciplines` / `Contemporary circus · physical theatre · flexibility and contortion · character creation · artistic make-up`
- `ficha.rows.base.label` / `.value` — `Based in` / `[PRECISO CONFIRMAR: city, country] — available to travel`
- `ficha.rows.formacao.label` / `.value` — `Training` / `[PRECISO CONFIRMAR: school, year] · [PRECISO CONFIRMAR: further training]`
- `ficha.rows.festivais.label` / `.value` — `Festivals` / `[PRECISO CONFIRMAR: festival 1] · [festival 2] · [festival 3]`
- `ficha.rows.idiomas.label` / `.value` — `Languages` / `Portuguese · Spanish · English [PRECISO CONFIRMAR: levels]`
- `ficha.rows.formatos.label` / `.value` — `Formats` / `Solo act (6–8 min) · intervention · full season · commissioned creation`
- `ficha.rows.tecnica.label` / `.value` — `Technical` / `Minimum rigging point [PRECISO CONFIRMAR: X kN] · minimum clear height [PRECISO CONFIRMAR: X m] · rider on request`
- `ficha.media.alt` — `Portrait of Vitor Mendes in performance, stage make-up and red rhinestone costume, red theatre curtain behind him.`

## 08 — CONTACT / BOOKING + FOOTER
- `contato.eyebrow` — `06 — Booking`
- `contato.title` — `Vitor Mendes`
- `contato.body` — `Seasons, festivals, corporate events and commissioned work. Write with date, city and the clear height of the space — I answer within [PRECISO CONFIRMAR: 48h].`
- `contato.cta` — `Get in touch`
- `contato.links.email.label` / `.value` — `Email` / `[PRECISO CONFIRMAR]`
- `contato.links.whatsapp.label` / `.value` — `WhatsApp` / `[PRECISO CONFIRMAR]`
- `contato.links.instagram.label` / `.value` — `Instagram` / `[PRECISO CONFIRMAR]`
- `contato.links.vimeo.label` / `.value` — `Videos` / `[PRECISO CONFIRMAR]`
- `contato.download` — `Download press kit (PDF)`
- `footer.year` — `© 2026 Vitor Mendes`
- `footer.photoCredit` — `Photos: [PRECISO CONFIRMAR: credits]`
- `footer.siteCredit` — `Site: [PRECISO CONFIRMAR]`

---

## O que preciso que você confirme antes do build
1. Cidade/país base e disponibilidade para viagem
2. Anos em cena · nº de países · nº de apresentações · altura de trabalho
3. Formação (escola, ano) e formações complementares
4. Festivais/espetáculos reais para as legendas e a ficha
5. Espetáculo/companhia em que a serpente aparece (o personagem não tem nome próprio — confirmado)
6. Ponto de rigging (kN) e pé-direito mínimo
7. E-mail, WhatsApp, Instagram, Vimeo/YouTube
8. Créditos de fotos (a marca d'água nas fotos de palco diz Rubens Santos Fotografia — confirmar grafia) e se existe release em PDF
9. Duração e ano do showreel
10. Onde salvar o retrato da ficha técnica dentro do projeto
