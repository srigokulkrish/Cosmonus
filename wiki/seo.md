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
  (home 1.0, section landings 0.8, their pages 0.7, research notes 0.6, contact 0.5). `app/robots.ts` allows all and
  points to the sitemap.
- Research notes (`app/company/research/[slug]`) are `og:type=article` with Article JSON-LD.
- Privacy and Terms stay `noindex, follow` (with canonicals) and are not in the sitemap.

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
