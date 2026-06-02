import Link from 'next/link'
import RelatedServices from '@/components/RelatedServices'
import FAQAccordion from '@/components/FAQAccordion'

const DELIVERABLES = [
  { title: 'Technical SEO audit', body: 'Find and fix what\'s holding your site back — crawlability, indexing errors, page speed, structured data, and Core Web Vitals. The foundation everything else rests on.' },
  { title: 'Keyword strategy', body: 'Research-backed targeting around terms your actual customers search for, with commercial intent — not just volume. The right keywords, not the most impressive ones.' },
  { title: 'On-page optimisation', body: 'Titles, meta descriptions, heading structure, internal linking, and content alignment to your target queries. Small changes that compound significantly over time.' },
  { title: 'Content strategy & production', body: 'A content roadmap that builds topical authority systematically — answering the questions your customers ask at every stage of their journey.' },
  { title: 'Authority & link building', body: 'Quality backlinks from relevant, trusted sources. No shortcuts, no link farms, no tactics that work for six months and then get you penalised.' },
  { title: 'Reporting & analysis', body: 'Monthly reports on rankings, organic traffic, and conversions — in plain language, tied to business outcomes, not just keyword positions.' },
]

const PROCESS = [
  { n: '01', title: 'Audit', body: 'Technical audit of your site, analysis of your current rankings, and a review of what your competitors are ranking for that you\'re not. We need to understand the baseline before we can improve it.' },
  { n: '02', title: 'Strategy', body: 'Keyword targets, content priorities, and technical fixes ranked by impact. We give you a 6-month roadmap so you know exactly what we\'re doing and why.' },
  { n: '03', title: 'Technical fixes', body: 'Crawl errors, speed issues, indexing problems, and structural issues fixed first. Content on a broken foundation doesn\'t rank — we make the foundation solid before building on it.' },
  { n: '04', title: 'Content & authority', body: 'Content published on a consistent schedule, optimised for intent. Outreach for backlinks from sources that matter to search engines and your potential customers.' },
  { n: '05', title: 'Measure & iterate', body: 'Rankings shift, algorithms update, and competitors react. We monitor continuously, adjust tactics when something isn\'t working, and report on what\'s actually driving business results.' },
]

const FAQ = [
  { q: 'How long does SEO take to show results?', a: 'Honest answer: 3–6 months for most sites to see meaningful movement, 6–12 months to see the compounding effect of a sustained strategy. Technical fixes and existing content improvements can show results faster. We set realistic expectations from the start — and we don\'t keep you on a retainer if it\'s not working.' },
  { q: 'What\'s the difference between technical and content SEO?', a: 'Technical SEO is everything search engines need to find, crawl, and understand your site — speed, structure, indexing, and schema. Content SEO is creating pages that match what people are searching for. Both matter. A fast site with no relevant content won\'t rank, and great content on a broken site can\'t be found.' },
  { q: 'Can you guarantee rankings?', a: 'No — and you should be suspicious of anyone who says they can. Search rankings depend on competition, algorithm changes, and dozens of factors outside our control. What we can guarantee is rigorous, evidence-based work that materially improves your chances. We report transparently on outcomes.' },
  { q: 'Do you work on Shopify, WordPress, and custom sites?', a: 'Yes to all three. Technical SEO is slightly different on each platform — Shopify has specific constraints, WordPress needs particular plugins configured correctly, and custom sites need custom solutions. We\'re familiar with all of them.' },
]

const RELATED = [
  { href: '/products/content', label: 'Content', desc: 'SEO-driven content that builds authority and actually gets read.' },
  { href: '/products/analytics', label: 'Analytics', desc: 'Track rankings, traffic, and conversions in one place.' },
  { href: '/solutions/web', label: 'Web Development', desc: 'Technical SEO starts with a well-built site. We build those too.' },
]

const WORK = [
  { label: 'Technical SEO audit & fix', img: 'Technical audit report' },
  { label: 'Content strategy and rankings', img: 'Rankings dashboard' },
  { label: 'Local SEO for service business', img: 'Local search results' },
]

