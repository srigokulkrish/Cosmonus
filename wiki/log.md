# Log

## [2026-09-19] build | Site built from the handoff
- Scaffolded Next.js 16 + Tailwind v4 + Framer Motion; tokens, nav + mega menu, footer, shared components.
- Built home, 12 capability pages, 2 product pages, About/Research/Careers from the boards.
- Old site (different design system) retired.

## [2026-09-19] build | Undesigned pages and owner changes
- Added section landing pages, Contact, Privacy, Terms, research notes + detail pages, sitemap/robots.
- Replaced most placeholders with written copy (see content.md); facts only the owner has stay bracketed.
- Switched to Schibsted Grotesk + JetBrains Mono, the old "C" logo, and a sticky glass navbar.

## [2026-09-19] cleanup | Karpathy-style layout
- Moved the handoff to `raw/handoff/` and reference screenshots to `raw/references/`; added `wiki/` and `CLAUDE.md`.
- Deleted the retired old app, duplicate handoff copy + zip, a duplicate screenshot and build artefacts.

## [2026-09-19] content | Deeper pages
- 12 capability pages gained Process/How it works steps, "Where it shows up" links, principles and a closing band (optional fields on `Capability`).
- StayOnMap/Happenous gained audience split, Reading a TrustScore / What you can do, "Built on" links and FAQs; About gained "The three parts" and latest research; Careers gained "What you would work on" and "How we hire"; Research gained a status key and a kind filter.

## [2026-09-19] test | Browser test pass
- 442 automated checks in real Chrome (Playwright + axe): every route at 1440 and 390px (status, console errors, overflow, one h1, axe serious/critical, 44px targets), all internal links, sticky glass header, mega menu (hover/click/keyboard/Escape/outside click/navigation), Studio tabs, mobile menu, contact form validation + mailto, research filter, FAQ, 404, skip link — all passing.
- Fixed: logo link was a 28px tap target (now 44px).

## [2026-09-19] design | Smaller white navbar, smoother motion, owner facts
- Navbar 60px, white, no border; unified easing; smoother mega menu, tabs, mobile menu, hovers, FAQ, page arrival.
- Contact email hello@cosmonus.com (lib/site.ts, also in footer); Visit buttons go to https://www.stayonmap.com and
  https://www.happenous.com in a new tab.
- Browser suite now 447 checks, all passing (caught and fixed a hover-open regression from the new timers).

## [2026-09-19] design | Wordmark-only logo
- Removed the "C" icon from header and footer; the COSMONUS wordmark is the logo. The icon stays as the favicon.
- Deleted the now-unused `public/logo.png`. Browser suite: 449/449.

## [2026-09-19] design | Clean heroes
- Removed the top label row from every hero (the "Section / Page" crumb and the "[ HERO — … ]" media note), including the home hero; dropped the now-unused crumb/asset data from content. Browser suite: 449/449.

## [2026-09-19] docs | Media brief
- Added `wiki/media-brief.md`: every media slot by page with type, specs, shoot-once reuse plan and priority.

