# Cosmonus

Next.js 14 App Router. Founders: Sri Gokul Krishnan (design & engineering), Yuvraj (operations & business).

Positioning: Cosmonus engineers intelligent software systems from first principles — software that reads context, reasons over information, automates hard decisions, and improves with use. AI is one component among many (architecture, distributed systems, spatial computing, knowledge systems, design). Philosophically between Palantir's density and Stripe's clarity. Confidence through clarity, never hype.

## Karpathy vibe coding workflow

This project is built vibe-coding style — Sri describes outcomes in plain English, Claude generates all code, Sri reviews visually in the browser and iterates fast. Key principles:

- **Describe, don't spec** — Sri states what he wants in plain language. Claude infers intent and implements.
- **Visual feedback loop** — changes are judged by how they look/feel in the browser, not by reading diffs.
- **Iterate fast** — every change is immediate. No planning phase, no lengthy back-and-forth.
- **Human steers, AI executes** — Sri holds taste and direction. Claude holds implementation.
- **Quality stays high** — vibe coding here doesn't mean sloppy. The design system, rules, and constraints below are the guardrails that keep output coherent.
- This is an internal workflow note, not customer-facing marketing copy — don't surface "vibe coding" language on the site itself.

## Stack

- Next.js 14 App Router (`app/`)
- No CSS framework — hand-written CSS in `styles/globals.css` (no Tailwind, no Bootstrap)
- Schibsted Grotesk + JetBrains Mono via `next/font/google` (`--font-grotesk`, `--font-mono`) — two families, no more. Tangerine, Nunito and Space Grotesk were loaded but unused; don't reintroduce them.
- Lenis (smooth scroll)
- Deployed on Vercel

## Design system

Editorial, architectural, calm. Dark-first — `data-theme` on `<html>` defaults to dark unless the visitor stored `light`; light theme fully supported.

- **Dark (primary):** `#0a0a0a` background, `#ececec` text — neutral near-black, no blue/violet cast; violet lives only in the accent, never the base/surface colors
- **Light:** `#ffffff`/`#faf9fb` background, `#141318` text
- **Accent:** the Cosmonus brand violet — `#635bff` in light theme, lightened to `#928cff` in dark (the raw brand violet is too dark against `#0a0a0a`). Used *deliberately*, not everywhere: primary CTA fill, link/nav hover, active nav underline, focus rings, the intelligence-canvas diagram (violet marks the organized/knowledge side, neutral marks raw/scattered data), numbered `.eyebrow__num` marks. Everything else stays neutral grey/black so violet reads as intentional. In dark theme `--accent-fg` is near-black ink (button text on the lighter violet fill); in light it stays white. `--accent-text` mirrors `--accent` per theme and marks violet-as-text usage (nav/footer link hover, active states).
- **CTAs:** `.btn--primary` is violet-filled (`background: var(--accent)`, white text) — not monochrome ink. `.btn--ghost` borders/text tint violet on hover.
- **Buttons:** `border-radius: 4px` (`--r-sm`), not pill
- **No gradients, no emoji, no rounded-card-with-left-accent clichés, no stock illustration.** Every visual means something.
- **Imagery placeholders:** use `components/StripedPlaceholder.js` (diagonal-stripe background + monospace label) until real screenshots are supplied — never invent fake product photography
- **Contrast floor:** `--fg-faint` is `#8a8a8a` dark / `#6b6a72` light and `--fg-muted` is `#9c9c9c` dark / `#57565e` light. These clear WCAG AA (4.5:1) on both `--bg` and `--panel` at small sizes — don't darken them.
- **Sections separate with 1px border-top rules** (`.section`). Alternating sections get a faint near-bg panel tint (`var(--panel)` — `#131313` dark, cool blue-grey `#f5f7fa` light; Sri rejected both violet-tinted and flat-grey light surfaces — keep light surfaces cool/airy, never lavender, never dingy grey). Applied automatically via `.site-main > section:nth-of-type(even)`; hero and final-CTA sections (`.section--hero`/`.section--tight`) are excluded so they stay plain.
- **Wide-viewport composition:** the container is 1240px, so a block capped at 720–880px leaves a third of the page empty on the right. Above 900px, heroes and section heads go two-column — headline left, supporting copy (`.section-head--split`) or the CTA (`.section-head--cta`) right. A head with no body copy stays single-column; the full-width block beneath it carries the measure.
- **Numbered sections:** `.eyebrow` with `.eyebrow__num` (e.g. "01 — THE PROBLEM") for major page sections
- **Case studies** use `.case` — a systems drawing, not a card: hairline top rule, mono index (`01 /`), plain headline, a mono key/value `.case__spec` table, one live diagram, one link. No fill, no radius, no shadow.
- **Capability groups** use `.cap-groups` — four groups, always visible, rules only (no frames). Don't put core content behind an accordion on the homepage.
- **Reference aesthetic:** Palantir density / Stripe clarity — visual cues only, never copy content or messaging

## File layout

