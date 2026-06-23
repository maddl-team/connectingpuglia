import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Award, Heart } from 'lucide-react'

const values = [
  {
    icon: <Shield size={24} strokeWidth={1} />,
    title: 'Licensed & Professional',
    desc: 'Fully licensed NCC operators under Italian law. Every driver is vetted, trained, and professionally insured for your peace of mind.',
  },
  {
    icon: <Heart size={24} strokeWidth={1} />,
    title: 'Genuinely Local',
    desc: 'Born and raised in Puglia. We share this region with genuine pride and insider knowledge that no travel app can replicate.',
  },
  {
    icon: <Award size={24} strokeWidth={1} />,
    title: 'Uncompromising Quality',
    desc: 'Premium vehicles, punctual service, and personal attention to detail — from the confirmation email to the final wave goodbye.',
  },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Connect in Puglia</title>
        <meta name="description" content="ConnectinPuglia is a premium NCC licensed private transfer and tour operator based in Puglia, southern Italy. Meet our team and discover our story." />
        <link rel="canonical" href="https://connectinpuglia.com/about-us" />
        <meta property="og:title" content="About Us | Connect in Puglia" />
        <meta property="og:description" content="ConnectinPuglia is a premium NCC licensed private transfer and tour operator based in Puglia, southern Italy. Meet our team and discover our story." />
        <meta property="og:url" content="https://connectinpuglia.com/about-us" />
        <meta property="og:image" content="https://connectinpuglia.com/images/main/about-og.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Page Header */}
      <section
        className="relative pt-40 pb-24 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/main/about-hero.png')` }}
      >
        <div className="absolute inset-0 bg-charcoal-900/72" />
        <div className="relative z-10 container-page text-white">
          <p className="section-label text-gold-400 mb-4">Our Story</p>
          <span className="divider-gold mb-6 block" />
          <h1 className="font-serif font-light text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            About ConnectinPuglia
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">Who We Are</p>
              <span className="divider-gold mb-6 block" />
              <h2 className="section-title text-charcoal-900 mb-6">
                Puglia, From the Inside
              </h2>
              <div className="flex flex-col gap-4 font-sans text-charcoal-500 text-sm leading-relaxed">
                <p>
                  ConnectinPuglia was founded out of a simple conviction: that the best way to experience Puglia is with a local who genuinely loves it.
                </p>
                <p>
                  We are a fully licensed NCC operator — <em>Noleggio Con Conducente</em> — based in the heart of Puglia. Our team of professional drivers and local guides has spent their lives in this region, and they bring that depth of knowledge to every journey.
                </p>
                <p>
                  We work primarily with international guests staying at Puglia's finest masserie, boutique hotels, and private villas — people who appreciate quality, discretion, and authentic experience over tourist-trail shortcuts.
                </p>
                <p>
                  Whether you need a seamless airport transfer, a day exploring the trulli of Alberobello, or a multi-day private itinerary across the heel of Italy's boot, we handle it all with the care of someone who's proud to show you their home.
                </p>
              </div>
            </div>

            <div className="relative">
              <div
                className="aspect-[3/4] bg-cover bg-center"
                style={{ backgroundImage: `url('/images/main/about-card-1.png')` }}
              />
              <div className="absolute -bottom-6 -right-6 bg-gold-500 text-charcoal-900 p-6 w-52">
                <span className="font-serif text-4xl font-medium">NCC</span>
                <p className="font-sans text-xs tracking-wider uppercase mt-1 font-medium">Licensed<br />Operator</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream">
        <div className="container-page">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Our Values</p>
            <span className="divider-gold mx-auto mb-6 block" />
            <h2 className="section-title text-charcoal-900">What Sets Us Apart</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-10 border border-charcoal-100">
                <div className="text-gold-500 mb-5">{v.icon}</div>
                <h3 className="font-serif text-xl font-medium text-charcoal-900 mb-3">{v.title}</h3>
                <p className="font-sans text-sm text-charcoal-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white border-t border-charcoal-100">
        <div className="container-page text-center">
          <p className="section-label mb-4">Trusted Partners</p>
          <p className="font-sans text-sm text-charcoal-500 max-w-lg mx-auto mb-10">
            We proudly collaborate with leading masserie, luxury hotels, DMCs, and wedding planners throughout Puglia and southern Italy.
          </p>
          <p className="font-sans text-xs tracking-wider uppercase text-charcoal-400">
            Partner enquiries: <a href="mailto:partners@connectinpuglia.com" className="text-gold-600 hover:underline">partners@connectinpuglia.com</a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal-900 text-white">
        <div className="container-page text-center">
          <h2 className="font-serif font-light text-white text-4xl mb-4">Ready to Explore Puglia?</h2>
          <p className="font-sans text-white/60 max-w-md mx-auto mb-8">
            Get in touch and let us plan a seamless, memorable experience for you.
          </p>
          <Link to="/quote-contact" className="btn-primary">
            Contact Us <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
