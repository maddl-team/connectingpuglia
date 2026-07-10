import { Helmet } from 'react-helmet-async'
import { toAbsoluteUrl } from '../lib/seo'
import HeroImage from './HeroImage'
import TwitterMeta from './TwitterMeta'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowRight, CheckCircle, Clock, Shield, Search, Wifi, MessageCircle, MapPin, Star, ChevronDown, ChevronUp, Phone } from 'lucide-react'

type Props = {
  slug: string
  title: string
  subtitle: string
  metaTitle: string
  metaDesc: string
  canonical: string
  heroImg: string
  iataCode?: string
  iataFull?: string
  intro: string
  destinations: { name: string; time: string }[]
  properties: { name: string; time: string }[]
  faqs: { q: string; a: string }[]
  testimonials: { text: string; author: string; origin: string }[]
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0)
  return (
    <div className="border-b border-charcoal-100 last:border-0">
      <button className="w-full flex items-start justify-between gap-4 py-5 text-left group" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span className="font-sans font-medium text-sm text-charcoal-800 leading-relaxed group-hover:text-gold-600 transition-colors">{q}</span>
        {open ? <ChevronUp size={16} className="flex-none mt-0.5 text-gold-500" /> : <ChevronDown size={16} className="flex-none mt-0.5 text-charcoal-400" />}
      </button>
      {open && <p className="pb-5 font-sans text-sm text-charcoal-500 leading-relaxed">{a}</p>}
    </div>
  )
}

