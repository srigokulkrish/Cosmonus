# Media brief — what each page needs

Every grey or black panel on the site is a placeholder for a real image or video. This brief says what goes in
each one, in what format, and how to make it engaging. Page order follows the site map.

**Ground rules (from the handoff):** real footage, real product screens and our own generated work only — no stock
photos or stock video. Nothing that shows a feature we have not built. Keep the palette neutral; colour should
come from the world and the products, not from graphics. People on camera must have agreed to it.

---

## 1. Formats and specs

| Slot | Shape on screen (desktop) | Deliver | Type |
| --- | --- | --- | --- |
| **Home hero** | 1392 × 776 (≈ 16:9) | 2560 × 1440 | Muted looping video |
| **Inner-page hero** | 1392 × 560 (≈ 5:2) | 2560 × 1080, key action in the middle 60% | Muted looping video, or a still |
| **Media card** (three in a row) | 376 × 280 (≈ 4:3) | 1200 × 900 | Still, or a short loop |
| **Section-page card** (two or three across) | up to 580 × 360 | 1600 × 1000 | Still, or a short loop |
| **Home product card** | 580 × 400 (≈ 3:2) | 1600 × 1100 | Loop (screen recording or footage) |
| **Home Studio tab** | 740 × 470 (≈ 16:10) | 1920 × 1200 | Loop |
| **Research cover** (card) | 376 × 216 (16:9) | 1280 × 720 | Still |
| **Research cover** (article) | 1184 × 520 | 2400 × 1050 | Still, or a slow loop |
| **Explainer panel** (StayOnMap) | 560 × 340 | 1600 × 970 | UI still, or a short loop |

**Video**
- **Format:** MP4 (H.264) plus WebM, muted, looping, 6–12 s.
- **File size:** under 4 MB per hero and under 1.5 MB per card.
- **Poster:** every video needs a poster frame, delivered as AVIF or JPG.
- **Reduced motion:** the site shows the poster instead of the video for visitors who ask for reduced motion.

**Heroes carry white or dark title text.** Keep the middle-bottom of the frame calm and low-contrast. We will add a
subtle scrim, but busy footage behind the title will still hurt legibility.

**Screen recordings**
- Record at 2× (retina), with real but anonymised data.
- Hide personal phone numbers and names.
- Move the cursor slowly and deliberately, or hide it.

**Diagrams** follow the site style: black, white and greys, 1px lines, the orange accent only as a small dot.
Animated diagrams are the most engaging option here: one idea per loop, drawn on in 4–6 s, then held.

---

## 2. Page by page

