# Cosmonus website

Marketing site for Cosmonus — "Building Real-World Intelligence." Next.js 16 (App Router) · TypeScript ·
Tailwind v4 · Framer Motion.

## Layout (Karpathy-style: raw → wiki → code)

```
raw/        Immutable sources. Never edit; add new material here.
  handoff/    Design handoff: HANDOFF.md, PROMPT.md, design/*.dc.html boards (1440px source of truth)
  references/ Reference screenshots of other sites the design drew on
  footage/    Raw video and image sources (OpenArt exports, stills). Originals only — never the repo root
wiki/       LLM-maintained knowledge about this project, compiled from raw/ and the code.
  index.md    Catalog of every wiki page — read this first
  log.md      Append-only change log
app/        Routes (one folder per URL)
components/ site/ (header, footer, legal) · ui/ (shared primitives) · <area>/ (page-specific)
content/    All page copy as typed data — edit words here, not in components
lib/site.ts Navigation menus, site constants, owner placeholders
public/     Static assets (create when needed)
```

## Working rules
- Read `wiki/index.md` before starting; it points to the page you need.
- After any meaningful change, update the relevant wiki page and append an entry to `wiki/log.md`
  (`## [YYYY-MM-DD] <kind> | <title>` + 1–3 bullets). Keep `wiki/index.md` in sync when pages are added.
- Copy lives in `content/*.ts`. Reuse `components/ui/*` before creating new components.
- Design rules are in `wiki/design-system.md`; content rules in `wiki/content.md`. The short version:
  neutral palette, accent only on 8px dots, no stock imagery, no invented facts, buttons say where they go.
- Verify with `npm run typecheck`, `npm run lint` and `npm run build`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
