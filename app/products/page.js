import Link from 'next/link'
import ThemedImage from '@/components/ThemedImage'

const STAYONMAP_URL = 'https://www.stayonmap.com/'

export const metadata = {
  title: 'Products',
  description: 'We prove the approach in production before applying it to client work. StayOnMap, a broker-free rental marketplace, is our first product.',
  alternates: { canonical: '/products' },
}

export default function ProductsPage() {
  return (
    <>
      <section className="section section--hero">
        <div className="container">
          <div className="page-hero">
            <div className="eyebrow">Products</div>
            <h1 className="page-hero__title">We prove it on our own products first.</h1>
            <p className="body-lg page-hero__lede">
              Anyone can claim a system reasons well. We put ours in production under our own
              name, in a market that punishes a bad decision immediately, and let anyone inspect
              the result before trusting us with theirs.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature" data-reveal>
            <div className="feature__content">
              <div className="eyebrow feature__eyebrow">Product — StayOnMap</div>
              <h2 className="feature__title">The trust problem brokers used to solve, engineered instead.</h2>
              <p className="body feature__body">
                India’s rental market runs on brokers because nobody solved trust between two
                strangers. StayOnMap replaces that judgment with an engineered one — twelve live
                signals compounding into a trust score, an agent watching for fraud — so owners
                and tenants connect directly, on a live map, with no intermediary.
              </p>
              <ul className="feature__list">
                <li>Live trust scoring across twelve signals per listing</li>
                <li>An autonomous agent that flags fraud before a tenant ever visits</li>
                <li>Direct owner-to-tenant leases, chat, and scheduling — no broker</li>
              </ul>
              <div className="hero__actions">
                <Link href="/products/stayonmap" className="btn btn--primary">
                  <span>See StayOnMap</span>
                  <span className="btn__arrow" aria-hidden="true">→</span>
                </Link>
                <a href={STAYONMAP_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  Open live product
                </a>
              </div>
            </div>
            <div className="feature__visual">
              <ThemedImage
                srcDark="/images/diagrams/stayonmap-map-dark.png"
                srcLight="/images/diagrams/stayonmap-map-light.png"
                alt="Schematic city map with listing markers, one highlighted with a trust radius"
                ratio="4/3"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 0 }} data-reveal>
            <div className="eyebrow">What’s next</div>
            <h2 className="section-title">More products are in progress. This page grows as they ship.</h2>
            <p className="body">
              We build products for the same reason we build client systems: a decision worth
              engineering, proven where it can’t hide. Have one worth building?
            </p>
            <div className="hero__actions" style={{ marginTop: '0.5rem' }}>
              <Link href="/contact" className="btn btn--ghost">
                <span>Talk to us</span>
                <span className="btn__arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
