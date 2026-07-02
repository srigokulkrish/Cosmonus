import Link from 'next/link'

export default function RelatedServices({ items }) {
  return (
    <section className="related-services">
      <div className="container">
        <div className="related-services__head">
          <span className="eyebrow">More solutions</span>
          <h2 className="related-services__title">Explore the rest of the platform.</h2>
        </div>
        <div className="related-services__grid">
          {items.map((r) => (
            <Link key={r.href} href={r.href} className="related-card">
              <div className="related-card__top">
                <h3 className="related-card__title">{r.label}</h3>
                <span className="related-card__arrow">→</span>
              </div>
              <p className="related-card__desc">{r.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
