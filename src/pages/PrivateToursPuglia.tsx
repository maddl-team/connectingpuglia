import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowRight, Clock, Users, Star, CheckCircle, MapPin, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react'
import HeroImage from '../components/HeroImage'
import TwitterMeta from '../components/TwitterMeta'

const tours = [
  {
    title: "Valle d'Itria",
    duration: 'Full day or half day',
    tags: ['Trulli', 'Hilltop towns', 'Olive groves'],
    desc: "Alberobello's UNESCO trulli district, Locorotondo, Cisternino, and the valleys of the Murgia plateau.",
    to: '/tour-valle-ditria',
    img: '/images/main/private-tours-puglia-card-1.webp',
    badge: 'Most Popular',
  },
  {
    title: 'Wine Tour',
    duration: 'Full day',
    tags: ['Cantinas', 'Primitivo', 'Negroamaro'],
    desc: 'Boutique winery visits with guided cellar tours and structured tastings of Puglia\'s finest Primitivo and Negroamaro.',
    to: '/tour-wine-puglia',
    img: '/images/main/private-tours-puglia-card-2.webp',
    badge: 'Gastronomy',
  },
  {
    title: 'Salento Tour',
    duration: 'Full day',
    tags: ['Lecce', 'Gallipoli', 'Otranto'],
    desc: "Lecce's Baroque stonework, Otranto's Byzantine mosaics, and Gallipoli's fortified island — the full Salento experience.",
    to: '/tour-salento',
    img: '/images/main/private-tours-puglia-card-3.webp',
  },
  {
    title: 'Baroque Puglia',
    duration: 'Full day',
    tags: ['Lecce', 'Martina Franca', 'Locorotondo'],
    desc: 'A curated tour of the finest Baroque architecture in the south — golden stone, ornate facades, and operatic heritage.',
    to: '/tour-baroque-puglia',
    img: '/images/main/private-tours-puglia-card-4.webp',
  },
  {
    title: 'Food & Olive Oil',
    duration: 'Full or half day',
    tags: ['Producers', 'Markets', 'Pasta makers'],
    desc: 'Frantoio olive oil mill, burrata dairy, artisan orecchiette makers, and the Murgia plateau food producers.',
    to: '/tour-food-olive-oil',
    img: '/images/main/private-tours-puglia-card-5.webp',
    badge: 'Food & Produce',
  },
]

const departurePts = [
  'Fasano / Borgo Egnazia',
  'Ostuni',
  "Alberobello / Valle d'Itria",
  'Polignano a Mare / Monopoli',
  'Lecce & Salento',
  'Bari',
  'Trani',
]

const faqs = [
  { q: 'What is included in a private tour?', a: 'Your driver, the vehicle, fuel, and all logistics — including picks up and drop off from your accommodation. Entrance fees, meals, and tastings are at your own cost and can be pre-arranged on request.' },
  { q: 'How many people can join a private tour?', a: 'Our tours are 100% private — for your group only. The Mercedes-Benz E-Class accommodates up to 3 passengers; the V-Class up to 7; the Vito Minibus up to 8. All prices are per vehicle, not per person.' },
  { q: 'Can I customise the itinerary?', a: 'Absolutely — all our tours are fully flexible. Tell us what interests you most and we will build the day around your preferences. The itineraries on this page are starting points, not fixed programmes.' },
  { q: 'What do private tours cost?', a: 'All prices are fixed and agreed in advance. The exact price depends on your vehicle, departure point, and tour duration. Contact us via the form or WhatsApp for an immediate quote.' },
  { q: 'Do the drivers speak English?', a: 'Yes — all ConnectinPuglia drivers speak fluent English and have local knowledge to share throughout the day. Many guests describe their driver as one of the highlights of their tour.' },
  { q: 'Can I combine a tour with an airport transfer?', a: "Yes — this is a popular option. Arrive at the airport, take a day tour on the same day, and then continue to your masseria in the evening. One seamless booking." },
  { q: 'How far in advance should I book?', a: 'We recommend booking at least 3–5 days in advance, especially in high season (June–September) when availability is limited. Multi-day programmes should be booked 2–4 weeks in advance.' },
  { q: 'Do you offer multi-day tours?', a: "Yes — we can build multi-day private programmes combining accommodation transfers, day tours, and winery dinners across several days. Contact us with your dates and we'll plan the itinerary." },
]

function FaqItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(i === 0)
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

