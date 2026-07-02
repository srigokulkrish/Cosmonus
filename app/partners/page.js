const PARTNERSHIP_TYPES = [
  {
    type: 'Agency & Studio Partners',
    desc: "Build intelligence features on the Cosmonus Intelligence Layer and ship them under your own name — no year spent building the platform.",
    fits: [
      'Clients keep asking for AI features your stack can\'t deliver yet',
      'You\'d rather build on a proven intelligence layer than maintain your own',
      'You need white-label delivery that still looks like your best work',
    ],
  },
  {
    type: 'Integration Partners',
    desc: "Your product already generates the data. Connect to the layer once and give customers analytics, agents, and automation without building any of it.",
    fits: [
      'Customers want analytics, agents, or automation on top of what you do',
      'You\'d add intelligence tomorrow if it didn\'t mean building a platform first',
      'You want a deep technical integration, not a reseller badge',
    ],
  },
]

const BENEFITS = [
  { title: 'One platform under you', body: 'You build on the same Intelligence Layer we ship our own products on — same reliability, your name on it.' },
  { title: 'You always know where things stand', body: 'No dropped balls, no surprise timelines — you see every stage as it happens.' },
  { title: 'We grow when you do', body: 'We build alongside you, and the layer gets stronger every time you ship on it.' },
]

export const metadata = {
  title: 'Partner with Cosmonus | Build on the Intelligence Layer',
  description: 'Ship the intelligence features your clients ask for without building the platform yourself. Agencies and platforms build on the Cosmonus Intelligence Layer — under their own name.',
  keywords: ['cosmonus partners', 'intelligence platform partnership', 'AI infrastructure partner', 'white label intelligence', 'technology integration partner'],
  alternates: { canonical: '/partners' },
  openGraph: {
    title: 'Partner with Cosmonus',
    description: 'Ship intelligence features on the Cosmonus Intelligence Layer without building the platform yourself.',
    url: 'https://cosmonus.com/partners',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partner with Cosmonus',
    description: 'Build intelligence products on the Cosmonus Intelligence Layer.',
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
            Ship intelligence.<br />Skip the platform.
          </h1>
          <p className="lead partners-hero__lead">
            Your clients want features that turn their data into decisions &mdash; and the
            infrastructure underneath is a year you don&apos;t have. Build on the Cosmonus
            Intelligence Layer instead, and ship it as yours.
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
