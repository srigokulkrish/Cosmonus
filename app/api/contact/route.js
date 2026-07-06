import { Resend } from 'resend'

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const name = String(body.name || '').trim().slice(0, 200)
  const email = String(body.email || '').trim().slice(0, 200)
  const company = String(body.company || '').trim().slice(0, 200)
  const projectType = String(body.projectType || '').trim().slice(0, 100)
  const budget = String(body.budget || '').trim().slice(0, 100)
  const message = String(body.message || '').trim().slice(0, 5000)

  if (!name || !email || !message) {
    return Response.json({ error: 'Name, email, and message are required.' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const to = process.env.CONTACT_TO_EMAIL

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    company && `Company: ${company}`,
    projectType && `Project type: ${projectType}`,
    budget && `Budget: ${budget}`,
    '',
    message,
  ].filter(Boolean)

  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL || 'Cosmonus Contact <onboarding@resend.dev>',
    to: [to],
    replyTo: email,
    subject: `New inquiry from ${name}${company ? ` (${company})` : ''}`,
    text: lines.join('\n'),
  })

  if (error) {
    console.error('Resend error:', error)
    return Response.json({ error: 'Something went wrong sending your message. Please email us directly.' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