export default function PrivateToursPuglia() {
  return (
    <>
      <Helmet>
        <title>Private Tours in Puglia with Chauffeur | ConnectinPuglia</title>
        <meta name="description" content="Private tours in Puglia with a professional local chauffeur. Valle d'Itria, Salento, wine tours, food tours, and day trips to Matera. Fixed rates. Book your private tour now." />
        <link rel="canonical" href="https://connectinpuglia.com/private-tours-puglia" />
        <meta property="og:title" content="Private Tours in Puglia with Chauffeur | ConnectinPuglia" />
        <meta property="og:description" content="Private tours in Puglia with a professional local chauffeur. Valle d'Itria, Salento, wine tours, food tours, and day trips to Matera. Fixed rates." />
        <meta property="og:url" content="https://connectinpuglia.com/private-tours-puglia" />
        <meta property="og:image" content="https://connectinpuglia.com/images/main/private-tours-puglia-og.webp" />
        <meta property="og:type" content="website" />
      </Helmet>
      <TwitterMeta
        title="Private Tours in Puglia with Chauffeur | ConnectinPuglia"
        description="Private tours in Puglia with a professional local chauffeur. Valle d'Itria, Salento, wine tours, food tours, and day trips to Matera. Fixed rates."
        image="https://connectinpuglia.com/images/main/private-tours-puglia-og.webp"
      />

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <HeroImage
          src="/images/main/private-tours-puglia-hero.webp"
          alt="Private Tours in Puglia — Explore at Your Own Pace"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/90 via-charcoal-950/68 to-charcoal-950/20" />
        <div className="relative z-10 container-page pt-28 pb-20 text-white max-w-3xl">
          <p className="section-label text-gold-400 mb-4">Exclusively Private · Your Group Only</p>
          <span className="divider-gold mb-6 block" />
          <h1 className="font-serif font-light text-white leading-[1.1] mb-5" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Private Tours in Puglia — Explore at Your Own Pace.
          </h1>
          <p className="font-sans font-light text-white/80 text-lg leading-relaxed max-w-2xl mb-10">
            No groups, no schedules, no compromises. ConnectinPuglia puts a knowledgeable local driver at your service for the day, so you can explore Puglia on your own terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/quote-contact" className="btn-primary">Book a Private Tour <ArrowRight size={16} /></Link>
            <a href="https://wa.me/393773096638" target="_blank" rel="noopener noreferrer" className="btn-ghost-light">
              <MessageCircle size={15} strokeWidth={1.5} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-charcoal-900 py-4">
        <div className="container-page flex flex-wrap justify-center gap-x-8 gap-y-3">
          {[
            { icon: <Users size={13} strokeWidth={1.5} />, text: '100% private — your group only' },
            { icon: <MapPin size={13} strokeWidth={1.5} />, text: 'Departing from your property' },
            { icon: <CheckCircle size={13} strokeWidth={1.5} />, text: 'Fully flexible itinerary' },
            { icon: <Star size={13} strokeWidth={1.5} />, text: 'Local knowledge included' },
            { icon: <Clock size={13} strokeWidth={1.5} />, text: 'Fixed price agreed in advance' },
          ].map(item => (
            <div key={item.text} className="flex items-center gap-2 text-white/70 px-3">
              <span className="text-gold-400">{item.icon}</span>
              <span className="font-sans text-xs tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TOUR CARDS */}
      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="text-center mb-12">
            <p className="section-label mb-4">Our Tours</p>
            <span className="divider-gold mx-auto mb-6 block" />
            <h2 className="section-title text-charcoal-900">Choose Your Experience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map(tour => (
              <Link key={tour.to} to={tour.to} className="group flex flex-col border border-charcoal-100 hover:border-gold-400 hover:shadow-xl transition-all duration-500">
                <div className="relative overflow-hidden aspect-video">
                  <img src={tour.img} alt={tour.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <span className="absolute top-4 left-4 bg-charcoal-900 text-gold-400 font-sans text-[10px] font-medium tracking-[0.2em] uppercase px-3 py-1">{tour.badge}</span>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center gap-1.5 font-sans text-xs text-charcoal-400"><Clock size={12} strokeWidth={1.5} />{tour.duration}</span>
                  </div>
                  <h3 className="font-serif text-xl font-light text-charcoal-900 mb-3">{tour.title}</h3>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {tour.tags.map(tag => (
                      <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-charcoal-500 bg-charcoal-50 px-2.5 py-1">{tag}</span>
                    ))}
                  </div>
                  <p className="font-sans text-sm text-charcoal-500 leading-relaxed flex-1">{tour.desc}</p>
                  <span className="mt-5 flex items-center gap-2 font-sans text-xs font-medium tracking-widests uppercase text-gold-500 group-hover:gap-3 transition-all duration-300">
                    Tour Details <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW PRIVATE TOURS WORK */}
      <section className="py-16 bg-cream">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">How It Works</p>
              <span className="divider-gold mb-6 block" />
              <h2 className="section-title text-charcoal-900 mb-8">How Private Tours Work</h2>
              <ul className="flex flex-col gap-5">
                {[
                  { n: '01', title: 'Departing from your property', desc: 'Your driver collects you at your masseria, hotel, or apartment entrance. No need to arrange separate transport to a meeting point.' },
                  { n: '02', title: 'Fully flexible itinerary', desc: "The suggested itinerary is a starting point. Want to spend more time in Locorotondo? Skip one stop and add another? It's your day." },
                  { n: '03', title: 'Local knowledge included', desc: 'Your driver knows the back roads, the best lunch spots, the olive oil producer worth stopping at, and the viewpoint that isn\'t on any map.' },
                  { n: '04', title: 'Fixed price agreed in advance', desc: 'No meters, no surprises. Your price is confirmed at booking — regardless of traffic, extra stops, or time adjustments on the day.' },
                ].map(s => (
                  <li key={s.n} className="flex gap-5">
                    <span className="font-serif text-3xl font-light text-gold-200 flex-none leading-none">{s.n}</span>
                    <div>
                      <h4 className="font-sans font-medium text-sm text-charcoal-900 mb-1">{s.title}</h4>
                      <p className="font-sans text-sm text-charcoal-500 leading-relaxed">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="section-label mb-4">Departure Points</p>
              <span className="divider-gold mb-6 block" />
              <h2 className="font-serif text-3xl font-light text-charcoal-900 mb-6">We Pick You Up From</h2>
              <div className="grid grid-cols-2 gap-3">
                {departurePts.map(pt => (
                  <div key={pt} className="flex items-center gap-3 bg-white border border-charcoal-100 px-4 py-3">
                    <MapPin size={13} strokeWidth={1.5} className="text-gold-500 flex-none" />
                    <span className="font-sans text-sm text-charcoal-700">{pt}</span>
                  </div>
                ))}
              </div>
              <p className="font-sans text-xs text-charcoal-400 mt-4">Not listed? Contact us — we depart from anywhere in Puglia.</p>
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
              {faqs.map((faq, i) => <FaqItem key={faq.q} q={faq.q} a={faq.a} i={i} />)}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-cream">
        <div className="container-page">
          <div className="text-center mb-10">
            <p className="section-label mb-4">Guest Reviews</p>
            <span className="divider-gold mx-auto mb-6 block" />
            <h2 className="section-title text-charcoal-900">What Guests Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { text: "We spent a full day touring the Valle d'Itria — the best day of our trip. Our driver knew every trullo and took us to a family olive oil farm.", author: 'Charles & Victoria M.', origin: 'London, UK' },
              { text: "The food and olive oil tour was a revelation — olive oil estate, market, orecchiette maker. Something we would never have found or arranged on our own.", author: 'Marie & Pierre D.', origin: 'Paris, France' },
              { text: "Salento tour from our masseria near Fasano — Lecce, Gallipoli, Otranto, seafood lunch. ConnectinPuglia made it effortless.", author: 'Stefan & Anna K.', origin: 'Vienna, Austria' },
            ].map(t => (
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

      {/* FINAL CTA */}
      <section className="py-20 bg-charcoal-950 text-white">
        <div className="container-page text-center">
          <h2 className="font-serif font-light text-white text-4xl mb-4">Want a Bespoke Itinerary?</h2>
          <p className="font-sans text-white/60 max-w-md mx-auto mb-8 leading-relaxed">Multi-day tours, special requests, custom combinations — we build it around you. Tell us your dates and we'll plan the perfect programme.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/quote-contact" className="btn-primary">Plan My Private Tour <ArrowRight size={15} /></Link>
            <a href="https://wa.me/393773096638" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sans text-sm font-medium text-white/70 hover:text-white transition-colors">
              <MessageCircle size={15} strokeWidth={1.5} /> WhatsApp for Instant Quote
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
