# Open questions for the owner

## Facts still needed (visible placeholders)
- All media: hero films (heroes are now plain panels — footage goes behind the title), product recordings, covers — every `[ … ]` MediaPanel label.
- Site URL is assumed `https://cosmonus.com` (`site.url`, used by sitemap/robots).

## Blog (added 2026-09-21)
- `/company/blog` needs no banner film: the index opens with a masthead, not a hero. All ten post covers are still
  `[ … ]` placeholders.
- ~~Blog posts carry no author name and no publication date.~~ **Closed 2026-09-25:** every post now carries the
  date it went live (2026-09-21), shown in the meta line and sent as `datePublished`. Author stays the organisation.
- `Fundamentals` and `Engineering` are the two tags, so the tag filter on the index is live.

## Decisions
- ~~Is "Conventional & Multi-tool Systems" one page (as built) or two?~~ **One page (owner, 2026-09-25).**
- ~~Do the About principles and Careers copy sound right?~~ **Yes (owner, 2026-09-25).**
- ~~Are the Happenous features in its steps live?~~ **Answered 2026-09-21: no, Happenous is pre-launch.** The
  page has been reframed; see content.md. **Opens later in 2026 (owner, 2026-09-25)** — now in its FAQ.
- ~~Final Happenous brand colour.~~ **`#E8421A` confirmed (owner, 2026-09-25).**

## Performance — proposals that would change what you see (2026-09-25)
- ~~**Poster frames for banner films.**~~ **Done (owner approved, 2026-09-25):** every banner shows its first
  frame at once; Lighthouse (real throttling) 75–79 → 90–97 on the film pages. Table in `media-brief.md`.
- **About banner crispness — your call, with numbers.** A 6 MB version (2.4 Mbps) is encoded and waiting in the
  session scratchpad (`enc/about/banner-6mb.mp4`), not swapped in. Lighthouse cannot tell it from the 3.8 MB
  file (score 91 vs 90, LCP 3.22 vs 3.23 s), because the film loads only after the page has settled and the
  poster now carries the first paint. What changes is when the film starts moving: on a 1.6 Mbps connection
  (Lighthouse's mobile profile) the 6 MB file does not play until **11.1 s** after arrival (3.8 MB: 4.1 s) and
  would keep stalling, since its bitrate is above that line; on 9 Mbps 4G it is 1.1 s vs 1.0 s. If most visitors
  are on good connections and the crisper aerial matters, say so and it goes in; otherwise the 3.8 MB file stays.
- ~~**Mesh gradients**~~ **Measured and fixed without changing the drawing (2026-09-25):** the blur now sits on a
  static inner span while the outer span moves, so Chrome reuses the blurred surface (10 → 45–55 fps under a
  software GPU, pixel-identical), and the fields pause off screen. Redrawing them as radial gradients is no
  longer proposed.
- **Page arrival fade** (`.page-in`, 420 ms). Chrome does not count anything inside it as the largest paint until
  the fade ends, so Lighthouse's LCP includes those 420 ms on every page. Under real throttling switching the
  fade off changed LCP by only 0.02–0.2 s (home 1.91 → 1.89 s, blog 1.79 → 1.59 s), so it stays as designed.
  Noted only so nobody chases it again.