## [2026-09-19] design | Product menu cards, 10px dropdown radius
- Product dropdown: three columns with large StayOnMap (#0D8A5F) and Happenous (provisional #E8421A) cards, line-art motif, hover lift.
- Dropdown panel and cards now 10px radius. Browser suite: 456/456, including an axe contrast scan with the menu open.

## [2026-09-19] fix | Hero slipping under the navbar
- Cause 1: global smooth scrolling made Next's route-change scroll animate; pages could land part-scrolled (e.g. y=574) with the hero under the bar, and Back animated.
  Removed it; same-page anchors use `SmoothAnchors` instead.
- Cause 2: the 6px fade-up slid every hero up against the bar on load. Page arrival is now opacity-only, and heroes have an 8px gap below the bar.
- Added regression tests (no overlap with the bar during load on every route, top landing after navigation, instant Back). Suite: 491/491.

## [2026-09-19] fix | Responsive pass at 1024–1279 and 320
- At 1024 the home Agents flow ran 40px off-screen and Intelligence card titles overflowed; contact form, status key,
  FAQ and intro right columns were squeezed to ~180–250px. `wrap` gutter is now 64px at lg (128px from xl), fixed left
  columns shrink at lg, Agents flow and 4-up Intelligence cards switch to a row at xl.
- Hero h1s were clipped inside the panel at 320px; now 36px under 400px.
- Home "Explore Agents" now goes to `/agents` (the overview) instead of `/agents/workflow`; removed an unused import.
  Swept all 30 sitemap routes at 6 widths (no overflow), all internal links (none broken), one h1 per page.

## [2026-09-19] design | Old "C" logo restored
- Owner asked for the old logo back: the "C" mark sits beside the wordmark again in header, mobile menu and footer.
- `public/logo.png` recreated from `app/icon.png` (the project has no git history to restore the deleted file from).

## [2026-09-19] fix | Footer bottom row alignment
- The tagline sat ~10px above the logo: the row aligned by text baseline, which the logo image skewed. The row now
  centres vertically, so the logo, tagline and right-hand links share one centre line at desktop.

## [2026-09-19] design | Back to wordmark only
- Owner decided against the "C" icon: `Logo` is the COSMONUS wordmark alone again; removed `public/logo.png`.
  The icon remains the favicon. Footer row keeps centre alignment.

## [2026-09-19] design | Every mega menu uses the Product panel layout
- Studio, Company, Intelligence and Agents panels now match Product: intro column on the left (label, title,
  description, overview link), pages on the right as quick-link rows (name, description, arrow) instead of a 3-up grid.
- Product keeps its brand cards. Shared pieces in `components/site/Header.tsx`: `PanelIntro`, `ProductCards`, `QuickLinks`.
- Revised the same day: owner wanted three columns like Product, not wide rows. Quick links now sit in two compact
  columns aligned with the product cards (name, description, small arrow, 1px rule above each).

## [2026-09-19] design | Original wordmark image
- Replaced the typed "COSMONUS" with the old site's wordmark (`public/logo-white.png`, from cosmonus.com, owner-approved),
  drawn as a currentColor mask: ink in the header and mobile menu, white in the footer.

## [2026-09-19] content | StayOnMap aligned with cosmonus.com
- Rewrote the StayOnMap page from https://www.cosmonus.com/work/stayonmap: intro, cards, tenant/owner split, steps,
  trust engine (twelve signals, risk score, fraud agent, decision trace) and FAQ.
- Removed the "listed straight from WhatsApp" claim from home, menu card, Product landing, capability rows and the
  `listing-from-a-message` note (title now "From a message to a listing someone can check").
- Happenous unchanged: cosmonus.com does not mention it.

## [2026-09-19] design | Runway-style pass
- Owner asked for a runway.com feel. Measured runway.com and applied: 20px full-width gutter, regular-weight headings,
  bottom-left hero copy, compact 40px/8px-radius buttons with a soft-grey secondary.
- Home rebuilt in Runway patterns: bordered Studio showcase (vertical tabs + media), product "platform" columns with
  two buttons each, dark Agents band with link list, left-aligned research head. See design-system.md "Runway direction".
- Source backed up to the session scratchpad first (no git in this project).

## [2026-09-19] design | One grid: content aligned to the banners
- Removed the 1680px content cap: body content now spans the same 20px-inset edges as the banners at every width.
- Every section now sits on one thirds grid with a 20px gap (`THIRDS`, `SideLayout`, `PAIRS`, `HALVES` in
  `components/ui/Section.tsx`). No more mixed 4/3/2-column rows: sets of four go 2×2 beside their heading, rows and
  two-column sections split first third / other two, headings left-aligned.

## [2026-09-19] design | Runway frame + content column
- Measured runway.com: everything sits in a 1600px frame with 20px padding; body content is inset one 16th (6.25%)
  each side, banners and dark bands use the full frame. Replicated with `frame` and `wrap` in globals.css.
- Header, banners, Agents band and mega menu on `frame`; all sections and the footer on `wrap`; banner copy inset 6.25%
  so it shares the content's left edge. Verified: h1, every h2 and the footer start on the same x at 1280/1512/1920.

## [2026-09-19] design | Image placeholders everywhere, one banner size
- All banners share the home banner's size (`BANNER`). Placeholders gained a picture glyph.
- Process/How-it-works steps, "Where it shows up" and company link lists, "More in …" and "Built on" were text-only;
  they are now image cards / image tiles with placeholders (see design-system.md).

## [2026-09-19] design | Closing band redesigned
- Owner flagged "See it on the map." as weak. `Band` is now a Runway-style panel (text + button left, image right)
  everywhere it closes a page. StayOnMap/Happenous bands got a real sentence and image labels instead of a bare URL.

## [2026-09-19] content | Removed Context Engineering and Loop Engineering
- Owner request. Deleted both capability pages and their menu, footer, home, Intelligence landing, "More in",
  "Where it shows up", Company and Research-area links. Intelligence is now two disciplines: Spatial Intelligence
  and Trust Score.
- Removed the two research notes filed under those areas ("Checking an answer against the street",
  "Context is a selection problem"); Happenous "Built on" now links Spatial Intelligence only. Copies of the
  removed content are in the session backup (`backup-before-runway/`).

## [2026-09-19] docs | Image & video brief doc
- Wrote the owner-facing image brief as a shared doc: https://claude.ai/code/artifact/691fe0c8-7c09-46e0-818c-c511e0f65f7a
  (every slot by page with a detailed description, sizes per slot type, six-shoot reuse plan). Supersedes the
  slot lists in media-brief.md where they differ (post-Runway layout, Context/Loop Engineering removed).

## [2026-09-19] design | "How an agent works" redesigned
- Replaced the five dark boxes + connectors with a grid section: heading in the first third; a pill flow
  (Signal → Context → Agent → Tools → Action, Agent in ink) and five ruled step rows across the other two.
- Revised again the same day (owner: "doesn't look good"): now an interactive stepper on a soft-grey panel — step
  rail with progress, the current step large beside a diagram placeholder, auto-advancing.

## [2026-09-19] design | Banners are videos
- Owner: every banner is a video. Added `BannerVideo` (muted loop, poster, reduced-motion pause) and a `video` prop on
  `InnerHero`; not wired to any page yet (no files). Prompts doc updated with a poster-then-motion workflow and a
  Motion prompt under each of the 22 banners.

## [2026-09-19] media | First real image
- Moved the owner's `home/studio-animation.png` (was in the project root) to `public/media/home/`. `MediaPanel` now
  shows a real image when given `src`/`alt`; the home Studio showcase Animation tab uses it.
- Also on the Studio landing (/studio) Animation index card, which has the same placeholder; `SectionIndexItem`
  gained optional `image`/`alt`.

## [2026-09-19] media | Home banner video
- Owner's `1.mov` (H.264, 1920×1080, 5 s, 10 MB) moved to `public/media/home/banner.mp4` and playing as the home
  banner (muted loop, bottom-left shade, paused under reduced motion). `BannerVideo` now takes the MP4 path, with
  optional `webm`/`poster`. To do: a poster still and a smaller file (target < 8 MB); the clip has an unused audio track.
- Replaced with the owner's `2.mp4` (true MP4, H.264 Main, 10 s, no audio, 22.9 MB) at the same path. The 1.mov
  version is in the session scratchpad (`replaced-media/`). Still to do: compress to < 8 MB and add a poster still.

## [2026-09-19] media | Video page: banner video, Sport and Product films
- `/studio/video` banner plays `public/media/video/banner.mp4` (owner's videography.mp4; `heroVideo` on the
  capability). New `showcase` sections (`components/capability/VideoShowcase.tsx`, clips via `LoopVideo`, which
  plays only while on screen): Sport — cycling, off-road cycling, skiing (4:5, thirds); Product — one 16:9 film.
- Caveats: the three sport clips are HEVC (plays in Chrome/Edge with hardware decode and Safari, not Firefox);
  banner.mp4 (41.9 MB) and product.mp4 (38.5 MB) need compressing and have their index at the end of the file.
  Left in the project root: the rally-coupe MP4 (identical to the home banner) and a train-station PNG.

## [2026-09-19] media | StayOnMap banner video
- Owner's first video (1.mov, H.264 1080p, 5 s, 10 MB, QuickTime brand) now plays on the /product/stayonmap banner
  from `public/media/stayonmap/banner.mp4` (product `hero.video`). Firefox may not play the QuickTime-branded file.
- Replaced with the owner's `stayonmap banner.mp4` (true MP4, H.264 1080p, 89 s, 66.7 MB, with audio track) at the
  same path. Needs trimming to ~10 s and compressing for the web.

## [2026-09-19] media | Animation page banner video
- Owner's `animation banner.mp4` (H.264 720p, 15 s, 8.9 MB) → `public/media/animation/banner.mp4`, set as the
  /studio/animation `heroVideo`.
- Explainers card on /studio/animation now plays the owner's `explainer.mp4` (→ `public/media/animation/card-explainer.mp4`,
  1080p, 60 s, 61.7 MB, has audio) as a muted on-screen loop. `MediaCardData` gained optional `video` / `image`.

