import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, CheckCircle, Star } from 'lucide-react'
import HeroImage from '../components/HeroImage'
import TwitterMeta from '../components/TwitterMeta'

export default function WeddingTransfer() {
  return (
    <>
      <Helmet>
        <title>Wedding Transfers Puglia — Destination Wedding Transport | ConnectinPuglia</title>
        <meta name="description" content="Professional wedding transport in Puglia. Multi-vehicle coordination, airport arrivals, ceremony and reception logistics. NCC licensed, elegant fleet." />
        <link rel="canonical" href="https://connectinpuglia.com/wedding-transfer-puglia" />
        <meta property="og:title" content="Wedding Transfers Puglia — Destination Wedding Transport | ConnectinPuglia" />
        <meta property="og:description" content="Professional wedding transport in Puglia. Multi-vehicle coordination, airport arrivals, ceremony and reception logistics. NCC licensed, elegant fleet." />
        <meta property="og:url" content="https://connectinpuglia.com/wedding-transfer-puglia" />
        <meta property="og:image" content="https://connectinpuglia.com/images/main/wedding-transfer-og.webp" />
        <meta property="og:type" content="website" />
      </Helmet>
      <TwitterMeta
        title="Wedding Transfers Puglia — Destination Wedding Transport | ConnectinPuglia"
        description="Professional wedding transport in Puglia. Multi-vehicle coordination, airport arrivals, ceremony and reception logistics. NCC licensed, elegant fleet."
        image="https://connectinpuglia.com/images/main/wedding-transfer-og.webp"
      />

      <section className="relative overflow-hidden pt-36 pb-24">
        <HeroImage src="/images/main/wedding-transfer-hero.webp" alt="Wedding Transfers in Puglia" />
        <div className="absolute inset-0 bg-charcoal-900/68" />
        <div className="relative z-10 container-page text-white">
          <p className="section-label text-gold-400 mb-4">Destination Weddings in Puglia</p>
          <span className="divider-gold mb-6 block" />
          <h1 className="font-serif font-light text-white mb-5" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Wedding Transfers in Puglia
          </h1>
          <p className="font-sans text-white/75 max-w-xl leading-relaxed">
            Elegant, stress-free transport for your special day. We coordinate the full transport timeline for destination weddings at Puglia's finest masserie and palazzi.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">For Couples & Wedding Planners</p>
              <span className="divider-gold mb-6 block" />
              <h2 className="section-title text-charcoal-900 mb-6">The Logistics Are Ours — The Day Is Yours</h2>
              <p className="font-sans text-charcoal-500 text-sm leading-relaxed mb-8">
                We work directly with couples and their wedding planners to manage all ground transport — from guest airport arrivals across multiple days, to ceremony-day shuttles, to the post-wedding transfer back to the airport.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  'Multi-vehicle coordination across the entire wedding period',
                  'Airport arrival transfers for all guests',
                  'Ceremony-day vehicle for the couple (decorated on request)',
                  'Shuttle service between accommodation and venue',
                  'Return transfers to airport and train station',
                  'On-call driver available on the wedding day',
                  'Full coordination with your wedding planner',
                  'Experience with all major Puglia venues and masserie',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 font-sans text-sm text-charcoal-600">
                    <CheckCircle size={15} className="text-gold-500 flex-none mt-0.5" strokeWidth={1.5} />{f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="/images/main/wedding-transfer-card-1.webp"
                alt="Wedding transport Puglia"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container-page">
          <div className="text-center mb-12">
            <p className="section-label mb-4">Venues We Serve</p>
            <span className="divider-gold mx-auto mb-6 block" />
            <h2 className="section-title text-charcoal-900">Puglia's Premier Wedding Venues</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Borgo Egnazia', to: '/transfer-to-borgo-egnazia' },
              { name: 'Masseria San Domenico', to: '/transfer-to-masseria-san-domenico' },
              { name: 'Masseria Torre Coccaro', to: '/transfer-to-masseria-torre-coccaro' },
              { name: 'Masseria Il Frantoio', to: '/transfer-to-masseria-il-frantoio' },
              { name: 'Masseria Torre Maizza', to: '/transfer-to-masseria-torre-maizza' },
              { name: 'Masseria Il Melograno', to: '/transfer-to-masseria-il-melograno' },
              { name: 'Grotta Palazzese', to: '/transfer-to-grotta-palazzese' },
              { name: 'Le Alcove Alberobello', to: '/transfer-to-le-alcove-alberobello' },
            ].map((venue) => (
              <Link
                key={venue.name}
                to={venue.to}
                className="bg-white border border-charcoal-100 p-4 text-center block"
              >
                <Star size={12} className="text-gold-500 mx-auto mb-2" strokeWidth={1.5} />
                <p className="font-sans text-sm text-charcoal-700">{venue.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-900 text-white">
        <div className="container-page text-center">
          <Heart size={28} className="text-gold-400 mx-auto mb-5" strokeWidth={1} />
          <h2 className="font-serif font-light text-white text-4xl mb-4">Planning a Wedding in Puglia?</h2>
          <p className="font-sans text-white/60 max-w-md mx-auto mb-8">Get in touch early. We typically book wedding periods 6–18 months in advance.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/quote-contact" className="btn-primary">Request Wedding Transport Quote <ArrowRight size={15} /></Link>
            <a href="mailto:weddings@connectinpuglia.com" className="btn-ghost-light">weddings@connectinpuglia.com</a>
          </div>
        </div>
      </section>
    </>
  )
}
