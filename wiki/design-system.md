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
  research-note body (area | text), home Intelligence and section indexes with four pages.
- **Sets of four go 2×2 inside the two thirds (`PAIRS`)**, so each card is exactly one third wide — no 4-column rows.
- **Halves (`HALVES`)** only for large media pairs: the two products (home + Product index) and the two audiences.
- Row lists (`RowLink`) follow the thirds from lg: name in the first third, description + arrow in the other two.
- Section headings are left-aligned on the grid edge (`SectionHead`), never centred.
- Constants carry columns + column gap only; add the row gap at the use site (`gap-y-10` cards, `gap-y-5` bordered cards).

## Banners and image placeholders (owner-requested, 2026-09-19)
- **Every banner is a video** (owner decision, restated 2026-09-20 — no exceptions): `InnerHero` takes
  `video="/media/<page>/banner.mp4"` (and `BannerVideo`
  takes optional `webm`/`poster`); it plays muted and looping (`components/ui/BannerVideo.tsx`), with a
  soft shade from the bottom-left for the title; paused on the poster under reduced motion. Until files exist the
  flat tone shows. Prompts for all 22: the "image requirements & ChatGPT prompts" doc
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

## Motion
One curve everywhere: `cubic-bezier(0.22, 1, 0.36, 1)` (`EASE` in Header.tsx).
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