## [2026-09-19] media | About banner video
- Owner's `about header.mp4` (H.264 1080p, 38 s, 102.3 MB, has audio) → `public/media/about/banner.mp4`, set as
  `about.hero.video`. Banner stays the light tone (ink title over a white shade). Urgently needs trimming/compressing.
- About banner switched to the dark tone (white title, dark shade) to suit the darker footage (owner request).

## [2026-09-19] media | Research banner video
- Owner's `research banner.mp4` (H.264 1080p, 6.7 s, 1.2 MB, no audio — right size) → `public/media/research/banner.mp4`,
  set as `research.hero.video`; banner switched to the dark tone (white title, dark shade), as on About.

## [2026-09-19] media | Careers banner video
- Owner's `careerbanner.mp4` (H.264 1080p, 9.5 s, 59.4 MB ≈ 50 Mbps, has audio) → `public/media/careers/banner.mp4`,
  set as `careers.hero.video`; banner switched to the dark tone. Needs re-encoding (~5 Mbps → ~6 MB).

## [2026-09-19] design | Glass product cards in the Product menu
- Removed the StayOnMap/Happenous line art (`CardPattern`); cards now use a glassmorphism look (`GlassBackdrop` +
  frosted copy panel) in `components/site/Header.tsx`.
- Replaced the glass style the same day: product cards now use an atmospheric mesh-gradient background (`MeshBackdrop`:
  blurred colour fields, light bloom, dark edge falloff, film grain) — greens for StayOnMap, reddish oranges for Happenous.

