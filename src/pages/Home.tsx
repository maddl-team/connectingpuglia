import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Car, MapPin, Star, Shield, Clock, Users } from 'lucide-react'
import HeroImage from '../components/HeroImage'
import { fleetHomeDescription } from '../lib/fleet'
import TwitterMeta from '../components/TwitterMeta'

const services = [
  {
    id: 'airport',
    icon: <Car size={28} strokeWidth={1} />,
    title: 'Airport & Port Transfers',
    description: 'Seamless private transfers from Bari, Brindisi, and Taranto airports and ports. Meet & greet, flight monitoring, and door-to-door service.',
    href: '/airport-transfers',
  },
  {
    id: 'hourly',
    icon: <Clock size={28} strokeWidth={1} />,
    title: 'Hourly Chauffeur',
    description: 'Dedicated professional chauffeur at your disposal. Perfect for business travel, winery visits, or exploring Puglia at your own pace.',
    href: '/quote-contact?service=Hourly+Chauffeur',
  },
  {
    id: 'tours',
    icon: <MapPin size={28} strokeWidth={1} />,
    title: 'Private Tours',
    description: 'Curated private experiences to Alberobello, Valle d\'Itria, Lecce, Matera, and beyond — guided or self-guided with your personal driver.',
    href: '/private-tours-puglia',
  },
  {
    id: 'wedding',
    icon: <Star size={28} strokeWidth={1} />,
    title: 'Wedding & Events',
    description: 'Elegant transport solutions for destination weddings and special events at Puglia\'s finest masserie and venues.',
    href: '/wedding-transfer-puglia',
  },
]

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '5,000+', label: 'Guests Served' },
  { value: '100%', label: 'Licensed & Insured' },
  { value: '4.9', label: 'Average Rating' },
]

