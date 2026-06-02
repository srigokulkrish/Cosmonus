import Link from 'next/link'
import RelatedServices from '@/components/RelatedServices'
import FAQAccordion from '@/components/FAQAccordion'

const PLATFORMS = [
  {
    name: 'iOS',
    details: ['Human Interface Guidelines', 'SwiftUI / UIKit patterns', 'App Store review standards', 'Dynamic Type & accessibility', 'Haptics & native gestures'],
  },
  {
    name: 'Android',
    details: ['Material Design 3', 'Jetpack Compose patterns', 'Google Play requirements', 'Back gesture navigation', 'Adaptive layouts & foldables'],
  },
  {
    name: 'Cross-platform',
    details: ['React Native or Flutter', 'Single codebase, platform-adaptive UI', 'Faster delivery, lower cost', 'Trade-off: some native feel lost', 'Best for content-heavy apps'],
  },
]

const DESIGN_STATES = [
  { state: 'Default', desc: 'The screen as it appears when loaded with normal content.' },
  { state: 'Loading', desc: 'Skeleton screens and spinners — never a blank white flash.' },
  { state: 'Empty', desc: 'First-use and zero-data states that guide the user, not confuse them.' },
  { state: 'Error', desc: 'Clear, helpful error messages that explain what happened and what to do.' },
  { state: 'Success', desc: 'Confirmation states that close the loop and reinforce trust.' },
  { state: 'Edge cases', desc: 'Long content, truncation, unusual inputs — designed, not ignored.' },
]

const PROCESS = [
  { n: '01', title: 'Research', body: 'User interviews or behaviour mapping. We understand what your users are trying to do and where they get stuck today.' },
  { n: '02', title: 'Wireframes', body: 'Flow and structure validated cheaply before visual design. We pressure-test information architecture with real tasks.' },
  { n: '03', title: 'UI design', body: 'Platform-native, brand-consistent, accessible. Every state — loading, empty, error, success — designed, not assumed.' },
  { n: '04', title: 'Prototype & test', body: 'Interactive prototype in front of real users. We capture what breaks and what confuses, then fix it before development.' },
  { n: '05', title: 'Handoff', body: 'Full spec docs, component library, motion specs, and a session with your engineering team so nothing gets lost in translation.' },
]

const FAQ = [
  { q: 'Do you build iOS and Android, or just design?', a: 'We handle design end-to-end. For development, we work alongside your in-house engineering team or connect you with trusted development partners who can build from our handoff.' },
  { q: 'Native or cross-platform — which do you recommend?', a: 'It depends on your timeline, budget, and user expectations. Native gives you the best performance and platform feel. Cross-platform (React Native, Flutter) gets you to both stores faster for less. We\'ll tell you which fits your specific situation.' },
  { q: 'How long does a mobile design project take?', a: 'Research through handoff typically takes 6–10 weeks for a focused app. Larger apps with more flows or complex interactions take longer. We scope before committing to any timeline.' },
  { q: 'What if we already have an app and need a redesign?', a: 'We start with an audit of the existing experience before proposing changes. We identify what\'s working, what\'s frustrating users, and what genuinely needs to change — not just what looks dated.' },
]

const RELATED = [
  { href: '/products/apps', label: 'Applications', desc: 'Full app design and development — not just the design file.' },
  { href: '/solutions/web', label: 'Web Development', desc: 'Extend your mobile experience to the web.' },
  { href: '/products/analytics', label: 'Analytics', desc: 'Understand how users move through your app after launch.' },
]

export const metadata = {
  title: 'Mobile App Development | iOS & Android | Cosmonus',
  description: 'iOS and Android experiences designed around how users actually behave. Cosmonus builds mobile apps that are fast, intuitive, and built to retain and delight users.',
  keywords: ['mobile app development', 'iOS app development', 'Android app development', 'React Native', 'mobile UX', 'app design agency'],
  openGraph: {
    title: 'Mobile App Development | iOS & Android | Cosmonus',
    description: 'Apps designed around how users actually behave — fast, intuitive, retentive.',
    url: 'https://cosmonus.com/solutions/mobile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development | Cosmonus',
    description: 'Apps designed around how users actually behave.',
  },
}

export default function MobilePage() {
  return (
    <>
      {/* Hero — two phone placeholders */}
      <section className="sol-hero">
        <div className="container">
          <div className="mobile-hero">
            <div className="mobile-hero__text">
              <span className="eyebrow">Mobile Apps</span>
              <h1 className="sol-hero__title">Apps people actually want to use.</h1>
              <p className="lead sol-hero__lead">
                iOS and Android experiences designed around real user behaviour —
                not internal assumptions, not trend-chasing.
              </p>
              <div className="sol-hero__actions">
                <Link href="/contact" className="btn-cosmonus btn-arrow">Start a mobile project</Link>
                <Link href="/work" className="sol-hero__link">See app work →</Link>
              </div>
            </div>
            <div className="mobile-hero__screens">
              <div className="mobile-screen mobile-screen--front">
                <img src="/images/assets/mobile.png" alt="Mobile app screen" className="mobile-screen__inner mobile-screen__img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform comparison */}
      <section className="sol-section">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">Platforms</span>
            <h2 className="sol-section__title">We design for the platform your users are on.</h2>
            <p className="mobile-platform-intro">Every platform has conventions, guidelines, and expectations. An app that ignores them feels wrong even if users can't articulate why. We design to each platform's standards — and to your brand.</p>
          </div>
          <div className="mobile-platforms">
            {PLATFORMS.map((p) => (
              <div key={p.name} className="mobile-platform">
                <h4 className="mobile-platform__name">{p.name}</h4>
                <ul className="mobile-platform__list">
                  {p.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work showcase */}
      <section className="sol-section sol-section--tinted">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">From our work</span>
            <h2 className="sol-section__title">Screens designed to work.</h2>
          </div>
          <div className="sol-work-grid">
            {[
              { img: 'VR UI/UX — Homedeco', label: 'Spatial UI design for VR environment' },
              { img: 'App UX — Closet', label: 'Consumer app UI/UX case study' },
              { img: 'Travel app — Travelmate', label: 'UX design for a travel platform' },
            ].map((w) => (
              <div key={w.img} className="sol-work-item">
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

      {/* Design states — what we design that others skip */}
      <section className="sol-section">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">What we design that others skip</span>
            <h2 className="sol-section__title">Every state, not just the happy path.</h2>
            <p className="mobile-states-intro">Most app design only covers the ideal case — data is loaded, the user does the expected thing, everything works. Real apps aren't like that. We design every state your users will encounter.</p>
          </div>
          <div className="mobile-states-grid">
            {DESIGN_STATES.map((s) => (
              <div key={s.state} className="mobile-state">
                <span className="mobile-state__label mono">{s.state}</span>
                <p className="mobile-state__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="sol-section sol-section--tinted">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">How it works</span>
            <h2 className="sol-section__title">Research to handoff — no skipped steps.</h2>
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

      {/* FAQ */}
      <section className="sol-section">
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