## [2026-09-19] design | Link lists: fewer, and a new index style
- `RowList` redesigned as a large numbered index (number + name | description | thumbnail + round arrow).
- Kept on About ("What Cosmonus is made of") and capability "Where it shows up" (minus rows repeating the "More in"
  strip; hidden if < 2 rows). Removed Careers "What you would work on" and Research "Areas" (and their data).

## [2026-09-19] media | Home banner video moved to Studio
- `public/media/home/banner.mp4` → `public/media/studio/banner.mp4`, now the /studio banner (`studio.hero.video`;
  `SectionContent.hero` gained `video`). Home banner is back to the dark panel with contour lines until it gets a video.

## [2026-09-19] media | New home banner video
- Owner's `homebanner.mp4` (H.264 1080p, 180 s, 161.4 MB, has audio) → `public/media/home/banner.mp4`, playing as the
  home banner again. Far too large to ship: trim to ~10–15 s and re-encode before going live.
- Home banner video zoomed 1.35× (`BannerVideo` gained `zoom`, a centred CSS scale) to crop the black letterbox bars
  recorded into the footage. Adjust the number in app/page.tsx if bars still show or the crop is too tight.

## [2026-09-19] media | Videos reshuffled on Animation
- The latest home banner video (180 s, letterboxed) is now the /studio/animation banner (`heroVideoZoom: 1.35`;
  `InnerHero` gained `videoZoom`). The previous Animation banner (15 s) now plays in the "Product films" card
  (`public/media/animation/card-product-film.mp4`). Home banner is back to the contour-line panel.

## [2026-09-19] media | Home banner + tidy names
- Owner's `home.mp4` (H.264 1080p, 10 s, 10 MB, no audio) → `public/media/home/banner.mp4`, the home banner.
- Renamed `video/product.mp4` → `video/product-film.mp4`. Moved the root rally-coupe MP4 (identical to
  `studio/banner.mp4`) to the session backup. Every `/media/...` path in the code resolves; no unused files.
- Media naming: `public/media/<page>/banner.mp4` for banners, `<page>/card-<name>.<ext>` for cards,
  `<page>/<section>-<name>.mp4` for showcase clips.
- The 15 s clip moved from the "Product films" card to "Motion identity" on /studio/animation (it fits motion, not a
  product film): file renamed `card-product-film.mp4` → `card-motion-identity.mp4`. Product films is a placeholder again.

## [2026-09-19] design | Violet mesh background on the Agents band
- `MeshBackdrop` moved to `components/ui/` and gained a `cosmonus` violet palette built on #635BFF (the original
  cosmonus.com button colour; no git history exists to check) plus a `dim` option. The home "From understanding to
  action." band now uses it instead of the dark panel with contour lines.
