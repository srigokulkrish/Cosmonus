import Link from 'next/link'
import RelatedServices from '@/components/RelatedServices'
import FAQAccordion from '@/components/FAQAccordion'

const DELIVERABLES = [
  { title: 'Analytics setup & configuration', body: 'GA4, Mixpanel, PostHog, or your tool of choice — configured properly from the start, not just installed and left at defaults. Bad configuration produces bad data.' },
  { title: 'Conversion tracking', body: 'Every meaningful user action tracked with precision — form submissions, purchases, signups, feature usage. If it matters to your business, we track it.' },
  { title: 'Custom dashboards', body: 'Dashboards built around the questions you actually need answered, not out-of-the-box views that show you everything and help you understand nothing.' },
  { title: 'Funnel analysis', body: 'See exactly where in your conversion funnel users drop off — and get hypotheses about why, not just the numbers.' },
  { title: 'A/B testing infrastructure', body: 'The technical foundation for running controlled experiments systematically, so you can test assumptions instead of debating them in meetings.' },
  { title: 'Ongoing reporting', body: 'Regular reports that tell you what changed, what caused it, and what action to take — not just charts that confirm your existing beliefs.' },
]

const PROCESS = [
  { n: '01', title: 'Questions audit', body: 'Before touching any tracking, we establish what decisions you need data to make. Bad analytics setups answer questions no one asked while leaving the important ones unanswered.' },
  { n: '02', title: 'Data audit', body: 'We audit your existing tracking for accuracy, gaps, and conflicts. Most analytics setups have at least one category of data that\'s broken — we find it before you make a decision based on it.' },
  { n: '03', title: 'Tracking implementation', body: 'Events, goals, and funnels implemented correctly across every surface — web, mobile, and backend events. Tagged and documented so the next person can understand it.' },
  { n: '04', title: 'Dashboard build', body: 'Custom dashboards and reports built around your key questions. We present data at the right level of granularity — not so much detail that it paralyses, not so little that it misleads.' },
  { n: '05', title: 'Review & iterate', body: 'Analytics setups drift over time as products and processes change. We review quarterly, flag tracking gaps, and update as your business evolves — not just at setup.' },
]

const FAQ = [
  { q: 'Our analytics are already set up. Can you just audit them?', a: 'Yes — this is one of our most common engagements. Most analytics setups have significant gaps or errors that nobody noticed because the data looked plausible. An audit typically finds broken event tracking, double-counting, missing conversion goals, or attribution problems that have been skewing decisions for months.' },
  { q: 'Which analytics platform should I use?', a: 'GA4 is the default for most businesses — it\'s free, powerful, and well-supported. For product analytics (understanding how users behave inside your app) we often recommend Mixpanel or PostHog. For privacy-first setups we use Plausible or Fathom. The right answer depends on your use case and team.' },
  { q: 'What\'s the difference between analytics and reporting?', a: 'Analytics is understanding what\'s happening and why. Reporting is communicating that understanding to stakeholders. Good analytics without good reporting means insights never reach decisions. We build both — the data infrastructure and the communication layer on top of it.' },
  { q: 'Can you help us run A/B tests?', a: 'Yes. We set up the testing infrastructure, help you design experiments with proper statistical significance thresholds, and make sure you\'re measuring the right outcomes. We also help you stop testing things that won\'t move the needle.' },
]

const RELATED = [
  { href: '/products/seo', label: 'SEO', desc: 'Organic traffic is only valuable if you can measure its impact on revenue.' },
  { href: '/products/content', label: 'Content', desc: 'Know which content is driving results — and which is just filling a calendar.' },
  { href: '/products/automation', label: 'Automation', desc: 'Close the loop — use your data to trigger automated actions.' },
]

const WORK = [
  { label: 'Analytics audit & rebuild', img: 'Analytics audit report' },
  { label: 'Conversion funnel analysis', img: 'Funnel analysis dashboard' },
  { label: 'Custom reporting dashboard', img: 'Custom dashboard' },
]

export const metadata = {
  title: 'Analytics & Data Services | Cosmonus',
  description: 'Data setup, tracking, and dashboards that tell you what to act on. Cosmonus builds analytics systems that turn raw data into clear business decisions.',
  keywords: ['analytics services', 'data dashboard', 'Google Analytics setup', 'business intelligence', 'data tracking', 'analytics agency'],
  openGraph: {
    title: 'Analytics & Data Services | Cosmonus',
    description: 'Dashboards and data systems that tell you what to act on.',
    url: 'https://cosmonus.com/products/analytics',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Analytics Services | Cosmonus',
    description: 'Data that tells you what to act on.',
  },
}

export default function AnalyticsPage() {
  return (
    <>
      <section className="sol-hero sol-hero--split">
        <div className="container">
          <div className="sol-hero__split">
            <div className="sol-hero__text">
              <span className="eyebrow">Analytics</span>
              <h1 className="sol-hero__title">Know what&apos;s actually working.</h1>
              <p className="lead sol-hero__lead">
                Analytics setup, custom dashboards, and funnel analysis that give you
                actionable insight — not just more charts to ignore.
              </p>
              <div className="sol-hero__actions">
                <Link href="/contact" className="btn-cosmonus btn-arrow">Set up analytics</Link>
                <Link href="/work" className="sol-hero__link">See examples →</Link>
              </div>
            </div>
            <div className="sol-hero__visual">
              <div className="sol-placeholder sol-placeholder--tall">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="1.5" y="5.5" width="25" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="9" cy="11.5" r="2" stroke="currentColor" strokeWidth="1.4"/><path d="M1.5 19l6-5 4 4 3.5-3.5L22 19.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Analytics dashboard</span>
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
              <h2 className="sol-overview__title">Most businesses have data. Almost none of it is being used to make better decisions.</h2>
            </div>
            <div className="sol-overview__right">
              <p>The typical analytics setup is broken in ways no one has noticed. Events fire twice, conversion goals track the wrong actions, attribution is all over the place, and the dashboards that exist show last month&apos;s traffic numbers to people who can&apos;t act on them. Everyone has access to analytics. Almost nobody has analytics that actually informs decisions.</p>
              <p>The problem is usually not the tool — it&apos;s that the tracking was set up by someone whose job was to install it, not to make sure it answered the questions that matter. We start every engagement by establishing what decisions you need data to make, then build the tracking infrastructure backward from there. This sounds obvious, and yet almost nobody does it.</p>
              <p>The output of good analytics isn&apos;t a dashboard. It&apos;s clarity: knowing which acquisition channel is actually profitable, which page in your funnel is costing you the most customers, which user behaviours predict whether someone will churn. That clarity is worth more than any amount of chart-watching.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sol-section">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">What&apos;s included</span>
            <h2 className="sol-section__title">From raw events to decisions you can act on.</h2>
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
            <h2 className="sol-section__title">Data that earns its keep.</h2>
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
            <h2 className="sol-section__title">Questions first, data second.</h2>
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
