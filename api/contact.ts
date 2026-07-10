import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

type ContactPayload = {
  name?: string
  email?: string
  phone?: string
  service?: string
  date?: string
  guests?: string
  message?: string
  airport?: string
  website?: string
}

const SERVICE_INBOX: Record<string, string> = {
  'Wedding / Event': 'weddings@connectinpuglia.com',
}

function resolveInbox(service: string): string {
  return SERVICE_INBOX[service] ?? process.env.CONTACT_TO_EMAIL ?? 'info@connectinpuglia.com'
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildEmailHtml(data: Required<Pick<ContactPayload, 'name' | 'email' | 'service'>> & ContactPayload): string {
  const rows = [
    ['Name', data.name],
    ['Email', data.email],
    ['Phone', data.phone || '—'],
    ['Service', data.service],
    ['Travel date', data.date || '—'],
    ['Guests', data.guests || '—'],
    ...(data.airport ? [['Airport', data.airport] as const] : []),
    ['Message', data.message || '—'],
  ]

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#666;font-size:13px;width:140px;">${escapeHtml(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111;font-size:14px;">${escapeHtml(value).replace(/\n/g, '<br>')}</td></tr>`,
    )
    .join('')

  return `
    <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
      <p style="font-size:12px;letter-spacing:0.15em;text-transform:uppercase;color:#b8860b;margin:0 0 8px;">New website enquiry</p>
      <h1 style="font-size:22px;font-weight:400;margin:0 0 24px;">ConnectinPuglia — ${escapeHtml(data.service)}</h1>
      <table style="width:100%;border-collapse:collapse;background:#faf9f7;border:1px solid #e8e4df;">${tableRows}</table>
      <p style="font-size:12px;color:#888;margin-top:24px;">Reply directly to this email to reach the customer.</p>
    </div>
  `
}

function validatePayload(body: ContactPayload): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  const name = body.name?.trim()
  const email = body.email?.trim()
  const service = body.service?.trim()

  if (!name || name.length > 120) return { ok: false, error: 'Invalid name.' }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return { ok: false, error: 'Invalid email address.' }
  }
  if (!service || service.length > 80) return { ok: false, error: 'Please select a service.' }

  if (body.phone && body.phone.length > 40) return { ok: false, error: 'Phone number is too long.' }
  if (body.message && body.message.length > 5000) return { ok: false, error: 'Message is too long.' }
  if (body.guests && (Number.isNaN(Number(body.guests)) || Number(body.guests) < 1 || Number(body.guests) > 100)) {
    return { ok: false, error: 'Invalid guest count.' }
  }

  return {
    ok: true,
    data: {
      name,
      email,
      service,
      phone: body.phone?.trim() || '',
      date: body.date?.trim() || '',
      guests: body.guests?.trim() || '',
      message: body.message?.trim() || '',
      airport: body.airport?.trim() || '',
    },
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'Email service is not configured.' })
  }

  const body = (req.body ?? {}) as ContactPayload

  // Honeypot — bots get a silent success
  if (body.website?.trim()) {
    return res.status(200).json({ ok: true })
  }

  const validated = validatePayload(body)
  if (!validated.ok) {
    return res.status(400).json({ error: validated.error })
  }

  const { data } = validated
  const to = resolveInbox(data.service!)
  const from = process.env.CONTACT_FROM_EMAIL ?? 'ConnectinPuglia <notifications@connectinpuglia.com>'
  const subject = `New enquiry — ${data.service}${data.date ? ` — ${data.date}` : ''}`
  const airportNote = data.airport ? ` (${data.airport})` : ''

  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: `${subject}${airportNote}`,
      html: buildEmailHtml({
        name: data.name!,
        email: data.email!,
        service: data.service!,
        phone: data.phone,
        date: data.date,
        guests: data.guests,
        message: data.message,
        airport: data.airport,
      }),
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(502).json({ error: 'Unable to send your enquiry. Please try WhatsApp or email us directly.' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return res.status(500).json({ error: 'Something went wrong. Please try again or contact us on WhatsApp.' })
  }
}
