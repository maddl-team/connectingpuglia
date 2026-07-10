import { Helmet } from 'react-helmet-async'
import { useEffect, useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Phone, Mail, MapPin, MessageCircle, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import HeroImage from '../components/HeroImage'
import TwitterMeta from '../components/TwitterMeta'

type FormData = {
  name: string
  email: string
  phone: string
  service: string
  date: string
  guests: string
  message: string
  airport: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  guests: '',
  message: '',
  airport: '',
}

const SERVICE_OPTIONS = [
  'Airport Transfer',
  'Port / Ferry Transfer',
  'Hourly Chauffeur',
  'Private Tour',
  'Wedding / Event',
  'Custom Multi-Day Itinerary',
  'Other Enquiry',
] as const

function mapServiceParam(value: string | null): string {
  if (!value) return ''
  const decoded = decodeURIComponent(value.replace(/\+/g, ' '))
  if (SERVICE_OPTIONS.includes(decoded as (typeof SERVICE_OPTIONS)[number])) return decoded
  if (decoded === 'Port Transfer') return 'Port / Ferry Transfer'
  return decoded
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const service = mapServiceParam(searchParams.get('service'))
    const airport = searchParams.get('airport')?.trim() ?? ''
    if (service || airport) {
      setForm((prev) => ({
        ...prev,
        ...(service ? { service } : {}),
        ...(airport ? { airport } : {}),
      }))
    }
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (error) setError('')
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    const formEl = e.currentTarget
    const honeypot = (formEl.elements.namedItem('website') as HTMLInputElement | null)?.value ?? ''

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, website: honeypot }),
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        setError(result.error ?? 'Unable to send your enquiry. Please try WhatsApp or email us directly.')
        return
      }

      setSubmitted(true)
      setForm(initialForm)
    } catch {
      setError('Network error. Please check your connection or contact us on WhatsApp.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Book a Transfer or Tour | ConnectinPuglia</title>
        <meta name="description" content="Request a quote for private transfers and tours in Puglia. Fixed price, no surprises. ConnectinPuglia — Puglia's luxury transfer specialist." />
        <link rel="canonical" href="https://connectinpuglia.com/quote-contact" />
        <meta property="og:title" content="Book a Transfer or Tour | ConnectinPuglia" />
        <meta property="og:description" content="Request a quote for private transfers and tours in Puglia. Fixed price, no surprises. ConnectinPuglia — Puglia's luxury transfer specialist." />
        <meta property="og:url" content="https://connectinpuglia.com/quote-contact" />
        <meta property="og:image" content="https://connectinpuglia.com/images/main/contact-og.webp" />
        <meta property="og:type" content="website" />
      </Helmet>
      <TwitterMeta
        title="Book a Transfer or Tour | ConnectinPuglia"
        description="Request a quote for private transfers and tours in Puglia. Fixed price, no surprises. ConnectinPuglia — Puglia's luxury transfer specialist."
        image="https://connectinpuglia.com/images/main/contact-og.webp"
      />

      {/* Page Header */}
      <section className="relative overflow-hidden bg-charcoal-900 pt-36 pb-20">
        <HeroImage src="/images/main/contact-hero.webp" alt="Book Your Experience" />
        <div className="absolute inset-0 bg-charcoal-900/75" />
        <div className="relative z-10 container-page text-white">
          <p className="section-label text-gold-400 mb-4">Get in Touch</p>
          <span className="divider-gold mb-6 block" />
          <h1 className="font-serif font-light text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Book Your Experience
          </h1>
          <p className="font-sans text-white/70 max-w-lg mt-4 leading-relaxed">
            Fill in the form below and we will respond with a personalised quote within 2 hours. Alternatively, reach us directly on WhatsApp for an immediate response.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-cream">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-1 flex flex-col gap-8">
              <div>
                <h2 className="font-serif text-2xl font-light text-charcoal-900 mb-6">Contact Details</h2>
                <div className="flex flex-col gap-5">
                  <a href="https://wa.me/393773096638" target="_blank" rel="noopener noreferrer"
                    className="flex items-start gap-4 group">
                    <div className="flex-none w-10 h-10 bg-gold-50 flex items-center justify-center text-gold-600">
                      <MessageCircle size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-sans text-xs tracking-widest uppercase text-charcoal-400 mb-0.5">WhatsApp (Fastest)</p>
                      <p className="font-sans text-sm font-medium text-charcoal-800 group-hover:text-gold-600 transition-colors">+39 377 309 6638</p>
                    </div>
                  </a>
                  <a href="tel:+393773096638" className="flex items-start gap-4 group">
                    <div className="flex-none w-10 h-10 bg-gold-50 flex items-center justify-center text-gold-600">
                      <Phone size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-sans text-xs tracking-widest uppercase text-charcoal-400 mb-0.5">Telephone</p>
                      <p className="font-sans text-sm font-medium text-charcoal-800 group-hover:text-gold-600 transition-colors">+39 377 309 6638</p>
                    </div>
                  </a>
                  <a href="mailto:info@connectinpuglia.com" className="flex items-start gap-4 group">
                    <div className="flex-none w-10 h-10 bg-gold-50 flex items-center justify-center text-gold-600">
                      <Mail size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-sans text-xs tracking-widest uppercase text-charcoal-400 mb-0.5">Email</p>
                      <p className="font-sans text-sm font-medium text-charcoal-800 group-hover:text-gold-600 transition-colors">info@connectinpuglia.com</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="flex-none w-10 h-10 bg-gold-50 flex items-center justify-center text-gold-600">
                      <MapPin size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-sans text-xs tracking-widest uppercase text-charcoal-400 mb-0.5">Based In</p>
                      <p className="font-sans text-sm text-charcoal-700">Puglia, Southern Italy</p>
                      <p className="font-sans text-xs text-charcoal-400">Serving all Puglia & Basilicata</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal-900 text-white p-7">
                <h3 className="font-serif text-xl font-light mb-3">Prefer WhatsApp?</h3>
                <p className="font-sans text-sm text-white/60 mb-5 leading-relaxed">
                  For the fastest response, send us a WhatsApp message. We typically respond within 30 minutes.
                </p>
                <a
                  href="https://wa.me/393773096638?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20a%20transfer%20or%20tour%20in%20Puglia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans text-sm font-medium tracking-widest uppercase text-gold-400 hover:text-gold-300 transition-colors"
                >
                  <MessageCircle size={16} strokeWidth={1.5} />
                  Open WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white p-10 border border-charcoal-100">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center h-full min-h-80 gap-4">
                  <CheckCircle size={48} strokeWidth={1} className="text-gold-500" />
                  <h3 className="font-serif text-2xl font-light text-charcoal-900">Enquiry Sent</h3>
                  <p className="font-sans text-sm text-charcoal-500 max-w-sm">
                    Thank you — your request has been received. We'll respond with a personalised quote within 2 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline mt-4">
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  {/* Honeypot — hidden from users */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="absolute opacity-0 pointer-events-none h-0 w-0"
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-xs tracking-widest uppercase text-charcoal-500 mb-2">Full Name *</label>
                      <input name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" className="input-field" disabled={submitting} />
                    </div>
                    <div>
                      <label className="block font-sans text-xs tracking-widest uppercase text-charcoal-500 mb-2">Email Address *</label>
                      <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className="input-field" disabled={submitting} />
                    </div>
                    <div>
                      <label className="block font-sans text-xs tracking-widest uppercase text-charcoal-500 mb-2">Phone / WhatsApp</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className="input-field" disabled={submitting} />
                    </div>
                    <div>
                      <label className="block font-sans text-xs tracking-widest uppercase text-charcoal-500 mb-2">Service Required *</label>
                      <select name="service" required value={form.service} onChange={handleChange} className="input-field" disabled={submitting}>
                        <option value="">Select a service…</option>
                        {SERVICE_OPTIONS.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-sans text-xs tracking-widest uppercase text-charcoal-500 mb-2">Travel Date</label>
                      <input name="date" type="date" value={form.date} onChange={handleChange} className="input-field" disabled={submitting} />
                    </div>
                    <div>
                      <label className="block font-sans text-xs tracking-widest uppercase text-charcoal-500 mb-2">Number of Guests</label>
                      <input name="guests" type="number" min={1} max={100} value={form.guests} onChange={handleChange} placeholder="e.g. 2" className="input-field" disabled={submitting} />
                    </div>
                  </div>

                  {form.airport && (
                    <div>
                      <label className="block font-sans text-xs tracking-widest uppercase text-charcoal-500 mb-2">Airport</label>
                      <input name="airport" value={form.airport} readOnly className="input-field bg-cream" />
                    </div>
                  )}

                  <div>
                    <label className="block font-sans text-xs tracking-widest uppercase text-charcoal-500 mb-2">Message / Additional Details</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your plans, pick-up location, accommodation, any special requirements…"
                      className="input-field resize-none"
                      disabled={submitting}
                    />
                  </div>

                  {error && (
                    <div className="flex items-start gap-3 rounded border border-red-200 bg-red-50 p-4 text-red-800">
                      <AlertCircle size={18} className="flex-none mt-0.5" strokeWidth={1.5} />
                      <p className="font-sans text-sm leading-relaxed">{error}</p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <button type="submit" className="btn-primary" disabled={submitting}>
                      {submitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending…
                        </>
                      ) : (
                        'Send Enquiry'
                      )}
                    </button>
                    <p className="font-sans text-xs text-charcoal-400">
                      We respond within 2 hours during business hours.
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
