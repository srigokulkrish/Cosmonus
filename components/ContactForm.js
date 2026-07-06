'use client'

import { useState } from 'react'
import CustomSelect from '@/components/CustomSelect'

const PROJECT_TYPES = [
  'Reasoning & decision system',
  'Agent orchestration',
  'Knowledge system',
  'Prediction & forecasting',
  'Workflow intelligence',
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
  { n: '01', title: 'We study the problem', body: 'We read your message and think about the decision, the data, and the architecture before replying.' },
  { n: '02', title: 'You get an engineering answer', body: 'Within one business day — whether intelligence helps here, and what we\'d build first.' },
  { n: '03', title: 'Working session', body: 'A 30-minute call to walk the problem together — engineer to engineer, not a sales script.' },
]

export default function ContactForm() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '', email: '', company: '', projectType: '', budget: '', message: '',
  })

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: typeof e === 'string' ? e : e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('submitting')
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong.')
      }
      setStatus('sent')
    } catch (err) {
      setStatus('idle')
      setError(err.message || 'Something went wrong. Please email srigokulkrishnan@gmail.com directly.')
    }
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
          className="btn btn--ghost"
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
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" autoComplete="name" required placeholder="Your name" value={form.name} onChange={update('name')} />
        </div>
        <div className="field">
          <label htmlFor="email">Work email</label>
          <input id="email" type="email" autoComplete="email" required placeholder="you@company.com" value={form.email} onChange={update('email')} />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="company">Company <span className="field__opt">(optional)</span></label>
          <input id="company" type="text" autoComplete="organization" placeholder="Acme Inc." value={form.company} onChange={update('company')} />
        </div>
        <div className="field">
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

      <div className="field">
        <label htmlFor="budget">Budget range</label>
        <CustomSelect
          id="budget"
          value={form.budget}
          onChange={update('budget')}
          options={BUDGETS}
          placeholder="Select a range"
        />
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={6}
          required
          value={form.message}
          onChange={update('message')}
          placeholder="Describe the decision or problem: who makes it today, what data feeds it, and what it costs when it goes wrong. Timelines welcome."
        />
      </div>

      {error && <p className="form-error" role="alert">{error}</p>}

      <div className="form-actions">
        <button type="submit" className="btn btn--primary" disabled={status === 'submitting'}>
          <span>{status === 'submitting' ? 'Sending…' : 'Send message'}</span>
          <span className="btn__arrow" aria-hidden="true">→</span>
        </button>
        <p className="form-note">
          By submitting you agree to our privacy policy. We never share your data.
        </p>
      </div>
    </form>
  )
}