- Mesh backgrounds now move continuously (four fields on independent 18–32 s drift cycles; off under reduced motion),
  on the Agents band and the Product menu cards. Agents band palette changed to light blue, violet and dark blue.
- Owner: movement wasn't visible. Drift is now 3-point loops on 11–19 s cycles travelling up to ~⅓ of each field
  (scale 0.85–1.3); light field enlarged but kept on the right; Agents band dim raised to 35% and link descriptions
  to white/85 so text keeps its contrast while the colour moves.
- Agents band palette reduced to four colours at the owner's request: blue #2F6BFF, violet #635BFF, dark blue #1D3FA8,
  navy #070D2E (light blue removed).
- The Agents band also drops the white light bloom (`MeshBackdrop bloom={false}`) so only those four colours show.

## [2026-09-19] seo | Site made SEO-friendly
- Read the old cosmonus.com head tags (no git history here) and carried them over: canonical www domain, robots +
  googleBot, author/keywords/category, Open Graph + Twitter, Organization/WebSite JSON-LD. Added per-page
  `pageMetadata()` (lib/seo.ts), a generated 1200×630 share image, Article JSON-LD on research notes, sitemap dates and
  priorities. The old site had no Google verification tag; `GOOGLE_SITE_VERIFICATION` is ready if one is needed. See seo.md.

## [2026-09-19] design | Accent dots violet
- `--color-accent` changed from the handoff's orange #FF4A1C to Cosmonus violet #635BFF (owner: the theme is violet).
  Every marker dot (`Dot`, Studio tab dot, step numbers, mono labels, Agent step) follows the token.

## [2026-09-19] ux | Smoother navigation, loading skeleton, lighter video
- Added `app/loading.tsx` skeleton, `NavProgress` top bar, and menu hover prefetch; banner videos fade in when ready
  and pause off-screen; in-page clips lazy-load near the viewport. Fixed a React Compiler lint (closeMobile deps).
- Sweep: 26 sitemap pages (+ Privacy/Terms), 27 internal links, all media, one h1 each, 404 OK, no overflow at
  375/1024/1440, no console errors across a navigation run including Back. Remaining: video files are too large.

## [2026-09-19] media | All videos ≤ 20 s
- Owner: max 20 seconds per video. Trimmed the six longer files to their first 20 s with a portable ffmpeg
  (session scratchpad, not installed): About, Animation banner, Explainer card, StayOnMap, Video banner, Product film.
  Re-encoded H.264 CRF 23, same resolution, no audio (all play muted), index at the front for faster start.
  Sizes 461 MB → 71 MB for those six. Originals kept in the scratchpad (`originals-before-trim/`).

## [2026-09-19] deploy | Pushed to a preview branch
- Found production on Vercel, built from github.com/srigokulkrish/Cosmonus (public). Added 308 redirects for the old
  site's URLs, a merged .gitignore (keeps `raw/`, `.claude/`, env files out), then pushed the site as branch `redesign`
  (1b92232) on top of the old `main`. `main` untouched until the owner merges. See deploy.md.

## [2026-09-20] design | Real images on the Image Generation page
- Owner: generated stills fill the image page, and a "Selected frames" row of three finished images now follows the
  cards — `VideoShowcase` is now `Showcase` and takes stills or clips (`shape: "landscape"` for stills).
- Ten `image-generation/*.jpg` stills are named and wired in `content/capabilities.ts` (3 cards, 3 steps, band,
  3 frames), with alt text; `Steps` and `Band` gained `image`/`alt`. Prompts added to the prompts doc.
- Banners stay video everywhere (owner restated it): a still banner was built and then reverted, so `InnerHero`,
  `BannerVideo.tsx` and `Capability.heroVideo` are unchanged, and this page keeps `banner.mp4`.
- New `lib/media.ts` (`inPublic`): a path whose file is not in `public/` keeps its placeholder, so naming files ahead
  of time never ships a broken image. typecheck, lint and build pass.

## [2026-09-20] media | Company banner video
- Owner supplied footage for `/company`: saved as `public/media/company/banner.mp4` and wired as
  `company.hero.video` in `content/sections.ts` (`SectionPage` passes it to `InnerHero`).
- Marked done in `media-brief.md`. 9 of 22 banners now have a file. typecheck, lint and build pass.
- Re-encoded to meet the rules: trimmed to the first 20 s, audio stripped (banners play muted), H.264 two-pass
  1500 kbps, 1920x1080 at 24 fps, faststart. 50 MB -> 3.58 MB, SSIM 0.903 against the source.

