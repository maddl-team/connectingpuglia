import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Plane, Ship, Train, CheckCircle, Clock, Shield, Search } from 'lucide-react'

const transferTypes = [
  {
    icon: <Plane size={28} strokeWidth={1} />,
    title: 'From Bari Airport (BRI)',
    subtitle: 'Bari Karol Wojtyla International',
    desc: 'Meet & greet in arrivals, fixed price, door to door across Puglia. Real-time flight monitoring included.',
    to: '/transfer-from-bari-airport',
    time: '35–90 min to destinations',
  },
  {
    icon: <Plane size={28} strokeWidth={1} />,
    title: 'From Brindisi Airport (BDS)',
    subtitle: 'Brindisi Papola Casale',
    desc: 'The closest airport to Fasano, Ostuni, Lecce and the Salento coast. Fixed price, professional driver.',
    to: '/transfer-from-brindisi-airport',
    time: '20–60 min to destinations',
  },
  {
    icon: <Train size={28} strokeWidth={1} />,
    title: 'From Bari Train Station (FS)',
    subtitle: 'Stazione di Bari Centrale',
    desc: 'Arriving by Italo or Trenitalia? Your driver meets you outside the station and takes you directly to your destination.',
    to: '/transfer-from-bari-train-station',
    time: '30–90 min to destinations',
  },
  {
    icon: <Ship size={28} strokeWidth={1} />,
    title: 'From Brindisi Port',
    subtitle: 'Porto di Brindisi',
    desc: 'Arriving by ferry from Greece, Albania or Croatia? We meet you dockside and handle everything from there.',
    to: '/transfer-from-brindisi-port',
    time: '20–60 min to destinations',
  },
]

export default function AirportTransfers() {
  return (
    <>
      <Helmet>
        <title>Airport Transfers Puglia — From BRI &amp; BDS | Connect in Puglia</title>
        <meta name="description" content="Private airport transfers from Bari Airport (BRI), Brindisi Airport (BDS), Bari Train Station and Brindisi Port. Fixed price, meet & greet, luxury fleet." />
        <link rel="canonical" href="https://connectinpuglia.com/airport-transfers" />
        <meta property="og:title" content="Airport Transfers Puglia — From BRI & BDS | Connect in Puglia" />
        <meta property="og:description" content="Private airport transfers from Bari Airport (BRI), Brindisi Airport (BDS), Bari Train Station and Brindisi Port. Fixed price, meet & greet, luxury fleet." />
        <meta property="og:url" content="https://connectinpuglia.com/airport-transfers" />
        <meta property="og:image" content="https://connectinpuglia.com/images/main/airport-transfers-og.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section
        className="relative pt-36 pb-24 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/main/airport-transfers-hero.png')` }}
      >
        <div className="absolute inset-0 bg-charcoal-900/78" />
        <div className="relative z-10 container-page text-white text-center">
          <p className="section-label text-gold-400 mb-4">NCC Licensed · Available 24/7</p>
          <span className="divider-gold mx-auto mb-6 block" />
          <h1 className="font-serif font-light text-white mb-5" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Private Airport Transfers in Puglia
          </h1>
          <p className="font-sans text-white/75 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
            Fixed price, professional driver, door to door. From Bari or Brindisi airport, Bari train station, or Brindisi port — directly to your masseria, hotel, or private villa.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <CheckCircle size={14} />, text: 'Fixed price — no meters' },
              { icon: <Search size={14} />, text: 'Real-time flight monitoring' },
              { icon: <Shield size={14} />, text: 'NCC Licensed & insured' },
              { icon: <Clock size={14} />, text: 'Available 24/7, 365 days' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/70">
                <span className="text-gold-400">{item.icon}</span>
                <span className="font-sans text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container-page">
          <div className="text-center mb-12">
            <p className="section-label mb-4">Choose Your Arrival Point</p>
            <span className="divider-gold mx-auto mb-6 block" />
            <h2 className="section-title text-charcoal-900">Transfers from Every Entry Point</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {transferTypes.map((t) => (
              <Link
                key={t.to}
                to={t.to}
                className="group bg-white border border-charcoal-100 hover:border-gold-400 hover:shadow-xl transition-all duration-400 p-8 flex gap-5"
              >
                <div className="flex-none text-gold-500 mt-1 group-hover:scale-110 transition-transform duration-300">{t.icon}</div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-medium text-charcoal-900 mb-1">{t.title}</h3>
                  <p className="font-sans text-xs text-charcoal-400 tracking-wide mb-3">{t.subtitle}</p>
                  <p className="font-sans text-sm text-charcoal-500 leading-relaxed mb-4">{t.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-sans text-xs text-charcoal-400">
                      <Clock size={12} strokeWidth={1.5} /> {t.time}
                    </span>
                    <span className="flex items-center gap-2 font-sans text-xs font-medium tracking-widests uppercase text-gold-500 group-hover:gap-3 transition-all duration-300">
                      Book <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-900 text-white">
        <div className="container-page text-center">
          <h2 className="font-serif font-light text-white text-4xl mb-4">Not Sure Which Airport?</h2>
          <p className="font-sans text-white/60 max-w-lg mx-auto mb-8">Tell us your destination and we'll advise on the best airport. We cover both BRI and BDS.</p>
          <Link to="/quote-contact" className="btn-primary">Request a Quote <ArrowRight size={15} /></Link>
        </div>
      </section>
    </>
  )
}
