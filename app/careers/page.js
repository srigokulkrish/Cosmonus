export const metadata = {
  title: 'Careers at Cosmonus | Build the Intelligence Layer',
  description: 'Work on the layer that turns scattered data into live decisions — the infrastructure other teams build their products on. See what it takes to join Cosmonus.',
  keywords: ['cosmonus careers', 'AI infrastructure jobs', 'machine learning jobs India', 'intelligence platform careers', 'AI startup hiring'],
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers at Cosmonus | Build the Intelligence Layer',
    description: 'Build the infrastructure other teams turn their data into decisions on. See what it takes to join Cosmonus.',
    url: 'https://cosmonus.com/careers',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Cosmonus',
    description: 'Build the infrastructure other teams turn their data into decisions on.',
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
            Somewhere a team is sitting on the signal they need and still guessing — because
            nothing connects it, reasons over it, and acts. That gap is the work here. We have
            no open roles right now, but if closing it is the problem you want, tell us.
          </p>
          <a href="/contact" className="btn-cosmonus btn-arrow">Express interest</a>
        </div>
      </section>
    </>
  )
}
