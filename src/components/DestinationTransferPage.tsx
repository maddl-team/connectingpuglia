import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  ArrowRight, CheckCircle, Clock, Shield, Search, Wifi, MessageCircle,
  Star, ChevronDown, ChevronUp, Phone, Navigation, MapPin,
} from 'lucide-react'

export type RouteCard = {
  airport: string
  airportCode: string
  distance: string
  time: string
  via: string
  recommended?: boolean
}

export type PropertyLink = {
  name: string
  to: string
}

export type DestinationPageProps = {
  metaTitle: string
  metaDesc: string
  canonical: string
  heroImg: string
  h1: string
  subheadline: string
  routes: [RouteCard, RouteCard]
  aboutParagraphs: string[]
  propertiesServed: PropertyLink[]
  faqs: { q: string; a: string }[]
  testimonials: { text: string; author: string; origin: string }[]
  internalLinks?: { label: string; to: string }[]
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0)
  return (
    <div className="border-b border-charcoal-100 last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className="font-sans font-medium text-sm text-charcoal-800 leading-relaxed group-hover:text-gold-600 transition-colors">{q}</span>
        {open
          ? <ChevronUp size={16} className="flex-none mt-0.5 text-gold-500" />
          : <ChevronDown size={16} className="flex-none mt-0.5 text-charcoal-400" />
        }
      </button>
      {open && <p className="pb-5 font-sans text-sm text-charcoal-500 leading-relaxed">{a}</p>}
    </div>
  )
}

