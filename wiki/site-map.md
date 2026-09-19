# Site map

Boards live in `raw/handoff/design/`. "—" means the page was not designed and was written for the build.

| Route | Board | Built by |
| --- | --- | --- |
| `/` | Main.dc.html | `app/page.tsx`, `components/home/*` |
| `/studio` · `/product` · `/company` · `/intelligence` · `/agents` | — | `components/section/SectionPage.tsx`, `content/sections.ts` |
| `/studio/{web,animation,image-generation,video}` | Studio-*.dc.html | Capability template |
| `/intelligence/{spatial,trust-score}` | Intelligence-*.dc.html | Capability template |
| `/agents/{workflow,automation,experiments,systems}` | Agents-*.dc.html | Capability template |
| `/product/{stayonmap,happenous}` | Product-*.dc.html | `app/product/*`, `content/products.ts` |
| `/company/about` · `/company/careers` | Company-About / Company-Careers | `app/company/*`, `components/company/*`, `content/company.ts` |
| `/company/research` | Company-Research.dc.html | notes from `content/research.ts` |
| `/company/research/[slug]` | — | `app/company/research/[slug]/page.tsx`, `content/research.ts` (6 notes) |
| `/contact` | — | `app/contact/page.tsx`, `components/contact/*` (mailto form, `?topic=` preselect) |
| `/privacy` · `/terms` | — | `components/site/LegalPage.tsx` |
| `/sitemap.xml` · `/robots.txt` | — | `app/sitemap.ts`, `app/robots.ts` |

Capability template = `components/capability/CapabilityPage.tsx` + `content/capabilities.ts`
(hero → intro → three media cards → "More in …" strip). Studio/Intelligence heroes are dark, Agents light.

`Menus.dc.html` is reference only (the five mega-menu panels open), not a route.
