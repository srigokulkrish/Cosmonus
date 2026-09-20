# Content

All copy is typed data in `content/`:
`capabilities.ts` (10 pages) · `products.ts` · `company.ts` (About, Research, Blog, Careers) · `research.ts` (notes) ·
`blog.ts` (posts) · `sections.ts` (5 landing pages). Nav/footer text and site constants: `lib/site.ts`. Home copy is inline in
`app/page.tsx` and `components/home/StudioTabs.tsx`.

## Rules
- Board copy is verbatim from `raw/handoff/design/`.
- On 2026-09-19 the owner allowed writing our own copy for undesigned pages and placeholders. Written copy must
  never invent people, emails, URLs, numbers/statistics, customers, partners or dated events, and must not claim
  capabilities beyond what the site describes. Speculative research is labelled **Conceptual**.
- Remaining `[BRACKETED]` text is a fact only the owner can supply — keep it visible (see open-questions.md).
- Buttons say where they go ("View open roles", "Visit StayOnMap"); never "Get started"/"Book demo".
- Media stays as `MediaPanel` placeholders with `[ LABEL ]` until real footage exists. No stock imagery.

## Product status (owner, 2026-09-21)
- **StayOnMap is live and its facts still hold** — confirmed by the owner. Written in the present tense.
- **Happenous is pre-launch.** happenous.com serves "We're under construction". The page used to describe activity
  chat, direct messaging, post-event photo memories and host limits as working features, and its FAQ answered
  "Can I host my own activity?" with "Yes." All of that is gone. The page now says plainly that it is not open,
  describes the idea and how it is *meant* to work, and its launch date is a visible `[BRACKETED]` placeholder.
  The "What you can do" section was removed outright: it listed user capabilities for a product nobody can use,
  and duplicated the steps above it. Menu blurb, home card, Product index and the Studio "where it shows up" rows
  all say "in build" too. **Keep Happenous in this tense until the owner says it has launched.**

## StayOnMap source of truth
- **Careful:** the documented source, https://www.cosmonus.com/work/stayonmap, is now a 308 redirect *into this
  site* (see next.config.ts), so it can no longer verify anything — checking it just reflects our own copy back.
  stayonmap.com serves only the tagline. The facts below are as recorded on 2026-09-19 and re-confirmed by the
  owner on 2026-09-21; if they are ever questioned again, only the owner can settle them.
- Since 2026-09-19 StayOnMap facts come from the owner's live case study, https://www.cosmonus.com/work/stayonmap
  (India's broker market; twelve live trust sub-scores; separate risk score that auto-suspends; opt-in fraud agent;
  decision trace; map pins with live rent; visit requests; private chat; digital lease; one account is tenant and owner;
  six property types; no broker fees). Where the board copy disagreed, the live site won.
- **Owners do not list from WhatsApp.** That claim came from the boards and has been removed everywhere; the research
  note `listing-from-a-message` is now framed as an experiment on messages in general.
- cosmonus.com has no Happenous content, so Happenous copy is unchanged (still from the boards + old-site features).
- Not carried over: the live site's tech stack and "Build something like this" CTAs (not this site's voice).

## Written for the build (not on boards)
- Section landing pages; Contact, Privacy, Terms.
- Four research notes (`content/research.ts`); two more were removed with Context/Loop Engineering.

## Research vs. Blog (owner, 2026-09-21)
Two different jobs, both under Company:
- **Research** (`content/research.ts`) — what we are learning about our own products and our own process. A note
  carries `kind · area · status`, and the status key on the index says how finished the work is.
- **Blog** (`content/blog.ts`) — things worth explaining so someone else can learn them. A post carries a `tag` and
  nothing else: "In progress" and "Conceptual" describe research, not an explanation. Blog copy in `company.ts` is a
  `masthead` (label/title/lead), not a `hero`/`intro` — the blog has no banner.
- Two tags, and the split is meaningful: **Fundamentals** is the vocabulary of AI engineering (the pieces you build
  with), **Engineering** is the practice (how they are put to work). The featured slot says "Start here", not
  "Latest" — we keep no dates, so we do not imply a chronology.
- Reading time is computed, not written: `readingTime()` counts the post's own words at 200 wpm. No author names and
  no dates anywhere on the blog — we have none the owner has given us, and they are not ours to invent.

### Fundamentals (6 posts)
- `ai-models`, `embeddings`, `vector-databases`, `rag`, `mcp` — prompted by the owner sharing roadmap.sh/ai-engineer
  — plus `system-one-models-jev`. Listed in the order they build on each other, but each stands alone.
- Same shape throughout: analogy first, an "In short" block of what / why / when / how, a section per question, and
  a "Where it stops" naming the honest limit. Every post says plainly when *not* to reach for the thing.
- `system-one-models-jev` is the only post about someone else's product (TypeSafe AI's Jev — **not** Typeface, a
  different company) and the longest at ~2,150 words. It is the only post using `sources` and inline links.
- **Outside facts carry a `sources` list.** `Post.sources` renders as a bordered block above "Read next". When a post
  states figures or claims that are not ours, the claim is attributed in the prose *and* linked. Vendor figures are
  described as vendor figures. That is how the no-invented-facts rule works when a post discusses someone's product.
- **Inline links**: post copy may contain `[text](href)`, parsed by `withLinks()` in `components/blog/PostBody.tsx`.
  External links open in a new tab; a href starting with `/` becomes a Next `Link`. Used both to credit sources and
  to link the posts to each other.

### The engineering series (4 posts)
- `prompt-engineering`, `context-engineering`, `loop-engineering`, `harness-engineering`, in that order because that
  is how they build on each other. Each carries an "In short" block of what / why / when / how.
- **Every post stands alone.** Owner, 2026-09-21: most readers arrive from search, and being told they are reading
  "the third of four" makes them feel they missed something and leave. So no post is numbered, none refers to a
  previous or next post, and every one opens by naming all four disciplines and the shared errand-to-the-shop analogy
  before saying which one it covers. Cross-references name the subject ("that is loop engineering"), never a
  position. Keep it that way when adding to the series.
- About "Why" + "How we think" principles (replaced the team grid — no invented people);
  Careers "Who we look for" + honest "No open roles right now".
- Extra sections on all capability, product and company pages (steps, "Where it shows up"/"Built on" links,
  principles, FAQs, audience split, hiring steps, research status key).
- Trust Score signals/updates, three Agents experiments, Happenous "people nearby" + steps.
  The Happenous steps describe features from the old site (hosting, group/direct chat, memories) — confirm they are live.
