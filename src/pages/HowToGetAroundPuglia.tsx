import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowRight, CheckCircle, XCircle, AlertCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react'

const transport = [
  {
    mode: 'Private Transfer (NCC)',
    badge: 'Recommended',
    badgeColor: 'bg-gold-500 text-charcoal-900',
    pros: [
      'Door to door, fixed price, no navigation stress',
      'Suitable for remote masserie with no GPS address',
      'No extras — no fuel, parking fees, or ZTL fines',
      'Driver waits if you\'re delayed',
      'AC, luggage space, child seats available',
      'Wine tours — no designated driver needed',
    ],
    cons: [
      'Higher cost per journey vs rental car for solo travellers',
    ],
    suitability: 'Masserie guests, luxury travellers, families',
    icon: '🚗',
  },
  {
    mode: 'Rental Car',
    badge: 'Good for cities',
    badgeColor: 'bg-charcoal-200 text-charcoal-800',
    pros: [
      'Maximum flexibility for spontaneous itineraries',
      'Economical for long solo trips in urban areas',
    ],
    cons: [
      'Parking difficulties in every historic centre',
      'ZTL fines — automatic cameras in all old towns',
      'Narrow country roads not suited to unfamiliar drivers',
      'Not compatible with wine tours',
    ],
    suitability: 'Experienced European drivers, tight budgets, spontaneous itineraries',
    icon: '🔑',
  },
  {
    mode: 'Train (Trenitalia + FSE)',
    badge: 'Limited coverage',
    badgeColor: 'bg-charcoal-200 text-charcoal-800',
    pros: [
      'Affordable, comfortable for city-to-city travel',
      'Good Bari–Lecce–Brindisi–Trani corridor',
      'Relaxing scenic Ferrovie del Sud Est routes',
    ],
    cons: [
      'Does not serve masserie or rural properties',
      'Infrequent outside main routes',
      'Final mile always requires a taxi or transfer',
    ],
    suitability: 'Solo travellers visiting urban destinations',
    icon: '🚆',
  },
  {
    mode: 'Bus (FlixBus + regional)',
    badge: 'Cities only',
    badgeColor: 'bg-charcoal-200 text-charcoal-800',
    pros: [
      'Very affordable',
      'Covers some intercity routes',
    ],
    cons: [
      'Very slow and infrequent',
      'Not suitable for luggage-heavy travel',
      'No service to masserie or rural areas',
      'Timetables unreliable outside peak season',
    ],
    suitability: 'Budget travellers, students',
    icon: '🚌',
  },
]

const faqs = [
  {
    q: 'Can you visit Puglia without renting a car?',
    a: 'Yes — a private transfer from the airport plus day tours with a local driver effectively eliminates the need for a rental car. You get door-to-door service without the stress of ZTL zones, narrow roads, or GPS failures on unmarked masseria tracks.',
  },
  {
    q: 'What is the best way to get from Bari Airport to a masseria without a car?',
    a: 'A private transfer with ConnectinPuglia. Your driver meets you in arrivals, knows the exact access road to your masseria, and delivers you door to door at a fixed price. No meters, no GPS struggles.',
  },
  {
    q: 'Is public transport good enough for visiting Puglia?',
    a: 'For cities, yes — trains link Bari, Lecce, Alberobello, and Locorotondo reasonably well. For masserie, agriturismo, and rural resorts, public transport is effectively non-existent. You need a car or private transfer.',
  },
  {
    q: 'What is a ZTL zone in Puglia?',
    a: 'ZTL (Zona a Traffico Limitato) is a restricted traffic area in every Italian historic centre — including Lecce, Ostuni, Alberobello, and Monopoli old towns. Private hire drivers hold the necessary permits. Rental car drivers risk automatic fines of €100–€300 per entry, often arriving weeks after returning home.',
  },
  {
    q: 'Can I do wine tours in Puglia without a car?',
    a: 'Yes — in fact, a private driver is the ideal way to visit wineries. ConnectinPuglia handles all logistics, drives between estates, and you can drink freely at every tasting without worrying about the return drive.',
  },
  {
    q: 'How does the cost compare to renting a car?',
    a: 'For groups of 4 or more, a private transfer is frequently comparable to or cheaper than a rental car once you factor in fuel, parking fees, ZTL fines, and the insurance excess. For 1–2 people staying entirely in cities, a rental car may work out cheaper.',
  },
  {
    q: 'What is the best vehicle for families travelling without a car?',
    a: 'The Mercedes-Benz Classe V accommodates up to 7 passengers plus luggage — ideal for families. Child seats are available on request. No car hire, no fitting car seats at the airport, no navigating with tired children.',
  },
  {
    q: 'Can ConnectinPuglia manage my entire stay\'s transport?',
    a: 'Yes — from airport arrival transfer, to daily excursions, inter-property moves, and the final return transfer. Many guests book their entire Puglia transport package with us before arriving. Just send us your itinerary.',
  },
]