const testimonials = [
  {
    text: 'Absolutely flawless service from start to finish. Our driver was punctual, knowledgeable, and made our stay in Puglia truly special.',
    author: 'Sarah M.',
    origin: 'London, UK',
    rating: 5,
  },
  {
    text: 'We booked private transfers for our entire wedding party. Professional, elegant, and incredibly accommodating. Cannot recommend enough.',
    author: 'Jennifer & Marco',
    origin: 'New York, USA',
    rating: 5,
  },
  {
    text: 'The tour to Alberobello and Ostuni was the highlight of our trip. Our guide had an intimate knowledge of the region that you simply can\'t find elsewhere.',
    author: 'Thomas B.',
    origin: 'Hamburg, Germany',
    rating: 5,
  },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Private Transfers &amp; Tours in Puglia | ConnectinPuglia</title>
        <meta name="description" content="Premium NCC licensed chauffeur service and private tour operator in Puglia, southern Italy. Airport transfers, private tours to Alberobello, Lecce, Ostuni, and beyond." />
        <meta property="og:title" content="Private Transfers & Tours in Puglia | ConnectinPuglia" />
        <meta property="og:description" content="Premium NCC licensed chauffeur service and private tour operator in Puglia, southern Italy." />
        <meta property="og:url" content="https://connectinpuglia.com/" />
        <meta property="og:image" content="https://connectinpuglia.com/images/home/home-og.webp" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://connectinpuglia.com/" />
      </Helmet>
      <TwitterMeta
        title="Private Transfers & Tours in Puglia | ConnectinPuglia"
        description="Premium NCC licensed chauffeur service and private tour operator in Puglia, southern Italy."
        image="https://connectinpuglia.com/images/home/home-og.webp"
      />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroImage
          src="/images/home/home-hero.webp"
          alt="Your Private Gateway to Puglia — luxury transfers and tours in southern Italy"
        />
        <div className="absolute inset-0 bg-hero-overlay" />

        <div className="relative z-10 container-page text-center text-white pt-24">
          <p className="section-label text-gold-400 mb-6">Puglia, Southern Italy</p>
          <h1 className="font-serif font-light text-white text-balance max-w-4xl mx-auto leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Your Private Gateway<br />
            <em className="text-gold-300 italic">to Puglia</em>
          </h1>
          <p className="font-sans font-light text-white/75 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Premium licensed chauffeur transfers and curated private tours — crafted for guests who seek the authentic, unhurried soul of southern Italy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/quote-contact" className="btn-primary">
              Request a Transfer <ArrowRight size={16} />
            </Link>
            <Link to="/private-tours-puglia" className="btn-ghost-light">
              Explore Tours
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="font-sans text-xs tracking-[0.2em] uppercase">Discover</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-charcoal-900 py-5">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-charcoal-700">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center px-6 py-2">
                <span className="font-serif text-3xl font-light text-gold-400">{s.value}</span>
                <span className="font-sans text-xs tracking-wider uppercase text-white/50 mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-cream">
        <div className="container-page">
          <div className="text-center mb-16">
            <p className="section-label mb-4">What We Offer</p>
            <span className="divider-gold mx-auto mb-6 block" />
            <h2 className="section-title text-charcoal-900 max-w-lg mx-auto text-balance">
              Tailored Services for Discerning Travellers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal-100">
            {services.map((svc) => (
              <Link
                key={svc.id}
                to={svc.href}
                className="card-service bg-white group p-8 flex flex-col"
              >
                <div className="text-gold-500 mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:text-gold-600 w-fit">
                  {svc.icon}
                </div>
                <h3 className="font-serif text-xl font-medium text-charcoal-900 mb-3 leading-tight">
                  {svc.title}
                </h3>
                <p className="font-sans text-sm text-charcoal-500 leading-relaxed flex-1">
                  {svc.description}
                </p>
                <span className="mt-6 flex items-center gap-2 font-sans text-xs font-medium tracking-widest uppercase text-gold-500 group-hover:gap-3 transition-all duration-300">
                  Learn More <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">Why ConnectinPuglia</p>
              <span className="divider-gold mb-6 block" />
              <h2 className="section-title text-charcoal-900 mb-6 max-w-md">
                Professional, Licensed & Deeply Local
              </h2>
              <p className="font-sans text-charcoal-500 leading-relaxed mb-8">
                We are a fully licensed NCC operator (Noleggio Con Conducente) — not a ride-share app. Every journey is handled by professional, insured chauffeurs who have lived and breathed Puglia their entire lives.
              </p>
              <div className="flex flex-col gap-5">
                {[
                  { icon: <Shield size={18} strokeWidth={1.5} />, title: 'NCC Licensed', desc: 'Fully licensed and insured private hire operator, compliant with Italian law.' },
                  { icon: <Star size={18} strokeWidth={1.5} />, title: 'Premium Fleet', desc: fleetHomeDescription },
                  { icon: <Users size={18} strokeWidth={1.5} />, title: 'Local Expertise', desc: 'Drivers who know every road, masseria, and hidden gem in the region.' },
                  { icon: <Clock size={18} strokeWidth={1.5} />, title: 'Always On Time', desc: 'Flight tracking and proactive communication — we are there before you need us.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-none mt-0.5 w-8 h-8 flex items-center justify-center bg-gold-50 text-gold-600 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-sans font-medium text-charcoal-800 text-sm mb-0.5">{item.title}</h4>
                      <p className="font-sans text-sm text-charcoal-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className="aspect-[4/5] bg-cover bg-center"
                style={{ backgroundImage: `url('/images/home/home-card-4.webp')` }}
              />
              <div className="absolute -bottom-6 -left-6 bg-charcoal-900 text-white p-6 w-48">
                <span className="font-serif text-4xl font-light text-gold-400">10+</span>
                <p className="font-sans text-xs tracking-wider uppercase text-white/60 mt-1">Years serving<br />luxury guests</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS TEASER */}
      <section className="py-24 bg-charcoal-950 text-white">
        <div className="container-page">
          <div className="text-center mb-14">
            <p className="section-label text-gold-500 mb-4">Curated Itineraries</p>
            <span className="divider-gold mx-auto mb-6 block" />
            <h2 className="font-serif font-light text-white text-4xl max-w-xl mx-auto">
              Discover the Beauty of Puglia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-charcoal-800">
            {[
              {
                title: 'Valle d\'Itria & Trulli',
                sub: 'Alberobello · Locorotondo · Cisternino',
                img: '/images/home/home-card-1.webp',
                href: '/tour-valle-ditria',
              },
              {
                title: 'The Baroque City of Lecce',
                sub: 'Lecce · Otranto · Gallipoli',
                img: '/images/home/home-card-2.webp',
                href: '/tour-salento',
              },
              {
                title: 'The White City — Ostuni',
                sub: 'Ostuni · Fasano · Monopoli',
                img: '/images/home/home-card-3.webp',
                href: '/transfer-to-ostuni',
              },
            ].map((dest) => (
              <Link
                key={dest.title}
                to={dest.href}
                className="group relative overflow-hidden block"
                style={{ aspectRatio: '4/5' }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${dest.img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-serif text-2xl font-light text-white mb-1">{dest.title}</h3>
                  <p className="font-sans text-xs text-white/60 tracking-wide mb-4">{dest.sub}</p>
                  <span className="flex items-center gap-2 font-sans text-xs font-medium tracking-widest uppercase text-gold-400 group-hover:gap-3 transition-all duration-300">
                    Explore <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/private-tours-puglia" className="btn-outline border-white/30 text-white hover:bg-white hover:text-charcoal-900">
              View All Experiences <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-cream">
        <div className="container-page">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Guest Reviews</p>
            <span className="divider-gold mx-auto mb-6 block" />
            <h2 className="section-title text-charcoal-900">What Our Guests Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-white p-8 border border-charcoal-100">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" className="text-gold-500" />
                  ))}
                </div>
                <p className="font-serif text-lg font-light text-charcoal-700 leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-sans font-medium text-sm text-charcoal-800">{t.author}</p>
                  <p className="font-sans text-xs text-charcoal-400">{t.origin}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/home/home-card-5.webp')` }}
      >
        <div className="absolute inset-0 bg-charcoal-900/80" />
        <div className="relative z-10 container-page text-center text-white">
          <p className="section-label text-gold-400 mb-4">Ready to Travel?</p>
          <h2 className="font-serif font-light text-white text-4xl md:text-5xl max-w-2xl mx-auto mb-6">
            Let Us Take You Somewhere Beautiful
          </h2>
          <p className="font-sans text-white/70 max-w-lg mx-auto mb-10 leading-relaxed">
            Get in touch for a personalised quote. Transfers, day tours, multi-day itineraries — we handle it all with grace.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/quote-contact" className="btn-primary">
              Request a Quote <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/393773096638?text=Hello%2C%20I%27d%20like%20to%20book%20a%20transfer%20in%20Puglia"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
