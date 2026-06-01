'use client'

import { useState } from 'react'

const CLIENTS = [
  {
    name: 'Taatom',
    logo: 'T',
    summary: 'Taatom scales its e-commerce platform with Cosmonus.',
    description: 'We helped Taatom rebuild their storefront with an AI-powered recommendation engine, cutting page load times by 60% and increasing conversion rates across 12 markets.',
    stats: [
      { label: 'Markets served', value: '12+' },
      { label: 'Conversion lift', value: '34%' },
    ],
    products: 'Branding, Web Development, AI Automation',
    image: 'linear-gradient(135deg, #635BFF 0%, #00D4FF 100%)',
  },
  {
    name: 'CloudAxis',
    logo: 'C',
    summary: 'CloudAxis automates infrastructure billing with Cosmonus.',
    description: 'Cosmonus designed and built a real-time billing dashboard and automated invoicing system, reducing manual overhead by 80% and accelerating their enterprise sales cycle.',
    stats: [
      { label: 'Manual overhead reduced', value: '80%' },
      { label: 'Enterprise clients onboarded', value: '150+' },
    ],
    products: 'Product Design, Automation, Dashboard Development',
    image: 'linear-gradient(135deg, #0A2540 0%, #1B3A5C 50%, #425466 100%)',
  },
  {
    name: 'Sparkline',
    logo: 'S',
    summary: 'Sparkline launches its analytics suite with Cosmonus.',
    description: 'From brand identity to product launch, we partnered with Sparkline to bring their data analytics platform to market — complete with interactive dashboards and AI-driven insights.',
    stats: [
      { label: 'Time to market', value: '4 months' },
      { label: 'Active users at launch', value: '2,000+' },
    ],
    products: 'Brand Identity, Web App, AI Integration',
    image: 'linear-gradient(135deg, #24B47E 0%, #0A2540 100%)',
  },
  {
    name: 'Apexion',
    logo: 'A',
    summary: 'Apexion modernizes its client portal with Cosmonus.',
    description: 'We redesigned Apexion\'s legacy client portal into a modern, responsive platform with automated reporting and self-service capabilities that their enterprise clients love.',
    stats: [
      { label: 'Support tickets reduced', value: '45%' },
      { label: 'Client satisfaction', value: '96%' },
    ],
    products: 'UX Redesign, Web Development, Automation',
    image: 'linear-gradient(135deg, #635BFF 0%, #FF80B5 100%)',
  },
]

export default function ClientShowcase() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="clients-section">
      <div className="container">
        {/* Header */}
        <div className="clients-header">
          <div className="clients-header__left">
            <h2 className="clients-header__title">Built for ambitious teams and enterprises</h2>
            <div className="clients-header__actions">
              <a href="/contact" className="btn-cosmonus btn-arrow">Start your project</a>
            </div>
          </div>
          <div className="clients-header__right">
            <p className="clients-header__desc">
              Leading teams trust Cosmonus to design, build, and automate the digital products that power their growth.
            </p>
          </div>
        </div>

        {/* Accordion */}
        <div className="clients-accordion">
          {CLIENTS.map((client, i) => {
            const isOpen = openIndex === i
            return (
              <div key={client.name} className={`clients-acc-item${isOpen ? ' clients-acc-item--open' : ''}`}>
                <button className="clients-acc-trigger" onClick={() => toggle(i)}>
                  <div className="clients-acc-trigger__left">
                    <span className="clients-acc-logo">{client.logo}</span>
                    <span className="clients-acc-summary">{client.summary}</span>
                  </div>
                  <span className={`clients-acc-toggle${isOpen ? ' clients-acc-toggle--open' : ''}`}>
                    {isOpen ? (
                      <span className="clients-acc-read">Read the story ›</span>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    )}
                  </span>
                </button>

                <div className="clients-acc-panel" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                  <div className="clients-acc-panel__inner">
                    <div className="clients-acc-content">
                      <div className="clients-acc-image" style={{ background: client.image }} />
                      <div className="clients-acc-details">
                        <p className="clients-acc-desc">{client.description}</p>
                        <div className="clients-acc-stats">
                          {client.stats.map((s) => (
                            <div key={s.label} className="clients-acc-stat">
                              <span className="clients-acc-stat__value">{s.value}</span>
                              <span className="clients-acc-stat__label">{s.label}</span>
                            </div>
                          ))}
                          <div className="clients-acc-stat clients-acc-stat--products">
                            <span className="clients-acc-stat__label">Services used</span>
                            <span className="clients-acc-stat__value clients-acc-stat__value--sm">{client.products}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
