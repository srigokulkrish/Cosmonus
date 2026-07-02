export const metadata = {
  title: 'Careers at Cosmonus | Engineer Intelligence',
  description: 'Work on systems that reason and decide — reasoning engines, agent orchestration, knowledge systems — built from first principles and run in production. See what it takes to join Cosmonus.',
  keywords: ['cosmonus careers', 'AI engineering jobs', 'machine learning jobs India', 'intelligent systems careers', 'AI startup hiring'],
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers at Cosmonus | Engineer Intelligence',
    description: 'Work on systems that reason and decide — built from first principles, run in production.',
    url: 'https://cosmonus.com/careers',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Cosmonus',
    description: 'Work on systems that reason and decide — built from first principles, run in production.',
    images: ['/images/ICON.png'],
  },
}

export default function CareersPage() {
  return (
    <>
      <section className="careers-hero">
        <div className="container">
          <span className="eyebrow">Careers</span>
          <h1 className="careers-hero__title">
            The data exists. The decision doesn&apos;t.
          </h1>
          <p className="lead careers-hero__lead">
            Somewhere a team is sitting on the signal they need and still guessing — because nothing
            understands it, reasons over it, and acts. Closing that gap is the engineering problem
            we work on every day. We have no open roles right now, but if this is the problem you
            want to spend years on, we want to hear from you.
          </p>
          <a href="/contact" className="btn-cosmonus btn-arrow">Introduce yourself</a>
        </div>
      </section>
    </>
  )
}
