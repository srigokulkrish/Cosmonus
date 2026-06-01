'use client'
import { useState } from 'react'

const FAQ = [
  { q: 'How quickly will you reply?', a: 'Within one business day — always. You\'ll hear from a real person, not an autoresponder.' },
  { q: 'Do you take on small projects?', a: 'Yes. Some of our best work has come from focused, small-scope projects. We\'ll tell you honestly if something is too small to be worth your investment in an agency.' },
  { q: 'What information should I include?', a: 'As much or as little as you have. A rough idea of what you need, your timeline, and a budget range is enough to start. We\'ll ask the right questions from there.' },
  { q: 'Do you work with international clients?', a: 'Yes. We work async-first and are set up to collaborate across time zones. Most of our process is documented and transparent, so location rarely matters.' },
  { q: 'How much does a typical project cost?', a: 'It depends on scope, but here\'s a rough guide: a focused marketing site starts around ₹60k–₹1.2L, a web app or full brand project typically runs ₹1.5L–₹5L+. We\'ll give you a clear, itemised quote before anything starts — no surprises.' },
  { q: 'How long will my project take?', a: 'A landing page: 1–2 weeks. A marketing site: 2–4 weeks. A web app or full brand identity: 6–12 weeks. We give you a realistic timeline upfront, not an optimistic one we can\'t keep.' },
  { q: 'How many revisions do I get?', a: 'We don\'t cap revisions by number — we structure feedback into defined rounds so it stays productive. Typically two structured rounds per major deliverable. We\'d rather get it right than rush to a finish line.' },
  { q: 'What does the process look like after I reach out?', a: 'You fill in the form, we review and reply within one business day, then we schedule a 30-minute discovery call. From there we scope the project, send a proposal, and once agreed we kick off. Simple.' },
  { q: 'Can I see examples of your past work?', a: 'Yes — check out our work page and the StayOnMap case study. We\'re also happy to share more relevant examples on the discovery call depending on what you\'re building.' },
  { q: 'Do you sign NDAs?', a: 'Yes, no problem at all. If your project involves sensitive information, send us your NDA before the call and we\'ll review and sign it.' },
  { q: 'What if I\'m not happy with the output?', a: 'We don\'t hide behind contracts. If something isn\'t right, we fix it — that\'s the job. We\'ve never had a client walk away unhappy, and we\'d like to keep it that way.' },
  { q: 'Do you offer ongoing support after launch?', a: 'Yes. We offer monthly retainers for teams who want continued support, updates, and feature development after the project ships. Many clients stay on after launch — we prefer long relationships over one-off jobs.' },
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
