'use client'
import { useState } from 'react'

const FAQ = [
  { q: 'How quickly will you reply?', a: 'Within one business day — and from an engineer who has read your message, not an autoresponder. Our first reply is usually questions about your problem, because that\'s where the work starts.' },
  { q: 'How do I know if my problem needs intelligence, not just software?', a: 'A simple test: if you can write the rules down completely and they\'ll still be right next year, you need software. If the answer depends on weighing evidence — this listing looks fraudulent, this order will be late, this case needs a human — you need a system that reasons. We\'ll tell you honestly which one you have.' },
  { q: 'What information should I include?', a: 'Describe the decision, not the technology. Who makes it today, what data they look at, how long it takes, and what it costs when it goes wrong. That\'s enough for us to think usefully about your problem — we\'ll ask the right technical questions from there.' },
  { q: 'Do you build with existing AI tools or from scratch?', a: 'We design the system from first principles and use foundation models as components inside it — the way an engineer uses a database. What we don\'t do is stitch together off-the-shelf automation tools and call it AI. The reasoning logic, the domain model, and the oversight architecture are engineered for your operation specifically.' },
  { q: 'How do we trust a system that makes decisions on its own?', a: 'You shouldn\'t trust one that can\'t explain itself — so we don\'t build those. Every decision our systems make is traceable to the evidence behind it, every action is logged immutably, and autonomy is scoped decision by decision: the system acts alone only where you\'ve granted it that authority, and routes to a person everywhere else.' },
  { q: 'How long does it take to reach production?', a: 'A working prototype against your real data in weeks, not quarters — that\'s the point where you judge us on behavior, not promises. Production hardening depends on the stakes of the decisions involved; we\'ll give you a realistic path upfront, not an optimistic one we can\'t keep.' },
  { q: 'What does an engagement cost?', a: 'It depends on the complexity of the decision, the state of your data, and the level of autonomy the system needs. We scope a first phase with a fixed price and a defined outcome before anything starts — you\'ll never fund an open-ended research project.' },
  { q: 'What does the process look like after I reach out?', a: 'You describe the problem, we reply within one business day, then we do a 30-minute working session on the decision itself. If there\'s a fit, we scope the first phase — the smallest system that changes a real decision — and start building.' },
  { q: 'Can I see what you\'ve actually built?', a: 'Yes — StayOnMap is our own product running in production, with live trust scoring and autonomous fraud detection you can inspect yourself. We\'d rather show you a running system than a slide about one.' },
  { q: 'Do you sign NDAs?', a: 'Yes, no problem at all. If your problem involves sensitive data or operations, send your NDA before the call and we\'ll review and sign it.' },
  { q: 'What happens when the system gets something wrong?', a: 'It will — every system does. Ours are built for it: confidence thresholds route uncertain cases to people, every wrong decision is traceable to the reasoning that produced it, and that trace is exactly what we use to fix the logic. A failure you can diagnose is an engineering problem; one you can\'t is a liability.' },
  { q: 'Who maintains the system after it ships?', a: 'We do, if you want us to. Intelligent systems need operating — decision quality measured, models retrained as your operation changes, autonomy expanded as trust is earned. Most clients keep us engaged after deployment; we build for the long run, not the handoff.' },
]

export default function ContactFaqAccordion() {
  const [open, setOpen] = useState(null)

  function toggle(i) {
    setOpen(prev => prev === i ? null : i)
  }

  return (
    <div className="cfaq">
      {FAQ.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={i} className={`cfaq__item${isOpen ? ' cfaq__item--open' : ''}`}>
            <button
              className="cfaq__trigger"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
            >
              <span className="cfaq__question">{f.q}</span>
              <span className="cfaq__icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M5.646 3.646a.5.5 0 0 0 0 .708L9.293 8 5.646 11.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0z"/>
                </svg>
              </span>
            </button>
            <div className="cfaq__body">
              <div className="cfaq__body-inner">
                <p className="cfaq__answer">{f.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