## [2026-09-20] design | Mega-menu rule moved below each quick link
- Owner: the line should close a menu item, not open it. `QuickLinks` in `components/site/Header.tsx` now uses
  `border-b ... pt-3 pb-4` instead of `border-t ... pt-4 pb-3`, so the rule sits under each row.
- Matches the mobile menu, which already used `border-b`. Noted in `design-system.md`. typecheck, lint and build pass.

## [2026-09-20] design | Menu overview links in accent violet, with a wiping rule
- Owner: the "<Section> overview" links should stand apart from the quick links. `PanelIntro`
  (`components/site/Header.tsx`) is now `text-accent` with a 1px rule that wipes in from the left on hover and
  focus (`origin-left scale-x-0` → `scale-x-100`, 300ms); `motion-reduce` drops the wipe, not the rule.
- The mobile menu's overview link took the same colour, keeping its shared `row`/`rowname` underline.
- This is the first use of accent as text — `design-system.md` updated, since the rule was "marker dots only".
  Violet on white is 4.7:1, so it passes AA at 15px. typecheck, lint and build pass.

## [2026-09-21] build | Blog section under Company
- Owner: Research is for what we learn about our own products and process, so explainers do not belong there. New
  `/company/blog` and `/company/blog/[slug]`, with posts in a new `content/blog.ts`. Research keeps its four notes.
- A `Post` carries a `tag` instead of `kind · area · status`; `Engineering` and `Fundamentals` are the two tags.
- Wired into the Company mega menu, mobile menu and footer (`lib/site.ts`), the `/company` index — now four cards, so
  `SectionPage` switches it to the 2×2 `PAIRS` layout on its own — the About rows, "More in" strips and the sitemap.

## [2026-09-21] design | The blog gets its own UI
- Owner: "Blog UI can be different, it should not replicate the research theme." `components/blog/*`: masthead
  instead of a banner, `FeaturedPost` lead story, `PostCard`s on the thirds; posts in one centred 860px column with
  the cover breaking out wider, a 23px standfirst, and the what/why/when/how rows in a soft callout panel.
- Meta is `tag · N min read` from `readingTime()`. No author or date anywhere — we have none, and they are not ours
  to invent. Research keeps `ui/ArticleBody` and its own template.
- Also: research-note body off the thirds (168px meta column, text to 960px) and `StatusKey`'s first row lost the
  rule above it — both owner requests about wasted space.

## [2026-09-21] content | Ten blog posts: four crafts, six fundamentals
- Four on the crafts (prompt, context, loop, harness engineering) and six fundamentals (AI models, embeddings,
  vector databases, RAG, MCP, System One models). Analogy first, an "In short" what/why/when/how block, a section per
  question, a "Where it stops" naming the honest limit, and a real "when not to use this".
- **Every post stands alone** (owner): no ordinals, no "the third of four", no references to a previous or next post.
  A reader landing from search gets the whole picture in the opening.
- `system-one-models-jev` covers TypeSafe AI's Jev — **not** Typeface, a different company; checked before writing.
  Handles "cannot hallucinate" honestly (it guarantees schema, not truth) and labels TypeSafe's benchmarks as their
  own. New `Post.sources` panel and inline `[text](href)` links in copy for attribution.

## [2026-09-21] seo | Per-post share cards, breadcrumbs, titles and internal links
- `app/company/blog/[slug]/opengraph-image.tsx` generates a share card per post (title + tag + reading time on the
  brand gradient); `pageMetadata` grew `image: "fromFile"` so Next uses it instead of the site-wide image.
- `breadcrumbJsonLd()` + `components/site/JsonLd.tsx`: BreadcrumbList on all 15 section/capability pages (both
  templates now take their route `path`), both index pages, and every note and post. `/company/blog` also emits
  `Blog` data listing its posts.
- Dropped the redundant " — Blog" / " — Research" from titles, tightened three descriptions that were over 160
  characters, made card titles real `h2`/`h3`, and added 18 internal links between posts.
- Sitemap is 37 URLs; 56 static pages build. Remaining gap: no `datePublished` (we show no dates) — open-questions.
- **Note for next time: do not run Prettier on this repo.** It has no config and was hand-formatted at ~140 columns;
  `npx prettier --write` reflowed 60+ untouched files to 80 and had to be reverted.

