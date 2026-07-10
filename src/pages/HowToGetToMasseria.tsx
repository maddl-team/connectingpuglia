import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowRight, CheckCircle, XCircle, AlertCircle, ChevronDown, ChevronUp, MessageCircle, Star } from 'lucide-react'
import HeroImage from '../components/HeroImage'
import TwitterMeta from '../components/TwitterMeta'

const options = [
  {
    mode: 'Private Transfer',
    badge: 'Strongly Recommended',
    badgeColor: 'bg-gold-500 text-charcoal-900',
    pros: [
      'Driver knows exact access road to your masseria',
      'No GPS required — we\'ve been there before',
      'Fixed price, confirmed before you travel',
      'Meet & greet in arrivals with luggage assistance',
      'Door to door, including gated estate roads',
    ],
    cons: [
      'Higher cost for solo travellers vs shared taxi',
    ],
    note: 'The only option that guarantees arrival at your specific masseria without navigation stress.',
    icon: '🚗',
  },
  {
    mode: 'Rental Car',
    badge: 'Possible but stressful',
    badgeColor: 'bg-charcoal-200 text-charcoal-800',
    pros: [
      'Full flexibility once you\'ve arrived',
      'Can be economical for longer stays',
    ],
    cons: [
      'GPS typically fails on final masseria tracks',
      'ZTL fines in every town en route',
      'Car unused at masseria is poor value',
      'Returning at night after dinner is difficult',
      'Some masserie actively discourage rental cars',
    ],
    note: 'Suitable if you plan to do significant independent exploration beyond your masseria.',
    icon: '🔑',
  },
  {
    mode: 'Airport Taxi',
    badge: 'Use with caution',
    badgeColor: 'bg-charcoal-200 text-charcoal-800',
    pros: [
      'Available at all Puglia airports',
      'No pre-booking needed',
    ],
    cons: [
      'Metered — final price unknown at departure',
      'Driver may not know your specific masseria',
      'No flight monitoring for delays',
      'Not guaranteed to reach remote properties',
    ],
    note: 'Acceptable for major hotels and city stays. Risky for remote masserie.',
    icon: '🟡',
  },
  {
    mode: 'Train + Taxi',
    badge: 'Not recommended',
    badgeColor: 'bg-charcoal-100 text-charcoal-600',
    pros: [
      'Cheapest option in theory',
    ],
    cons: [
      'No train station near any masseria',
      'Local taxis at rural stations scarce or unreliable',
      'Heavy luggage on trains is impractical',
      'Multiple connections add hours to journey',
    ],
    note: 'Not suitable for masseria arrivals. Trains are good for city-to-city travel only.',
    icon: '🚆',
  },
]

const properties = [
  { name: 'Borgo Egnazia', airport: 'BRI', time: '60 min', airport2: 'BDS', time2: '35 min' },
  { name: 'Masseria San Domenico', airport: 'BRI', time: '60 min', airport2: 'BDS', time2: '35 min' },
  { name: 'Masseria Torre Maizza', airport: 'BRI', time: '60 min', airport2: 'BDS', time2: '35 min' },
  { name: 'Masseria Torre Coccaro', airport: 'BRI', time: '60 min', airport2: 'BDS', time2: '35 min' },
  { name: 'Masseria Il Melograno', airport: 'BRI', time: '50 min', airport2: 'BDS', time2: '30 min' },
  { name: 'Masseria Il Frantoio', airport: 'BRI', time: '80 min', airport2: 'BDS', time2: '45 min' },
  { name: 'Le Alcove Alberobello', airport: 'BRI', time: '60 min', airport2: 'BDS', time2: '40 min' },
  { name: 'Grotta Palazzese', airport: 'BRI', time: '35 min', airport2: 'BDS', time2: '50 min' },
]

