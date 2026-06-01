import Link from 'next/link'
import RelatedServices from '@/components/RelatedServices'

const DELIVERABLES = [
  { title: 'Product scoping', body: 'We define what v1 is — and what it isn\'t. Scope discipline is the difference between shipping and spending forever in planning.' },
  { title: 'UX & product design', body: 'Wireframes and high-fidelity designs that reflect how real users think, not how the founder imagines they think.' },
  { title: 'Web app development', body: 'React, Next.js, and the right backend for your data and scale. Clean architecture that a future team can maintain.' },
  { title: 'Mobile app development', body: 'Native or React Native depending on what your users need. We choose what fits the product, not what\'s easiest to build.' },
  { title: 'Backend & API', body: 'Data models, auth, third-party integrations, and APIs built for real workloads — not demo data. Secure and documented.' },
  { title: 'Testing & QA', body: 'Functional, edge-case, and device testing before anything ships. Bugs caught before launch cost nothing. Post-launch, they cost everything.' },
]

const PROCESS = [
  { n: '01', title: 'Scope', body: 'We define the problem, the users, and the minimum set of features that makes v1 genuinely useful. Tight scope ships; sprawling scope stalls.' },
  { n: '02', title: 'Design', body: 'UX flows and high-fidelity screens designed with your users in mind, not design awards in mind. Tested with real feedback before we write a line of code.' },
  { n: '03', title: 'Build', body: 'Design and development run together, not in sequence. Faster iteration, fewer surprises, and product decisions made with working code in front of us.' },
  { n: '04', title: 'QA & review', body: 'Structured QA across devices, roles, and edge cases. We also run a product review — not just bug testing, but whether the thing actually works as intended.' },
  { n: '05', title: 'Ship & iterate', body: 'We launch with you, not just hand off. Post-launch we capture real usage patterns and help you prioritise what comes next based on evidence, not instinct.' },
]

const FAQ = [
  { q: 'How do you decide what goes in v1?', a: 'We start with the core user action your app needs to enable — the one thing that makes it worth using. Everything else is evaluated against that. If a feature doesn\'t serve the core action in v1, it goes on the backlog with no shame.' },
  { q: 'Do you do design and development, or just one?', a: 'Both, together. The same people who design it build it — no handoff to a separate dev team. This eliminates a huge class of miscommunication and means the final product behaves the way it was designed to.' },
  { q: 'Can you work with an existing codebase?', a: 'Yes. We regularly join teams mid-project or pick up apps that need a rebuild in specific areas. We\'ll audit what exists and tell you honestly what\'s worth keeping and what needs to change.' },
  { q: 'What does the handoff look like?', a: 'Full code ownership, documentation of the architecture and deployment pipeline, and a knowledge transfer session. Any competent developer should be able to understand the repo within an hour of reading it.' },
]

const RELATED = [
  { href: '/solutions/mobile', label: 'Mobile', desc: 'Native mobile apps for iOS and Android, designed and built as a first-class product.' },
  { href: '/products/automation', label: 'Automation', desc: 'Connect your app to the rest of your stack — no manual data entry.' },
  { href: '/solutions/ai', label: 'AI Solutions', desc: 'Add intelligence to your product — search, recommendations, assistants.' },
]

const WORK = [
  { label: 'B2B dashboard app', img: 'Dashboard interface' },
  { label: 'Consumer mobile app', img: 'Mobile app screens' },
  { label: 'Internal tooling', img: 'Internal tool UI' },
]

export const metadata = {
  title: 'Web & Mobile App Development | Cosmonus',
  description: 'Custom web and mobile applications scoped tightly and shipped fast. From MVPs to full-scale products — Cosmonus builds software that works and users love.',
  keywords: ['web app development', 'mobile app development', 'MVP development', 'SaaS development', 'React app', 'custom software'],
  openGraph: {
    title: 'Web & Mobile App Development | Cosmonus',
    description: 'Custom apps scoped tightly, built fast, and shipped to users.',
    url: 'https://cosmonus.com/products/apps',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App Development | Cosmonus',
    description: 'Custom apps scoped tightly and shipped fast.',
  },
}

export default function AppsPage() {
  return (
    <>
      <section className="sol-hero sol-hero--split">
        <div className="container">
          <div className="sol-hero__split">
            <div className="sol-hero__text">
              <span className="eyebrow">Applications</span>
              <h1 className="sol-hero__title">Build the product your users need.</h1>
              <p className="lead sol-hero__lead">
                Web and mobile apps scoped tightly, designed for real users, and built by a team that
                handles design and development together — so what ships matches what was planned.
              </p>
              <div className="sol-hero__actions">
                <Link href="/contact" className="btn-cosmonus btn-arrow">Start a project</Link>
                <Link href="/work" className="sol-hero__link">See examples →</Link>
              </div>
            </div>
            <div className="sol-hero__visual">
              <div className="sol-placeholder sol-placeholder--tall">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="1.5" y="5.5" width="25" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="9" cy="11.5" r="2" stroke="currentColor" strokeWidth="1.4"/><path d="M1.5 19l6-5 4 4 3.5-3.5L22 19.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>App screens mockup</span>
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
              <h2 className="sol-overview__title">Most apps fail before launch. The ones that don&apos;t have scope discipline.</h2>
            </div>
            <div className="sol-overview__right">
              <p>The graveyard of failed software products is full of apps that tried to do too much in v1. Feature lists grew, timelines stretched, and by the time anything shipped it was either outdated, over-budget, or no longer aligned with what users actually wanted. The cause is almost always the same: nobody made the hard decisions about what not to build.</p>
              <p>We treat scoping as a core deliverable, not a preamble. Before we design or write a line of code, we define the minimum set of capabilities that makes your app genuinely useful to the people it&apos;s for. That discipline is what lets us ship in weeks rather than quarters.</p>
              <p>We also don&apos;t separate design from development. The same team does both. That means fewer handoff failures, faster design decisions, and a final product that behaves the way it was designed to — not a close approximation of it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sol-section">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">What we build</span>
            <h2 className="sol-section__title">From concept to shipped product.</h2>
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
            <h2 className="sol-section__title">Products built to be used, not just launched.</h2>
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
            <h2 className="sol-section__title">Scope to ship — no wasted sprints.</h2>
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
