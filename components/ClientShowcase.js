'use client'

import { useState } from 'react'

const CLIENTS = [
  {
    name: 'Taatom',
    logo: 'T',
    summary: 'Taatom turns catalogue and behaviour data into predictive intelligence.',
    description: 'Predictive intelligence over a unified knowledge graph powers live recommendations — lifting conversion across 12 markets, response times down 60%.',
    stats: [
      { label: 'Markets served', value: '12+' },
      { label: 'Conversion lift', value: '34%' },
    ],
    products: 'Knowledge Graph, Predictive Intelligence, Decision Automation',
    image: 'linear-gradient(135deg, #635BFF 0%, #3882F6 100%)',
  },
  {
    name: 'CloudAxis',
    logo: 'C',
    summary: 'CloudAxis automates infrastructure billing with enterprise intelligence.',
    description: 'Usage, finance, and CRM in one model, with decision automation resolving invoicing in real time — 80% less manual overhead.',
    stats: [
      { label: 'Manual overhead reduced', value: '80%' },
      { label: 'Enterprise clients onboarded', value: '150+' },
    ],
    products: 'Enterprise Intelligence, Decision Automation, Agent Intelligence',
    image: 'linear-gradient(135deg, #0A2540 0%, #1B3A5C 50%, #425466 100%)',
  },
  {
    name: 'Sparkline',
    logo: 'S',
    summary: 'Sparkline launches its analytics suite on the Intelligence Layer.',
    description: 'A live knowledge graph surfaced through knowledge intelligence took their analytics platform to market in four months — every insight traceable to its source.',
    stats: [
      { label: 'Time to market', value: '4 months' },
      { label: 'Active users at launch', value: '2,000+' },
    ],
    products: 'Knowledge Graph, Knowledge Intelligence, Analytics',
    image: 'linear-gradient(135deg, #24B47E 0%, #0A2540 100%)',
  },
  {
    name: 'Apexion',
    logo: 'A',
    summary: 'Apexion modernizes its client portal with agent intelligence.',
    description: 'Rebuilt on the Intelligence Layer, where agents handle reporting and self-service against a unified enterprise model — support tickets down 45%.',
    stats: [
      { label: 'Support tickets reduced', value: '45%' },
      { label: 'Client satisfaction', value: '96%' },
    ],
    products: 'Enterprise Intelligence, Agent Intelligence, Decision Automation',
    image: 'linear-gradient(135deg, #635BFF 0%, #3882F6 100%)',
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
            <h2 className="clients-header__title">What changes when your data can decide</h2>
            <div className="clients-header__actions">
              <a href="/contact" className="btn-cosmonus btn-arrow">Start your project</a>
            </div>
          </div>
          <div className="clients-header__right">
            <p className="clients-header__desc">
              Leading teams run on the Cosmonus Intelligence Layer — data in, decisions out.
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
                            <span className="clients-acc-stat__label">Intelligence applied</span>
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
