# Open questions for the owner

## Facts still needed (visible placeholders)
- "Last updated" date for Privacy and Terms (`[DATE]`).
- All media: hero films (heroes are now plain panels — footage goes behind the title), product recordings, covers — every `[ … ]` MediaPanel label.
- Site URL is assumed `https://cosmonus.com` (`site.url`, used by sitemap/robots).

## Blog (added 2026-09-21)
- `/company/blog` needs no banner film: the index opens with a masthead, not a hero. All ten post covers are still
  `[ … ]` placeholders.
- Blog posts carry **no author name and no publication date**. Reading time is computed; a name or a date cannot be.
  This is the one SEO gap left: Google shows dates for articles and prefers `datePublished`/`dateModified` in the
  BlogPosting data. If you want them, say so and they go in — they have to come from you.
- `Fundamentals` and `Engineering` are the two tags, so the tag filter on the index is live.

## Decisions
- Is "Conventional & Multi-tool Systems" one page (as built) or two?
- Do the About principles and Careers copy sound right? (Written for the build.)
- ~~Are the Happenous features in its steps live?~~ **Answered 2026-09-21: no, Happenous is pre-launch.** The
  page has been reframed; see content.md. What is still needed: **when it opens** (`[LAUNCH TIMING]` in its FAQ).
- Final Happenous brand colour (currently provisional `#E8421A` in `app/globals.css`).

## Performance — proposals that would change what you see (2026-09-25)
- **Poster frames for banner films.** Banners show a flat tone until the film is ready (after load + idle). A
  ~60–120 KB AVIF still of the first frame would show the picture straight away. It changes the first second of
  every banner, so it is your call; `BannerVideo` already takes `poster`.
- **About banner crispness.** At 3.8 MB the dense aerial footage is a little soft at 1:1 (SSIM 0.92). About 6 MB
  would make it crisp — over the 4 MB banner target. Say if you want it.
- **Mesh gradients** (`MeshBackdrop`: the home Agents band and the Product menu cards) animate four 64px-blurred
  fields forever, even off-screen. Drawing them as soft radial gradients instead of blur filters would cost the
  GPU far less, but they would look slightly different, so it was not done.

