import Link from 'next/link'
import RelatedServices from '@/components/RelatedServices'

const DELIVERABLES = [
  { title: 'Workflow audit', body: 'We map what your team does manually, what data you have, and where automation creates genuine leverage — before proposing a solution.' },
  { title: 'Process design', body: 'We design the automated flow before writing a line of code. The logic has to be sound first, or the automation just scales your mistakes.' },
  { title: 'AI integration', body: 'LLMs, classification, extraction, and generation embedded where they make sense — not bolted on to look modern.' },
  { title: 'Tool connections', body: 'Connect your existing stack — CRM, email, spreadsheets, Slack, Notion, and custom APIs — so data flows without human shuttling.' },
  { title: 'Testing & monitoring', body: 'Automated systems that break silently are worse than doing it manually. We test edge cases and set up alerts that fire when something\'s wrong.' },
  { title: 'Documentation & handoff', body: 'Your team understands what was built, how to maintain it, and how to extend it. No black boxes that require us to be on retainer forever.' },
]

const PROCESS = [
  { n: '01', title: 'Audit', body: 'We map every manual step in the target workflow — who does it, how long it takes, what data is involved, and where errors happen most often.' },
  { n: '02', title: 'Design', body: 'We design the automated version: what triggers it, what the AI handles, where humans stay in the loop, and how errors are caught and flagged.' },
  { n: '03', title: 'Build', body: 'We build the workflow and integrate into your existing tools. We prefer connecting to what you already have over introducing new software you\'ll abandon.' },
  { n: '04', title: 'Test', body: 'Edge cases, missing data, malformed inputs, and failure scenarios tested before production. Automated systems fail in patterned ways — we find them first.' },
  { n: '05', title: 'Deploy & improve', body: 'We monitor post-launch, capture real failure cases, and iterate. The first version handles 80% of cases; the second handles 95%. We stay until it\'s reliable.' },
]

const FAQ = [
  { q: 'What tools can you connect?', a: 'Most of the common ones: HubSpot, Salesforce, Gmail, Slack, Notion, Airtable, Google Sheets, Zapier, Make, and custom REST APIs. If you have a tool with an API, we can probably connect to it. We\'ll tell you quickly if something isn\'t feasible.' },
  { q: 'Do I need to already use AI tools?', a: 'No. We introduce AI where it adds value — classifying data, extracting information from unstructured text, drafting content, or making decisions. If a rule-based system is more reliable for your use case, we\'ll use that instead.' },
  { q: 'What happens if the automation breaks?', a: 'Every system we build includes monitoring, alerting, and defined fallbacks. If something fails, you know about it immediately and there\'s a clear path to manual handling while it\'s fixed. Silent failures are not acceptable.' },
  { q: 'How long does an automation project take?', a: 'Simpler workflows — a lead routing system or a content generation pipeline — typically take 2–3 weeks. Complex multi-step automations with many integrations can take 4–8 weeks. We scope before we commit to a timeline.' },
]

const RELATED = [
  { href: '/solutions/ai', label: 'AI Solutions', desc: 'Deeper AI integration — assistants, search, and intelligent decision-making.' },
  { href: '/products/analytics', label: 'Analytics', desc: 'Understand what your automations are doing and where to improve them.' },
  { href: '/solutions/web', label: 'Web Development', desc: 'Build the interface that connects your team to your automated systems.' },
]

const WORK = [
  { label: 'Lead qualification pipeline', img: 'Pipeline diagram' },
  { label: 'Content generation workflow', img: 'Content workflow' },
  { label: 'Customer support automation', img: 'Support automation' },
]

export const metadata = {
  title: 'AI Automation Services | Cosmonus',
  description: 'Replace manual work with intelligent AI-powered workflows. Cosmonus builds automation systems that save time, reduce errors, and scale with your business operations.',
  keywords: ['AI automation', 'workflow automation', 'business automation', 'AI integration', 'process automation', 'intelligent automation'],
  openGraph: {
    title: 'AI Automation Services | Cosmonus',
    description: 'Intelligent workflows that replace manual work and scale with your business.',
    url: 'https://cosmonus.com/products/automation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation | Cosmonus',
    description: 'Intelligent workflows that replace manual work.',
  },
}

