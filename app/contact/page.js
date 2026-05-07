'use client'

import { useState } from 'react'

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

export default function ContactPage() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  })

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('submitting')
    setTimeout(() => setStatus('sent'), 600)
  }

  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1 className="contact-hero__title">Let&apos;s build something together.</h1>
          <p className="lead contact-hero__lead">
            Tell us about your project. We&apos;ll get back within one business day with next steps,
            timelines, and a clear path forward.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <aside className="contact-aside">
              <div className="contact-aside__block">
                <h6 className="contact-aside__head">Email</h6>
                <a href="mailto:hello@cosmonus.com" className="contact-aside__link">hello@cosmonus.com</a>
              </div>
              <div className="contact-aside__block">
                <h6 className="contact-aside__head">Response time</h6>
                <p className="contact-aside__text">Within one business day, Mon – Fri.</p>
              </div>
              <div className="contact-aside__block">
                <h6 className="contact-aside__head">Working hours</h6>
                <p className="contact-aside__text">9:00 – 18:00 IST</p>
              </div>
              <div className="contact-aside__block">
                <h6 className="contact-aside__head">Follow</h6>
                <div className="contact-aside__socials">
                  <a href="#" aria-label="LinkedIn">LinkedIn</a>
                  <a href="#" aria-label="X (Twitter)">X</a>
                  <a href="#" aria-label="GitHub">GitHub</a>
                </div>
              </div>
            </aside>

            <div className="contact-form-wrap">
              {status === 'sent' ? (
                <div className="contact-success">
                  <h3>Thanks — your message is on its way.</h3>
                  <p className="muted">
                    We&apos;ve received your details and will reply to <strong>{form.email}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    className="btn-ghost"
                    onClick={() => {
                      setStatus('idle')
                      setForm({ name: '', email: '', company: '', projectType: '', budget: '', message: '' })
                    }}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={onSubmit} noValidate>
                  <div className="contact-form__row">
                    <div className="contact-field">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={form.name}
                        onChange={update('name')}
                      />
                    </div>
                    <div className="contact-field">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={update('email')}
                      />
                    </div>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="company">Company <span className="contact-field__opt">(optional)</span></label>
                    <input
                      id="company"
                      type="text"
                      autoComplete="organization"
                      value={form.company}
                      onChange={update('company')}
                    />
                  </div>

                  <div className="contact-form__row">
                    <div className="contact-field">
                      <label htmlFor="projectType">Project type</label>
                      <select id="projectType" value={form.projectType} onChange={update('projectType')}>
                        <option value="">Select an option</option>
                        {PROJECT_TYPES.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                    <div className="contact-field">
                      <label htmlFor="budget">Budget</label>
                      <select id="budget" value={form.budget} onChange={update('budget')}>
                        <option value="">Select an option</option>
                        {BUDGETS.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows={6}
                      required
                      value={form.message}
                      onChange={update('message')}
                      placeholder="What are you looking to build? Goals, timeline, anything we should know."
                    />
                  </div>

                  <div className="contact-form__actions">
                    <button
                      type="submit"
                      className="btn-cosmonus btn-arrow"
                      disabled={status === 'submitting'}
                    >
                      {status === 'submitting' ? 'Sending…' : 'Send message'}
                    </button>
                    <p className="contact-form__note">
                      By submitting, you agree to our privacy policy.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
