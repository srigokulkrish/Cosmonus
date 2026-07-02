'use client'

import { useState } from 'react'

const CLIENTS = [
  {
    name: 'Taatom',
    logo: 'T',
    summary: 'Taatom\'s catalogue knew everything. Its recommendations knew nothing.',
    description: 'The data existed — catalogue, behaviour, twelve markets of it — but nothing reasoned over it. We modeled products and buyers into one knowledge system and put prediction on top: recommendations now decide live, per market. Conversion up 34%, response times down 60%.',
    stats: [
      { label: 'Markets served', value: '12+' },
      { label: 'Conversion lift', value: '34%' },
    ],
    products: 'Knowledge Systems, Prediction, Reasoning Engine',
    image: 'linear-gradient(135deg, #635BFF 0%, #3882F6 100%)',
  },
  {
    name: 'CloudAxis',
    logo: 'C',
    summary: 'CloudAxis billed complex infrastructure by hand — every month, every client.',
    description: 'Usage, finance, and CRM each told a different story, so people reconciled them. We built one model of the truth and a reasoning layer that resolves invoicing in real time, escalating only genuine disputes to humans — 80% less manual overhead across 150+ enterprise clients.',
    stats: [
      { label: 'Manual overhead reduced', value: '80%' },
      { label: 'Enterprise clients onboarded', value: '150+' },
    ],
    products: 'Workflow Intelligence, Reasoning Engine, Human Oversight',
    image: 'linear-gradient(135deg, #0A2540 0%, #1B3A5C 50%, #425466 100%)',
  },
  {
    name: 'Sparkline',
    logo: 'S',
    summary: 'Sparkline needed an analytics product its customers could interrogate, not just read.',
    description: 'We engineered the knowledge system underneath their product: every metric connected to the entities behind it, every insight traceable to its source. That architecture took them to market in four months with 2,000+ users at launch.',
    stats: [
      { label: 'Time to market', value: '4 months' },
      { label: 'Active users at launch', value: '2,000+' },
    ],
    products: 'Knowledge Systems, Explainability, Analytics',
    image: 'linear-gradient(135deg, #24B47E 0%, #0A2540 100%)',
  },
  {
    name: 'Apexion',
    logo: 'A',
    summary: 'Apexion\'s clients asked the same questions daily. People answered them daily.',
    description: 'We rebuilt their client portal around agents that reason over a unified model of each account — reporting and self-service answered by the system, judgment calls routed to staff. Support tickets down 45%, satisfaction at 96%.',
    stats: [
      { label: 'Support tickets reduced', value: '45%' },
      { label: 'Client satisfaction', value: '96%' },
    ],
    products: 'Agent Orchestration, Decision Support, Human Oversight',
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
            <h2 className="clients-header__title">The problem, the intelligence, the outcome</h2>
            <div className="clients-header__actions">
              <a href="/contact" className="btn-cosmonus btn-arrow">Solve a complex problem</a>
            </div>
          </div>
          <div className="clients-header__right">
            <p className="clients-header__desc">
              Not a services list — the actual problems, how intelligence was applied, and what it measurably changed.
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