export const metadata = {
  title: 'SEO Services | Search Engine Optimisation | Cosmonus',
  description: 'SEO that drives qualified traffic, not vanity metrics. Technical SEO, content strategy, and on-page optimisation by Cosmonus for sustainable, compounding organic growth.',
  keywords: ['SEO services', 'search engine optimisation', 'technical SEO', 'content SEO', 'organic growth', 'SEO agency India'],
  openGraph: {
    title: 'SEO Services | Cosmonus',
    description: 'Qualified traffic, not vanity metrics. SEO built for sustainable growth.',
    url: 'https://cosmonus.com/products/seo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services | Cosmonus',
    description: 'Qualified traffic, not vanity metrics.',
  },
}

export default function SeoPage() {
  return (
    <>
      <section className="sol-hero sol-hero--split">
        <div className="container">
          <div className="sol-hero__split">
            <div className="sol-hero__text">
              <span className="eyebrow">SEO</span>
              <h1 className="sol-hero__title">Get found by the right people.</h1>
              <p className="lead sol-hero__lead">
                Technical SEO, content strategy, and authority building that drives qualified traffic —
                people who are actively looking for what you offer, not just passing impressions.
              </p>
              <div className="sol-hero__actions">
                <Link href="/contact" className="btn-cosmonus btn-arrow">Improve my SEO</Link>
                <Link href="/work" className="sol-hero__link">See results →</Link>
              </div>
            </div>
            <div className="sol-hero__visual">
              <div className="sol-placeholder sol-placeholder--tall">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="1.5" y="5.5" width="25" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="9" cy="11.5" r="2" stroke="currentColor" strokeWidth="1.4"/><path d="M1.5 19l6-5 4 4 3.5-3.5L22 19.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Rankings growth chart</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sol-section">
        <div className="container">
          <div className="sol-overview">
            <div className="sol-overview__left">
              <span className="eyebrow">Why this matters</span>
              <h2 className="sol-overview__title">Ranking for the wrong terms is worse than not ranking at all.</h2>
            </div>
            <div className="sol-overview__right">
              <p>Most businesses that come to us for SEO have the same problem: they&apos;ve either done nothing and have no organic presence, or they&apos;ve invested in SEO that chased volume over intent. High-volume keywords feel impressive in a report, but if the people searching them aren&apos;t your customers, the traffic is worth nothing. Vanity metrics are the wrong goal.</p>
              <p>Real SEO starts with understanding what your customers search for when they&apos;re close to a buying decision — and then making your site the most credible, useful answer to those searches. That requires technical competence (so search engines can actually find and understand your pages), content that matches real intent, and authority signals that tell search engines you&apos;re worth ranking.</p>
              <p>It also requires honesty about timelines. SEO is not a campaign — it&apos;s an asset that builds over time. The businesses that win in organic search are the ones that treat it as a long-term investment and do the unglamorous work consistently. We&apos;re here to do that work with you, measure it rigorously, and stop doing anything that isn&apos;t moving the business forward.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sol-section">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">What&apos;s included</span>
            <h2 className="sol-section__title">Technical, content, and authority — all three.</h2>
          </div>
          <div className="sol-grid-3">
            {DELIVERABLES.map((d) => (
              <div key={d.title} className="sol-card">
                <h4 className="sol-card__title">{d.title}</h4>
                <p className="sol-card__body">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sol-section sol-section--tinted">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">From our work</span>
            <h2 className="sol-section__title">Organic growth built to last.</h2>
          </div>
          <div className="sol-work-grid">
            {WORK.map((w) => (
              <div key={w.label} className="sol-work-item">
                <div className="sol-placeholder">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="1.5" y="5.5" width="25" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="9" cy="11.5" r="2" stroke="currentColor" strokeWidth="1.4"/><path d="M1.5 19l6-5 4 4 3.5-3.5L22 19.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span>{w.img}</span>
                </div>
                <p className="sol-work-item__label">{w.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sol-section">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">How it works</span>
            <h2 className="sol-section__title">Audit, fix, build — then compound.</h2>
          </div>
          <div className="sol-steps">
            {PROCESS.map((s) => (
              <div key={s.n} className="sol-step">
                <span className="sol-step__n mono">{s.n}</span>
                <h4 className="sol-step__title">{s.title}</h4>
                <p className="sol-step__body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sol-section sol-section--tinted">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">Common questions</span>
            <h2 className="sol-section__title">What clients usually ask.</h2>
          </div>
          <FAQAccordion items={FAQ} />
        </div>
      </section>

      <RelatedServices items={RELATED} />
    </>
  )
}
