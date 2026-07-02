import Link from 'next/link'

export const metadata = {
  title: 'Services',
  description:
    'How Cosmonus helps — organised by what you’re trying to achieve. Build an AI product, launch a SaaS platform, automate operations, or create internal AI tools.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services | Cosmonus',
    description: 'How we help — organised by what you’re trying to achieve.',
    url: 'https://cosmonus.com/services',
    images: ['/images/ICON.png'],
  },
}

const SERVICES = [
  {
    n: '01',
    t: 'Build an AI Product',
    who: 'Founders and teams with an idea where intelligence is the point, not a garnish.',
    problem: 'A great idea stalls between prototype and product — the model works in a notebook but there’s no real product around it.',
    approach: 'We design the experience and the system together, ground the intelligence in real data, and engineer something people can actually use and you can actually ship.',
    value: 'A real product in the market — not a demo — with AI where it creates value and nowhere it doesn’t.',
  },
  {
    n: '02',
    t: 'Launch a SaaS Platform',
    who: 'Teams taking a product from zero to launch, or rebuilding one that has outgrown itself.',
    problem: 'Building a full platform means design, engineering, infrastructure, and a hundred decisions — all at once, usually with a small team.',
    approach: 'We take it end to end: product design, front and back end, and the boring-but-critical foundations that decide whether it scales.',
    value: 'A polished, production-ready platform, built to grow instead of buckle.',
  },
  {
    n: '03',
    t: 'Automate Business Operations',
    who: 'Operations-heavy teams losing hours to repetitive work between their tools.',
    problem: 'The same tasks — intake, routing, reporting, follow-up — get done by hand every day because nothing connects the tools that should talk.',
    approach: 'We map where time is actually lost, then build automation that handles the repetitive path and hands humans the exceptions.',
    value: 'Hours returned to the team, fewer errors, and operations that scale without scaling headcount.',
  },
  {
    n: '04',
    t: 'Create Internal AI Tools',
    who: 'Companies whose knowledge and process live in too many places.',
    problem: 'People waste time hunting for information, re-answering questions, and relearning process that already exists somewhere.',
    approach: 'We build assistants and copilots grounded in your own documents and systems — that answer in context, cite their sources, and complete routine work.',
    value: 'A team that moves faster, onboards quicker, and stops losing time to questions software should answer.',
  },
  {
    n: '05',
    t: 'Build AI Assistants',
    who: 'Products and teams that need conversation, search, or copilots done properly.',
    problem: 'Assistants are easy to demo and hard to make trustworthy — most hallucinate, drift, or feel bolted on.',
    approach: 'We ground assistants in real data, design clear guardrails, and make them show their work — so they earn trust instead of eroding it.',
    value: 'An assistant people actually rely on, because it’s accurate, honest, and useful.',
  },
  {
    n: '06',
    t: 'Modernize Existing Products',
    who: 'Teams with a product that works but feels dated, slow, or hard to build on.',
    problem: 'An ageing product holds the business back — painful to change, awkward to use, and impossible to add intelligence to.',
    approach: 'We refresh the experience, untangle the foundations, and introduce AI where it earns its place — without a risky big-bang rewrite.',
    value: 'A product that feels current, moves faster, and is ready for what you want to build next.',
  },
  {
    n: '07',
    t: 'Enterprise Product Development',
    who: 'Larger organisations building software that has to fit how they already work.',
    problem: 'Enterprise software has to respect existing systems, security, and process — while still being something people want to use.',
    approach: 'We build into your reality: integrating with what exists, meeting the controls you require, and keeping the experience genuinely good.',
    value: 'Serious software that fits the organisation and still feels like a product, not a compliance exercise.',
  },
]

export default function ServicesPage() {
  return (
    <div className="services">
      <section className="cx-hero cx-hero--short">
        <div className="container">
          <div className="cx-hero__inner">
            <span className="cx-eyebrow">
              <span className="cx-eyebrow__dot" aria-hidden="true" />
              Services
            </span>
            <h1 className="cx-hero__title">
              We help by <span className="cx-gradient-text">what you want to achieve.</span>
            </h1>
            <p className="cx-hero__sub">
              Not a menu of technologies — a set of outcomes. Start from the goal you have, and we’ll
              tell you honestly how we’d get you there.
            </p>
          </div>
        </div>
      </section>

      <section className="cx-section">
        <div className="container">
          <div className="services-list">
            {SERVICES.map((s) => (
              <article className="service-row" key={s.n}>
                <div className="service-row__head">
                  <span className="service-row__num cx-mono">{s.n}</span>
                  <h2 className="service-row__title">{s.t}</h2>
                </div>
                <div className="service-row__grid">
                  <div className="service-row__cell">
                    <h3 className="service-row__label">Who it’s for</h3>
                    <p>{s.who}</p>
                  </div>
                  <div className="service-row__cell">
                    <h3 className="service-row__label">The problem</h3>
                    <p>{s.problem}</p>
                  </div>
                  <div className="service-row__cell">
                    <h3 className="service-row__label">How we approach it</h3>
                    <p>{s.approach}</p>
                  </div>
                  <div className="service-row__cell">
                    <h3 className="service-row__label">The value</h3>
                    <p>{s.value}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cx-section">
        <div className="container">
          <div className="cx-cta">
            <span className="cx-eyebrow" style={{ justifyContent: 'center' }}>
              <span className="cx-eyebrow__dot" aria-hidden="true" />
              Start here
            </span>
            <h2 className="cx-heading cx-heading--xl">
              Not sure which one <span className="cx-gradient-text">fits?</span>
            </h2>
            <p className="cx-lead cx-lead--wide" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              Most good projects don’t fit neatly into a box. Tell us the problem and we’ll help you
              find the shortest path to something real.
            </p>
            <div className="cx-cta__actions">
              <Link className="btn-cosmonus btn-arrow" href="/contact">Book a Discovery Session</Link>
              <Link className="btn-ghost" href="/work">See Our Work</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
