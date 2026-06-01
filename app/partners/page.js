const PARTNERSHIP_TYPES = [
  {
    type: 'Agency & Studio Partners',
    desc: "Creative agencies and development studios who need an overflow partner, a specialist collaborator, or a reliable team to help deliver for their clients.",
    fits: [
      'You have clients who need design or development but lack internal capacity',
      'You want a trusted partner for AI and automation projects',
      'You need white-label delivery that reflects your quality standards',
    ],
  },
  {
    type: 'Integration Partners',
    desc: "Complementary service businesses — marketing firms, consultancies, legal, finance, HR — whose clients frequently need what we build.",
    fits: [
      'Your clients ask for digital products, websites, or automation',
      'You want to expand your offering without hiring developers',
      'You prefer mutual referrals over transactional relationships',
    ],
  },
]

const BENEFITS = [
  { title: 'Reliable delivery', body: 'We treat partner-sourced projects with the same rigour as our own clients. Your reputation stays intact.' },
  { title: 'Clear communication', body: 'No dropped balls, no surprise timelines. You stay in the loop at every stage.' },
  { title: 'Mutual growth', body: 'The relationship works both ways. We refer back, collaborate openly, and build together.' },
]

export const metadata = {
  title: 'Partner with Cosmonus | Agency & Platform Partnerships',
  description: 'Cosmonus partners with agencies, platforms, and technology companies. Refer clients, co-deliver projects, or integrate our services into your offering.',
  keywords: ['cosmonus partners', 'agency partnership', 'referral program', 'white label digital services', 'technology partner'],
  openGraph: {
    title: 'Partner with Cosmonus',
    description: 'Refer clients, co-deliver, or integrate — partnership built around your goals.',
    url: 'https://cosmonus.com/partners',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partner with Cosmonus',
    description: 'Refer clients, co-deliver, or integrate our services.',
  },
}

export default function PartnersPage() {
  return (
    <>
      <section className="partners-hero">
        <div className="container">
          <span className="eyebrow">Partners</span>
          <h1 className="partners-hero__title">
            Better work happens<br />when we build together.
          </h1>
          <p className="lead partners-hero__lead">
            We partner with agencies, studios, and complementary service businesses to create more
            value than either of us could alone.
          </p>
        </div>
      </section>

      <section className="partners-types">
        <div className="container">
          <div className="partners-types__head">
            <span className="eyebrow">Partnership types</span>
            <h2 className="partners-types__title">Two ways to work together.</h2>
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
            <h2 className="partners-benefits__title">A partnership worth having.</h2>
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
