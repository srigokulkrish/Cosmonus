# Content

All copy is typed data in `content/`:
`capabilities.ts` (10 pages) · `products.ts` · `company.ts` (About, Research, Careers) · `research.ts` (notes) ·
`sections.ts` (5 landing pages). Nav/footer text and site constants: `lib/site.ts`. Home copy is inline in
`app/page.tsx` and `components/home/StudioTabs.tsx`.

## Rules
- Board copy is verbatim from `raw/handoff/design/`.
- On 2026-09-19 the owner allowed writing our own copy for undesigned pages and placeholders. Written copy must
  never invent people, emails, URLs, numbers/statistics, customers, partners or dated events, and must not claim
  capabilities beyond what the site describes. Speculative research is labelled **Conceptual**.
- Remaining `[BRACKETED]` text is a fact only the owner can supply — keep it visible (see open-questions.md).
- Buttons say where they go ("View open roles", "Visit StayOnMap"); never "Get started"/"Book demo".
- Media stays as `MediaPanel` placeholders with `[ LABEL ]` until real footage exists. No stock imagery.

## StayOnMap source of truth
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
- About "Why" + "How we think" principles (replaced the team grid — no invented people);
  Careers "Who we look for" + honest "No open roles right now".
- Extra sections on all capability, product and company pages (steps, "Where it shows up"/"Built on" links,
  principles, FAQs, audience split, hiring steps, research status key).
- Trust Score signals/updates, three Agents experiments, Happenous "people nearby" + steps.
  The Happenous steps describe features from the old site (hosting, group/direct chat, memories) — confirm they are live.
