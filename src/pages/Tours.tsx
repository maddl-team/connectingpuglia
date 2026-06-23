import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Users, Star } from 'lucide-react'

const tours = [
  {
    id: 'itria',
    badge: 'Most Popular',
    title: 'Valle d\'Itria & the Trulli',
    duration: 'Full day · 8 hrs',
    maxPax: 'Up to 7',
    highlights: ['Alberobello UNESCO Trulli', 'Locorotondo hilltop village', 'Cisternino & the Valle', 'Local masseria lunch option'],
    description: 'Discover the iconic trulli of Alberobello, the whitewashed terraces of Locorotondo, and the charming butchers\' villages of Cisternino. This quintessential Puglia experience takes you through the heart of the Valle d\'Itria at a relaxed, unhurried pace.',
    img: '/images/tours/valle-ditria-hero.png',
  },
  {
    id: 'lecce',
    badge: 'Culture & Art',
    title: 'Lecce & the Baroque South',
    duration: 'Full day · 9 hrs',
    maxPax: 'Up to 7',
    highlights: ['Lecce Baroque architecture', 'Otranto & its mosaic', 'Gallipoli old town', 'Optional olive oil tasting'],
    description: 'Often called the "Florence of the South", Lecce dazzles with its extraordinary Baroque architecture carved in golden local stone. Continue to the walled seafront city of Gallipoli and the ancient mosaics of Otranto Cathedral for a journey through millennia of history.',
    img: '/images/tours/salento-hero.png',
  },
  {
    id: 'ostuni',
    badge: 'Scenic & Relaxing',
    title: 'Ostuni, Fasano & Monopoli',
    duration: 'Full day · 8 hrs',
    maxPax: 'Up to 7',
    highlights: ['Ostuni White City', 'Fasano Roman mosaics', 'Monopoli harbour', 'Coastal road drive'],
    description: 'Follow the coast north through Monopoli\'s beautiful harbour, inland to the Roman-era mosaics of Fasano, and up to the dramatic white hilltop silhouette of Ostuni — the White City — overlooking miles of olive groves and the Adriatic Sea.',
    img: '/images/destinations/ostuni-hero.png',
  },
  {
    id: 'matera',
    badge: 'Cross-Regional',
    title: 'Matera & the Sassi',
    duration: 'Full day · 10 hrs',
    maxPax: 'Up to 7',
    highlights: ['Matera UNESCO Sassi caves', 'Belvedere viewpoints', 'Cave church frescoes', 'Local lunch in the Sassi'],
    description: 'Cross the border into Basilicata to visit Matera — one of the world\'s oldest continuously inhabited settlements and a UNESCO World Heritage Site. Walk the ancient stone lanes, peer into rupestrian churches, and marvel at a city carved directly into the ravine.',
    img: '/images/destinations/matera-hero.png',
  },
  {
    id: 'winery',
    badge: 'Gastronomy',
    title: 'Pugliese Wine & Olive Oil',
    duration: 'Half day · 4–5 hrs',
    maxPax: 'Up to 7',
    highlights: ['Primitivo winery visit', 'Negroamaro tasting', 'Frantoio olive oil mill', 'Artisan cheese producers'],
    description: 'Puglia produces more wine and olive oil than any other Italian region. This private gastronomy tour takes you behind the scenes at a boutique winery and a traditional frantoio (olive press) — with guided tastings, cellar tours, and plenty to bring home.',
    img: '/images/tours/wine-puglia-hero.png',
  },
  {
    id: 'bespoke',
    badge: 'Fully Custom',
    title: 'Bespoke Itinerary',
    duration: 'Your choice',
    maxPax: 'Any group size',
    highlights: ['Your destinations', 'Your schedule', 'Multi-day available', 'Driver-guide option'],
    description: 'Have a specific destination in mind? A combination of experiences? A multi-day road trip across the heel of Italy\'s boot? We build completely custom itineraries tailored to your interests, pace, and group. Just tell us where you want to go.',
    img: '/images/geo/how-to-get-around-hero.png',
  },
]

