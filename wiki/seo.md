# SEO

Set up 2026-09-19 to match (and extend) the tags on the original cosmonus.com. There is no git history in this
project, so the old tags were read from the live site's `<head>`.

## Where it lives
- `lib/site.ts` — `url` (canonical origin **https://www.cosmonus.com**, with www, as the old site), `twitter`
  (@cosmonus), `founder` (Sri Gokul Krishnan, srigokulkrishnan.com), `sameAs` (LinkedIn), `keywords`.
- `app/layout.tsx` — site-wide: `metadataBase`, title template (`%s — Cosmonus`), description, application name,
  author, creator/publisher, keywords, category, format detection off, robots + googleBot (index, follow, large image
  previews, no snippet limit), optional Google verification, and Organization + WebSite JSON-LD.
- `lib/seo.ts` — `pageMetadata({ title, description, path, type })` builds each page's full set: title,
  description, canonical, Open Graph (site name, locale, url, title, description, image) and Twitter
  (summary_large_image). **Every page must use it** — Next merges metadata shallowly, so a page that sets only a
  title would share the home page's Open Graph text. `siteJsonLd()` is the Organization/WebSite graph.
- `app/opengraph-image.tsx` — the 1200×630 share image (wordmark + tagline on the navy/violet gradient), used by
  every page's Open Graph and Twitter tags.
- `app/sitemap.ts` — every indexable page with lastModified (build time), changeFrequency and priority
  (home 1.0, section landings 0.8, their pages 0.7, research notes and blog posts 0.6, contact 0.5). 37 URLs.
  `app/robots.ts` allows all and points to the sitemap.
- Research notes (`app/company/research/[slug]`) are `og:type=article` with Article JSON-LD.
- `app/company/blog/[slug]/opengraph-image.tsx` — **a share card per post**: the post's own title, tag and reading
  time on the brand gradient, so a shared link says what the post is. Pages opt in with `image: "fromFile"` in
  `pageMetadata`, which leaves `openGraph.images` unset so Next uses the route's own file. Satori needs an explicit
  `display` on any element with more than one child — that is why every div in there carries one.
- `breadcrumbJsonLd()` in `lib/seo.ts` + `components/site/JsonLd.tsx` — BreadcrumbList on every page below the top
  level: the five section landings and ten capability pages (via `SectionPage`/`CapabilityPage`, which now take the
  route `path`), both index pages and every note and post. Google can show "Cosmonus › Company › Blog" instead of
  a bare URL.
- `/company/blog` also carries `Blog` structured data listing all its posts, so a result for the index can surface
  individual posts.
- Privacy and Terms stay `noindex, follow` (with canonicals) and are not in the sitemap.

## Site-wide audit (2026-09-21)
Owner asked for every page to carry real facts and for the site to be properly SEO'd. What changed:
- **Meta descriptions**: 13 pages had descriptions under 70 characters — the capability pages and two index
  pages were falling back to their one-line `lead`, wasting most of a ~155-character snippet. Each now has a
  written description that restates what that page actually says. `Capability` gained an optional
  `metaDescription`; it still defaults to the lead. **No page is under 70 characters now** — re-check with the
  audit below if you add one.
- **FAQPage structured data** on both product pages (`faqJsonLd` in `lib/seo.ts`): six questions on StayOnMap,
  three on Happenous. It **drops any answer still holding a `[BRACKETED]` placeholder** — a placeholder is honest
  on the page, where a reader can see it is unfilled, but in structured data it is a claim handed to Google.
- **Keywords** in `lib/site.ts` now include what the blog actually publishes about (AI engineering, prompt and
  context engineering, RAG, vector databases, embeddings, MCP), not only the products.

To re-run the description audit after adding pages:
`grep -o '<meta name="description" content="[^"]*"' .next/server/app/**/*.html` and check the lengths.

## Titles still over 60 characters
Five blog posts and one research note run past the ~60 characters a result shows, so they are truncated. The
subject is first in every one, so the truncation costs little; if it ever matters, add a short `seoTitle` rather
than shortening the headings people actually read.

## Blog SEO (2026-09-21)
- **Titles**: a post's `<title>` is its own title plus " — Cosmonus". The earlier " — Blog" / " — Research" middle
  was dropped — it pushed titles past the ~60 characters a result shows, for no gain.
- **Descriptions**: each post's `summary` is its meta description. Three were over 160 characters and were tightened;
  keep new summaries under that or they are truncated in results. Longest is now 155.
- **Headings**: card titles are real `h2`/`h3` elements, so each index has a crawlable outline.
- **Internal links**: 18 links between posts, written `[text](/company/blog/slug)` in the copy. Cross-references that
  name another subject now link to it — good for readers, and the kind of linking that makes a section legible.
- **Reading time** is computed, so it can never be stale or wrong.
- **Not done**: `datePublished` / `dateModified` on BlogPosting. We display no dates and have none from the owner —
  see open-questions.md. This is the only known gap.

## Google Search Console
The old site's `<head>` has no `google-site-verification` tag, so the domain was most likely verified by DNS record
or an HTML file — either keeps working after the new site replaces the old one. If an HTML-tag verification is
needed, put the tag's content value in `GOOGLE_SITE_VERIFICATION` (see `.env.example`) and rebuild; the layout emits
it only when set. After launch: submit https://www.cosmonus.com/sitemap.xml in Search Console.

## Redirects from the old site
`next.config.ts` sends the previous cosmonus.com URLs to their new pages with permanent (308) redirects:
/work → /product, /work/stayonmap → /product/stayonmap, other /work/* → /product, /products(/*) → /product,
/approach and /about → /company/about, /careers → /company/careers, /research(/*) → /company/research,
/support → /contact, /technology → /intelligence. /contact, /privacy and /terms kept their paths.

## Differences from the old site
- Titles/descriptions describe the new site ("Building Real-World Intelligence."), not "Intelligence Engineering".
- Share image is 1200×630 (old: the 1000×1000 icon); keywords updated to the new site's subjects.
