export const metadata = {
  title: 'Careers at Cosmonus | Join Our Team',
  description: 'We\'re looking for people who care deeply about craft and outcomes. See open roles at Cosmonus — a studio building AI-powered digital products that ship.',
  keywords: ['cosmonus careers', 'design jobs', 'developer jobs India', 'AI startup jobs', 'product studio hiring'],
  openGraph: {
    title: 'Careers at Cosmonus | Join Our Team',
    description: 'Build things that matter. See open roles at Cosmonus.',
    url: 'https://cosmonus.com/careers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Cosmonus',
    description: 'Build things that matter. See open roles.',
  },
}

export default function CareersPage() {
  return (
    <>
      <section className="careers-hero">
        <div className="container">
          <span className="eyebrow">Careers</span>
          <h1 className="careers-hero__title">
            Come build with us.
          </h1>
          <p className="lead careers-hero__lead">
            No open roles right now — but we&apos;re always interested in hearing from people who
            care about craft, outcomes, and doing work that actually matters.
          </p>
          <a href="/contact" className="btn-cosmonus btn-arrow">Express interest</a>
        </div>
      </section>
    </>
  )
}
