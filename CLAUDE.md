# Cosmonus

Next.js 14 App Router + Bootstrap 5. Solo founder: Sri Gokul Krishnan.

## Karpathy vibe coding workflow

This project is built vibe-coding style — Sri describes outcomes in plain English, Claude generates all code, Sri reviews visually in the browser and iterates fast. Key principles:

- **Describe, don't spec** — Sri states what he wants in plain language. Claude infers intent and implements.
- **Visual feedback loop** — changes are judged by how they look/feel in the browser, not by reading diffs.
- **Iterate fast** — every change is immediate. No planning phase, no lengthy back-and-forth.
- **Human steers, AI executes** — Sri holds taste and direction. Claude holds implementation.
- **Quality stays high** — vibe coding here doesn't mean sloppy. The design system, rules, and constraints below are the guardrails that keep output coherent.

## Stack

- Next.js 14 App Router (`app/`)
- Bootstrap 5 (no Tailwind — ever)
- Geist + Geist Mono via `next/font/google` (`--font-geist`, `--font-geist-mono`)
- Lenis (smooth scroll), Three.js (RaycastVisual canvas)
- Deployed on Vercel

## Design system

- **Brand:** `#635BFF` violet — primary CTAs, active states, gradient accents only
- **Text:** `#0A2540` slate-navy (light) / `#E2E8F0` (dark) — never pure black
- **Dark theme default** — `#080808` near-black background, violet/blue cool radial glows
- **Light theme** — white surfaces, violet/blue cool gradients
- **Buttons:** `border-radius: 8px` (`--r-sm`), not pill
- **Shadows:** slate-tinted in light, black-alpha in dark — never pure black
- **Gradients:** cool only (violet, blue) in page hero glows. Warm orange/yellow for dark-mode Three.js particles only.
- **Reference aesthetic:** stripe.com/in — visual cues only, never copy content or messaging

## File layout

```
app/
  page.js                   # Home
  about/page.js
  blogs/page.js             # Server component — filter logic in components/BlogFilter.js
  careers/page.js
  contact/page.js           # Server component — form logic in components/ContactForm.js
  partners/page.js
  resources/page.js
  products/
    page.js
    stayonmap/page.js
    websites / apps / automation / ecommerce / seo / analytics / content
  solutions/
    branding / web / mobile / ai

components/
  Header.js                 # Sticky nav, mega dropdown, mobile menu
  Footer.js
  ThemeToggle.js            # Light/dark toggle, persists to localStorage
  BlogSection.js            # Home page blog slider
  BlogFilter.js             # 'use client' — blog page filter + grid
  ClientShowcase.js         # Accordion case studies
  ContactForm.js            # 'use client' — contact form state
  RelatedServices.js        # Shared related services section (11 pages)
  ServiceCarousel.js        # 'use client' — products page service slider
  RaycastVisual.js          # Three.js particle canvas (theme-aware colors)
  SmoothScroll.js           # Lenis smooth scroll init

lib/
  nav.js                    # All nav/footer link data

styles/
  globals.css               # Full design system — tokens, components, pages

public/
  images/logo.png
```

## Server vs client components

Next.js App Router rule: `export const metadata` only works in server components. Any page needing both `metadata` and interactivity must split: page = server component, interactive parts = separate `'use client'` child components.

Currently client components: `BlogFilter`, `ContactForm`, `ServiceCarousel`, `ThemeToggle`, `ClientShowcase`, `Header`, `RaycastVisual`, `SmoothScroll`.

## Rules

- No comments unless the WHY is non-obvious
- No Tailwind, no TWK Everett font references
- Positioning/tagline/ICP are UNDECIDED — never propose them; wait for Sri to state them
- Design refs: extract visual style only, generate all content original to Cosmonus
- Don't introduce abstractions beyond what the task requires
- No grey section backgrounds — sections separate with border lines only, not `bg-elev-2` fills
- Dark mode: hardcode `#08080F` for always-dark sections (about-founder, som-hero) — don't rely on `var(--fg)`
- Metadata: every page must export `metadata` for SEO

## Commands

```
npm run dev    # start dev server
npm run build  # production build
npm run lint   # lint
```