export default function AutomationPage() {
  return (
    <>
      <section className="sol-hero sol-hero--split">
        <div className="container">
          <div className="sol-hero__split">
            <div className="sol-hero__text">
              <span className="eyebrow">Automation</span>
              <h1 className="sol-hero__title">Stop doing it manually.</h1>
              <p className="lead sol-hero__lead">
                AI-powered workflows that handle the repetitive work so your team can focus
                on the decisions that actually need a human.
              </p>
              <div className="sol-hero__actions">
                <Link href="/contact" className="btn-cosmonus btn-arrow">Automate something</Link>
                <Link href="/work" className="sol-hero__link">See examples →</Link>
              </div>
            </div>
            <div className="sol-hero__visual">
              <div className="sol-placeholder sol-placeholder--tall">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="1.5" y="5.5" width="25" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="9" cy="11.5" r="2" stroke="currentColor" strokeWidth="1.4"/><path d="M1.5 19l6-5 4 4 3.5-3.5L22 19.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Automation workflow diagram</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sol-section">
        <div className="container">
          <div className="sol-overview">
            <div className="sol-overview__left">
              <span className="eyebrow">Why this matters</span>
              <h2 className="sol-overview__title">You can&apos;t automate your way out of a bad process. But a good one? It compounds.</h2>
            </div>
            <div className="sol-overview__right">
              <p>Most automation projects fail for the same reason as most AI projects: the underlying process wasn&apos;t well-defined to begin with. If your lead routing is inconsistent when done manually, automating it just makes the inconsistency faster and harder to fix. The audit — understanding the process before touching any tooling — is where the real value comes from.</p>
              <p>The teams we work with spend hours every week on tasks that don&apos;t require judgment: moving data between tools, qualifying leads with the same set of criteria, sending follow-up emails based on predictable triggers, reformatting content for different channels. These are not creative tasks. They&apos;re costs that compound invisibly until someone adds them up.</p>
              <p>We build automations that are reliable, maintainable, and designed to fail loudly — not silently. We document everything and train your team so you&apos;re not dependent on us to keep the lights on. The goal is a system your business owns and can extend, not a black box you&apos;re renting.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sol-section">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">What we build</span>
            <h2 className="sol-section__title">Audit to handoff — no black boxes.</h2>
          </div>
          <div className="sol-grid-3">
            {DELIVERABLES.map((d) => (
              <div key={d.title} className="sol-card">
                <h4 className="sol-card__title">{d.title}</h4>
                <p className="sol-card__body">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sol-section sol-section--tinted">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">From our work</span>
            <h2 className="sol-section__title">Workflows that run while your team sleeps.</h2>
          </div>
          <div className="sol-work-grid">
            {WORK.map((w) => (
              <div key={w.label} className="sol-work-item">
                <div className="sol-placeholder">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="1.5" y="5.5" width="25" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="9" cy="11.5" r="2" stroke="currentColor" strokeWidth="1.4"/><path d="M1.5 19l6-5 4 4 3.5-3.5L22 19.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span>{w.img}</span>
                </div>
                <p className="sol-work-item__label">{w.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sol-section">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">How it works</span>
            <h2 className="sol-section__title">Audit to deploy — no guesswork.</h2>
          </div>
          <div className="sol-steps">
            {PROCESS.map((s) => (
              <div key={s.n} className="sol-step">
                <span className="sol-step__n mono">{s.n}</span>
                <h4 className="sol-step__title">{s.title}</h4>
                <p className="sol-step__body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sol-section sol-section--tinted">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">Common questions</span>
            <h2 className="sol-section__title">What clients usually ask.</h2>
          </div>
          <div className="sol-faq">
            {FAQ.map((f) => (
              <div key={f.q} className="sol-faq__item">
                <h4 className="sol-faq__q">{f.q}</h4>
                <p className="sol-faq__a">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices items={RELATED} />
    </>
  )
}
