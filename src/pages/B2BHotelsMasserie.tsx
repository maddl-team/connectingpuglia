import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Users, Briefcase, Heart, Star } from 'lucide-react'
import HeroImage from '../components/HeroImage'
import TwitterMeta from '../components/TwitterMeta'

const segments = [
  { icon: <Star size={22} strokeWidth={1} />, title: 'Masserie & Resorts', desc: 'Dedicated ground transport partner for your property. Reliable, punctual, professional — always a reflection of your brand.', to: '/b2b-masserie-resorts' },
  { icon: <Building2 size={22} strokeWidth={1} />, title: 'Hotels', desc: "Outsource your guests' airport and excursion transfers to a trusted NCC operator. White-label service available.", to: '/b2b-hotels' },
  { icon: <Briefcase size={22} strokeWidth={1} />, title: 'Travel Designers & DMC', desc: 'Ground transport supplier for your Puglia programmes. Rate cards, availability, and dedicated account management.', to: '/b2b-travel-designers-dmc' },
  { icon: <Heart size={22} strokeWidth={1} />, title: 'Wedding Planners', desc: 'Multi-vehicle coordination for destination weddings. We handle the entire transport timeline so you focus on the day.', to: '/b2b-wedding-planners' },
  { icon: <Users size={22} strokeWidth={1} />, title: 'Corporate & Events', desc: 'Executive transfers and group logistics for corporate events, incentive trips, and film productions in Puglia.', to: '/corporate-events' },
]

export default function B2BHotelsMasserie() {
  return (
    <>
      <Helmet>
        <title>Ground Transport Partner for Puglia Hotels &amp; Masserie | ConnectinPuglia</title>
        <meta name="description" content="Trusted ground transport partner for hotels, masserie, DMCs, travel designers and wedding planners in Puglia. NCC licensed, professional, brand-compatible service." />
        <link rel="canonical" href="https://connectinpuglia.com/b2b-hotels-masserie" />
        <meta property="og:title" content="Ground Transport Partner for Puglia Hotels & Masserie | ConnectinPuglia" />
        <meta property="og:description" content="Trusted ground transport partner for hotels, masserie, DMCs, travel designers and wedding planners in Puglia. NCC licensed, professional, brand-compatible service." />
        <meta property="og:url" content="https://connectinpuglia.com/b2b-hotels-masserie" />
        <meta property="og:image" content="https://connectinpuglia.com/images/main/b2b-hotels-masserie-og.webp" />
        <meta property="og:type" content="website" />
      </Helmet>
      <TwitterMeta
        title="Ground Transport Partner for Puglia Hotels & Masserie | ConnectinPuglia"
        description="Trusted ground transport partner for hotels, masserie, DMCs, travel designers and wedding planners in Puglia. NCC licensed, professional, brand-compatible service."
        image="https://connectinpuglia.com/images/main/b2b-hotels-masserie-og.webp"
      />

      <section className="relative overflow-hidden pt-36 pb-24 text-white">
        <HeroImage src="/images/main/b2b-hotels-masserie-hero.webp" alt="B2B Partners — Hotels, Masserie & DMCs" />
        <div className="absolute inset-0 bg-charcoal-900/68" />
        <div className="relative z-10 container-page">
          <p className="section-label text-gold-400 mb-4">Trade & Professional Partners</p>
          <span className="divider-gold mb-6 block" />
          <h1 className="font-serif font-light text-white mb-5" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            B2B Partners — Hotels, Masserie & DMCs
          </h1>
          <p className="font-sans text-white/70 max-w-2xl leading-relaxed">
            We are Puglia's preferred ground transport partner for luxury properties, travel professionals, and event planners. NCC licensed, professionally insured, and built for the demands of the trade.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="text-center mb-12">
            <p className="section-label mb-4">Who We Work With</p>
            <span className="divider-gold mx-auto mb-6 block" />
            <h2 className="section-title text-charcoal-900">Our Trade Partners</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {segments.map((s) => (
              <Link key={s.to} to={s.to} className="group bg-white border border-charcoal-100 hover:border-gold-400 hover:shadow-xl transition-all duration-400 p-8 flex flex-col">
                <div className="text-gold-500 mb-5 group-hover:scale-110 transition-transform duration-300 w-fit">{s.icon}</div>
                <h3 className="font-serif text-xl font-medium text-charcoal-900 mb-3">{s.title}</h3>
                <p className="font-sans text-sm text-charcoal-500 leading-relaxed flex-1">{s.desc}</p>
                <span className="mt-6 flex items-center gap-2 font-sans text-xs font-medium tracking-widests uppercase text-gold-500 group-hover:gap-3 transition-all duration-300">Learn More <ArrowRight size={12} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container-page text-center">
          <h2 className="section-title text-charcoal-900 mb-4">Start a Trade Partnership</h2>
          <p className="font-sans text-charcoal-500 max-w-md mx-auto mb-8">Contact us for rate cards, SLA terms, and trade account setup. We respond within 4 hours.</p>
          <a href="mailto:partners@connectinpuglia.com" className="btn-primary">partners@connectinpuglia.com <ArrowRight size={15} /></a>
        </div>
      </section>
    </>
  )
}