export default function DestinationTransferPage({
  metaTitle, metaDesc, canonical, heroImg, h1, subheadline,
  routes, aboutParagraphs, propertiesServed, faqs, testimonials,
  internalLinks,
}: DestinationPageProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Private Transfer',
    provider: {
      '@type': 'LocalBusiness',
      name: 'ConnectinPuglia',
      url: 'https://connectinpuglia.com',
    },
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
        <meta property="og:image" content={heroImg} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section
        className="relative min-h-[80vh] flex items-center overflow-hidden"
        style={{ backgroundImage: `url('${heroImg}')`, backgroundSize: 'cover', backgroundPosition: 'center 55%' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/90 via-charcoal-950/68 to-charcoal-950/25" />
        <div className="relative z-10 container-page pt-28 pb-20 text-white max-w-3xl">
          <h1 className="font-serif font-light text-white leading-[1.1] mb-5" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}>
            {h1}
          </h1>
          <p className="font-sans font-light text-white/80 text-lg leading-relaxed max-w-2xl mb-10">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/quote-contact" className="btn-primary">
              Book This Transfer <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/393773096638"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light"
            >
              <MessageCircle size={15} strokeWidth={1.5} /> WhatsApp for Instant Quote
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-charcoal-900 py-4">
        <div className="container-page flex flex-wrap justify-center gap-x-8 gap-y-3">
          {[
            { icon: <CheckCircle size={13} strokeWidth={1.5} />, text: 'Fixed price — agreed at booking' },
            { icon: <Search size={13} strokeWidth={1.5} />, text: 'Real-time flight monitoring' },
            { icon: <Clock size={13} strokeWidth={1.5} />, text: 'Available 24/7' },
            { icon: <Shield size={13} strokeWidth={1.5} />, text: 'NCC Licensed & insured' },
            { icon: <Wifi size={13} strokeWidth={1.5} />, text: 'WiFi on request' },
          ].map(item => (
            <div key={item.text} className="flex items-center gap-2 text-white/70 px-3">
              <span className="text-gold-400">{item.icon}</span>
              <span className="font-sans text-xs tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ROUTE INFO CARDS */}
      <section className="py-14 bg-white">
        <div className="container-page">
          <div className="text-center mb-10">
            <p className="section-label mb-4">Journey Times</p>
            <span className="divider-gold mx-auto mb-6 block" />
            <h2 className="section-title text-charcoal-900">Your Route to the Destination</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {routes.map(route => (
              <div
                key={route.airportCode}
                className={`relative border p-8 ${route.recommended ? 'border-gold-400 shadow-md' : 'border-charcoal-100'}`}
              >
                {route.recommended && (
                  <span className="absolute -top-3 left-6 bg-gold-500 text-charcoal-900 font-sans text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1">
                    Recommended
                  </span>
                )}
                <div className="flex items-start gap-4 mb-5">
                  <Navigation size={20} strokeWidth={1} className={`flex-none mt-0.5 ${route.recommended ? 'text-gold-500' : 'text-charcoal-400'}`} />
                  <div>
                    <h3 className="font-serif text-xl font-medium text-charcoal-900">{route.airport}</h3>
                    <span className="font-sans text-xs text-charcoal-400 tracking-wider">{route.airportCode}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-sans text-[10px] font-medium tracking-[0.15em] uppercase text-charcoal-400 mb-1">Distance</p>
                    <p className="font-sans text-lg font-medium text-charcoal-900">{route.distance}</p>
                  </div>
                  <div>
                    <p className="font-sans text-[10px] font-medium tracking-[0.15em] uppercase text-charcoal-400 mb-1">Journey Time</p>
                    <p className="font-sans text-lg font-medium text-charcoal-900">{route.time}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-charcoal-500">
                  <MapPin size={12} strokeWidth={1.5} className="flex-none text-charcoal-400" />
                  <span className="font-sans text-xs">Via {route.via}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT THE DESTINATION */}
      <section className="py-14 bg-cream">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <p className="section-label mb-4">About the Destination</p>
              <span className="divider-gold mb-6 block" />
              <h2 className="font-serif text-3xl font-light text-charcoal-900 mb-6">Where You Are Going</h2>
              <div className="flex flex-col gap-5">
                {aboutParagraphs.map((para, i) => (
                  <p key={i} className="font-sans text-sm text-charcoal-600 leading-[1.8]">{para}</p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <p className="section-label mb-4">Properties We Serve</p>
              <span className="divider-gold mb-6 block" />
              <h2 className="font-serif text-3xl font-light text-charcoal-900 mb-6">Hotels & Masserie</h2>
              <div className="flex flex-col gap-2">
                {propertiesServed.map(p => (
                  p.to ? (
                    <Link
                      key={p.name}
                      to={p.to}
                      className="flex items-center gap-3 py-3 border-b border-charcoal-100 last:border-0 group"
                    >
                      <Star size={12} strokeWidth={1.5} className="text-gold-500 flex-none" />
                      <span className="font-sans text-sm text-charcoal-700 group-hover:text-gold-600 transition-colors">{p.name}</span>
                      <ArrowRight size={12} className="text-charcoal-300 group-hover:text-gold-500 ml-auto transition-colors" />
                    </Link>
                  ) : (
                    <div key={p.name} className="flex items-center gap-3 py-3 border-b border-charcoal-100 last:border-0">
                      <Star size={12} strokeWidth={1.5} className="text-charcoal-300 flex-none" />
                      <span className="font-sans text-sm text-charcoal-500">{p.name}</span>
                    </div>
                  )
                ))}
              </div>
              <div className="mt-6">
                <Link
                  to="/quote-contact"
                  className="flex items-center gap-2 font-sans text-xs font-medium tracking-widests uppercase text-gold-600 hover:text-gold-700 transition-colors"
                >
                  Book Any Property Transfer <ArrowRight size={12} />
                </Link>
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
              <p className="font-sans text-sm text-charcoal-500 leading-relaxed mb-6">Everything about transfers to and from this destination.</p>
              <a
                href="https://wa.me/393773096638"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-sans text-sm font-medium text-gold-600 hover:text-gold-700 transition-colors"
              >
                <MessageCircle size={16} strokeWidth={1.5} /> Ask on WhatsApp
              </a>
            </div>
            <div className="lg:col-span-2">
              {faqs.map((faq, i) => <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />)}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
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

      {/* FINAL CTA */}
      <section className="py-20 bg-charcoal-900 text-white">
        <div className="container-page text-center">
          <p className="section-label text-gold-400 mb-4">Ready to Book?</p>
          <span className="divider-gold mx-auto mb-6 block bg-gold-500" />
          <h2 className="font-serif font-light text-white text-4xl md:text-5xl max-w-xl mx-auto mb-5">
            Book Your Transfer
          </h2>
          <p className="font-sans text-white/60 max-w-md mx-auto mb-10 leading-relaxed">
            Fixed price, professional service, door to door. Request your quote now.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/quote-contact" className="btn-primary">Request a Quote <ArrowRight size={15} /></Link>
            <a href="tel:+393773096638" className="flex items-center gap-2 font-sans text-sm font-medium text-white/70 hover:text-white transition-colors">
              <Phone size={15} strokeWidth={1.5} /> Call Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-white border-t border-charcoal-100">
        <div className="container-page">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-charcoal-400 mb-5 text-center">Related Transfers & Services</p>
          <div className="flex flex-wrap justify-center gap-3">
            {(internalLinks ?? [
              { label: 'Transfer from Bari Airport', to: '/transfer-from-bari-airport' },
              { label: 'Transfer from Brindisi Airport', to: '/transfer-from-brindisi-airport' },
              { label: 'Private Tours in Puglia', to: '/private-tours-puglia' },
              { label: 'Our Fleet', to: '/our-fleet' },
              { label: 'All Airport Transfers', to: '/airport-transfers' },
            ]).map(l => (
              <Link key={l.to} to={l.to} className="font-sans text-sm text-charcoal-600 hover:text-gold-600 underline underline-offset-2 transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