### Home `/`
| Section | What to show | Type | Why it engages |
| --- | --- | --- | --- |
| Hero | Cinematic real-world footage: a street at golden hour, people crossing, a building's shadow moving, a hand holding a phone with a map. No product UI. | Hero video | Sets "real world, not screens" in one shot |
| Studio tab — Web | Scroll-through of a Cosmonus-built interface (this site, or StayOnMap's map view) | Screen recording | Shows the craft, not a claim about it |
| Studio tab — Animation | A looping motion piece: a route drawing itself, or a TrustScore resolving | Motion loop | Motion is the tab's subject |
| Studio tab — Image Generation | A contact sheet or before/after: prompt → rough generation → art-directed final | Still or slow crossfade | Proves the "art director" point |
| Studio tab — Video | A 10 s cut from the reel | Video loop | |
| Product card — StayOnMap | Map view: pan across a neighbourhood, pins appear, one listing opens with its TrustScore | Screen recording | The product's core idea in one gesture |
| Product card — Happenous | Candid outdoor footage of people doing an activity together (a run, a game, a workshop) | Video loop | Human warmth next to the map card |
| Research cards | Use the research note covers (see Research) | Stills | |

### Section landing pages
| Page | Hero | Cards |
| --- | --- | --- |
| **Studio** `/studio` | 16:9 studio showreel loop: fast cuts across web, motion, imagery and film | Reuse the four home Studio tab assets |
| **Product** `/product` | Both products in use, outdoors: someone checking StayOnMap on a street, a group meeting through Happenous | StayOnMap map recording · Happenous candid footage (reuse from home) |
| **Company** `/company` | **Done** — `company/banner.mp4` (owner, 2026-09-20) | Four cards now: About team or place footage · Research a field-test still · Blog a desk or whiteboard · Careers the team at work, candid |
| **Intelligence** `/intelligence` | Aerial or top-down map footage that slowly resolves into a stylised map layer | One animated diagram per discipline (reuse from each capability page) |
| **Agents** `/agents` *(light hero)* | A clean recording of an agent run: a message comes in, steps tick off, a result is handed back for review | One diagram per agent page (reuse) |

### Studio pages (dark heroes)
| Page | Hero | Card 1 | Card 2 | Card 3 |
| --- | --- | --- | --- | --- |
| **Web** | Screen capture of a Cosmonus-built interface, slow scroll | Full-page capture of this website | StayOnMap / Happenous app screens | Map view recording (reuse the StayOnMap one) |
| **Animation** | A looping motion piece in the site's style | Motion identity loop (wordmark and grid lines animating) | Product film still | Explainer still: a route or a score forming |
| **Image Generation** | **Done** — `banner.webp` (owner, 2026-09-21). The one still banner on the site | Contact sheet: a grid of variations with the pick circled | Image series: 3–4 images sharing one visual system | Concept frames: rough frames for a product idea |
| **Video** | 16:9 reel cut | A generated shot, labelled as generated | Before/after grade split-screen (drag or wipe) | Launch film still |

**Image Generation carries the most stills** (owner, 2026-09-20). Its banner is now a still too — the only one on
the site (`banner.webp`, owner 2026-09-21) — and everything below it is a still, and it gained a "Selected frames" row of three finished images
after the cards. Its ten stills are named and wired already — drop them into `public/media/image-generation/` and
they appear on the next build:
`card-art-direction.jpg` · `card-visual-systems.jpg` · `card-concept-frames.jpg` ·
`step-1.jpg` · `step-2.jpg` · `step-3.jpg` · `band.jpg` ·
`frame-lane.jpg` · `frame-rooftops.jpg` · `frame-doorway.jpg`.

**Banner stills — the specs** (measured from `BANNER` in `components/ui/Hero.tsx`, for whoever makes the next one):
export **2:1 landscape, 2560×1280**, and expect `object-cover`. The box is 1560×760 at desktop (~97% of a 2:1 image
visible) but only 350×560 on a phone, where it goes portrait and shows just the **central 31% of the width** — so
the subject has to sit in the middle third. Keep the lower left quiet: the h1 and lead sit there under a
`from-black/60` shade. No text in the image. `banner.webp` is 1774×887, which is fine at 1× and a little soft on a
2× display.
Prompts for all of them are in the prompts doc (see §5).

### Intelligence pages (dark heroes)
| Page | Hero | Card 1 | Card 2 | Card 3 |
| --- | --- | --- | --- | --- |
| **Spatial Intelligence** | Aerial or map footage: a city from above, with a thin grid fading in | Place: a pin on an exact spot | Surroundings: rings spreading out to nearby streets, stops and shops | Movement: routes and walking times animating |
| **Trust Score** | A TrustScore on a real listing, with its reasons expanding | Signals: small labelled inputs flowing into one number | UI: a score with its reasons listed | Change over time: a score line stepping up and down, each change labelled |

### Agents pages (light heroes: use bright, airy footage or light-background UI)
| Page | Hero | Card 1 | Card 2 | Card 3 |
| --- | --- | --- | --- | --- |
| **Workflow Agents** | Workflow recording: steps completing one by one | Plan: a job split into steps | Act: tools being called | Hand back: a result waiting for a person's check |
| **Automation** | A routine task running the same way three times | Triggers: an event starting a run | Reliability: identical runs side by side | Escalation: an unusual case passed to a person |
| **Experiments** | Experiment footage: a raw prototype on a desk or a phone, honest and unpolished | Listing by conversation: a chat turning into a listing (screen recording) | Saying how sure it is: a confidence line shown in plain words | Knowing the neighbourhood: an agent's notes about a place on a map |
| **Conventional & Multi-tool Systems** | A system diagram: classic services with an agent in the middle | Services: boxes and arrows | Agent and tools: one agent reaching for several tools | The boundary: a clear line where the agent stops and ordinary code takes over |

### Product pages
| Page | Slot | What to show | Type |
| --- | --- | --- | --- |
| **StayOnMap** | Hero (dark) | Map view screen recording: fly into a neighbourhood, pins populate, one opens | Hero video |
| | Map-first | Searching by area on the map | Screen recording |
| | TrustScore | A listing showing its score | UI still or loop |
| | WhatsApp listing | A chat on a phone turning into a live listing, side by side | Split-screen recording |
| | Reading a TrustScore | Listing detail with the score and its reasons | UI still; annotate the four parts |
| **Happenous** | Hero (light) | People doing things outdoors, candid: bright, natural light | Hero video |
| | Activities, not posts | An activity card | UI still |
| | People nearby | The nearby view with activities around you | Screen recording |
| | Out of the app | A real group photo from an activity (with consent) | Photo |

### Company pages (light heroes)
| Page | Hero | Other |
| --- | --- | --- |
| **About** | Cinematic real-world footage: the places our products are for | "The three parts" cards can reuse the product, studio and research covers |
| **Research** | Field footage or an abstract film: someone checking a map on a real street | Note covers, below |
| **Blog** | **None needed** — the blog index opens with a masthead, not a banner (owner, 2026-09-21) | Post covers, below. The featured post's cover (currently AI models) runs large as the lead story, so shoot it to hold at 420px tall |
| **Careers** | The team at work, candid: whiteboards, desks, a field test (only with the team's consent) | — |

### Blog post covers
| Post | Cover |
| --- | --- |
| AI models: what they are, and what they are not | A sentence being continued one word at a time |
| Embeddings: turning meaning into numbers | Words placed on a map by meaning, similar ones clustered |
| Vector databases: a filing cabinet organised by meaning | Shelves arranged by similarity rather than by label |
| RAG: letting a model look things up | An open book beside a question, the relevant passage marked |
| MCP: one plug shape for models and tools | Many cables going into one standard socket |
| System One models: when the answer is a decision, not a paragraph | A page of prose beside a ticked box and a confidence figure |
| Prompt engineering: saying exactly what you want | The same request written twice, once vague and once exact |
| Context engineering: packing the right things in the bag | A bag packed for an errand: a list, money, a photo |
| Loop engineering: what happens after the first try | The same step attempted three times, each a little different |
| Harness engineering: the kitchen around the cook | A kitchen set up for a beginner: tools within reach, sharp things away |

### Research note covers
| Note | Cover |
| --- | --- |
| Where a listing says it is, and where it really is | Map detail: the written address and the dropped pin, with the gap between them |
| From a WhatsApp message to a listing someone can check | Screen recording still: a message becoming a listing |
| A new Cosmonus site, made in our own studio | Site overview still (a collage of pages) |
| A score is only useful if it shows its reasons | UI detail: a score with its reasons |

### Contact `/contact` (light hero)
Calm real-world footage: a street or a doorway, with slow movement. It could be a quieter moment from the home hero shoot.

Privacy, Terms and the 404 page need no media.

---

## 3. Shoot once, use many times

| Asset | Where it is used |
| --- | --- |
| **StayOnMap map-view recording** | Home product card · Product page · StayOnMap hero and Map-first card · Web "Interactive maps" · Spatial |
| **Happenous candid outdoor footage** | Home product card · Product page · Happenous hero · "Out of the app" |
| **City / street shoot** (golden hour, people, aerial) | Home hero · Company · About · Contact · Spatial hero · Intelligence hero |
| **TrustScore UI capture** | StayOnMap TrustScore card and explainer · Trust Score hero and card · research cover |
| **WhatsApp → listing recording** | StayOnMap card · Experiments card · research cover |
| **Diagram system** (one animated style) | All Intelligence and Agents cards, the Systems hero |
| **Studio reel** | Studio hero · Video hero and cards · home Video tab |

## 4. Priority

1. **Home hero, and the StayOnMap and Happenous footage.** Seen first; reused about 15 times.
2. **Product UI recordings:** the map view, TrustScore and WhatsApp listing.
3. **The Studio reel and the Image Generation contact sheet.**
4. **The animated diagram system.** Build one template, then produce the 24 diagrams from it.
5. **Research covers and the Careers and team footage.**

## 5. Wiring (for developers)
- Placeholders are `MediaPanel` components (`components/ui/MediaPanel.tsx`), and their labels live in `content/*.ts`.
- Prompts for every file: the "image requirements & ChatGPT prompts" doc
  (https://claude.ai/code/artifact/397c720e-5500-42a8-a9d2-7a8a4a4bfa0a). File names there are the ones content uses.
- **Content names the file before it exists.** A capability page's media paths run through `inPublic`
  (`lib/media.ts`), which keeps the labelled placeholder until the file is actually in `public/`, so nothing
  renders as a broken image while a picture is still being made. A showcase row waits until every image in it lands.
- Banners stay video (`InnerHero` + `BannerVideo`). Cards, steps and the closing band take `image` + `alt`;
  `Showcase` (`components/capability/Showcase.tsx`) takes videos or stills in one row.
- Pause video under `prefers-reduced-motion`, and give stills meaningful `alt` text.
