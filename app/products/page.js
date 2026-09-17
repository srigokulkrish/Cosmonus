import Link from 'next/link'
import DiagramCanvas from '@/components/DiagramCanvas'

const STAYONMAP_URL = 'https://www.stayonmap.com/'

export const metadata = {
  title: 'Products',
  description: 'We build intelligence for real-world problems and prove it in production under our own name. StayOnMap, a broker-free rental marketplace, and Cosmonus Traffic Intelligence, roads that notice.',
  alternates: { canonical: '/products' },
}

export default function ProductsPage() {
  return (
    <>
      <section className="section section--hero">
        <div className="container">
          <div className="page-hero">
            <div className="eyebrow">Products</div>
            <h1 className="page-hero__title">Intelligence built for real-world problems.</h1>
            <p className="body-lg page-hero__lede">
              Anyone can claim a system reasons well. We pick problems where a bad decision has a
              real cost — a tenant who trusts the wrong listing, a driver who runs a red light —
              and put our systems in production under our own name, where anyone can inspect the
              result before trusting us with theirs.
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
              <DiagramCanvas
                variant="map"
                ratio="4/3"
                label="Schematic city map with listing markers, one highlighted with a trust radius"
                caption="Every listing is scored across twelve trust signals before it surfaces. The violet pulse marks a verified listing and its trust radius."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature" data-reveal>
            <div className="feature__content">
              <div className="eyebrow feature__eyebrow">Product — Cosmonus Traffic Intelligence · in development</div>
              <h2 className="feature__title">Roads that notice.</h2>
              <p className="body feature__body">
                A city has thousands of traffic cameras and almost no one watching them. Cosmonus
                Traffic Intelligence tracks every vehicle and pedestrian in real-world coordinates,
                tests each movement against explicit rules, and files every violation, collision,
                or hit-and-run with its clip, its track, and the reason it fired.
              </p>
              <ul className="feature__list">
                <li>Eleven violation and incident classes in the first version</li>
                <li>Detection at the camera; a foundation model reviews only flagged events</li>
                <li>Every event keeps the evidence and the rule behind it</li>
              </ul>
              <div className="hero__actions">
                <Link href="/products/traffic-intelligence" className="btn btn--primary">
                  <span>See Traffic Intelligence</span>
                  <span className="btn__arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="feature__visual">
              <DiagramCanvas
                variant="intersection"
                ratio="4/3"
                label="Schematic junction seen from above, tracked vehicles moving through lanes, one wrong-way vehicle highlighted in violet with its track number and heading"
                caption="Every vehicle is a track with a heading and a speed in real metres. When one contradicts its lane, the rule fires, and the event carries the evidence with it."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 0 }} data-reveal>
            <div className="eyebrow">What’s next</div>
            <h2 className="section-title">Two products, one approach. This page grows as more ship.</h2>
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
