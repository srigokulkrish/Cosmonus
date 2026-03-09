export default function Home() {
  return (
    <main className="coming-soon-bg d-flex align-items-center justify-content-center text-center" style={{ minHeight: '100vh' }}>
      <div className="mb-4" style={{ maxWidth: '800px', padding: '2rem' }}>


        {/* Logo */}
        <img src="/images/logo.png" className="mb-4" alt="Cosmonus logo" style={{ height: '56px', objectFit: 'contain' }} />

        {/* Headline */}
        <h4 className=" mb-3">
          We're cooking something cool for you! 🚀
        </h4>

        {/* Description */}
        <p className="mt-2" style={{ lineHeight: '1.75', opacity: 0.85 }}>
          Behind the scenes, we're building something exciting that will make things
          <b> smarter</b>, <b>faster</b>, and more <b>creative</b>. Stay tuned —
          something awesome is coming your way soon! ✨
        </p>

        {/* Author */}
        <p className="mt-4 small" >
          Built by{' '}
          <a href="https://www.srigokulkrishnan.com/" target="_blank" rel="noopener noreferrer" className="author-link fw-bold">
            Sri Gokul Krishnan
          </a>
        </p>
      </div>
    </main>
  )
}