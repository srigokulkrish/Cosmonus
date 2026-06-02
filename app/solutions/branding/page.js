import Link from 'next/link'
import RelatedServices from '@/components/RelatedServices'
import BrandApplicationCarousel from '@/components/BrandApplicationCarousel'
import FAQAccordion from '@/components/FAQAccordion'

const SYSTEM_PARTS = [
  { label: 'Logo system', detail: 'Primary · Secondary · Monogram · Favicon' },
  { label: 'Color palette', detail: 'Primary · Secondary · Neutrals · Accessibility ratios' },
  { label: 'Typography', detail: 'Typeface · Scale · Weight hierarchy · Pairing rules' },
  { label: 'Visual language', detail: 'Patterns · Iconography · Illustration · Graphic elements' },
  { label: 'Brand voice', detail: 'Tone of voice · Writing principles · Example copy' },
  { label: 'Guidelines', detail: 'Usage rules · Dos & don\'ts · Application examples' },
]


const PROCESS = [
  { n: '01', title: 'Discovery', body: 'Deep-dive session covering your business, audience, competitors, and three-year ambition. Everything flows from what we learn here.' },
  { n: '02', title: 'Strategy', body: 'Positioning, brand personality, and differentiators — the thinking that makes every visual decision feel inevitable.' },
  { n: '03', title: 'Concepts', body: 'Two or three distinct brand directions, each fully reasoned with rationale — not just logo sketches.' },
  { n: '04', title: 'Refinement', body: 'We develop the chosen direction across all touchpoints. Collaborative rounds until every detail is right.' },
  { n: '05', title: 'Handoff', body: 'Brand guidelines, all file formats, font licences, and a walkthrough so your team knows exactly how to use everything.' },
]

const SIGNALS = [
  'Your logo looks different depending on who used it last',
  'Different team members write in completely different tones',
  'You\'re inconsistent across channels without realising it',
  'Your brand looks like it\'s from 2015 — because it is',
  'You\'ve outgrown the brand you launched with',
  'New hires can\'t figure out "the look" without asking',
]

const FAQ = [
  { q: 'How long does a branding project take?', a: 'Most identity projects run 4–8 weeks depending on scope. A full system with guidelines takes longer than a logo-first engagement. We give you a realistic timeline before anything starts.' },
  { q: 'Do you work with early-stage startups?', a: 'Yes. We work at every stage — from pre-launch founders who need to show up credibly, to established businesses who\'ve outgrown their original brand.' },
  { q: 'What if I just need a logo?', a: 'We can do logo-only work. But we\'ll be honest: a logo without a colour palette, type system, and usage rules is harder to apply consistently. Most clients find they need more after they try to use a logo in isolation.' },
  { q: 'Is brand strategy included?', a: 'Yes. We don\'t design without understanding your positioning first. Strategy is what makes the visual decisions hold up over time — it\'s not optional.' },
]

const RELATED = [
  { href: '/solutions/web', label: 'Web Development', desc: 'Put your new brand to work on a site built to convert.' },
  { href: '/products/content', label: 'Content', desc: 'Brand voice into words — strategy and copy that sounds like you.' },
  { href: '/products/websites', label: 'Websites', desc: 'Fast marketing sites that carry your brand from first impression to action.' },
]

export const metadata = {
  title: 'Brand Identity & Design Services | Cosmonus',
  description: 'Identity systems, visual language, and brand guidelines built to hold up at every scale. Cosmonus creates brands that are distinct, consistent, and built to last.',
  keywords: ['brand identity design', 'logo design', 'brand strategy', 'visual identity', 'brand guidelines', 'branding agency India'],
  openGraph: {
    title: 'Brand Identity & Design | Cosmonus',
    description: 'Identity systems built to hold up at every scale — distinct, consistent, memorable.',
    url: 'https://cosmonus.com/solutions/branding',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Identity & Design | Cosmonus',
    description: 'Distinct, consistent brands built to last.',
  },
}

export default function BrandingPage() {
  return (
    <>
      {/* Hero — full width, large */}
      <section className="sol-hero">
        <div className="container">
          <span className="eyebrow">Branding & Identity</span>
          <h1 className="sol-hero__title sol-hero__title--wide">
            Brand is the first thing<br />people believe.
          </h1>
          <p className="lead sol-hero__lead">
            From identity to full visual system — we build brands that hold up across every
            surface, every audience, and every stage of growth.
          </p>
          <div className="sol-hero__actions">
            <Link href="/contact" className="btn-cosmonus btn-arrow">Start a brand project</Link>
            <Link href="/work" className="sol-hero__link">See brand work →</Link>
          </div>
        </div>
        <div className="brand-hero-visual">
          <div className="container">
            <div className="sol-placeholder brand-hero-visual__placeholder">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="1.5" y="5.5" width="25" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="9" cy="11.5" r="2" stroke="currentColor" strokeWidth="1.4"/><path d="M1.5 19l6-5 4 4 3.5-3.5L22 19.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span>Brand identity showcase</span>
            </div>
          </div>
        </div>
      </section>

      {/* What a brand system contains */}
      <section className="sol-section">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">What a brand system contains</span>
            <h2 className="sol-section__title">More than a logo. A decision-making tool.</h2>
            <p className="brand-system-intro">Most businesses treat branding as a one-time task — get a logo, pick some colours, move on. The problem is that without a coherent system, every new touchpoint becomes a guessing game. A proper brand system answers design questions before they're asked.</p>
          </div>
          <div className="brand-system-grid">
            {SYSTEM_PARTS.map((p) => (
              <div key={p.label} className="brand-system-item">
                <h4 className="brand-system-item__label">{p.label}</h4>
                <p className="brand-system-item__detail">{p.detail}</p>
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
            <h2 className="sol-section__title">Brands built to last.</h2>
          </div>
          <div className="sol-work-grid">
            {[
              { img: 'Logo system — Astusx', label: 'Full brand identity system' },
              { img: 'Brand + web — Fluid.Work', label: 'Brand and web design combined' },
              { img: 'Applied brand across channels', label: 'Brand application examples' },
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

      {/* Where the brand lives — carousel */}
      <section className="sol-section">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">Where the brand lives</span>
            <h2 className="sol-section__title">We design for how brands actually get used.</h2>
          </div>
          <BrandApplicationCarousel />
        </div>
      </section>

      {/* Signs you need a rebrand */}
      <section className="sol-section sol-section--tinted">
        <div className="container">
          <div className="brand-signals">
            <div className="brand-signals__left">
              <span className="eyebrow">Signs you need this</span>
              <h2 className="brand-signals__title">You might recognise some of these.</h2>
            </div>
            <ul className="brand-signals__list">
              {SIGNALS.map((s) => (
                <li key={s}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7l3.5 3.5L11.5 3.5" stroke="var(--brand)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="sol-section">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">How it works</span>
            <h2 className="sol-section__title">Strategy before aesthetics — always.</h2>
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
