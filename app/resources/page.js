import Link from 'next/link'

const GUIDES = [
  {
    tag: 'Foundations',
    title: 'What makes a system intelligent (and why most "AI features" aren\'t)',
    desc: 'The difference between software that follows rules and a system that reasons — stated precisely.',
    readTime: '6 min read',
  },
  {
    tag: 'Strategy',
    title: 'Why your data isn\'t driving decisions — and what to fix first',
    desc: 'A framework for diagnosing why data sits unused — before you buy another dashboard.',
    readTime: '8 min read',
  },
  {
    tag: 'Architecture',
    title: 'A plain-language guide to RAG, knowledge systems, and agent orchestration',
    desc: 'What each technique does, when to use it, and what breaks when you pick wrong.',
    readTime: '10 min read',
  },
  {
    tag: 'Strategy',
    title: 'Scoping your first intelligent system: shipped vs stalled',
    desc: 'Define the smallest system that changes a real decision — and defend that scope.',
    readTime: '7 min read',
  },
  {
    tag: 'Architecture',
    title: 'Modeling your business so software can reason about it',
    desc: 'What to model, in what order, and why the domain model matters more than the AI model.',
    readTime: '9 min read',
  },
  {
    tag: 'Trust',
    title: 'Explainability, oversight, and autonomy: how much to grant, and when',
    desc: 'The trade-offs we weigh before any system is allowed to decide on its own.',
    readTime: '5 min read',
  },
]

const CHECKLISTS = [
  {
    title: 'Production readiness checklist',
    items: 14,
    desc: 'Verify before a system decides anything live — evaluation, latency, oversight, and monitoring.',
  },
  {
    title: 'Data readiness checklist',
    items: 11,
    desc: 'What your data needs before it can feed reasoning — sources, schemas, quality, governance.',
  },
  {
    title: 'Use case scoping checklist',
    items: 9,
    desc: 'Questions to answer before you build — stops scope creep and stalled pilots.',
  },
  {
    title: 'Decision audit checklist',
    items: 12,
    desc: 'Map how decisions are actually made today — find where intelligence adds real leverage.',
  },
]

const GLOSSARY = [
  { term: 'Reasoning Engine', def: 'The core of an intelligent system — logic that weighs evidence, draws conclusions, and can show its work.' },
  { term: 'Knowledge System', def: 'Your entities, relationships, and history structured into a model software can reason over.' },
  { term: 'Agent Orchestration', def: 'Coordinating autonomous workers that plan, act, and verify their own output — within bounds you set.' },
  { term: 'Decision Support', def: 'The system assembles evidence and recommends; a person makes the call.' },
  { term: 'Explainability', def: 'Every decision traceable to the evidence and reasoning that produced it.' },
  { term: 'RAG', def: 'Retrieval-Augmented Generation — AI that answers from your data, not just its training.' },
]

const TOOLS = [
  { name: 'Figma', category: 'Design', desc: 'Where we shape how intelligence surfaces to users. The free tier is genuinely useful.' },
  { name: 'Vercel', category: 'Hosting', desc: 'The fastest way to deploy a Next.js project — zero-config, global edge network.' },
  { name: 'AWS', category: 'Infrastructure', desc: 'Cloud infrastructure for scalable data pipelines, storage, and compute.' },
  { name: 'Supabase', category: 'Backend', desc: 'Database, auth, and storage with pgvector for embeddings and a generous free tier.' },
  { name: 'Google Analytics', category: 'Analytics', desc: 'The baseline for understanding traffic, acquisition, and user behaviour.' },
  { name: 'Anthropic Claude', category: 'AI', desc: 'The model we build reasoning and agent features on — strong at reasoning and long context.' },
]

const TOPICS = [
  { label: 'All', active: true },
  { label: 'Foundations' },
  { label: 'Strategy' },
  { label: 'Architecture' },
  { label: 'Trust' },
]