export default function Tours() {
  return (
    <>
      <Helmet>
        <title>Private Tours in Puglia | Connect in Puglia</title>
        <meta name="description" content="Curated private tours in Puglia: Alberobello Trulli, Lecce Baroque, Ostuni, Matera, and wine & olive oil tastings. Custom itineraries available." />
        <link rel="canonical" href="https://connectinpuglia.com/tours" />
      </Helmet>

      {/* Page Header */}
      <section
        className="relative pt-40 pb-24 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/tours/private-tours-hero.png')` }}
      >
        <div className="absolute inset-0 bg-charcoal-900/70" />
        <div className="relative z-10 container-page text-white">
          <p className="section-label text-gold-400 mb-4">Private Experiences</p>
          <span className="divider-gold mb-6 block" />
          <h1 className="font-serif font-light text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Discover Puglia
          </h1>
          <p className="font-sans text-white/70 max-w-xl mt-4 leading-relaxed">
            Curated day tours and custom itineraries — experienced privately, at your own pace, with a driver who knows every corner of this remarkable region.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-cream">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: <Users size={22} strokeWidth={1} className="text-gold-500 mx-auto mb-3" />, title: 'Exclusively Private', desc: 'Every tour is for your group only. No strangers, no shared buses.' },
              { icon: <Star size={22} strokeWidth={1} className="text-gold-500 mx-auto mb-3" />, title: 'Expert Local Guides', desc: 'Drivers with deep local knowledge or full guide service available.' },
              { icon: <Clock size={22} strokeWidth={1} className="text-gold-500 mx-auto mb-3" />, title: 'Your Pace, Your Schedule', desc: 'Leave when you like. Linger where you want. Zero compromise.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 border border-charcoal-100">
                {item.icon}
                <h3 className="font-serif text-xl font-light text-charcoal-900 mb-2">{item.title}</h3>
                <p className="font-sans text-sm text-charcoal-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours grid */}
      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div key={tour.id} id={tour.id} className="group flex flex-col border border-charcoal-100 hover:border-gold-400 hover:shadow-xl transition-all duration-500">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={tour.img}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-charcoal-900 text-gold-400 font-sans text-[10px] font-medium tracking-[0.2em] uppercase px-3 py-1">
                    {tour.badge}
                  </span>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center gap-1.5 font-sans text-xs text-charcoal-400">
                      <Clock size={12} strokeWidth={1.5} /> {tour.duration}
                    </span>
                    <span className="flex items-center gap-1.5 font-sans text-xs text-charcoal-400">
                      <Users size={12} strokeWidth={1.5} /> {tour.maxPax}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-light text-charcoal-900 mb-3">{tour.title}</h3>
                  <p className="font-sans text-sm text-charcoal-500 leading-relaxed mb-5 flex-1">{tour.description}</p>
                  <ul className="flex flex-col gap-1.5 mb-6">
                    {tour.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 font-sans text-xs text-charcoal-600">
                        <span className="w-1 h-1 rounded-full bg-gold-500 flex-none" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link to="/quote-contact" className="btn-primary text-xs py-3 w-full justify-center">
                    Enquire About This Tour <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CTA */}
      <section className="py-20 bg-charcoal-950 text-white">
        <div className="container-page text-center">
          <p className="section-label text-gold-500 mb-4">Not Seeing What You Want?</p>
          <span className="divider-gold mx-auto mb-6 block" />
          <h2 className="font-serif font-light text-white text-4xl max-w-xl mx-auto mb-6">
            We Build Bespoke Itineraries
          </h2>
          <p className="font-sans text-white/60 max-w-md mx-auto mb-10">
            Tell us your interests, accommodation, and dates — and we'll craft a private Puglia experience that's uniquely yours.
          </p>
          <Link to="/quote-contact" className="btn-primary">
            Start Planning <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
