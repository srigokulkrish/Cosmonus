# Design system

Source: `raw/handoff/HANDOFF.md` §Tokens. Implemented as Tailwind v4 `@theme` tokens in `app/globals.css`.

## Tokens
- Colours: `ink #0F0F0F`, `ink-2 #2B2B29`, `muted #5C5C58` (never lighten — 4.5:1), `line #E4E4E1`,
  panels `light #ECECE9` / `mid #D9D9D4` / `dark #111110` / `card #161615`, `node #141413`, footer `#0B0B0B`,
  `accent #635BFF` (Cosmonus violet; was the handoff's orange #FF4A1C until 2026-09-19) — 8px marker dots
  (`components/ui/Dot.tsx`, the Studio tab dot) and, since 2026-09-20, the menu "<Section> overview" links, the one
  place accent is used as text (4.7:1 on white). Nowhere else.
- `soft #EEF0F2` — secondary button and chip fill.
- `Cosmonus violet #635BFF` — the original cosmonus.com brand colour (its buttons). Used only inside the mesh
  gradient on the home Agents band (`MeshBackdrop palette="cosmonus"`: four colours only — blue #2F6BFF, violet #635BFF,
  dark blue #1D3FA8, navy #070D2E); also the UI accent (the marker dots).
- `MeshBackdrop` (`components/ui/MeshBackdrop.tsx`) — shared atmospheric mesh-gradient background with palettes
  `stayonmap`, `happenous`, `cosmonus`; `dim` adds a shade for large areas of white text. The colour fields drift
  continuously (`.mesh-field` + `mesh-drift-a…d` keyframes in globals.css: 3-point loops, 11–19 s, up to ~⅓ of a field's size; the light field stays on the right), off under
  reduced motion; hover adds a small extra shift on the product cards.
- Radii: chip 8 · buttons 8 (`rounded-lg`) · btn 10 (menu panels) · media 12 · card 14 · hero 16. Only shadow: mega menu.
- Widths (measured from runway.com, which uses exactly this):
  - `frame` — max 1600px, centred, 20px side padding. Header bar, banners (heroes), the home Agents band, mega menu.
  - `wrap` — the content column: the frame inset by one column of a 16-column grid (6.25%) each side from 768px.
    Every body section and the footer. Banner copy uses `md:px-[6.25%]`, so it starts on the same line as the content.
  - Result: logo and banner edges on one line; banner text, every heading, every card row and the footer on another.
- Utilities: `sec` (120px section top), `fade`
  (hover opacity .62); `.row:hover .rowname` underlines card/row titles.

## Runway direction (owner-requested, 2026-09-19)
The owner asked for the site to feel like runway.com: clean, simple, visually led. Measured from runway.com and applied:
- **Width:** content runs nearly edge to edge with a 20px gutter — the same inset as header, heroes, footer and menu.
  Paragraphs keep their own max-widths (≈520–680px) so lines stay readable.
- **Type:** h1/h2 are regular weight (400) with -0.02em tracking; home section heads 56px, inner 44px. Small labels,
  nav and card names stay medium.
- **Heroes:** copy bottom-left, not centred. Home h1 72px (40 on phones), inner 56px; lead 20px; one compact light button.
- **Buttons (`ButtonLink`):** 40px, 8px radius, 15px semibold. `primary` ink · `secondary` soft grey · `inverse`
  white on dark · `ghost` white outline on dark. Header Contact/Menu are 36px (primary / soft grey).
- **Home:** Studio is a bordered showcase — big practice names stacked left (accent dot marks the selected one), media and
  caption right. Products are Runway "platform" columns (name above media, one sentence, paragraph, "Explore X" +
  "Open x.com" buttons). Agents is a dark band with the statement left and the four agent links right. "How an agent works"
  follows as its own section: a stepper on a soft-grey panel — five steps across the top with a progress rule
  filling to the current one, and below it the current step large (name, text, "Next" button) beside its diagram.
  Auto-advances every 5 s, pauses on hover/focus, off under reduced motion; arrow keys move between steps. Research has a left-aligned "See the latest from Cosmonus" head with an "All research" button.
- Backup of the source before this pass: session scratchpad `backup-before-runway/` (the project has no git).

## The grid (owner-requested, 2026-09-19)
One structure for every section, defined in `components/ui/Section.tsx`, so edges line up down the page:
- **Thirds with a 20px gap** (the gutter width). `THIRDS` = card rows (3 → 2 → 1). All three-item sets use it
  (media cards, steps, bordered/link/note cards, research, "More in", "Built on").
- **`SideLayout` + `SideHead`:** heading in the first third, content across the other two. Used by Intro, Story,
  Status key, FAQ, Explainer (media + 2×2 parts), Points, Band, legal sections, Contact (prompts | form),
  home Intelligence and section indexes with four pages.
- **One exception — article bodies** (research notes and blog posts): owner, 2026-09-21, "too much space to the area"
  and "too much white space on the right". A one-word meta label does not earn a third of the page, so the page puts
  a fixed 168px column at `lg` with a 40px gap beside the text. Research notes read at `max-w-[960px]`
  (`components/ui/ArticleBody.tsx`); body type steps up to 20px at `lg` and the what/why/when/how rows to 17px so the
  longer line stays readable. At 1280 the text fills the wrap; the cap only bites above ~1440. Below `lg` they stack.
- **Sets of four go 2×2 inside the two thirds (`PAIRS`)**, so each card is exactly one third wide — no 4-column rows.
- **Halves (`HALVES`)** only for large media pairs: the two products (home + Product index) and the two audiences.
- Row lists (`RowLink`) follow the thirds from lg: name in the first third, description + arrow in the other two.
- Section headings are left-aligned on the grid edge (`SectionHead`), never centred.
- Constants carry columns + column gap only; add the row gap at the use site (`gap-y-10` cards, `gap-y-5` bordered cards).

## Banners and image placeholders (owner-requested, 2026-09-19)
- **Every banner is a video** (owner decision, restated 2026-09-20), **with one exception**: `InnerHero` takes
  `video="/media/<page>/banner.mp4"` (and `BannerVideo`
  takes optional `webm`/`poster`); it plays muted and looping (`components/ui/BannerVideo.tsx`), with a
  soft shade from the bottom-left for the title; paused on the poster under reduced motion. Until files exist the
  flat tone shows.
- **The exception is Image Generation** (owner, 2026-09-21): a still, not a film — `heroImage` on the capability
  entry, rendered by `components/ui/BannerImage.tsx` (`next/image`, `fill`, `preload`, `quality={90}`). A page sets
  `heroVideo` or `heroImage`; if both are present the film wins. Do not spread this to other pages — the page about
  making images is the one place a still argues for itself. That banner alone also has:
  - `heroAlign: "top"` — copy at the top of the box, tucked closer to the corner (`BANNER_PAD_TOP`).
  - `heroScrim: false` — no shade. Which is why it is the one Studio page on `heroTone: "light"`: with the shade
    gone, white type on that yellow is unreadable, so the copy is `text-ink`.
  - `heroLead: false` — no lead under the h1. The sentence is still the page's `metaDescription` and still the
    page's description in the "More in Studio" strip; it is only kept off the banner.
  - `heroTitleHidden: true` — the banner shows the picture and nothing else. The h1 is still in the document
    (`sr-only`), so the page keeps its outline and its heading for search; it is only not drawn. Owner,
    2026-09-21: the title vanished at small widths. The cause is the crop — a phone shows only the middle ~31% of
    the picture, which here is dark hair, and the copy is `text-ink` because the banner drops its shade. Dark on
    dark. Fixable (a shade below `lg`, or light copy at small widths) if a visible title is ever wanted back.
    A script face and a written-on reveal lived here for a few hours; both were removed with the visible title,
    since a webfont loaded for text nobody sees is a download for nothing.
  - `heroAssemble: true` — the picture arrives a piece at a time: 60 tiles in the banner's own panel colour
    clear in a **scattered order**, the way a sampler resolves a canvas in patches (`.tile-grid`,
    `app/globals.css`).
    Owner asked for something less standard than a wipe (2026-09-21); this uses the grid language `HeroLines`
    already draws. It runs **once**, with **no hover** and no loop, so it reads the same everywhere, and
    `prefers-reduced-motion` drops the grid entirely — the picture is simply there.
    The tiles are **covers over** the picture, not slices of it, so the hero stays one optimised `next/image`
    rather than 60 elements each fetching the full file. The count is fixed at 60 so the same children fit both
    arrangements (6×10 on a phone where the banner is taller than wide, 10×6 from `md`). The order is a fixed
    shuffle seeded once in `BannerImage`, never `Math.random()` — the delays are inline styles rendered on the
    server and again on the client, so anything non-deterministic mismatches on hydration. Ranking the shuffle
    rather than taking raw random delays keeps the tiles starting at an even rate, and it means the order no
    longer depends on the arrangement: the earlier centre-out stagger was measured on the 10×6 grid and only read
    correctly there. Each cover scales to 1.06 as it fades,
    so neighbours overlap for a moment instead of leaving hairline seams.
    A scattered **third of the tiles** (`.frosted`, picked by a hash so they never stripe) do it in two beats
    instead of one: the cover fades to leave the picture *frosted* in that square, then the frost clears. The
    image resolves unevenly, the way a sampler settles some regions before others. Those tiles hold `opacity: 1`
    throughout and fade their **background-color** instead — an element that has been faded out does not apply
    its `backdrop-filter`, so animating opacity would carry the frost away with it. The transparent end is mixed
    from the panel token with `color-mix`, not plain `transparent`, so the colour cannot drift on the way out.
- **`BANNER` is the box only** (size, radius, overflow). Padding and alignment are set at the use site —
  `BANNER_PAD` for the usual bottom-left copy on the 6.25% content line, `BANNER_PAD_TOP` for the one top-aligned
  banner. Tailwind cannot reliably override a class from a shared string, so these are composed, not fought.
- **`sizes` on a banner still is not `100vw`.** The box is a fixed height, so `object-cover` paints the image wider
  than the viewport once it turns portrait: at 390px the box is 350×560 but a 2:1 image is painted 1120px across.
  `100vw` there fetches an ~828px file for 2240 device pixels and looks soft. `BannerImage` declares the painted
  width instead: `(max-width: 1023px) 1120px, 1560px`. Non-default `quality` also needs `images.qualities` in
  `next.config.ts` or Next silently serves 75. Prompts for all 22: the "image requirements & ChatGPT prompts" doc
  (https://claude.ai/code/artifact/397c720e-5500-42a8-a9d2-7a8a4a4bfa0a).
- **`Showcase`** (`components/capability/Showcase.tsx`, formerly `VideoShowcase`) takes stills or clips in one
  row — an `.mp4`/`.webm` src loops, anything else is a `next/image`; `shape: "landscape"` gives a 3:2 crop for
  stills, the default `portrait` 4:5 keeps the Video page as it was. Used by Video (films) and Image Generation
  ("Selected frames").
- **Every banner is the home banner's size:** `BANNER` in `components/ui/Hero.tsx` (full viewport height under the
  bar, 600–760px on desktop; 560px min on phones), used by the home hero and `InnerHero`. Inner h1 64px, home 72px.
- **No text-only link or process sections.** Each now carries image placeholders until real media arrives:
  - `Steps` (Process / How it works / How we hire): image card per step on the thirds (label from `asset` or the title).
  - `RowList` — a large numbered index: number + name (34px) in the first third, description in the second, small
    thumbnail + round arrow (fills ink on hover) in the third. Used only for About "What Cosmonus is made of" and the
    capability pages' "Where it shows up" (rows that repeat the page's "More in …" strip are dropped; the section
    is hidden when fewer than two remain — Image Generation, Automation, Systems). Careers "What you would work on"
    and Research "Areas" were removed as duplicates.
  - `MoreStrip` ("More in …") and `LinkGroups` ("Built on"): `ImageLinkCard`s on the thirds.
  - Research note "More research": `NoteCards`. The research index (`NoteList`) keeps filterable text rows.
  - Blog does **not** mirror them — see "The blog is its own layout" below.
- `Band` (the closing call-to-action on home, section, capability and product pages) is a rounded soft-grey panel:
  heading, one line and a button left, an image placeholder filling the right half (`asset` labels it).
- **Real images:** files go in `public/media/<page>/<slot>.<ext>` (names from the prompts doc). `MediaPanel` takes
  `src` + `alt` and renders `next/image` (fill, object-cover, `sizes`) in the same slot; without `src` it stays the
  placeholder. Media cards, `Steps` and `Band` all take `image`/`alt` the same way. First one in:
  `/media/home/studio-animation.png` (home Studio showcase, Animation tab).
- **Content may name a file before it exists.** Capability-page media runs through `inPublic` (`lib/media.ts`),
  which drops a path whose file is not in `public/` — so the slot keeps its labelled placeholder instead of
  showing a broken image, and lights up on the build after the file is dropped in. A `Showcase` row waits until
  all of its images exist, so a part-filled row never ships.
- `MediaPanel` placeholders show a small picture glyph above the mono label; `toneAt(i)` cycles dark/light/mid.

## Responsive rules
- At 1024–1279 (`lg`) two-column layouts use narrower fixed left columns (520 → 420, 440 → 360); the home Agents flow
  stays stacked and the home Intelligence cards stay 2-up until `xl`.
- Hero h1s are 36–40px on phones.
- Check: no horizontal scroll and no clipped text on every sitemap route at 320/375/768/1024/1280/1920.

## Departures from the handoff (owner-requested, 2026-09-19)
- **Fonts:** Schibsted Grotesk + JetBrains Mono (the original cosmonus.com pair) instead of Hanken Grotesk + Geist Mono.
  Upright styles only (400/500/600 and mono 400/500): nothing is set in italic, so the italic face is not loaded.
- **Logo:** the original cosmonus.com wordmark image, `public/logo-white.png` (231×30, white on transparent, downloaded
  from https://www.cosmonus.com/images/logo-white.png). `Logo` in `components/site/Header.tsx` draws it as a CSS mask
  filled with `currentColor` (123×16px), so it is ink in the header/mobile menu and white in the footer. The parent
  link carries the accessible name. The white "C" on black icon is only the favicon/app icon (`app/icon.png`,
  `app/apple-icon.png`), never on the page. An SVG or 2× PNG would be sharper on high-DPI screens.
- **Navbar:** sticky, 60px, white (`bg-white/95` + light blur, solid where backdrop-filter is unsupported), no bottom border. Mega-menu panels gained a "<Section> overview" link to the new landing pages.
- **Contact** button goes to `/contact` instead of the footer anchor.
- **Mega-menu panels share one layout:** left column (mono label, title, description, "<Section> overview" link;
  `PanelIntro`), then two columns of the section's pages — three columns in all. Product shows them as cards (below);
  Studio, Company, Intelligence and Agents show compact quick links (`QuickLinks`) in the same two columns: name,
  one-line description, small arrow, each closed by a 1px line rule below it (`border-b`, matching the mobile menu).
- **"<Section> overview" links** (`PanelIntro`, and the same link in the mobile menu) are accent violet, so the way
  through to a landing page reads differently from the quick links beside it. On the desktop panel a 1px rule wipes
  in from the left on hover and focus (`scale-x` from `origin-left`, 300ms, the site easing); under
  `prefers-reduced-motion` it appears without the wipe. The mobile one keeps the shared `row`/`rowname` underline.
- **An open menu frosts the page behind it** (owner, 2026-09-21): a `fixed` scrim under the bar
  (`top-[60px] bottom-0`) with `bg-white/15 backdrop-blur-xs backdrop-saturate-150`, fading in and out with the
  panel. It makes the panel the thing in focus rather than a card floating over busy hero footage.
  **4px, not 24px** (owner, 2026-09-21, settled after two passes down from `xl`): heavy blur reads as fog and
  hides the page instead of setting it back. Glass is a *little* blur plus a light tint and some saturation — the
  page stays readable, just clearly behind. Turn it up and it stops looking like glass.
  Two things it must keep: it is **`pointer-events-none`**, because the header wrapper closes the menu on mouse
  leave and a scrim that swallowed the pointer would hold every menu open across the whole page; and it sits
  **before the panel in the DOM**, so the panel paints over it. Desktop only — the mobile menu is a full sheet.
- **Product menu:** three columns (title + description + overview link, then one large card per product). Cards use
  product brand colours, the only large colour fills on the site: `stayonmap #0D8A5F`, `happenous #E8421A`
  (provisional reddish orange until the owner picks the final colour; change the token in `globals.css`).
  Background (owner request; replaced the line art, then a short-lived glass panel): an atmospheric mesh gradient
  (`MeshBackdrop`) — four oversized radial colour fields blurred 64px (StayOnMap greens #6FE0AE→#04301F, Happenous
  oranges #FFB27A→#4A1004), a white light bloom, dark edge falloff and SVG film grain; fields drift on hover. Copy
  sits directly on it; the darkened lower edge keeps white text above 4.5:1.
- **Dropdown radius:** mega-menu panel and product cards use 10px (`rounded-btn`), not the 16px hero radius.

## Shared components (`components/ui/`)
`InnerHero`/`HeroLines` · `SectionHead` · `Intro` · `MediaCard(s)` · `Steps` · `Band` · `RuleLink` ·
`MoreStrip` · `MediaPanel` (placeholder media; `decorative` hides it from AT inside links) · `ButtonLink` ·
`MonoLabel` · `Dot`. Page-specific pieces live in `components/<area>/`.

## Navigation and loading (2026-09-19)
- **Prefetch:** `<Link>` prefetches pages as links enter the viewport (production only). The header also calls
  `router.prefetch` for a whole menu (overview + pages) the moment it is hovered, clicked or opened by keyboard.
- **Progress bar:** `components/site/NavProgress.tsx` — a 2px violet line at the top; starts on any internal link
  click (capture phase, before `<Link>` handles it) or Back/Forward, completes when the path changes, 8 s safety reset.
- **Skeleton:** `app/loading.tsx` — shown instantly while a page loads: banner block with title bars, a heading and
  three cards, with a light sweep (`.skeleton`; still under reduced motion).
- **Video:** banners fade in once playable (the banner tone shows meanwhile) and pause off-screen; in-page clips
  (`LoopVideo`) download nothing until ~300px from view, play only while a third is visible, fade in when ready.
  Banner films start only after `load` **and** browser idle; neither kind downloads under Save-Data or on 2G.
- **Images:** `next/image` serves AVIF, falling back to WebP (`images.formats` in `next.config.ts`). A banner
  still that should load first takes `preload` — Next 16 deprecated `priority`, which did the same thing.

## Motion
One curve everywhere: `cubic-bezier(0.22, 1, 0.36, 1)` (`EASE` in Header.tsx).
- Framer Motion is used as `m` inside `LazyMotion`, never `motion`: `Header` and `AgentsFlow` take `domAnimation`
  (opacity, transforms, height, exit); `StudioTabs` needs `domMax` for its `layoutId` dot and loads it
  asynchronously from `components/home/motion-features.ts`. A `motion.*` anywhere pulls the whole library into
  that page again.
- Mega menu: 90ms hover intent, 160ms close grace (separate open/close timers); 280ms fade-in, panel height
  glides and content cross-fades when switching menus; keyboard open moves focus in; Escape/outside click close.
- Mobile menu fades/slides in; accordion sections animate height.
- Studio tabs: sliding accent dot beside the selected practice (`layoutId`), 260ms content fade-up.
- Hover: `fade` opacity 280ms; `.rowname` underline fades in; FAQ `<details>` animate open via `::details-content`.
- Pages fade in on arrival, opacity only (`app/template.tsx` + `.page-in`). Never translate the page: it slides the hero under the sticky bar.
- Heroes sit 8px below the bar (`pt-2`) so their rounded top edge is never tucked under it.
- **No global `scroll-behavior: smooth`.** It made Next.js's scroll-to-top on route change animate and fight itself
  (pages landed part-scrolled, hero under the bar) and animated Back/Forward. Only same-page `#anchor` links are
  smoothed, by `components/site/SmoothAnchors.tsx`; `scroll-padding-top: 76px` keeps targets clear of the bar.
- Everything drops to instant under `prefers-reduced-motion`.

## The blog is its own layout (owner, 2026-09-21)
"Blog UI can be different, it should not replicate the research theme." `/company/blog` and its posts are the one
part of the site on neither the section nor the note template. Components live in `components/blog/`.

- **No banner.** The index opens with a masthead — dot + mono "BLOG", a 60px title, a lead — not a full-viewport
  film. It is the only page with no hero, and it is why the blog needs no `blog/banner.mp4`.
- **A lead story.** `FeaturedPost` gives the featured post a half-and-half block: a tall cover beside the text,
  "START HERE" in mono above a 42px title. The rest are `PostCard`s on the thirds, under a rule.
- **Posts read in one centred column** (`max-w-[860px]`, 20px from `lg`), not text beside a meta column. The cover
  breaks out wider than the text (`max-w-[1100px]`) — the one place a post leaves its column.
- **A standfirst:** the first paragraph of a post sets at 23px in `text-ink`, then the body drops to normal size.
- **Callouts, not rules.** The what/why/when/how rows sit in a `bg-panel-light` `rounded-card` panel. The research
  status key keeps the open ruled rows; the two should not converge.
- **Meta is `tag · N min read`**, computed by `readingTime()`. No author names, no dates.
- Headings get more air than a note's (`mt-12` at `lg`, 34px); paragraphs sit on `gap-7`.
- Tag buttons appear only when a second tag exists, so a one-tag blog is not asked to filter itself.
- **Sources block**: a post with `sources` gets a bordered `rounded-card` panel above "Read next" — mono "SOURCES",
  then each link with a `↗`, opening in a new tab. Only posts leaning on outside facts have one.
- **Inline links** in post copy take the shared `row`/`rowname` hover underline, so a link in a paragraph behaves
  like every other link on the site rather than being a blue exception.
- Card titles are real headings (`h2` featured, `h3` in grids) — the index has a proper outline for search engines
  and screen readers, not a wall of spans.

## Status key: no rule above the first row (owner, 2026-09-21)
The border above "In progress" doubled up with the section rule already above "How to read a note". `StatusKey`
drops the first row's `border-t` and top padding (`first:border-t-0 first:pt-0`). Rules between rows and the closing
rule are unchanged. The blog's callout rows do the same inside their panel.