```
app/
  page.js                    # Home — 6 sections: hero, what we engineer, selected systems,
                             #   architecture, how we work, CTA
  about/page.js              # Why we exist (incl. the vision essay), founders, values
  work/
    page.js                  # Work index — case-study blocks for both systems
    stayonmap/page.js        # StayOnMap detail — real rental-marketplace product
    traffic-intelligence/page.js
  approach/page.js           # Stack, 8 principles, 9 process stages, 10 capabilities, disciplines
  research/page.js           # Research areas + open problems
  careers/page.js
  contact/page.js            # Server component — form logic in components/ContactForm.js
  privacy/page.js
  terms/page.js
  support/page.js            # Support center — FAQs + contact routes, linked from footer

components/
  Header.js                  # Sticky nav, mobile menu, theme toggle
  Footer.js                  # Link columns + legal/support bar (no CTA banner — see rule below)
  ThemeToggle.js             # Light/dark toggle, persists to localStorage as 'cosmonus-theme'
  ContactForm.js             # 'use client' — contact form state
  CustomSelect.js            # 'use client' — custom <select> used by ContactForm
  FAQAccordion.js            # 'use client' — used by Contact + Support (items: [{q, a}])
  IntelligenceCanvas.js      # 'use client' — Home hero canvas (raw information → intelligence layer band → knowledge rows)
  DiagramCanvas.js           # 'use client' — 9 seeded schematic variants; `chrome` prop adds the label bar
  LayeredStack.js            # 'use client' — 4-layer stack, all layers legible at rest; `detail` adds a toggle
  CapabilitiesList.js        # 'use client' — expandable capability list (Approach)
  StripedPlaceholder.js      # Monospace-labeled striped placeholder for unshipped imagery
  SmoothScroll.js            # Lenis smooth scroll init
  CxReveal.js                # IntersectionObserver reveal — mark elements with `data-reveal`

design-assets/               # Source material + past design work. NOT deployed —
                             #   keep it out of public/, which only holds files the site serves

lib/
  nav.js                     # All nav/footer link data

styles/
  globals.css                # Full design system — tokens, components, pages
```

## Server vs client components

Next.js App Router rule: `export const metadata` only works in server components. Any page needing both `metadata` and interactivity must split: page = server component, interactive parts = separate `'use client'` child components.

Currently client components: `Header`, `ThemeToggle`, `ContactForm`, `CustomSelect`, `FAQAccordion`, `IntelligenceCanvas`, `DiagramCanvas`, `LayeredStack`, `CapabilitiesList`, `SmoothScroll`, `CxReveal`.

## Rules

- No comments unless the WHY is non-obvious
- No Tailwind, no Bootstrap, no TWK Everett font references
- Never use "AI-powered", "cutting-edge", "next-generation", "revolutionary", "digital transformation", "game-changing", or "innovative solutions" — explain and teach instead
- Design refs: extract visual style only, generate all content original to Cosmonus
- Don't introduce abstractions beyond what the task requires
- Sections separate with border lines (`.section` border-top); alternating sections use the faint `--panel` background (automatic, see Design system)
- Routes: `/work` and `/approach` (renamed from `/products` and `/technology`; permanent redirects live in `next.config.js`)
- Canvas animation must be gated by `IntersectionObserver` + `visibilitychange` — never let a `requestAnimationFrame` loop run off-screen
- The homepage H1 must never render smaller than a subpage H1. `.hero__title-line` only gets `white-space: nowrap` above 900px.
- StayOnMap is a real broker-free rental-property marketplace (trust/fraud scoring, direct owner-tenant leases) — not a transportation/transit product. Keep it framed that way everywhere it's mentioned.
- `public/` holds only files the site actually serves (founder photo, wordmark, JSON-LD logo). Everything else goes in `design-assets/` — anything in `public/` is publicly fetchable on the production domain.
- **One call to action per page.** Each page closes with its own `.section--tight` CTA written for that page; the footer carries links only. Don't reintroduce a footer CTA banner — it stacked a second, generic ask directly beneath every page's own.
- Metadata: every page exports `metadata` via `pageMeta()` from `lib/metadata.js` — it builds canonical, og:url, and twitter tags together so `og:url` names the actual page. Keep titles under ~48 chars; the root layout appends " | Cosmonus".
- The live site canonicalises to **www.cosmonus.com** (the apex 307s to it). All absolute URLs must use the www host.
- Navigation feedback: `RouteProgress.js` draws a 2px accent bar on any internal link click and completes on pathname change. Don't remove it — without it a click reads as dead and people click twice.
- `SmoothScroll.js` resets Lenis to the top on route change; Next's own scroll reset doesn't land because Lenis owns the scroll position.
- `CxReveal` shows anything already on screen immediately and only observes what's below the fold — never leave above-the-fold content parked at `opacity: 0`.
- If the dev server throws `Cannot find module for page: /sitemap.xml/route` after a route rename, delete `.next` and rebuild. It's stale cache, not code.
- Mark reveal-on-scroll elements with `data-reveal` (handled globally by `CxReveal.js`) rather than page-specific selector lists

## Commands

```
npm run dev    # start dev server
npm run build  # production build
npm run lint   # lint
```
