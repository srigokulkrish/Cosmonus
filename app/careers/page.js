import Link from 'next/link'

export const metadata = {
  title: 'Careers',
  description: 'Cosmonus has no open roles right now. If closing the gap between the data that exists and the decision that doesn’t get made well is a problem you want to spend years on, we want to hear from you.',
  alternates: { canonical: '/careers' },
}

export default function CareersPage() {
  return (
    <section className="section section--hero">
      <div className="container">
        <div className="page-hero">
          <div className="eyebrow">Careers</div>
          <h1 className="page-hero__title">The data exists. The decision doesn&rsquo;t.</h1>
          <p className="body-lg page-hero__lede">
            Somewhere a team is sitting on the signal they need and still guessing, because
            nothing understands it, reasons over it, and acts. Closing that gap is the
            engineering problem we work on every day. We have no open roles right now — but
            if this is the problem you want to spend years on, we want to hear from you.
          </p>
          <div className="hero__actions">
            <Link href="/contact" className="btn btn--primary">
              <span>Introduce yourself</span>
              <span className="btn__arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
