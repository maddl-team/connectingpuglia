import { Helmet } from 'react-helmet-async'
import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, MessageCircle, CheckCircle } from 'lucide-react'

type FormData = {
  name: string
  email: string
  phone: string
  service: string
  date: string
  guests: string
  message: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  guests: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`ConnectinPuglia Enquiry — ${form.service || 'General'} — ${form.date || 'TBD'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nDate: ${form.date}\nGuests: ${form.guests}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:info@connectinpuglia.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <>
      <Helmet>
        <title>Book a Transfer or Tour | Connect in Puglia</title>
        <meta name="description" content="Request a quote for private transfers and tours in Puglia. Fixed price, no surprises. ConnectinPuglia — Puglia's luxury transfer specialist." />
        <link rel="canonical" href="https://connectinpuglia.com/quote-contact" />
        <meta property="og:title" content="Book a Transfer or Tour | Connect in Puglia" />
        <meta property="og:description" content="Request a quote for private transfers and tours in Puglia. Fixed price, no surprises. ConnectinPuglia — Puglia's luxury transfer specialist." />
        <meta property="og:url" content="https://connectinpuglia.com/quote-contact" />
        <meta property="og:image" content="https://connectinpuglia.com/images/main/contact-og.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Page Header */}
      <section
        className="relative bg-charcoal-900 pt-36 pb-20 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/main/contact-hero.png')` }}
      >
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
                  <h3 className="font-serif text-2xl font-light text-charcoal-900">Request Sent</h3>
                  <p className="font-sans text-sm text-charcoal-500 max-w-sm">
                    Your email client has opened. Once you send the email, we'll respond with a personalised quote within 2 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline mt-4">
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-xs tracking-widest uppercase text-charcoal-500 mb-2">Full Name *</label>
                      <input name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" className="input-field" />
                    </div>
                    <div>
                      <label className="block font-sans text-xs tracking-widest uppercase text-charcoal-500 mb-2">Email Address *</label>
                      <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className="input-field" />
                    </div>
                    <div>
                      <label className="block font-sans text-xs tracking-widest uppercase text-charcoal-500 mb-2">Phone / WhatsApp</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className="input-field" />
                    </div>
                    <div>
                      <label className="block font-sans text-xs tracking-widest uppercase text-charcoal-500 mb-2">Service Required *</label>
                      <select name="service" required value={form.service} onChange={handleChange} className="input-field">
                        <option value="">Select a service…</option>
                        <option value="Airport Transfer">Airport Transfer</option>
                        <option value="Port Transfer">Port / Ferry Transfer</option>
                        <option value="Hourly Chauffeur">Hourly Chauffeur</option>
                        <option value="Private Tour">Private Tour</option>
                        <option value="Wedding / Event">Wedding / Event Transport</option>
                        <option value="Custom Itinerary">Custom Multi-Day Itinerary</option>
                        <option value="Other">Other Enquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-sans text-xs tracking-widest uppercase text-charcoal-500 mb-2">Travel Date</label>
                      <input name="date" type="date" value={form.date} onChange={handleChange} className="input-field" />
                    </div>
                    <div>
                      <label className="block font-sans text-xs tracking-widest uppercase text-charcoal-500 mb-2">Number of Guests</label>
                      <input name="guests" type="number" min={1} max={100} value={form.guests} onChange={handleChange} placeholder="e.g. 2" className="input-field" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs tracking-widests uppercase text-charcoal-500 mb-2">Message / Additional Details</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your plans, pick-up location, accommodation, any special requirements…"
                      className="input-field resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <button type="submit" className="btn-primary">
                      Send Enquiry
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