export default function TransferPageTemplate({
  title, subtitle, metaTitle, metaDesc, canonical, heroImg, iataCode, iataFull, intro,
  destinations, properties, faqs, testimonials,
}: Props) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Private Airport Transfer',
    provider: { '@type': 'LocalBusiness', name: 'ConnectinPuglia', url: 'https://connectinpuglia.com' },
    areaServed: { '@type': 'State', name: 'Puglia' },
    description: metaDesc,
    url: canonical,
  }

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={toAbsoluteUrl(heroImg)} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      <TwitterMeta title={metaTitle} description={metaDesc} image={heroImg} />

      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <HeroImage src={heroImg} alt={title} objectPosition="center 60%" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/92 via-charcoal-950/70 to-charcoal-950/25" />
        <div className="relative z-10 container-page pt-28 pb-20 text-white max-w-3xl">
          {iataCode && (
            <div className="flex items-center gap-3 mb-5">
              <MapPin size={14} className="text-gold-400" strokeWidth={1.5} />
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-gold-400">{iataCode} · {iataFull}</span>
            </div>
          )}
          <h1 className="font-serif font-light text-white leading-[1.1] mb-5" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}>
            {title}
          </h1>
          <p className="font-sans font-light text-white/80 text-lg leading-relaxed max-w-2xl mb-10">{intro}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/quote-contact" className="btn-primary">Book This Transfer <ArrowRight size={16} /></Link>
            <a href="https://wa.me/393773096638" target="_blank" rel="noopener noreferrer" className="btn-ghost-light">
              <MessageCircle size={15} strokeWidth={1.5} /> WhatsApp for Instant Quote
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-charcoal-900 py-4">
        <div className="container-page flex flex-wrap justify-center gap-x-8 gap-y-3">
          {[
            { icon: <CheckCircle size={13} strokeWidth={1.5} />, text: 'Fixed price' },
            { icon: <Search size={13} strokeWidth={1.5} />, text: 'Real-time flight monitoring' },
            { icon: <Clock size={13} strokeWidth={1.5} />, text: 'Available 24/7' },
            { icon: <Shield size={13} strokeWidth={1.5} />, text: 'NCC Licensed' },
            { icon: <Wifi size={13} strokeWidth={1.5} />, text: 'WiFi on request' },
          ].map(item => (
            <div key={item.text} className="flex items-center gap-2 text-white/70 px-3">
              <span className="text-gold-400">{item.icon}</span>
              <span className="font-sans text-xs tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="container-page max-w-4xl">
          <h2 className="font-serif text-3xl font-light text-charcoal-900 mb-10 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x divide-charcoal-100">
            {[
              { n: '01', title: 'Book in Advance', desc: 'Request via form or WhatsApp. Fixed-price confirmation within 2 hours.' },
              { n: '02', title: 'We Monitor Your Journey', desc: 'Flight or ferry tracking — delays handled automatically at no extra cost.' },
              { n: '03', title: 'Meet, Drive, Arrive', desc: 'Driver greets you, assists with luggage, and takes you door to door.' },
            ].map(s => (
              <div key={s.n} className="flex flex-col items-center text-center px-10 py-8">
                <span className="font-serif text-5xl font-light text-gold-200 mb-5">{s.n}</span>
                <h3 className="font-serif text-xl font-medium text-charcoal-900 mb-3">{s.title}</h3>
                <p className="font-sans text-sm text-charcoal-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations + Properties */}
      <section className="py-16 bg-cream">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="section-label mb-4">Destinations Served</p>
              <span className="divider-gold mb-6 block" />
              <h2 className="font-serif text-3xl font-light text-charcoal-900 mb-8">Where We Take You</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destinations.map(d => (
                  <div key={d.name} className="flex items-center justify-between bg-white border border-charcoal-100 px-5 py-4 hover:border-gold-400 transition-colors duration-300">
                    <div className="flex items-center gap-3">
                      <MapPin size={13} strokeWidth={1.5} className="text-gold-500 flex-none" />
                      <span className="font-sans text-sm font-medium text-charcoal-800">{d.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-charcoal-400">
                      <Clock size={11} strokeWidth={1.5} />
                      <span className="font-sans text-xs">{d.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="section-label mb-4">Luxury Properties</p>
              <span className="divider-gold mb-6 block" />
              <h2 className="font-serif text-3xl font-light text-charcoal-900 mb-8">Masserie & Resorts</h2>
              <div className="flex flex-col gap-3">
                {properties.map(p => (
                  <div key={p.name} className="flex items-center justify-between border-b border-charcoal-100 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <Star size={12} strokeWidth={1.5} className="text-gold-500 flex-none" />
                      <span className="font-sans text-sm text-charcoal-700">{p.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-charcoal-400">
                      <Clock size={11} strokeWidth={1.5} />
                      <span className="font-sans text-xs">{p.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <p className="section-label mb-4">FAQ</p>
              <span className="divider-gold mb-6 block" />
              <h2 className="font-serif text-3xl font-light text-charcoal-900 mb-4">Frequently Asked Questions</h2>
              <a href="https://wa.me/393773096638" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sans text-sm font-medium text-gold-600 hover:text-gold-700 transition-colors">
                <MessageCircle size={16} strokeWidth={1.5} /> Ask on WhatsApp
              </a>
            </div>
            <div className="lg:col-span-2">
              {faqs.map((faq, i) => <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-16 bg-cream">
          <div className="container-page">
            <div className="text-center mb-10">
              <p className="section-label mb-4">Guest Reviews</p>
              <span className="divider-gold mx-auto mb-6 block" />
              <h2 className="section-title text-charcoal-900">What Guests Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map(t => (
                <div key={t.author} className="bg-white p-8 border border-charcoal-100">
                  <div className="flex gap-0.5 mb-5">
                    {[1,2,3,4,5].map(i => <Star key={i} size={13} fill="currentColor" className="text-gold-500" />)}
                  </div>
                  <p className="font-serif text-lg font-light text-charcoal-700 leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div>
                    <p className="font-sans font-medium text-sm text-charcoal-800">{t.author}</p>
                    <p className="font-sans text-xs text-charcoal-400">{t.origin}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-charcoal-900 text-white">
        <div className="container-page text-center">
          <p className="section-label text-gold-400 mb-4">Ready to Book?</p>
          <h2 className="font-serif font-light text-white text-4xl mb-5">{subtitle}</h2>
          <p className="font-sans text-white/60 max-w-md mx-auto mb-10">Fixed price, professional service, door to door. Request your quote now.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/quote-contact" className="btn-primary">Request a Quote <ArrowRight size={15} /></Link>
            <a href="tel:+393773096638" className="flex items-center gap-2 font-sans text-sm font-medium text-white/70 hover:text-white transition-colors">
              <Phone size={15} strokeWidth={1.5} /> Call Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 bg-white border-t border-charcoal-100">
        <div className="container-page">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-charcoal-400 mb-5 text-center">Related Services</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Transfer from Bari Airport', to: '/transfer-from-bari-airport' },
              { label: 'Transfer from Brindisi Airport', to: '/transfer-from-brindisi-airport' },
              { label: 'Transfer from Bari Port', to: '/transfer-from-bari-port' },
              { label: 'Transfer from Brindisi Port', to: '/transfer-from-brindisi-port' },
              { label: 'Private Tours in Puglia', to: '/private-tours-puglia' },
              { label: 'Our Fleet', to: '/our-fleet' },
              { label: 'All Services', to: '/airport-transfers' },
            ].map(l => (
              <Link key={l.to} to={l.to} className="font-sans text-sm text-charcoal-600 hover:text-gold-600 underline underline-offset-2 transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
