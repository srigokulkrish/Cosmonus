import Link from 'next/link'
import DiagramCanvas from '@/components/DiagramCanvas'
import { pageMeta } from '@/lib/metadata'

const STAYONMAP_URL = 'https://www.stayonmap.com/'

export const metadata = pageMeta({
  title: 'Work',
  description: 'The systems Cosmonus has engineered — StayOnMap, a broker-free rental marketplace running in production, and Cosmonus Traffic Intelligence, roads that notice.',
  path: '/work',
})

export default function WorkPage() {
  return (
    <>
      <section className="section section--hero">
        <div className="container">
          <div className="page-hero">
            <div className="eyebrow">Work</div>
            <h1 className="page-hero__title">Systems we engineered, running where they can&rsquo;t hide.</h1>
            <p className="body-lg page-hero__lede">
              Anyone can claim a system reasons well. We pick problems where a bad decision has a
              real cost — a tenant who trusts the wrong listing, a driver who runs a red light — and
              put our systems in production under our own name, where anyone can inspect the result
              before trusting us with theirs.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div data-reveal>
            <article className="case">
              <div className="case__content">
                <div className="case__meta">
                  <span className="case__index">01 /</span>
                  <span className="case__name">StayOnMap</span>
                  <span className="case__status case__status--live">In production</span>
                </div>
                <h2 className="case__title">Rental infrastructure without brokers.</h2>
                <p className="body case__body">
                  India&rsquo;s rental market runs on brokers because nobody solved trust between two
                  strangers. StayOnMap replaces that judgment with an engineered one, so owners and
                  tenants connect directly, on a live map, with no intermediary.
                </p>
                <div className="case__spec">
                  <div className="case__spec-row">
                    <span className="case__spec-k">Discovery</span>
                    <span className="case__spec-v">Map-first, with live rent prices updating as you pan</span>
                  </div>
                  <div className="case__spec-row">
                    <span className="case__spec-k">Trust</span>
                    <span className="case__spec-v">Twelve live sub-scores compounding into one score per listing</span>
                  </div>
                  <div className="case__spec-row">
                    <span className="case__spec-k">Fraud</span>
                    <span className="case__spec-v">An agent that auto-suspends high-risk listings, no human queue</span>
                  </div>
                  <div className="case__spec-row">
                    <span className="case__spec-k">Closing</span>
                    <span className="case__spec-v">Direct owner-to-tenant chat, visits, and digital lease</span>
                  </div>
                  <div className="case__spec-row">
                    <span className="case__spec-k">Stack</span>
                    <span className="case__spec-v">React · Node · PostgreSQL · Socket.io · Google Maps</span>
                  </div>
                </div>
                <div className="case__actions">
                  <Link href="/work/stayonmap" className="btn btn--primary">
                    <span>Explore the system</span>
                    <span className="btn__arrow" aria-hidden="true">→</span>
                  </Link>
                  <a href={STAYONMAP_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                    Open live product
                  </a>
                </div>
              </div>
              <div className="case__visual">
                <DiagramCanvas
                  variant="map"
                  ratio="4/3"
                  label="Schematic city map with listing markers, one highlighted with a trust radius"
                  caption="Every listing is scored across twelve trust signals before it surfaces. The violet pulse marks a verified listing and its trust radius."
                />
              </div>
            </article>

            <article className="case">
              <div className="case__content">
                <div className="case__meta">
                  <span className="case__index">02 /</span>
                  <span className="case__name">Traffic Intelligence</span>
                  <span className="case__status">In development</span>
                </div>
                <h2 className="case__title">Roads that notice.</h2>
                <p className="body case__body">
                  A city has thousands of traffic cameras and almost no one watching them. Cosmonus
                  Traffic Intelligence tracks every vehicle and pedestrian in real-world coordinates
                  and tests each movement against explicit rules.
                </p>
                <div className="case__spec">
                  <div className="case__spec-row">
                    <span className="case__spec-k">Detection</span>
                    <span className="case__spec-v">Runs at the camera; a foundation model reviews only flagged events</span>
                  </div>
                  <div className="case__spec-row">
                    <span className="case__spec-k">Reasoning</span>
                    <span className="case__spec-v">Spatial rules over tracks, in real metres, not frame classification</span>
                  </div>
                  <div className="case__spec-row">
                    <span className="case__spec-k">Coverage</span>
                    <span className="case__spec-v">Eleven violation and incident classes in the first version</span>
                  </div>
                  <div className="case__spec-row">
                    <span className="case__spec-k">Evidence</span>
                    <span className="case__spec-v">Every event keeps its clip, its track, and the rule that fired</span>
                  </div>
                  <div className="case__spec-row">
                    <span className="case__spec-k">Status</span>
                    <span className="case__spec-v">In development — first version in build</span>
                  </div>
                </div>
                <div className="case__actions">
                  <Link href="/work/traffic-intelligence" className="btn btn--primary">
                    <span>Explore the system</span>
                    <span className="btn__arrow" aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <div className="case__visual">
                <DiagramCanvas
                  variant="intersection"
                  ratio="4/3"
                  label="Schematic junction seen from above, tracked vehicles moving through lanes, one wrong-way vehicle highlighted in violet with its track number and heading"
                  caption="Every vehicle is a track with a heading and a speed in real metres. When one contradicts its lane, the rule fires, and the event carries the evidence with it."
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section-head section-head--split" style={{ marginBottom: 0 }} data-reveal>
            <div className="eyebrow">What&rsquo;s next</div>
            <h2 className="section-title">Two systems, one approach. This page grows as more ship.</h2>
            <p className="body">
              We build our own products for the same reason we build client systems: a decision
              worth engineering, proven where it can&rsquo;t hide. Have one worth building?
            </p>
            <div className="hero__actions" style={{ marginTop: '0.5rem' }}>
              <Link href="/contact" className="btn btn--primary">
                <span>Start a conversation</span>
                <span className="btn__arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
