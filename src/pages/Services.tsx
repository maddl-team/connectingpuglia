import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Plane, Ship, Clock, Heart, Users, CheckCircle } from 'lucide-react'

const services = [
  {
    id: 'airport',
    icon: <Plane size={32} strokeWidth={1} />,
    title: 'Airport Transfers',
    subtitle: 'Bari · Brindisi · Taranto',
    description: 'Door-to-door private transfers from all Puglia airports. We monitor your flight in real time and adjust to delays — no extra charge. Our driver waits in arrivals with a name board, helps with luggage, and ensures a seamless start to your stay.',
    features: [
      'Live flight monitoring',
      'Meet & greet in arrivals hall',
      'Name board service',
      'Luggage assistance',
      'Child seats available on request',
      'No waiting charges for delays',
    ],
    img: '/images/transfers/bari-airport-hero.png',
  },
  {
    id: 'port',
    icon: <Ship size={32} strokeWidth={1} />,
    title: 'Port & Ferry Transfers',
    subtitle: 'Bari · Brindisi · Taranto',
    description: 'Arriving by cruise ship or ferry? We meet you dockside and transfer you swiftly and comfortably to your accommodation, masseria, or onward destination anywhere in Puglia and beyond.',
    features: [
      'Dockside meet & greet',
      'Coordination with cruise schedules',
      'Group transport available',
      'Luggage storage assistance',
      'Flexible pick-up times',
    ],
    img: '/images/transfers/brindisi-port-hero.png',
  },
  {
    id: 'hourly',
    icon: <Clock size={32} strokeWidth={1} />,
    title: 'Hourly Chauffeur',
    subtitle: 'Minimum 3 hours',
    description: 'Have your personal driver at your disposal for the day. Ideal for business travel between cities, winery and olive oil farm visits, masserie hopping, or simply exploring the region at your own leisure without any fixed schedule.',
    features: [
      'English and Italian speaking drivers',
      'Flexible itinerary — you choose',
      'Wait-and-return service',
      'Multiple stops welcome',
      'Ideal for business trips',
      'Available 7 days a week',
    ],
    img: '/images/destinations/fasano-hero.png',
  },
  {
    id: 'wedding',
    icon: <Heart size={32} strokeWidth={1} />,
    title: 'Wedding & Special Events',
    subtitle: 'Masserie · Palazzi · Villas',
    description: 'Elegant, stress-free transport for your special day in Puglia. We work with wedding planners and couples directly to coordinate multi-vehicle logistics for the entire wedding party — from airport arrivals to the farewell transfer home.',
    features: [
      'Coordinated multi-vehicle fleets',
      'Ribbon and decoration available',
      'Collaboration with wedding planners',
      'On-call driver on the day',
      'Airport arrival coordination',
      'Flexible scheduling',
    ],
    img: '/images/main/wedding-detail.png',
  },
]

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Connect in Puglia</title>
        <meta name="description" content="Premium private transfer services in Puglia: airport transfers, port transfers, hourly chauffeur, and wedding transport. NCC licensed, professional, and reliable." />
        <link rel="canonical" href="https://connectinpuglia.com/services" />
      </Helmet>

      {/* Page Header */}
      <section
        className="relative pt-40 pb-24 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/home/home-hero.png')` }}
      >
        <div className="absolute inset-0 bg-charcoal-900/75" />
        <div className="relative z-10 container-page text-white">
          <p className="section-label text-gold-400 mb-4">What We Do</p>
          <span className="divider-gold mb-6 block" />
          <h1 className="font-serif font-light text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Our Services
          </h1>
          <p className="font-sans text-white/70 max-w-xl mt-4 leading-relaxed">
            Every journey managed with precision, care, and the warmth of true southern Italian hospitality.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="flex flex-col gap-0">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                id={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div
                  className={`relative overflow-hidden aspect-video lg:aspect-auto ${i % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className={`flex flex-col justify-center p-12 lg:p-16 bg-white border border-charcoal-100 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="text-gold-500 mb-5">{svc.icon}</div>
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-charcoal-400 mb-2">{svc.subtitle}</p>
                  <h2 className="font-serif text-3xl font-light text-charcoal-900 mb-4">{svc.title}</h2>
                  <p className="font-sans text-sm text-charcoal-500 leading-relaxed mb-7">{svc.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 font-sans text-sm text-charcoal-600">
                        <CheckCircle size={14} className="text-gold-500 flex-none" strokeWidth={1.5} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/quote-contact" className="btn-primary w-fit">
                    Request This Service <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-24 bg-charcoal-950 text-white">
        <div className="container-page">
          <div className="text-center mb-14">
            <p className="section-label text-gold-500 mb-4">Our Fleet</p>
            <span className="divider-gold mx-auto mb-6 block" />
            <h2 className="font-serif font-light text-white text-4xl">Premium Mercedes-Benz Vehicles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { model: 'Mercedes E-Class', pax: 'Up to 3 passengers', desc: 'Elegant business sedan — perfect for individual or couple transfers.', img: '/images/fleet/fleet-e-class.png' },
              { model: 'Mercedes V-Class', pax: 'Up to 7 passengers', desc: 'Spacious luxury van — ideal for families, small groups, and wedding parties.', img: '/images/fleet/fleet-v-class.png' },
              { model: 'Mercedes Sprinter', pax: 'Up to 16 passengers', desc: 'Executive minibus for larger groups, corporate events, and tour parties.', img: '/images/fleet/fleet-sprinter.png' },
            ].map((v) => (
              <div key={v.model} className="group">
                <div className="overflow-hidden mb-5 aspect-video">
                  <img src={v.img} alt={v.model} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <h3 className="font-serif text-xl font-light text-white mb-1">{v.model}</h3>
                <p className="font-sans text-xs text-gold-500 tracking-wider uppercase mb-2">{v.pax}</p>
                <p className="font-sans text-sm text-white/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream">
        <div className="container-page text-center">
          <h2 className="section-title text-charcoal-900 mb-4">Ready to Book Your Transfer?</h2>
          <p className="font-sans text-charcoal-500 max-w-md mx-auto mb-8">
            Get a personalised quote within 2 hours. We're available 7 days a week.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/quote-contact" className="btn-primary">
              Get a Quote <ArrowRight size={15} />
            </Link>
            <a
              href="https://wa.me/393773096638"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Users size={15} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