const faqs = [
  {
    q: 'What is the best way to get from the airport to a masseria in Puglia?',
    a: 'A private transfer with ConnectinPuglia. Our drivers know the exact access road and entrance to every major masseria in the region — including the private tracks that GPS cannot find. You get a fixed price, luggage assistance, and door-to-door service from the arrivals hall.',
  },
  {
    q: 'How do you find a remote masseria by GPS?',
    a: 'If you are booking with ConnectinPuglia, this is not your problem — it\'s ours. We have the coordinates and access details for every masseria we serve, accumulated over years of transfers. If you\'re driving independently, you\'ll typically need to call the property directly for the final approach instructions.',
  },
  {
    q: 'Are taxis available at Puglia airports?',
    a: 'Yes, taxis are available at Bari and Brindisi airports. However, they are metered (no fixed price), the driver may not know your specific masseria, and there is no flight monitoring if you are delayed. For a reliable, stress-free arrival, a pre-booked private transfer is strongly preferable.',
  },
  {
    q: 'How long does it take to get from the airport to a masseria?',
    a: 'From Brindisi (BDS): most Fasano and Ostuni masserie are 30–40 minutes away. From Bari (BRI): the same properties are 50–70 minutes. Journey times vary with traffic. We provide indicative times when you book.',
  },
  {
    q: 'Do masserie have parking?',
    a: 'Most masserie do have parking, but a rental car sitting unused at your masseria for several days is poor value — especially given the running cost, insurance, and the stress of navigating ZTL zones en route. Many guests find that a private transfer in and a day tour package works out cheaper and more enjoyable.',
  },
  {
    q: 'What if my masseria has no proper address?',
    a: 'This is extremely common in Puglia. Many masserie have no precise postal address that Google Maps can resolve. ConnectinPuglia drivers have the access coordinates and property-specific approach instructions for all the properties we serve — built up over years, not looked up on the day.',
  },
  {
    q: 'Can I book a return transfer from my masseria to the airport?',
    a: 'Yes — we strongly recommend booking both directions simultaneously. Your driver will collect you at your masseria entrance at the agreed time and take you directly to the departures terminal. Provide your return date and flight time when booking.',
  },
  {
    q: 'Do you cover masserie not on your list?',
    a: 'Yes. The masserie listed on this page are the most frequently requested, but we serve all properties across Puglia. If your masseria is not listed, simply include the property name and location in your enquiry — we\'ll confirm the transfer and price.',
  },
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

export default function HowToGetToMasseria() {
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
    'headline': 'How to Get to a Masseria in Puglia — The Complete Guide',
    'description': 'The complete guide to getting to a masseria in Puglia from the airport. Private transfer, rental car, or taxi — honest advice from ConnectinPuglia.',
    'author': { '@type': 'Organization', 'name': 'ConnectinPuglia', 'url': 'https://connectinpuglia.com' },
    'publisher': { '@type': 'Organization', 'name': 'ConnectinPuglia', 'url': 'https://connectinpuglia.com' },
    'datePublished': '2024-01-01',
    'dateModified': '2026-01-01',
  }

  return (
    <>
      <Helmet>
        <title>How to Get to a Masseria in Puglia | ConnectinPuglia</title>
        <meta
          name="description"
          content="The complete guide to getting to a masseria in Puglia from the airport. Private transfer, rental car, or taxi — honest advice from ConnectinPuglia, Puglia's luxury transfer specialist."
        />
        <link rel="canonical" href="https://connectinpuglia.com/how-to-get-to-a-masseria-in-puglia" />
        <meta property="og:title" content="How to Get to a Masseria in Puglia — The Complete Guide" />
        <meta property="og:description" content="The complete guide to getting to a masseria in Puglia from the airport. Private transfer, rental car, or taxi — honest advice from ConnectinPuglia." />
        <meta property="og:url" content="https://connectinpuglia.com/how-to-get-to-a-masseria-in-puglia" />
        <meta property="og:image" content="https://connectinpuglia.com/images/geo/how-to-get-to-masseria-hero.webp" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>
      <TwitterMeta
        title="How to Get to a Masseria in Puglia — The Complete Guide"
        description="The complete guide to getting to a masseria in Puglia from the airport. Private transfer, rental car, or taxi — honest advice from ConnectinPuglia."
        image="https://connectinpuglia.com/images/geo/how-to-get-to-masseria-hero.webp"
      />

      <section className="relative h-56 overflow-hidden sm:h-72">
        <HeroImage
          src="/images/geo/how-to-get-to-masseria-hero.webp"
          alt="How to Get to a Masseria in Puglia — The Complete Guide"
        />
        <div className="absolute inset-0 bg-charcoal-900/30" />
      </section>

      {/* PAGE HEADER */}
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
            How to Get to a Masseria in Puglia — The Complete Guide
          </h1>
          <p className="font-sans text-charcoal-500 text-lg leading-relaxed max-w-2xl">
            Getting to a masseria in Puglia is different to getting to a city hotel. Here's why — and what the best options actually are, from an operator who does this every day.
          </p>
        </div>
      </section>

      {/* DIRECT ANSWER */}
      <section className="py-12 bg-gold-50 border-b border-gold-200">
        <div className="container-page max-w-4xl">
          <div className="flex gap-4">
            <div className="flex-none w-1 bg-gold-500 rounded-full" />
            <div>
              <p className="font-sans text-xs font-medium tracking-widest uppercase text-gold-600 mb-2">Quick Answer</p>
              <p className="font-sans text-charcoal-800 leading-relaxed">
                <strong>The best way to get to a masseria in Puglia is a pre-booked private transfer.</strong> Masserie are in the countryside, on unmarked tracks, often with no GPS-findable address. A private driver who knows the property solves the problem entirely. Rental cars work but involve ZTL fines and GPS failures. Airport taxis are metered and may not know your property. Trains do not serve masserie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY MASSERIA IS DIFFERENT */}
      <section className="py-16 bg-white">
        <div className="container-page max-w-4xl">
          <h2 className="font-serif text-3xl font-light text-charcoal-900 mb-4">Why Getting to a Masseria is Different</h2>
          <p className="font-sans text-sm text-charcoal-500 leading-relaxed mb-8 max-w-2xl">
            A masseria is a traditional Puglian farmhouse estate — usually located in open countryside, off secondary roads, with private access tracks that are not on any standard map. Unlike a city hotel with a precise postcode, reaching a masseria reliably requires local knowledge.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Countryside location', desc: 'No public transport. Always off main roads.', icon: '🌾' },
              { title: 'No reliable GPS', desc: 'Multiple tracks, no postcode. Google Maps fails routinely.', icon: '📍' },
              { title: 'ZTL zones en route', desc: 'Every town you pass through has restricted traffic zones.', icon: '🚫' },
              { title: 'Gated estates', desc: 'Some properties require you to call ahead for gate access.', icon: '🔐' },
            ].map((item) => (
              <div key={item.title} className="bg-charcoal-50 p-5">
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h4 className="font-sans font-medium text-sm text-charcoal-800 mb-1">{item.title}</h4>
                <p className="font-sans text-xs text-charcoal-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPTIONS COMPARISON */}
      <section className="py-16 bg-cream">
        <div className="container-page max-w-4xl">
          <h2 className="font-serif text-3xl font-light text-charcoal-900 mb-2">4 Options — Compared Honestly</h2>
          <p className="font-sans text-sm text-charcoal-500 mb-10">From strongly recommended to not recommended, here is how every option stacks up for masseria arrivals specifically.</p>

          <div className="flex flex-col gap-5">
            {options.map((opt) => (
              <div key={opt.mode} className={`bg-white border ${opt.badge === 'Strongly Recommended' ? 'border-gold-400 shadow-sm' : 'border-charcoal-100'} p-8`}>
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="text-xl">{opt.icon}</span>
                  <h3 className="font-serif text-xl font-medium text-charcoal-900">{opt.mode}</h3>
                  <span className={`font-sans text-[10px] font-medium tracking-[0.15em] uppercase px-2.5 py-1 ${opt.badgeColor}`}>
                    {opt.badge}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                  <ul className="flex flex-col gap-2">
                    {opt.pros.map((p) => (
                      <li key={p} className="flex items-start gap-2 font-sans text-sm text-charcoal-700">
                        <CheckCircle size={14} className="text-gold-500 flex-none mt-0.5" strokeWidth={1.5} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-col gap-2">
                    {opt.cons.map((c) => (
                      <li key={c} className="flex items-start gap-2 font-sans text-sm text-charcoal-600">
                        <XCircle size={14} className="text-charcoal-300 flex-none mt-0.5" strokeWidth={1.5} />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-start gap-2 bg-charcoal-50 px-4 py-3">
                  <AlertCircle size={13} className="text-charcoal-400 flex-none mt-0.5" strokeWidth={1.5} />
                  <p className="font-sans text-xs text-charcoal-600">{opt.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MASSERIE WE SERVE */}
      <section className="py-16 bg-white">
        <div className="container-page max-w-4xl">
          <h2 className="font-serif text-3xl font-light text-charcoal-900 mb-2">Masserie We Serve</h2>
          <p className="font-sans text-sm text-charcoal-500 mb-8">Transfer times from Bari (BRI) and Brindisi (BDS) airports to the most requested properties.</p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-charcoal-200">
                  <th className="text-left font-sans text-xs font-medium tracking-widests uppercase text-charcoal-500 pb-3 pr-6">Property</th>
                  <th className="text-left font-sans text-xs font-medium tracking-widests uppercase text-charcoal-500 pb-3 pr-6">From BRI (Bari)</th>
                  <th className="text-left font-sans text-xs font-medium tracking-widests uppercase text-charcoal-500 pb-3">From BDS (Brindisi)</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((p) => (
                  <tr key={p.name} className="border-b border-charcoal-50 hover:bg-gold-50 transition-colors">
                    <td className="py-4 pr-6">
                      <div className="flex items-center gap-2">
                        <Star size={12} strokeWidth={1.5} className="text-gold-500 flex-none" />
                        <span className="font-sans text-sm font-medium text-charcoal-800">{p.name}</span>
                      </div>
                    </td>
                    <td className="py-4 pr-6 font-sans text-sm text-charcoal-600">{p.time}</td>
                    <td className="py-4 font-sans text-sm text-charcoal-600">{p.time2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-sans text-xs text-charcoal-400 mt-4">
            Times are approximate and may vary with traffic. Not staying at a listed property? We cover all masserie and rural properties across Puglia — contact us with your accommodation name.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-cream">
        <div className="container-page max-w-4xl">
          <h2 className="font-serif text-3xl font-light text-charcoal-900 mb-2">Frequently Asked Questions</h2>
          <p className="font-sans text-sm text-charcoal-500 mb-10">Common questions about reaching a masseria in Puglia.</p>
          <div className="bg-white border border-charcoal-100 px-8">
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
              <p className="section-label text-gold-400 mb-4">Book Your Masseria Transfer</p>
              <h2 className="font-serif font-light text-white text-3xl mb-4">
                We Know Every Track, Gate, and Access Road
              </h2>
              <p className="font-sans text-white/60 text-sm leading-relaxed">
                Tell us your masseria and arrival details. We handle everything from the arrivals hall to your property's front door.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link to="/quote-contact?service=Airport+Transfer" className="btn-primary justify-center">
                Request a Transfer <ArrowRight size={15} />
              </Link>
              <a
                href="https://wa.me/393773096638?text=Hello%2C%20I%27d%20like%20a%20transfer%20to%20my%20masseria%20in%20Puglia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-sans text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                <MessageCircle size={15} strokeWidth={1.5} />
                WhatsApp for Instant Quote
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
            {[
              { label: 'Transfer from Bari Airport', to: '/transfer-from-bari-airport' },
              { label: 'Transfer from Brindisi Airport', to: '/transfer-from-brindisi-airport' },
              { label: 'Getting Around Puglia Without a Car', to: '/how-to-get-around-puglia-without-a-car' },
              { label: 'Private Tours in Puglia', to: '/private-tours-puglia' },
              { label: 'All Airport Transfers', to: '/airport-transfers' },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="font-sans text-sm text-charcoal-600 hover:text-gold-600 underline underline-offset-2 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
