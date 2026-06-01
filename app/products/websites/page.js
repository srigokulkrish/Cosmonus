import Link from 'next/link'
import RelatedServices from '@/components/RelatedServices'

const DELIVERABLES = [
  { title: 'Strategy & information architecture', body: 'We map your goals, audience, and conversion paths before touching a single design element. Clarity first.' },
  { title: 'Visual design', body: 'On-brand, responsive layouts that make visitors feel like they landed somewhere worth trusting — not a template.' },
  { title: 'Performance-first development', body: 'Fast load times, clean markup, and Core Web Vitals in the green. Search engines and users both reward speed.' },
  { title: 'CMS integration', body: 'Your team can update content, publish blog posts, and manage pages without filing a ticket. We set this up properly.' },
  { title: 'Conversion optimisation', body: 'CTAs, social proof, and page structure designed to move visitors toward action — tested and iterated, not guessed.' },
  { title: 'Analytics & tracking', body: 'Goal tracking, funnel events, and heatmaps configured from day one so you know what the site is actually doing.' },
]

const PROCESS = [
  { n: '01', title: 'Discovery', body: 'We learn your business, your audience, and what success looks like. We ask the questions most agencies skip.' },
  { n: '02', title: 'Sitemap & wireframes', body: 'We agree on structure before any visual design. Faster revisions, no wasted effort on the wrong direction.' },
  { n: '03', title: 'Design', body: 'High-fidelity mockups built in your brand. One round of structured feedback, then we move — not endless iterations.' },
  { n: '04', title: 'Build', body: 'Developed in Next.js or your preferred stack. Fast, accessible, SEO-ready, and tested across devices before handoff.' },
  { n: '05', title: 'Launch & support', body: 'We handle the go-live — DNS, redirects, analytics checks. And we stay available in the days after to fix anything that surfaces.' },
]

const FAQ = [
  { q: 'How long does a marketing site take?', a: 'Most projects land in 3–5 weeks from kickoff to launch. Scope and revision cycles are the main variables. We\'ll give you a realistic timeline in the first conversation, not an optimistic one.' },
  { q: 'Can I update the site myself after launch?', a: 'Yes. We integrate a CMS (usually Sanity or Contentful) so your team can edit content, swap images, and publish new pages without developer help. We build it so you can actually use it.' },
  { q: 'Do you redesign existing sites or only build new ones?', a: 'Both. Redesigns make up a significant portion of our work. If you have an existing site, we audit what\'s working before changing anything — not every page needs a rebuild.' },
  { q: 'What makes a site "convert" vs just look good?', a: 'Conversion comes from clarity — visitors immediately understand what you do, who it\'s for, and why it\'s credible. Design supports that. We write conversion-focused copy, structure pages around user intent, and test assumptions rather than decorating them.' },
]

const RELATED = [
  { href: '/solutions/branding', label: 'Branding', desc: 'Before the site, the brand. Identity that makes every page land harder.' },
  { href: '/products/seo', label: 'SEO', desc: 'A fast site is only useful if people find it. Organic traffic, built to last.' },
  { href: '/products/analytics', label: 'Analytics', desc: 'Understand what your site is doing — and where to improve it.' },
]

const WORK = [
  { label: 'Startup marketing site', img: 'Startup homepage' },
  { label: 'SaaS homepage redesign', img: 'SaaS redesign' },
  { label: 'Product launch page', img: 'Launch page' },
]

export const metadata = {
  title: 'Website Development Services | Cosmonus',
  description: 'High-performance marketing sites, web apps, and landing pages built to convert. Fast delivery, clean code, and results-first design. 95+ performance scores guaranteed.',
  keywords: ['website development', 'marketing site design', 'landing page development', 'web design agency', 'Next.js development', 'fast website'],
  openGraph: {
    title: 'Website Development Services | Cosmonus',
    description: 'Marketing sites and web apps built to perform and convert. 95+ Core Web Vitals.',
    url: 'https://cosmonus.com/products/websites',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development | Cosmonus',
    description: 'High-performance sites built to convert.',
  },
}

export default function WebsitesPage() {
  return (
    <>
      <section className="sol-hero sol-hero--split">
        <div className="container">
          <div className="sol-hero__split">
            <div className="sol-hero__text">
              <span className="eyebrow">Websites</span>
              <h1 className="sol-hero__title">Marketing sites that actually convert.</h1>
              <p className="lead sol-hero__lead">
                High-performance websites that make visitors understand what you do, trust you enough to act,
                and leave with a clear next step — not just a nice impression.
              </p>
              <div className="sol-hero__actions">
                <Link href="/contact" className="btn-cosmonus btn-arrow">Get a website</Link>
                <Link href="/work" className="sol-hero__link">See examples →</Link>
              </div>
            </div>
            <div className="sol-hero__visual">
              <div className="sol-placeholder sol-placeholder--tall">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="1.5" y="5.5" width="25" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="9" cy="11.5" r="2" stroke="currentColor" strokeWidth="1.4"/><path d="M1.5 19l6-5 4 4 3.5-3.5L22 19.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Website mockup</span>
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
              <h2 className="sol-overview__title">Your website is your best salesperson — or your worst first impression.</h2>
            </div>
            <div className="sol-overview__right">
              <p>Most business websites fail at the job they were hired to do. Not because they look bad — many look fine — but because they were built to impress the founder, not to convert the visitor. Pages are long, messaging is vague, and the call to action is buried beneath three paragraphs of company history nobody asked for.</p>
              <p>The companies we work with have usually already paid for a website that didn't move the needle. They're not looking for prettier — they're looking for results. We build around a single question: what does this visitor need to see, read, and feel to take the action we want? Everything else is noise we cut out.</p>
              <p>We're fast, we stay in scope, and we hand you something you actually understand. No black-box page builders, no proprietary CMS you'll need to pay someone else to update. You own the code, the content, and the future of the site.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sol-section">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">What's included</span>
            <h2 className="sol-section__title">Everything in one engagement, nothing left to figure out later.</h2>
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
            <h2 className="sol-section__title">Sites built to do a job.</h2>
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
            <h2 className="sol-section__title">A tight process that respects your time.</h2>
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
          <div className="sol-faq">
            {FAQ.map((f) => (
              <div key={f.q} className="sol-faq__item">
                <h4 className="sol-faq__q">{f.q}</h4>
                <p className="sol-faq__a">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices items={RELATED} />
    </>
  )
}
