import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase, Users, CheckCircle } from 'lucide-react'

export default function CorporateEvents() {
  return (
    <>
      <Helmet>
        <title>Corporate Events &amp; Group Transport Puglia | Connect in Puglia</title>
        <meta name="description" content="Executive transfers and group logistics for corporate events, incentive trips, and productions in Puglia. NCC licensed, professional fleet management." />
        <link rel="canonical" href="https://connectinpuglia.com/corporate-events" />
        <meta property="og:title" content="Corporate Events & Group Transport Puglia | Connect in Puglia" />
        <meta property="og:description" content="Executive transfers and group logistics for corporate events, incentive trips, and productions in Puglia. NCC licensed, professional fleet management." />
        <meta property="og:url" content="https://connectinpuglia.com/corporate-events" />
        <meta property="og:image" content="https://connectinpuglia.com/images/main/corporate-events-og.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section
        className="relative pt-36 pb-24 bg-cover bg-center text-white"
        style={{ backgroundImage: `url('/images/main/corporate-events-hero.png')` }}
      >
        <div className="absolute inset-0 bg-charcoal-900/68" />
        <div className="relative z-10 container-page">
          <p className="section-label text-gold-400 mb-4">Corporate & Incentive</p>
          <span className="divider-gold mb-6 block" />
          <h1 className="font-serif font-light text-white mb-5" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Corporate Events & Group Transport
          </h1>
          <p className="font-sans text-white/70 max-w-2xl leading-relaxed">
            Executive transfers, multi-vehicle group logistics, and on-site transport management for corporate events, incentive programmes, and film and media productions in Puglia.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <Briefcase size={24} strokeWidth={1} />, title: 'Incentive Trips', desc: 'Full ground transport management for corporate incentive groups. From airport arrivals to gala dinners — handled seamlessly.' },
              { icon: <Users size={24} strokeWidth={1} />, title: 'Group Events', desc: 'Multi-vehicle coordination for conferences, product launches, and corporate retreats at Puglia\'s finest venues.' },
              { icon: <CheckCircle size={24} strokeWidth={1} />, title: 'Film & Production', desc: 'Reliable, discreet transport for film crews and production teams. Location scouting support available.' },
            ].map((item) => (
              <div key={item.title} className="bg-cream p-8 border border-charcoal-100">
                <div className="text-gold-500 mb-5">{item.icon}</div>
                <h3 className="font-serif text-xl font-medium text-charcoal-900 mb-3">{item.title}</h3>
                <p className="font-sans text-sm text-charcoal-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/quote-contact" className="btn-primary">Request a Corporate Quote <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
