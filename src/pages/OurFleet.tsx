import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Car, Users, Wifi, Shield } from 'lucide-react'
import TwitterMeta from '../components/TwitterMeta'
import {
  FLEET_CAPACITY,
  FLEET_LUGGAGE,
  FLEET_VEHICLE,
  fleetMetaDescription,
} from '../lib/fleet'

const vehicle = {
  model: FLEET_VEHICLE,
  capacity: `Up to ${FLEET_CAPACITY}`,
  luggage: FLEET_LUGGAGE,
  desc: 'Our premium business sedan for private transfers and day tours across Puglia. Discreet, refined, and perfectly suited to couples, solo travellers, and small groups.',
  features: ['Air conditioning', 'Leather interior', 'USB charging', 'WiFi on request', 'Water & magazines', 'Child seats on request'],
  img: '/images/fleet/our-fleet-card-1.webp',
  imgAlt: 'Mercedes-Benz E-Class sedan — ConnectinPuglia private transfer vehicle',
}

export default function OurFleet() {
  return (
    <>
      <Helmet>
        <title>Our Fleet — Mercedes-Benz E-Class | ConnectinPuglia</title>
        <meta name="description" content={fleetMetaDescription} />
        <link rel="canonical" href="https://connectinpuglia.com/our-fleet" />
        <meta property="og:title" content="Our Fleet — Mercedes-Benz E-Class | ConnectinPuglia" />
        <meta property="og:description" content={fleetMetaDescription} />
        <meta property="og:url" content="https://connectinpuglia.com/our-fleet" />
        <meta property="og:image" content="https://connectinpuglia.com/images/fleet/our-fleet-og.webp" />
        <meta property="og:type" content="website" />
      </Helmet>
      <TwitterMeta
        title="Our Fleet — Mercedes-Benz E-Class | ConnectinPuglia"
        description={fleetMetaDescription}
        image="https://connectinpuglia.com/images/fleet/our-fleet-og.webp"
      />

      <section className="pt-36 pb-16 bg-charcoal-900 text-white">
        <div className="container-page">
          <p className="section-label text-gold-400 mb-4">Our Vehicle</p>
          <span className="divider-gold mb-6 block" />
          <h1 className="font-serif font-light text-white mb-5" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Our Fleet
          </h1>
          <p className="font-sans text-white/70 max-w-2xl leading-relaxed">
            ConnectinPuglia operates a premium {FLEET_VEHICLE} sedan — professionally maintained, fully licensed under NCC regulations, and comprehensively insured for passenger transport.
          </p>
        </div>
      </section>

      <section className="py-8 bg-charcoal-800">
        <div className="container-page flex flex-wrap justify-center gap-8">
          {[
            { icon: <Shield size={14} />, text: 'NCC Licensed & Insured' },
            { icon: <Car size={14} />, text: 'Mercedes-Benz E-Class' },
            { icon: <Wifi size={14} />, text: 'WiFi available on request' },
            { icon: <Users size={14} />, text: 'Up to 3 passengers' },
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
          <div className="grid grid-cols-1 lg:grid-cols-2 border border-charcoal-100 max-w-5xl mx-auto">
            <div className="overflow-hidden aspect-video lg:aspect-auto">
              <img src={vehicle.img} alt={vehicle.imgAlt} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="flex flex-col justify-center p-10 lg:p-14">
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
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container-page text-center">
          <h2 className="section-title text-charcoal-900 mb-4">Book Your Transfer</h2>
          <p className="font-sans text-charcoal-500 max-w-md mx-auto mb-8">Request a quote for your private transfer or day tour in Puglia.</p>
          <Link to="/quote-contact" className="btn-primary">Request a Quote <ArrowRight size={15} /></Link>
        </div>
      </section>
    </>
  )
}