const masserieLinks = [
  { name: 'Transfer from Bari Airport', to: '/transfer-from-bari-airport' },
  { name: 'Transfer from Brindisi Airport', to: '/transfer-from-brindisi-airport' },
  { name: 'Private Tours in Puglia', to: '/private-tours-puglia' },
  { name: 'Our Fleet', to: '/our-fleet' },
]

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0)
  return (
    <div className="border-b border-charcoal-100 last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="font-sans font-medium text-sm text-charcoal-800 leading-relaxed group-hover:text-gold-600 transition-colors">
          {q}
        </span>
        {open
          ? <ChevronUp size={16} className="flex-none mt-0.5 text-gold-500" />
          : <ChevronDown size={16} className="flex-none mt-0.5 text-charcoal-400" />
        }
      </button>
      {open && (
        <p className="pb-5 font-sans text-sm text-charcoal-500 leading-relaxed">
          {a}
        </p>
      )}
    </div>
  )
}

export default function HowToGetAroundPuglia() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': { '@type': 'Answer', 'text': faq.a },
    })),
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How to Get Around Puglia Without a Car — Your Complete Guide',
    'description': 'The complete guide to getting around Puglia without a rental car. Private transfers, trains, buses — honest advice for every type of traveller.',
    'author': { '@type': 'Organization', 'name': 'ConnectinPuglia', 'url': 'https://connectinpuglia.com' },
    'publisher': { '@type': 'Organization', 'name': 'ConnectinPuglia', 'url': 'https://connectinpuglia.com' },
    'datePublished': '2024-01-01',
    'dateModified': '2026-01-01',
  }

  return (
    <>
      <Helmet>
        <title>How to Get Around Puglia Without a Car | Connect in Puglia</title>
        <meta
          name="description"
          content="The complete guide to getting around Puglia without a rental car. Private transfers, trains, buses — honest advice and the best options for every type of traveller. By ConnectinPuglia."
        />
        <link rel="canonical" href="https://connectinpuglia.com/how-to-get-around-puglia-without-a-car" />
        <meta property="og:title" content="How to Get Around Puglia Without a Car — Your Complete Guide" />
        <meta property="og:description" content="The complete guide to getting around Puglia without a rental car. Private transfers, trains, buses — honest advice and the best options for every type of traveller." />
        <meta property="og:url" content="https://connectinpuglia.com/how-to-get-around-puglia-without-a-car" />
        <meta property="og:image" content="https://connectinpuglia.com/images/geo/how-to-get-around-hero.png" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <section
        className="relative h-56 sm:h-72 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/geo/how-to-get-around-hero.png')` }}
      >
        <div className="absolute inset-0 bg-charcoal-900/30" />
      </section>

      {/* PAGE HEADER — editorial style, no hero CTA */}
      <section className="pt-12 pb-12 bg-white border-b border-charcoal-100">
        <div className="container-page max-w-4xl">
          <div className="flex items-center gap-2 mb-5">
            <Link to="/" className="font-sans text-xs text-charcoal-400 hover:text-gold-600 transition-colors">Home</Link>
            <span className="text-charcoal-300">/</span>
            <span className="font-sans text-xs text-charcoal-500">Travel Guides</span>
          </div>
          <p className="section-label mb-4">Travel Guide</p>
          <h1 className="font-serif font-light text-charcoal-900 leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            How to Get Around Puglia Without a Car — Your Complete Guide
          </h1>
          <p className="font-sans text-charcoal-500 text-lg leading-relaxed max-w-2xl">
            You can absolutely visit Puglia without renting a car. This guide covers every option — private transfers, trains, buses, and rental cars — with honest advice on what works for masserie, cities, families, and wine tours.
          </p>
        </div>
      </section>

      {/* DIRECT ANSWER — optimised for AI Overview */}
      <section className="py-12 bg-gold-50 border-b border-gold-200">
        <div className="container-page max-w-4xl">
          <div className="flex gap-4">
            <div className="flex-none w-1 bg-gold-500 rounded-full" />
            <div>
              <p className="font-sans text-xs font-medium tracking-widest uppercase text-gold-600 mb-2">Quick Answer</p>
              <p className="font-sans text-charcoal-800 leading-relaxed">
                <strong>Yes, you can visit Puglia without a rental car — and for many travellers it is the better option.</strong> No navigation stress, no parking issues in historic centres with ZTL zones, no designated driver at dinner. The most practical solution for guests at masserie and luxury properties is a private transfer from the airport plus guided day tours — eliminating the need for a rental car entirely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPORT COMPARISON */}
      <section className="py-16 bg-white">
        <div className="container-page max-w-4xl">
          <h2 className="font-serif text-3xl font-light text-charcoal-900 mb-2">4 Ways to Get Around Puglia</h2>
          <p className="font-sans text-sm text-charcoal-500 mb-10">An honest comparison of every transport option — pros, cons, and who each suits.</p>

          <div className="flex flex-col gap-6">
            {transport.map((t) => (
              <div key={t.mode} className={`border ${t.badge === 'Recommended' ? 'border-gold-400 shadow-sm' : 'border-charcoal-100'} p-8`}>
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="text-2xl">{t.icon}</span>
                  <h3 className="font-serif text-xl font-medium text-charcoal-900">{t.mode}</h3>
                  <span className={`font-sans text-[10px] font-medium tracking-[0.15em] uppercase px-2.5 py-1 ${t.badgeColor}`}>
                    {t.badge}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5">
                  <div>
                    <p className="font-sans text-xs font-medium tracking-widest uppercase text-charcoal-400 mb-3">Pros</p>
                    <ul className="flex flex-col gap-2">
                      {t.pros.map((p) => (
                        <li key={p} className="flex items-start gap-2 font-sans text-sm text-charcoal-700">
                          <CheckCircle size={14} className="text-gold-500 flex-none mt-0.5" strokeWidth={1.5} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-sans text-xs font-medium tracking-widests uppercase text-charcoal-400 mb-3">Cons</p>
                    <ul className="flex flex-col gap-2">
                      {t.cons.map((c) => (
                        <li key={c} className="flex items-start gap-2 font-sans text-sm text-charcoal-600">
                          <XCircle size={14} className="text-charcoal-300 flex-none mt-0.5" strokeWidth={1.5} />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-charcoal-50 px-4 py-3">
                  <AlertCircle size={13} className="text-charcoal-400 flex-none mt-0.5" strokeWidth={1.5} />
                  <p className="font-sans text-xs text-charcoal-600">
                    <span className="font-medium">Best for:</span> {t.suitability}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE MASSERIA PROBLEM */}
      <section className="py-16 bg-cream">
        <div className="container-page max-w-4xl">
          <h2 className="font-serif text-3xl font-light text-charcoal-900 mb-4">The Masseria Problem</h2>
          <p className="font-sans text-sm text-charcoal-500 leading-relaxed mb-6 max-w-2xl">
            If you are staying at a masseria, a rental car is less convenient than it appears. You still cannot drink wine at dinner. You still have to navigate dark country roads at night. You still have to park. A private transfer in plus day tours is more enjoyable, more practical, and often comparable in cost.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { title: 'No public transport', desc: 'No bus or train serves any masseria in Puglia. The final mile always requires a car or transfer.' },
              { title: 'GPS fails regularly', desc: 'Many masserie have multiple entrance tracks and no precise GPS coordinate. Local knowledge is essential.' },
              { title: 'ZTL fines at every town', desc: 'En route to your masseria, you\'ll pass through historic centres with ZTL zones. Private drivers hold the permits — rental car drivers get fines.' },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-charcoal-100 p-6">
                <h4 className="font-sans font-medium text-sm text-charcoal-800 mb-2">{item.title}</h4>
                <p className="font-sans text-xs text-charcoal-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-charcoal-900 text-white p-8">
            <p className="font-serif text-xl font-light text-white mb-3">
              "For guests staying at a masseria in Puglia, a private transfer isn't a luxury — it's the logical choice."
            </p>
            <p className="font-sans text-sm text-white/60">
              ConnectinPuglia drivers know the access roads to every major masseria in the region. No GPS required.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container-page max-w-4xl">
          <h2 className="font-serif text-3xl font-light text-charcoal-900 mb-2">Frequently Asked Questions</h2>
          <p className="font-sans text-sm text-charcoal-500 mb-10">Common questions about getting around Puglia without a rental car.</p>
          <div>
            {faqs.map((faq, i) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-charcoal-900 text-white">
        <div className="container-page max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label text-gold-400 mb-4">Skip the Rental Car</p>
              <h2 className="font-serif font-light text-white text-3xl mb-4">
                Let ConnectinPuglia Handle Your Transport
              </h2>
              <p className="font-sans text-white/60 text-sm leading-relaxed">
                Airport transfers, day tours, inter-property moves — we manage your entire Puglia transport so you can focus on enjoying it.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link to="/quote-contact" className="btn-primary justify-center">
                Request a Transfer Quote <ArrowRight size={15} />
              </Link>
              <a
                href="https://wa.me/393921234567?text=Hello%2C%20I%27m%20planning%20a%20trip%20to%20Puglia%20and%20would%20like%20advice%20on%20transport"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-sans text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                <MessageCircle size={15} strokeWidth={1.5} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-white border-t border-charcoal-100">
        <div className="container-page max-w-4xl">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-charcoal-400 mb-5">Related Guides & Services</p>
          <div className="flex flex-wrap gap-3">
            {masserieLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="font-sans text-sm text-charcoal-600 hover:text-gold-600 underline underline-offset-2 transition-colors"
              >
                {l.name}
              </Link>
            ))}
            <Link to="/how-to-get-to-a-masseria-in-puglia" className="font-sans text-sm text-charcoal-600 hover:text-gold-600 underline underline-offset-2 transition-colors">
              How to Get to a Masseria in Puglia
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
