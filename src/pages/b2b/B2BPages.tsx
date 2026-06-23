import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

type B2BPageProps = {
  title: string
  metaTitle: string
  metaDesc: string
  canonical: string
  badge: string
  intro: string
  heroImg: string
  ogImage: string
  benefits: string[]
  services: { title: string; desc: string }[]
}

function B2BPage({ title, metaTitle, metaDesc, canonical, badge, intro, heroImg, ogImage, benefits, services }: B2BPageProps) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'B2B Ground Transport',
    provider: { '@type': 'LocalBusiness', name: 'ConnectinPuglia', url: 'https://connectinpuglia.com' },
    areaServed: { '@type': 'State', name: 'Puglia' },
    description: metaDesc,
    url: canonical,
  }

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <section
        className="relative pt-36 pb-20 bg-cover bg-center text-white"
        style={{ backgroundImage: `url('${heroImg}')` }}
      >
        <div className="absolute inset-0 bg-charcoal-900/68" />
        <div className="relative z-10 container-page">
          <p className="section-label text-gold-400 mb-4">{badge}</p>
          <span className="divider-gold mb-6 block" />
          <h1 className="font-serif font-light text-white mb-5" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}>{title}</h1>
          <p className="font-sans text-white/70 max-w-2xl leading-relaxed">{intro}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="section-label mb-4">Why ConnectinPuglia</p>
              <span className="divider-gold mb-6 block" />
              <h2 className="font-serif text-3xl font-light text-charcoal-900 mb-8">Built for the Trade</h2>
              <ul className="flex flex-col gap-3">
                {benefits.map(b => (
                  <li key={b} className="flex items-start gap-3 font-sans text-sm text-charcoal-600">
                    <CheckCircle size={15} className="text-gold-500 flex-none mt-0.5" strokeWidth={1.5} />{b}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="section-label mb-4">Services</p>
              <span className="divider-gold mb-6 block" />
              <h2 className="font-serif text-3xl font-light text-charcoal-900 mb-8">What We Offer</h2>
              <div className="flex flex-col gap-5">
                {services.map(s => (
                  <div key={s.title} className="border-b border-charcoal-100 pb-5 last:border-0 last:pb-0">
                    <h3 className="font-sans font-medium text-sm text-charcoal-800 mb-1">{s.title}</h3>
                    <p className="font-sans text-sm text-charcoal-500 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container-page text-center">
          <h2 className="section-title text-charcoal-900 mb-4">Start a Trade Partnership</h2>
          <p className="font-sans text-charcoal-500 max-w-md mx-auto mb-8">Contact us for rate cards, SLA terms, and dedicated account setup.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:partners@connectinpuglia.com" className="btn-primary">partners@connectinpuglia.com <ArrowRight size={15} /></a>
            <Link to="/b2b-hotels-masserie" className="btn-outline">View All B2B Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export function B2BMasserieResorts() {
  return <B2BPage
    title="Ground Transport Partner for Masserie & Resorts in Puglia"
    metaTitle="Ground Transport for Masserie & Resorts | Connect in Puglia"
    metaDesc="Dedicated ground transport partner for luxury masserie and resorts in Puglia. NCC licensed, reliable, professional — always a reflection of your brand."
    canonical="https://connectinpuglia.com/b2b-masserie-resorts"
    badge="For Masserie & Luxury Resorts"
    heroImg="/images/b2b/b2b-masserie-resorts-og.png"
    ogImage="https://connectinpuglia.com/images/b2b/b2b-masserie-resorts-og.png"
    intro="ConnectinPuglia is the trusted transport partner for Puglia's leading masserie and luxury resorts. We provide a seamless, brand-consistent experience for your guests from the moment they land to the moment they depart."
    benefits={[
      'NCC licensed and fully insured for all passenger journeys',
      'Premium Mercedes-Benz fleet — always immaculate',
      'Drivers know every property entrance and access road',
      'Real-time flight and delay monitoring included',
      'White-label service — your branding, our operation',
      'Dedicated account manager and 24/7 contact',
      'Consolidated monthly invoicing available',
      'Experience with all major Puglia masserie',
    ]}
    services={[
      { title: 'Guest Airport Transfers', desc: 'All guest arrivals and departures managed to your specification. Meet & greet with property branding on request.' },
      { title: 'Inter-Property Transfers', desc: 'Guest moves between properties within your portfolio or partner estates handled seamlessly.' },
      { title: 'Day Excursion Transport', desc: 'Private day tours and excursions arranged for your guests, from winery visits to UNESCO sites.' },
      { title: 'Event & Wedding Transport', desc: 'Multi-vehicle coordination for weddings, press trips, and private events hosted at your property.' },
    ]}
  />
}

export function B2BHotels() {
  return <B2BPage
    title="Airport Transfer Partner for Hotels in Puglia"
    metaTitle="Airport Transfer Partner for Hotels | Connect in Puglia"
    metaDesc="Outsource your guests' airport transfers to ConnectinPuglia. NCC licensed, professional, white-label service for hotels in Puglia."
    canonical="https://connectinpuglia.com/b2b-hotels"
    badge="For Hotels"
    heroImg="/images/b2b/b2b-hotels-og.png"
    ogImage="https://connectinpuglia.com/images/b2b/b2b-hotels-og.png"
    intro="Outsource your guests' airport and excursion transfers to a trusted, NCC-licensed professional. We operate seamlessly under your brand — your guests simply see excellent service."
    benefits={[
      'White-label service — we operate under your hotel\'s name if required',
      'Flexible billing — per-transfer or consolidated monthly invoice',
      'Competitive trade rates for volume partners',
      'Fast booking confirmation for last-minute requests',
      'Guest communication handled on your behalf',
      'Chauffeur meet & greet in hotel livery available',
    ]}
    services={[
      { title: 'Airport Transfer Programme', desc: 'All guest arrivals from BRI and BDS airports, including flight monitoring and delay management.' },
      { title: 'Day Tour Concierge', desc: 'Private excursions bookable by your concierge team on behalf of guests — confirmed and managed by us.' },
      { title: 'Restaurant & Event Transfers', desc: 'Evening transfers to restaurants, wineries, and events — driver waits and returns guests to the hotel.' },
      { title: 'Group & Conference Transport', desc: 'Multi-vehicle logistics for conference groups and incentive parties staying at your property.' },
    ]}
  />
}

export function B2BTravelDesigners() {
  return <B2BPage
    title="Ground Transport for Travel Designers & DMCs in Puglia"
    metaTitle="Ground Transport for Travel Designers & DMC | Connect in Puglia"
    metaDesc="Puglia ground transport supplier for travel designers, tour operators, and DMCs. Rate cards, account management, reliable NCC service."
    canonical="https://connectinpuglia.com/b2b-travel-designers-dmc"
    badge="For Travel Designers & DMCs"
    heroImg="/images/b2b/b2b-travel-designers-og.png"
    ogImage="https://connectinpuglia.com/images/b2b/b2b-travel-designers-og.png"
    intro="ConnectinPuglia is the preferred Puglia ground transport supplier for independent travel designers, boutique tour operators, and destination management companies. We make your programmes look and run beautifully."
    benefits={[
      'Transparent published rate card for planning and quoting',
      'Dedicated account manager — one point of contact',
      'Priority availability for pre-booked programme dates',
      'Supplier documentation and insurance certificates available',
      'Same-day confirmation for programme amendments',
      'Experience with high-end private client travel',
    ]}
    services={[
      { title: 'FIT Airport & Inter-Property Transfers', desc: 'All client arrival and departure transfers managed to your programme schedule.' },
      { title: 'Private Day Tours', desc: 'Full itinerary of Puglia private day tours available as modular programme components.' },
      { title: 'Hourly Chauffeur Service', desc: 'At-disposal chauffeur days for flexible client itineraries.' },
      { title: 'Multi-Day Ground Programmes', desc: 'Full ground logistics management for multi-night Puglia itineraries.' },
    ]}
  />
}

export function B2BWeddingPlanners() {
  return <B2BPage
    title="Wedding Transport Partner for Planners in Puglia"
    metaTitle="Wedding Transport Partner for Planners | Connect in Puglia"
    metaDesc="Ground transport partner for wedding planners in Puglia. Multi-vehicle coordination, guest airport logistics, ceremony-day drivers. NCC licensed."
    canonical="https://connectinpuglia.com/b2b-wedding-planners"
    badge="For Wedding Planners"
    heroImg="/images/b2b/b2b-wedding-planners-og.png"
    ogImage="https://connectinpuglia.com/images/b2b/b2b-wedding-planners-og.png"
    intro="We are the trusted wedding transport partner for leading destination wedding planners in Puglia. We manage the full transport timeline — from the first guest arrival to the last farewell transfer — so you can focus on what you do best."
    benefits={[
      'Multi-vehicle coordination across the entire wedding period',
      'Single point of contact for all transport logistics',
      'Experience with all major Puglia wedding venues',
      'Ribbon and decoration service for ceremony vehicles',
      'Full coordination with your wedding timeline',
      'Backup vehicles available on wedding day',
      'Supplier documentation and insurance certificates',
    ]}
    services={[
      { title: 'Guest Airport Arrival Programme', desc: 'Multi-day guest arrivals coordinated across BRI and BDS airports. Guest name lists, flight tracking, name signs.' },
      { title: 'Ceremony Day Vehicles', desc: 'Couple, bridal party, and family transfers. Decorated vehicles on request. On-call driver throughout the day.' },
      { title: 'Venue-to-Venue Shuttles', desc: 'Guest shuttles between accommodation, ceremony venue, and reception. Multiple vehicles timed to your schedule.' },
      { title: 'Post-Wedding Departures', desc: 'Return transfers to airports and train stations across the day after the wedding.' },
    ]}
  />
}
