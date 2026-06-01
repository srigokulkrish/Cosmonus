'use client'

import { useState } from 'react'
import CustomSelect from '@/components/CustomSelect'

const PROJECT_TYPES = [
  'Branding & identity',
  'Web development',
  'Mobile app',
  'AI / automation',
  'E-commerce',
  'Something else',
]

const BUDGETS = [
  'Under $10k',
  '$10k – $25k',
  '$25k – $75k',
  '$75k – $150k',
  '$150k+',
  'Not sure yet',
]

const NEXT_STEPS = [
  { n: '01', title: 'We review your brief', body: 'A team member reads your message and researches your space before replying.' },
  { n: '02', title: 'You get a tailored reply', body: 'Within one business day — initial thoughts, timeline estimate, and suggested next steps.' },
  { n: '03', title: 'Discovery call', body: 'A 30-minute call to align on goals, scope, and whether we\'re the right fit.' },
]

export default function ContactForm() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({
    name: '', email: '', company: '', projectType: '', budget: '', message: '',
  })

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: typeof e === 'string' ? e : e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('submitting')
    setTimeout(() => setStatus('sent'), 600)
  }

  if (status === 'sent') {
    return (
      <div className="contact-success">
        <div className="contact-success__icon" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="15" stroke="var(--success)" strokeWidth="1.5" />
            <path d="M10 16l4.5 4.5L22 10" stroke="var(--success)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3>Message received.</h3>
        <p className="muted">
          We&apos;ll reply to <strong>{form.email}</strong> within one business day.
        </p>
        <div className="contact-success__steps">
          {NEXT_STEPS.map((s) => (
            <div key={s.n} className="contact-success__step">
              <span className="contact-success__step-n mono">{s.n}</span>
              <p>{s.title}</p>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="btn-ghost"
          onClick={() => {
            setStatus('idle')
            setForm({ name: '', email: '', company: '', projectType: '', budget: '', message: '' })
          }}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="contact-form__row">
        <div className="contact-field">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" autoComplete="name" required placeholder="Your name" value={form.name} onChange={update('name')} />
        </div>
        <div className="contact-field">
          <label htmlFor="email">Work email</label>
          <input id="email" type="email" autoComplete="email" required placeholder="you@company.com" value={form.email} onChange={update('email')} />
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-field">
          <label htmlFor="company">Company <span className="contact-field__opt">(optional)</span></label>
          <input id="company" type="text" autoComplete="organization" placeholder="Acme Inc." value={form.company} onChange={update('company')} />
        </div>
        <div className="contact-field">
          <label htmlFor="projectType">Project type</label>
          <CustomSelect
            id="projectType"
            value={form.projectType}
            onChange={update('projectType')}
            options={PROJECT_TYPES}
            placeholder="Select a type"
          />
        </div>
      </div>

      <div className="contact-field">
        <label htmlFor="budget">Budget range</label>
        <CustomSelect
          id="budget"
          value={form.budget}
          onChange={update('budget')}
          options={BUDGETS}
          placeholder="Select a range"
        />
      </div>

      <div className="contact-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={6}
          required
          value={form.message}
          onChange={update('message')}
          placeholder="What are you looking to build? Share your goals, timeline, and anything else we should know."
        />
      </div>

      <div className="contact-form__actions">
        <button type="submit" className="btn-cosmonus btn-arrow" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </button>
        <p className="contact-form__note">
          By submitting you agree to our privacy policy. We never share your data.
        </p>
      </div>
    </form>
  )
}