export const metadata = {
  title: 'Resources | How to Think About Intelligent Systems',
  description: 'How intelligent systems work, where they deliver measurable value, and how to adopt them without stalling — guides, checklists, and definitions from the engineers who build them.',
  keywords: ['intelligent systems guides', 'AI architecture resources', 'reasoning systems', 'AI adoption strategy', 'RAG guide', 'AI explainability'],
  alternates: { canonical: '/resources' },
  openGraph: {
    title: 'Resources | How to Think About Intelligent Systems',
    description: 'Guides, checklists, and definitions from the engineers who build intelligent systems — all free.',
    url: 'https://cosmonus.com/resources',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resources from Cosmonus',
    description: 'How to think about intelligent systems — from the engineers who build them.',
    images: ['/images/ICON.png'],
  },
}

export default function ResourcesPage() {
  return (
    <>
      <section className="res-hero">
        <div className="container">
          <span className="eyebrow">Resources</span>
          <h1 className="res-hero__title">The questions you ask<br />before you build.</h1>
          <p className="lead res-hero__lead">
            &ldquo;Is this a software problem or an intelligence problem?&rdquo; &ldquo;How much
            autonomy should the system get?&rdquo; &ldquo;What&apos;s the smallest thing worth
            shipping?&rdquo; These are the answers we give founders and operators when they ask
            &mdash; written down, free, no email gate.
          </p>
        </div>
      </section>

      {/* Guides */}
      <section className="res-section">
        <div className="container">
          <div className="res-section__head">
            <div>
              <span className="eyebrow">Guides</span>
              <h2 className="res-section__title">Start with the question you&apos;re stuck on.</h2>
            </div>
            <div className="res-topic-pills">
              {TOPICS.map((t) => (
                <button key={t.label} type="button" className={`blog-tag${t.active ? ' blog-tag--active' : ''}`}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <div className="res-guides-grid">
            {GUIDES.map((g) => (
              <article key={g.title} className="res-guide-card">
                <div className="res-guide-card__top">
                  <span className="res-guide-card__tag">{g.tag}</span>
                  <span className="res-guide-card__time">{g.readTime}</span>
                </div>
                <h3 className="res-guide-card__title">{g.title}</h3>
                <p className="res-guide-card__desc">{g.desc}</p>
                <div className="res-guide-card__footer">
                  <span className="res-guide-card__cta">Read guide →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Checklists */}
      <section className="res-section res-section--tinted">
        <div className="container">
          <div className="res-section__head">
            <div>
              <span className="eyebrow">Checklists</span>
              <h2 className="res-section__title">The things you&apos;ll wish you&apos;d checked before you shipped.</h2>
            </div>
          </div>
          <div className="res-checklists-grid">
            {CHECKLISTS.map((c) => (
              <div key={c.title} className="res-checklist-card">
                <div className="res-checklist-card__icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="1" y="1" width="16" height="16" rx="3" stroke="var(--brand)" strokeWidth="1.4"/>
                    <path d="M5 9l3 3 5-5" stroke="var(--brand)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="res-checklist-card__body">
                  <h4 className="res-checklist-card__title">{c.title}</h4>
                  <p className="res-checklist-card__desc">{c.desc}</p>
                </div>
                <div className="res-checklist-card__footer">
                  <span className="res-checklist-card__count mono">{c.items} items</span>
                  <span className="res-checklist-card__dl">Coming soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools we recommend */}
      <section className="res-section">
        <div className="container">
          <div className="res-section__head">
            <div>
              <span className="eyebrow">Tools we recommend</span>
              <h2 className="res-section__title">When you ask what we actually build with.</h2>
              <p className="res-tools-intro">No affiliate links, no sponsorships &mdash; just what we actually build with, and why. Most have a free tier.</p>
            </div>
          </div>
          <div className="res-tools-grid">
            {TOOLS.map((t) => (
              <div key={t.name} className="res-tool">
                <div className="res-tool__header">
                  <span className="res-tool__name">{t.name}</span>
                  <span className="res-tool__category">{t.category}</span>
                </div>
                <p className="res-tool__desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="res-section res-section--tinted">
        <div className="container">
          <div className="res-section__head">
            <div>
              <span className="eyebrow">Glossary</span>
              <h2 className="res-section__title">The words that get thrown around &mdash; in plain English.</h2>
            </div>
          </div>
          <div className="res-glossary">
            {GLOSSARY.map((g) => (
              <div key={g.term} className="res-glossary__item">
                <dt className="res-glossary__term mono">{g.term}</dt>
                <dd className="res-glossary__def">{g.def}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
