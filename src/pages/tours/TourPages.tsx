import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowRight, Clock, CheckCircle, MapPin, MessageCircle, Star, ChevronDown, ChevronUp, Users } from 'lucide-react'

type Highlight = { place: string; desc: string }
type ItineraryItem = { time: string; desc: string }
type TourFaq = { q: string; a: string }
type Testimonial = { text: string; author: string; origin: string }

type TourSubPageProps = {
  metaTitle: string
  metaDesc: string
  canonical: string
  heroImg: string
  h1: string
  badge: string
  duration: string
  departures: string[]
  intro: string
  highlights: Highlight[]
  itinerary: ItineraryItem[]
  faqs: TourFaq[]
  testimonials: Testimonial[]
  touristTripSchema: object
}

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

function TourPage({
  metaTitle, metaDesc, canonical, heroImg, h1, badge, duration, departures, intro,
  highlights, itinerary, faqs, testimonials, touristTripSchema,
}: TourSubPageProps) {
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
        <script type="application/ld+json">{JSON.stringify(touristTripSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section
        className="relative min-h-[75vh] flex items-center overflow-hidden"
        style={{ backgroundImage: `url('${heroImg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/90 via-charcoal-950/68 to-charcoal-950/20" />
        <div className="relative z-10 container-page pt-28 pb-20 text-white max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="bg-gold-500 text-charcoal-900 font-sans text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1">{badge}</span>
            <span className="flex items-center gap-1.5 font-sans text-xs text-white/60"><Clock size={12} strokeWidth={1.5} />{duration}</span>
          </div>
          <h1 className="font-serif font-light text-white leading-[1.1] mb-5" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}>{h1}</h1>
          <p className="font-sans font-light text-white/80 text-lg leading-relaxed max-w-2xl mb-10">{intro}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/quote-contact" className="btn-primary">Enquire About This Tour <ArrowRight size={16} /></Link>
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
            { icon: <MapPin size={13} strokeWidth={1.5} />, text: 'Departs from your property' },
            { icon: <CheckCircle size={13} strokeWidth={1.5} />, text: 'Fully flexible itinerary' },
            { icon: <Clock size={13} strokeWidth={1.5} />, text: 'Fixed price agreed in advance' },
          ].map(item => (
            <div key={item.text} className="flex items-center gap-2 text-white/70 px-3">
              <span className="text-gold-400">{item.icon}</span>
              <span className="font-sans text-xs tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS + ITINERARY */}
      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Highlights */}
            <div>
              <p className="section-label mb-4">Tour Highlights</p>
              <span className="divider-gold mb-6 block" />
              <h2 className="font-serif text-3xl font-light text-charcoal-900 mb-8">What You Will See</h2>
              <div className="flex flex-col gap-6">
                {highlights.map((h, i) => (
                  <div key={h.place} className="flex gap-5">
                    <span className="font-serif text-3xl font-light text-gold-200 flex-none leading-none w-8 text-center">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-sans font-semibold text-sm text-charcoal-900 mb-1">{h.place}</h3>
                      <p className="font-sans text-sm text-charcoal-500 leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <p className="section-label mb-4">Sample Itinerary</p>
              <span className="divider-gold mb-6 block" />
              <h2 className="font-serif text-3xl font-light text-charcoal-900 mb-8">How the Day Unfolds</h2>
              <div className="relative pl-6 border-l border-charcoal-100">
                {itinerary.map((item, i) => (
                  <div key={item.time} className={`relative ${i < itinerary.length - 1 ? 'mb-7' : ''}`}>
                    <div className="absolute -left-[1.625rem] top-1 w-3 h-3 rounded-full bg-gold-500 border-2 border-white" />
                    <span className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-gold-600 mb-1 block">{item.time}</span>
                    <p className="font-sans text-sm text-charcoal-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-gold-50 border border-gold-200 p-5">
                <p className="font-sans text-xs text-charcoal-600 leading-relaxed">
                  <span className="font-semibold text-gold-700">Fully flexible</span> — this itinerary is a suggestion. Tell us what you want to prioritise and we will adjust the day around you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTURE POINTS */}
      <section className="py-12 bg-cream">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl font-light text-charcoal-900">Departure Points</h2>
            <p className="font-sans text-sm text-charcoal-500 mt-2">We collect you from your accommodation in any of these areas.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {departures.map(d => (
              <div key={d} className="flex items-center gap-2 bg-white border border-charcoal-100 px-4 py-2.5">
                <MapPin size={12} strokeWidth={1.5} className="text-gold-500 flex-none" />
                <span className="font-sans text-sm text-charcoal-700">{d}</span>
              </div>
            ))}
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
              <h2 className="font-serif text-3xl font-light text-charcoal-900 mb-4">Questions About This Tour</h2>
              <Link to="/private-tours-puglia" className="flex items-center gap-2 font-sans text-sm font-medium text-gold-600 hover:text-gold-700 transition-colors mt-2">
                <ArrowRight size={14} strokeWidth={1.5} /> All Private Tours
              </Link>
            </div>
            <div className="lg:col-span-2">
              {faqs.map((faq, i) => <FaqItem key={faq.q} q={faq.q} a={faq.a} i={i} />)}
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

      {/* CTA */}
      <section className="py-20 bg-charcoal-900 text-white">
        <div className="container-page text-center">
          <h2 className="font-serif font-light text-white text-4xl mb-4">Ready to Book This Tour?</h2>
          <p className="font-sans text-white/60 max-w-md mx-auto mb-8 leading-relaxed">Tell us your dates, group size, and pick-up location. We confirm availability and price within 2 hours.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/quote-contact" className="btn-primary">Request a Tour Quote <ArrowRight size={15} /></Link>
            <a href="https://wa.me/393773096638" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sans text-sm font-medium text-white/70 hover:text-white transition-colors">
              <MessageCircle size={15} strokeWidth={1.5} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-white border-t border-charcoal-100">
        <div className="container-page">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-charcoal-400 mb-5 text-center">Other Tours</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Valle d'Itria Tour", to: '/tour-valle-ditria' },
              { label: 'Wine Tour Puglia', to: '/tour-wine-puglia' },
              { label: 'Salento Tour', to: '/tour-salento' },
              { label: 'Baroque Puglia', to: '/tour-baroque-puglia' },
              { label: 'Food & Olive Oil Tour', to: '/tour-food-olive-oil' },
              { label: 'All Private Tours', to: '/private-tours-puglia' },
            ].map(l => (
              <Link key={l.to} to={l.to} className="font-sans text-sm text-charcoal-600 hover:text-gold-600 underline underline-offset-2 transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const sharedDepartures = [
  'Fasano / Borgo Egnazia',
  'Ostuni',
  "Alberobello / Valle d'Itria",
  'Polignano a Mare / Monopoli',
  'Lecce & Salento',
  'Bari',
  'Trani',
]

const sharedFaqs: TourFaq[] = [
  { q: 'What is included in the tour price?', a: 'Your driver, vehicle, fuel, and all logistics. Entrance fees, meals, and tastings are at your own cost and can be pre-arranged on request.' },
  { q: 'How many people can join?', a: '100% private — your group only. Mercedes-Benz E-Class (3 pax), V-Class (7 pax), Vito Minibus (8 pax). All prices are per vehicle, not per person.' },
  { q: 'Can I customise the itinerary?', a: 'Yes — all itineraries are fully flexible. Tell us your priorities and we build the day around you.' },
  { q: 'What does the tour cost?', a: 'Fixed price agreed in advance. Contact us via form or WhatsApp for an immediate quote.' },
  { q: 'Do drivers speak English?', a: 'Yes — fluent English, local knowledge, and genuine enthusiasm for the region. Many guests say their driver was a highlight of the day.' },
  { q: 'Can I combine this tour with an airport transfer?', a: "Yes — arrive at the airport, tour the same day, arrive at your masseria in the evening. One seamless booking." },
]

export function TourValleDItria() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: "Valle d'Itria Private Tour",
    description: "Private full-day tour of the Valle d'Itria — Alberobello, Locorotondo, Cisternino, Martina Franca.",
    itinerary: { '@type': 'ItemList', itemListElement: ['Alberobello', 'Locorotondo', 'Cisternino', 'Martina Franca'] },
    touristType: 'Luxury traveller',
    provider: { '@type': 'Organization', name: 'ConnectinPuglia', url: 'https://connectinpuglia.com' },
  }
  return (
    <TourPage
      metaTitle="Valle d'Itria Private Tour with Chauffeur | Connect in Puglia"
      metaDesc="Private full-day tour of the Valle d'Itria with a local chauffeur. Alberobello, Locorotondo, Cisternino, Martina Franca. Fixed rates. Departing from your masseria. Book now."
      canonical="https://connectinpuglia.com/tour-valle-ditria"
      heroImg="https://connectinpuglia.com/images/tours/valle-ditria-hero.png"
      h1="Valle d'Itria Private Tour — Into the Heart of Puglia."
      badge="Most Popular"
      duration="Full day or half day · 5–8 hours"
      intro="The Valle d'Itria is the most iconic landscape in Puglia — whitewashed villages perched on hilltops, rolling vineyards, and the extraordinary conical trulli of Alberobello. This private full-day tour takes you through the heart of the valley at your own pace."
      departures={sharedDepartures}
      highlights={[
        { place: 'Alberobello — UNESCO Trulli Capital', desc: 'Explore Rione Monti and Rione Aia Piccola — over 1,500 conical trulli houses, a UNESCO World Heritage Site and one of the most extraordinary places in Italy.' },
        { place: 'Locorotondo — The Circular Hilltop', desc: 'The "round place" — a perfectly circular hilltop village above the valley, with sweeping views over the trulli landscape and elegant whitewashed lanes.' },
        { place: 'Cisternino — Medieval Lanes & Bombette', desc: 'Medieval lanes, famous bombette — hand-rolled pork rolls cooked over wood fire at the local butcher-restaurants. One of Puglia\'s most authentic lunch experiences.' },
        { place: 'Martina Franca — Baroque Summit', desc: "The most elegant baroque town in the valley and the highest point of the Murgia plateau. Palazzo Ducale, baroque churches, and a sophisticated piazza aperitivo scene." },
      ]}
      itinerary={[
        { time: 'Morning', desc: "Alberobello — explore Rione Monti and Rione Aia Piccola. Trulli artisan workshops, the iconic silhouette against the Puglia sky. Your driver knows the best entrance points and local spots." },
        { time: 'Mid-morning', desc: "Locorotondo — coffee on the main piazza with views over the valley. Circular walking tour of the centro storico." },
        { time: 'Lunch', desc: "Cisternino or local masseria — driver recommends best options based on season and group preference. Bombette at a butcher-restaurant or a sit-down masseria lunch." },
        { time: 'Afternoon', desc: "Martina Franca — Palazzo Ducale, baroque churches, Piazza Roma aperitivo. The most refined stop on the tour." },
        { time: 'Late afternoon', desc: "Return transfer to your accommodation with optional scenic stops en route. Fully flexible — can adjust any stop, add viewpoints, or extend at your favourite location." },
      ]}
      faqs={[
        ...sharedFaqs,
        { q: "Is Alberobello crowded?", a: "Alberobello is busy in summer mornings. We time our visit to arrive before the peak crowd and can adjust based on conditions." },
        { q: "Can I buy trulli products in Alberobello?", a: "Yes — the trulli district has artisan workshops and producers. Your driver will guide you to the authentic ones." },
      ]}
      testimonials={[
        { text: "We spent a full day touring the Valle d'Itria — the best day of our trip. Our driver knew every trullo and took us to a family olive oil farm we would never have found.", author: 'Charles & Victoria M.', origin: 'London, UK' },
        { text: "Cisternino for lunch was the revelation — bombette at a real butcher's shop in the medieval lanes. Our driver knew exactly where to go.", author: 'Julie & Pierre F.', origin: 'Lyon, France' },
      ]}
      touristTripSchema={schema}
    />
  )
}

export function TourWinePuglia() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: 'Puglia Wine Tour',
    description: 'Private wine tour in Puglia visiting Primitivo and Negroamaro wineries with guided tastings.',
    itinerary: { '@type': 'ItemList', itemListElement: ['Primitivo winery', 'Negroamaro estate', 'Artisan producers'] },
    touristType: 'Food & wine traveller',
    provider: { '@type': 'Organization', name: 'ConnectinPuglia', url: 'https://connectinpuglia.com' },
  }
  return (
    <TourPage
      metaTitle="Private Wine Tour Puglia — Primitivo & Negroamaro with Chauffeur | Connect in Puglia"
      metaDesc="Private wine tour in Puglia with a professional chauffeur. Primitivo and Negroamaro winery visits, guided cellar tours and tastings. Fixed rates. Book now."
      canonical="https://connectinpuglia.com/tour-wine-puglia"
      heroImg="https://connectinpuglia.com/images/tours/wine-puglia-hero.png"
      h1="Puglia Wine Tour — Primitivo, Negroamaro & the People Behind Them."
      badge="Gastronomy"
      duration="Half day or full day · 4–7 hours"
      intro="Puglia produces more wine than any other Italian region. This private tour takes you behind the scenes at boutique wineries producing the region's two signature reds — with your designated driver handling all the logistics so you can drink freely."
      departures={sharedDepartures}
      highlights={[
        { place: 'Primitivo Cantina', desc: 'Puglia\'s most celebrated grape variety — rich, full-bodied, with extraordinary depth. A guided cellar tour and structured tasting of 4–5 wines from a boutique producer.' },
        { place: 'Negroamaro Estate', desc: 'The other great Puglian red — "black and bitter" in name, complex and elegant in the glass. Vineyard walk and barrel tasting at a family estate.' },
        { place: 'Rosé & White Wines', desc: 'Puglia\'s Rosato and Verdeca whites are underrated treasures. Most visits include pours of these alongside the reds.' },
        { place: 'Producer Direct Purchase', desc: 'Buy directly from the producer at cellar prices — wines unavailable in retail, shipped home on request.' },
      ]}
      itinerary={[
        { time: '10:00', desc: 'Pick-up from your accommodation. Drive through the Murgia olive grove landscape with driver commentary on the wine regions.' },
        { time: '11:00', desc: 'First winery — guided cellar tour, barrel room, and structured tasting of 4–5 wines. Time to ask questions and explore the estate.' },
        { time: '13:00', desc: 'Light lunch at the winery or a nearby agriturismo (pre-bookable). Optional olive oil and local cheese tasting alongside lunch.' },
        { time: '14:30', desc: 'Second producer — Negroamaro estate. Vineyard walk among ancient vines, followed by tasting.' },
        { time: '15:30', desc: 'Optional: third producer, olive oil mill visit, or artisan market depending on time and preference.' },
        { time: '16:00', desc: 'Return transfer to your accommodation. Any wine purchased can be transported in the vehicle.' },
      ]}
      faqs={[
        ...sharedFaqs,
        { q: 'Can I buy wine to take home?', a: 'Yes — you can buy directly from the producers and carry wine in the vehicle. International shipping can also be arranged through the wineries.' },
        { q: 'Is the tour suitable for non-wine-drinkers?', a: 'Yes — the landscape, architecture, and olive oil culture are equally interesting. We can adjust the focus of the tour on request.' },
      ]}
      testimonials={[
        { text: "The food and olive oil tour was a revelation — olive oil estate, market, orecchiette maker. Something we would never have found or arranged on our own.", author: 'Marie & Pierre D.', origin: 'Paris, France' },
        { text: "Private wine tour was the perfect day — two exceptional wineries, great lunch, and no one had to drive. ConnectinPuglia thought of everything.", author: 'Robert & Helen K.', origin: 'Toronto, Canada' },
      ]}
      touristTripSchema={schema}
    />
  )
}

export function TourSalento() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: 'Salento Private Tour',
    description: 'Private full-day tour of the Salento peninsula — Lecce, Otranto, Gallipoli.',
    itinerary: { '@type': 'ItemList', itemListElement: ['Lecce', 'Otranto', 'Gallipoli'] },
    touristType: 'Cultural traveller',
    provider: { '@type': 'Organization', name: 'ConnectinPuglia', url: 'https://connectinpuglia.com' },
  }
  return (
    <TourPage
      metaTitle="Private Salento Tour — Lecce, Otranto, Gallipoli with Chauffeur | Connect in Puglia"
      metaDesc="Private full-day tour of Salento with a local chauffeur. Lecce Baroque, Otranto Cathedral mosaics, Gallipoli old town. Fixed rates. Book now."
      canonical="https://connectinpuglia.com/tour-salento"
      heroImg="https://connectinpuglia.com/images/tours/salento-hero.png"
      h1="Salento Private Tour — Lecce, Gallipoli, Otranto."
      badge="Culture & Coast"
      duration="Full day · 8–9 hours"
      intro="The Salento peninsula — the heel of Italy's boot — is a world of Baroque architecture, crystal sea, and ancient history. This full-day private tour takes you through its three great cities in a single, unforgettable day."
      departures={sharedDepartures}
      highlights={[
        { place: 'Lecce — Florence of the South', desc: 'The most extravagant Baroque city in Italy, built in warm golden Lecce stone. Basilica di Santa Croce, Piazza del Duomo, Roman amphitheatre, and artisan papier-mâché workshops.' },
        { place: 'Otranto — Eastern Gateway', desc: "Otranto's 12th-century Cathedral contains Italy's largest mosaic floor — a Byzantine masterpiece covering the entire nave. The Aragonese castle and old town walls complete a remarkable visit." },
        { place: 'Gallipoli — The Beautiful City', desc: 'A fortified island old town connected to the mainland by a bridge — Baroque cathedral, 17th-century fountains, and the clearest Ionian Sea water in Puglia.' },
        { place: 'Adriatic & Ionian Coastal Road', desc: 'The drive between these three cities follows two different coastlines — Adriatic on the east, Ionian on the west — with extraordinary colour contrasts.' },
      ]}
      itinerary={[
        { time: '08:30', desc: 'Pick-up from your accommodation. Drive south towards Lecce on the Via Appia.' },
        { time: '10:00', desc: "Lecce — walking tour of Piazza del Duomo, Basilica di Santa Croce, Roman amphitheatre, and the main shopping street. Espresso on Piazza Sant'Oronzo." },
        { time: '12:00', desc: 'Drive to Otranto along the Adriatic coast (45 minutes).' },
        { time: '12:45', desc: 'Otranto — Cathedral floor mosaic, Aragonese castle, harbour. Lunch on the seafront (driver recommends best options).' },
        { time: '15:00', desc: 'Drive to Gallipoli on the Ionian coast (40 minutes).' },
        { time: '15:45', desc: 'Gallipoli — walk the island old town, Baroque cathedral, views of the Ionian from the walls.' },
        { time: '17:30', desc: 'Return transfer to your accommodation. Optional: stop at a coastal viewpoint or beach on the way back.' },
      ]}
      faqs={[
        ...sharedFaqs,
        { q: 'Can I swim on the Salento tour?', a: 'Yes — if you want to include a beach stop, tell us and we will build it into the itinerary. The Ionian coast near Gallipoli is exceptional in summer.' },
        { q: 'Is Lecce a ZTL zone?', a: "Yes — the historic centre is restricted traffic. Your driver has the permits to access hotel drop-off zones inside the centre." },
      ]}
      testimonials={[
        { text: "Salento tour from our masseria near Fasano — Lecce, Gallipoli, Otranto, seafood lunch. ConnectinPuglia made it effortless.", author: 'Stefan & Anna K.', origin: 'Vienna, Austria' },
        { text: "The Otranto cathedral floor mosaic alone was worth the whole trip. Our driver knew every corner of each city and recommended a perfect lunch spot.", author: 'Jennifer T.', origin: 'New York, USA' },
      ]}
      touristTripSchema={schema}
    />
  )
}

export function TourBaroquePuglia() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: 'Baroque Puglia Private Tour',
    description: 'Private day tour of Baroque Puglia — Lecce, Martina Franca, and Manduria with optional wine tasting.',
    itinerary: { '@type': 'ItemList', itemListElement: ['Lecce', 'Martina Franca', 'Manduria'] },
    touristType: 'Cultural traveller',
    provider: { '@type': 'Organization', name: 'ConnectinPuglia', url: 'https://connectinpuglia.com' },
  }
  return (
    <TourPage
      metaTitle="Baroque Puglia Private Tour — Lecce, Martina Franca with Chauffeur | Connect in Puglia"
      metaDesc="Private day tour of Baroque Puglia — Lecce, Martina Franca, Locorotondo. Architecture, history, and wine. Fixed rates. Book now."
      canonical="https://connectinpuglia.com/tour-baroque-puglia"
      heroImg="https://connectinpuglia.com/images/tours/baroque-puglia-hero.png"
      h1="Baroque Puglia — Architecture, History & the Golden South."
      badge="Architecture"
      duration="Full day · 8 hours"
      intro="From Lecce's extraordinary golden stone facades to the musical heritage of Martina Franca, this tour celebrates the Baroque as Puglia's defining architectural gift — a style more exuberant here than anywhere else in Italy."
      departures={sharedDepartures}
      highlights={[
        { place: 'Lecce — The Baroque Capital', desc: "Basilica di Santa Croce, Piazza del Duomo, Palazzo dei Celestini — Lecce's Baroque is carved from a local limestone that turns gold in the afternoon light. The most ornate city in the Italian south." },
        { place: 'Martina Franca — Operatic Heritage', desc: "One of the most elegant towns in Puglia — Baroque palazzi, the Palazzo Ducale, and the annual Valle d'Itria Opera Festival, one of Italy's most celebrated summer music events." },
        { place: 'Locorotondo — The Circular Village', desc: "Perched on the highest point of the Valle d'Itria, Locorotondo offers panoramic views across the trulli landscape and an immaculate Baroque church at its centre." },
        { place: 'Manduria — Primitivo Wine Capital', desc: 'The homeland of Puglia\'s most celebrated grape variety — Primitivo di Manduria. Optional tasting at a producer in the heart of the DOC zone.' },
      ]}
      itinerary={[
        { time: '08:30', desc: 'Pick-up from your accommodation.' },
        { time: '10:00', desc: "Lecce — deep Baroque walking tour. Basilica di Santa Croce, Piazza del Duomo, Roman theatre, artisan workshops. 2 hours to explore at your pace." },
        { time: '12:30', desc: "Drive to Martina Franca (45 minutes). Lunch in the centro storico." },
        { time: '14:30', desc: 'Martina Franca — Palazzo Ducale, Piazza Roma, baroque churches, porticoed main street.' },
        { time: '15:45', desc: "Drive to Locorotondo. Coffee with views over the Valle d'Itria." },
        { time: '16:30', desc: 'Manduria — optional Primitivo tasting at a boutique cantina.' },
        { time: '17:30', desc: 'Return transfer to your accommodation.' },
      ]}
      faqs={[
        ...sharedFaqs,
        { q: 'Is this tour suitable for architecture enthusiasts?', a: "Yes — this is our most architecturally focused tour. Your driver has detailed knowledge of each building's history." },
        { q: 'Can I combine this with the Salento tour?', a: "For a full immersion in Puglian Baroque, consider spending two days — Baroque Puglia on day one, Salento on day two. We can arrange both as a consecutive programme." },
      ]}
      testimonials={[
        { text: "The Baroque Puglia tour was extraordinary — three cities, each different, each breathtaking. Our driver's commentary made the architecture come alive.", author: 'Professor A. Hoffmann', origin: 'Zurich, Switzerland' },
        { text: "We specifically came to Puglia for the Baroque architecture and this tour exceeded every expectation. Lecce alone was worth the journey.", author: 'Catherine & Paul N.', origin: 'Edinburgh, UK' },
      ]}
      touristTripSchema={schema}
    />
  )
}

export function TourFoodOliveOil() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: 'Puglia Food & Olive Oil Tour',
    description: 'Private food and olive oil tour in Puglia — frantoio, burrata dairy, artisan producers and pasta makers.',
    itinerary: { '@type': 'ItemList', itemListElement: ['Frantoio olive oil mill', 'Burrata dairy', 'Orecchiette makers', 'Artisan producers'] },
    touristType: 'Food & gastronomy traveller',
    provider: { '@type': 'Organization', name: 'ConnectinPuglia', url: 'https://connectinpuglia.com' },
  }
  return (
    <TourPage
      metaTitle="Private Food & Olive Oil Tour Puglia with Chauffeur | Connect in Puglia"
      metaDesc="Private food and olive oil tour in Puglia — frantoio olive press, burrata dairy, orecchiette makers, artisan producers. Fixed rates. Book now."
      canonical="https://connectinpuglia.com/tour-food-olive-oil"
      heroImg="https://connectinpuglia.com/images/tours/food-olive-oil-hero.png"
      h1="Puglia Food & Olive Oil Tour — From Grove to Table."
      badge="Food & Produce"
      duration="Half day or full day · 4–6 hours"
      intro="Puglia produces more olive oil than anywhere else in Italy — and its burrata, orecchiette, cheeses, and cured meats are among the country's finest. This private tour takes you behind the scenes with the producers who make it all."
      departures={sharedDepartures}
      highlights={[
        { place: 'Frantoio — Olive Oil Mill', desc: 'A traditional olive press — see the millstones, centrifuges, and storage vats, taste oils from different varieties side by side, and understand why Puglia\'s olive oil is unmatched.' },
        { place: 'Burrata Dairy', desc: 'Watch the production of the day\'s fresh burrata and fior di latte mozzarella — pulled by hand from warm whey in front of you. The freshest burrata you will ever eat.' },
        { place: 'Orecchiette & Pasta Makers', desc: "In Bari's old town, elderly women make orecchiette on the street. Your driver knows which producers also welcome visitors at home or in small workshops." },
        { place: 'Artisan Market or Caciocavallo Producers', desc: 'Seasonal: artisan caciocavallo cheese producers, taralli bakeries, or a local mercato. The itinerary adjusts based on what\'s best on the day.' },
      ]}
      itinerary={[
        { time: '09:30', desc: 'Pick-up from your accommodation. Drive through the olive grove landscape with driver commentary on the history of Puglia\'s oil culture.' },
        { time: '10:15', desc: "Frantoio visit — mill tour, explanation of the production process, tasting of fresh and aged oils from different cultivars. Time to buy direct from the producer." },
        { time: '11:30', desc: "Burrata dairy — production visit. Watch the mozzarella and burrata pulled by hand. Tasting of the day's fresh production." },
        { time: '12:30', desc: 'Farm lunch or masseria table — driver recommends the best option based on your preferences and the season.' },
        { time: '13:30', desc: 'Orecchiette maker visit or artisan market — based on itinerary preference and day of the week.' },
        { time: '14:30', desc: 'Return transfer to your accommodation.' },
      ]}
      faqs={[
        ...sharedFaqs,
        { q: 'Is the frantoio visit available year-round?', a: "The olive pressing season runs October–December. Year-round, we visit a working frantoio with stored oil tastings and full production explanation." },
        { q: 'Can I buy products to take home?', a: "Yes — olive oil, burrata (same day), and artisan products can all be purchased directly. Olive oil can be packed for checked luggage." },
      ]}
      testimonials={[
        { text: "The food and olive oil tour was a revelation — olive oil estate, market, orecchiette maker. Something we would never have found or arranged on our own.", author: 'Marie & Pierre D.', origin: 'Paris, France' },
        { text: "Watching burrata being made by hand and then eating it 20 minutes later was one of the best food experiences of my life. Our driver knew exactly where to take us.", author: 'Caroline H.', origin: 'Sydney, Australia' },
      ]}
      touristTripSchema={schema}
    />
  )
}
