export default function ComingSoon({ title }) {
  return (
    <section className="coming-soon-section">
      <div className="coming-soon-inner">
        {title && <span className="coming-soon-eyebrow">{title}</span>}
        <h1 className="coming-soon-title">Coming Soon</h1>
        <p className="coming-soon-desc">We&apos;re putting the finishing touches on this page.</p>
      </div>
    </section>
  )
}
