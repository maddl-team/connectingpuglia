import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Car, Users, Wifi, Shield } from 'lucide-react'
import TwitterMeta from '../components/TwitterMeta'

const fleet = [
  {
    model: 'Mercedes-Benz E-Class',
    capacity: 'Up to 3 passengers',
    luggage: '3 large suitcases',
    desc: 'The benchmark business sedan. Perfect for individuals, couples, and business travellers requiring a discreet, refined transfer.',
    features: ['Air conditioning', 'Leather interior', 'USB charging', 'WiFi on request', 'Water & magazines'],
    img: '/images/fleet/our-fleet-card-1.webp',
  },
  {
    model: 'Mercedes-Benz V-Class',
    capacity: 'Up to 7 passengers',
    luggage: '7 large suitcases',
    desc: 'The premium MPV for families, small groups, and guests with substantial luggage. Spacious, comfortable, and elegantly appointed.',
    features: ['Captain chairs', 'Full climate control', 'Privacy glass', 'WiFi on request', 'Child seats available'],
    img: '/images/fleet/our-fleet-card-2.webp',
  },
  {
    model: 'Mercedes-Benz Vito Minibus',
    capacity: 'Up to 8 passengers',
    luggage: '8 large suitcases',
    desc: 'Ideal for larger groups, wedding parties, and multi-guest masseria arrivals. Full air conditioning and generous luggage space.',
    features: ['Large luggage compartment', 'Full AC', 'Comfortable seating', 'Group transfer specialist'],
    img: '/images/fleet/our-fleet-card-3.webp',
  },
  {
    model: 'Mercedes-Benz Sprinter',
    capacity: 'Up to 16 passengers',
    luggage: 'Extensive',
    desc: 'Executive minibus for larger corporate groups, tour parties, and event transport. Customisable seating configuration.',
    features: ['Executive seating', 'On-board PA available', 'Air conditioning', 'Ideal for incentives & events'],
    img: '/images/fleet/our-fleet-card-4.webp',
  },
]

export default function OurFleet() {
  return (
    <>
      <Helmet>
        <title>Our Fleet — Mercedes-Benz Luxury Vehicles | ConnectinPuglia</title>
        <meta name="description" content="ConnectinPuglia operates a premium fleet of Mercedes-Benz vehicles. E-Class, V-Class, Vito, and Sprinter — all fully licensed, insured and immaculately maintained." />
        <link rel="canonical" href="https://connectinpuglia.com/our-fleet" />
        <meta property="og:title" content="Our Fleet — Mercedes-Benz Luxury Vehicles | ConnectinPuglia" />
        <meta property="og:description" content="ConnectinPuglia operates a premium fleet of Mercedes-Benz vehicles. E-Class, V-Class, Vito, and Sprinter — all fully licensed, insured and immaculately maintained." />
        <meta property="og:url" content="https://connectinpuglia.com/our-fleet" />
        <meta property="og:image" content="https://connectinpuglia.com/images/fleet/our-fleet-og.webp" />
        <meta property="og:type" content="website" />
      </Helmet>
      <TwitterMeta
        title="Our Fleet — Mercedes-Benz Luxury Vehicles | ConnectinPuglia"
        description="ConnectinPuglia operates a premium fleet of Mercedes-Benz vehicles. E-Class, V-Class, Vito, and Sprinter — all fully licensed, insured and immaculately maintained."
        image="https://connectinpuglia.com/images/fleet/our-fleet-og.webp"
      />

      <section className="pt-36 pb-16 bg-charcoal-900 text-white">
        <div className="container-page">
          <p className="section-label text-gold-400 mb-4">Our Vehicles</p>
          <span className="divider-gold mb-6 block" />
          <h1 className="font-serif font-light text-white mb-5" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Our Fleet
          </h1>
          <p className="font-sans text-white/70 max-w-2xl leading-relaxed">
            All ConnectinPuglia vehicles are premium Mercedes-Benz models, professionally maintained, fully licensed under NCC regulations, and comprehensively insured for passenger transport.
          </p>
        </div>
      </section>

      <section className="py-8 bg-charcoal-800">
        <div className="container-page flex flex-wrap justify-center gap-8">
          {[
            { icon: <Shield size={14} />, text: 'NCC Licensed & Insured' },
            { icon: <Car size={14} />, text: 'Mercedes-Benz only' },
            { icon: <Wifi size={14} />, text: 'WiFi available on request' },
            { icon: <Users size={14} />, text: '1 to 16 passengers' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-white/60">
              <span className="text-gold-400">{item.icon}</span>
              <span className="font-sans text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="flex flex-col gap-0">
            {fleet.map((vehicle, i) => (
              <div key={vehicle.model} className={`grid grid-cols-1 lg:grid-cols-2 border border-charcoal-100 ${i > 0 ? 'border-t-0' : ''}`}>
                <div className={`overflow-hidden aspect-video lg:aspect-auto ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img src={vehicle.img} alt={vehicle.model} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className={`flex flex-col justify-center p-10 lg:p-14 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex flex-wrap gap-4 mb-5">
                    <span className="font-sans text-xs bg-gold-100 text-gold-700 tracking-widests uppercase px-3 py-1">
                      <Users size={11} className="inline mr-1.5" />{vehicle.capacity}
                    </span>
                    <span className="font-sans text-xs bg-charcoal-50 text-charcoal-600 tracking-widests uppercase px-3 py-1">
                      <Car size={11} className="inline mr-1.5" />{vehicle.luggage}
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl font-light text-charcoal-900 mb-4">{vehicle.model}</h2>
                  <p className="font-sans text-sm text-charcoal-500 leading-relaxed mb-6">{vehicle.desc}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {vehicle.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 font-sans text-sm text-charcoal-600">
                        <span className="w-1 h-1 rounded-full bg-gold-500 flex-none" />{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container-page text-center">
          <h2 className="section-title text-charcoal-900 mb-4">Book Your Vehicle</h2>
          <p className="font-sans text-charcoal-500 max-w-md mx-auto mb-8">Let us know your group size and we'll recommend the perfect vehicle for your journey.</p>
          <Link to="/quote-contact" className="btn-primary">Request a Quote <ArrowRight size={15} /></Link>
        </div>
      </section>
    </>
  )
}
