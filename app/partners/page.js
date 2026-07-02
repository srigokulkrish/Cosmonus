const PARTNERSHIP_TYPES = [
  {
    type: 'Agency & Studio Partners',
    desc: "Your clients are asking for intelligence — systems that reason, not just apps that record. We engineer those systems behind your delivery, under your name, to the standard your reputation demands.",
    fits: [
      'Clients keep asking for AI capabilities your stack can\'t honestly deliver yet',
      'You\'d rather partner with engineers who build reasoning systems than improvise one',
      'You need delivery that survives your client\'s technical due diligence',
    ],
  },
  {
    type: 'Product & Platform Partners',
    desc: "Your product already generates the data. We engineer the intelligence on top of it — scoring, prediction, agents — so your customers get decisions from your product, not just records.",
    fits: [
      'Customers want your product to recommend and decide, not just report',
      'You\'d add intelligence tomorrow if it didn\'t mean building an AI team first',
      'You want a deep technical integration, not a reseller badge',
    ],
  },
]

const BENEFITS = [
  { title: 'Engineering you can stand behind', body: 'The same first-principles discipline we put in our own products — explainable decisions, audit trails, oversight — shipped under your name.' },
  { title: 'You always know where things stand', body: 'No dropped balls, no surprise timelines — you see the architecture, the progress, and the evaluation results at every stage.' },
  { title: 'We grow when you do', body: 'We build alongside you, and every system shipped together sharpens the next one.' },
]

export const metadata = {
  title: 'Partner with Cosmonus | Intelligence Engineering Behind Your Name',
  description: 'Your clients are asking for systems that reason. Cosmonus engineers the intelligence behind your delivery — agencies and product teams ship it under their own name.',
  keywords: ['cosmonus partners', 'AI engineering partner', 'intelligent systems partnership', 'white label AI engineering', 'technology integration partner'],
  alternates: { canonical: '/partners' },
  openGraph: {
    title: 'Partner with Cosmonus',
    description: 'We engineer the intelligence behind your delivery — shipped under your name.',
    url: 'https://cosmonus.com/partners',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partner with Cosmonus',
    description: 'We engineer the intelligence behind your delivery — shipped under your name.',
    images: ['/images/ICON.png'],
  },
}

export default function PartnersPage() {
  return (
    <>
      <section className="partners-hero">
        <div className="container">
          <span className="eyebrow">Partners</span>
          <h1 className="partners-hero__title">
            Ship intelligence.<br />Keep your name on it.
          </h1>
          <p className="lead partners-hero__lead">
            Your clients want systems that turn their data into decisions &mdash; and building that
            capability in-house is years you don&apos;t have. Partner with the engineers who build
            these systems from first principles, and ship it as yours.
          </p>
        </div>
      </section>

      <section className="partners-types">
        <div className="container">
          <div className="partners-types__head">
            <span className="eyebrow">Partnership types</span>
            <h2 className="partners-types__title">Find the one that fits how you work.</h2>
          </div>
          <div className="partners-types__grid">
            {PARTNERSHIP_TYPES.map((p) => (
              <div key={p.type} className="partners-type-card">
                <h4 className="partners-type-card__title">{p.type}</h4>
                <p className="partners-type-card__desc">{p.desc}</p>
                <ul className="partners-type-card__list">
                  {p.fits.map((f) => (
                    <li key={f}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2.5 7l3.5 3.5L11.5 3.5" stroke="var(--brand)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partners-benefits">
        <div className="container">
          <div className="partners-benefits__head">
            <span className="eyebrow">What to expect</span>
            <h2 className="partners-benefits__title">What you get out of it.</h2>
          </div>
          <div className="partners-benefits__grid">
            {BENEFITS.map((b) => (
              <div key={b.title} className="partners-benefit">
                <h5 className="partners-benefit__title">{b.title}</h5>
                <p className="partners-benefit__body">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
