import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle,
  Clock,
  MapPin,
  Star,
  ChevronDown,
  ChevronUp,
  Search,
  Shield,
  Wifi,
} from 'lucide-react'
import HeroImage from '../components/HeroImage'
import { fleetVehicleFaq } from '../lib/fleet'
import TwitterMeta from '../components/TwitterMeta'

const destinations = [
  { name: 'Fasano & Borgo Egnazia', time: '60 min' },
  { name: 'Polignano a Mare', time: '35 min' },
  { name: 'Monopoli', time: '40 min' },
  { name: 'Lecce', time: '90 min' },
  { name: 'Matera', time: '90 min' },
  { name: 'Trani', time: '40 min' },
]

const properties = [
  { name: 'Borgo Egnazia', time: '60 min' },
  { name: 'Masseria San Domenico', time: '60 min' },
  { name: 'Masseria Torre Maizza', time: '60 min' },
  { name: 'Masseria Torre Coccaro', time: '60 min' },
  { name: 'Masseria Il Melograno', time: '45 min' },
  { name: 'Le Alcove Alberobello', time: '60 min' },
  { name: 'Grotta Palazzese', time: '35 min' },
  { name: 'Masseria Il Frantoio', time: '80 min' },
]

const faqs = [
  {
    q: 'How do I get from Bari Airport to a masseria in Puglia?',
    a: 'Book a private transfer with ConnectinPuglia. Your driver meets you in the arrivals hall, assists with luggage, and takes you directly to your destination at a fixed price — no meters, no surprises. Journey times range from 35 to 90 minutes depending on your destination.',
  },
  {
    q: 'How much does a transfer from Bari Airport cost?',
    a: 'All our prices are fixed and agreed at the time of booking — no surge pricing, no hidden extras. Contact us via the form or WhatsApp for an immediate quote tailored to your destination and group size.',
  },
  {
    q: 'What is the IATA code for Bari Airport?',
    a: 'BRI — Bari Karol Wojtyla International Airport, located approximately 8km north-west of Bari city centre.',
  },
  {
    q: 'Where does the driver wait for me?',
    a: 'Your driver waits inside the arrivals hall holding a name sign displaying your name. You will see them as soon as you exit the customs/baggage area.',
  },
  {
    q: 'What if my flight is delayed?',
    a: 'We monitor all flights in real time. If your flight is delayed, your driver automatically adjusts and waits for you at no extra charge. You will never be left waiting.',
  },
  {
    q: 'Can I book a return transfer too?',
    a: 'Yes — we recommend booking both directions at the same time. Simply provide your return date, time, and pick-up address when filling in the enquiry form.',
  },
  {
    q: 'Which vehicles are available?',
    a: fleetVehicleFaq,
  },
  {
    q: 'Do you cover Bari Airport to Matera?',
    a: 'Yes — Matera is approximately 90 minutes from Bari Airport. We offer one-way transfers and full-day tours combining the transfer with a guided visit to the UNESCO Sassi.',
  },
]

const testimonials = [
  {
    text: 'Our driver was already in the arrivals hall when we came through customs — name sign, big smile, zero stress. We were at our masseria in Fasano in under an hour.',
    author: 'Robert & Helen K.',
    origin: 'Edinburgh, UK',
    rating: 5,
  },
  {
    text: 'Flight was delayed by 90 minutes and the driver was still there waiting, no extra charge, completely calm. Exactly the kind of service you need when you\'re exhausted after a long journey.',
    author: 'Marie-Claire D.',
    origin: 'Paris, France',
    rating: 5,
  },
]

const steps = [
  {
    number: '01',
    title: 'Book in Advance',
    desc: 'Request your transfer via the form or WhatsApp. Receive a fixed-price confirmation within 2 hours.',
  },
  {
    number: '02',
    title: 'We Monitor Your Flight',
    desc: 'Your driver tracks your flight in real time. Delays cause zero disruption — we automatically adjust.',
  },
  {
    number: '03',
    title: 'Meet, Drive, Arrive',
    desc: 'Your driver greets you in arrivals with a name sign, takes your luggage, and drives you directly to your destination.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-charcoal-100 last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="font-sans font-medium text-sm text-charcoal-800 leading-relaxed group-hover:text-gold-600 transition-colors">
          {q}
        </span>
        {open
          ? <ChevronUp size={16} className="flex-none mt-0.5 text-gold-500" />
          : <ChevronDown size={16} className="flex-none mt-0.5 text-charcoal-400" />
        }
      </button>
      {open && (
        <p className="pb-5 font-sans text-sm text-charcoal-500 leading-relaxed">
          {a}
        </p>
      )}
    </div>
  )
}

export default function TransferBariAirport() {
  return (
    <>
      <Helmet>
        <title>Private Transfer from Bari Airport | ConnectinPuglia</title>
        <meta
          name="description"
          content="Book your private transfer from Bari Airport with ConnectinPuglia. Fixed rates, meet and greet, Mercedes-Benz E-Class sedan. Direct to your masseria, hotel, or resort across Puglia. Available 24/7."
        />
        <link rel="canonical" href="https://connectinpuglia.com/transfer-from-bari-airport" />
        <meta property="og:title" content="Private Transfer from Bari Airport | ConnectinPuglia" />
        <meta property="og:description" content="Book your private transfer from Bari Airport with ConnectinPuglia. Fixed rates, meet and greet, Mercedes-Benz E-Class sedan. Direct to your masseria, hotel, or resort across Puglia." />
        <meta property="og:url" content="https://connectinpuglia.com/transfer-from-bari-airport" />
        <meta property="og:image" content="https://connectinpuglia.com/images/transfers/bari-airport-hero.webp" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Private Transfer from Bari Airport",
          "provider": {
            "@type": "LocalBusiness",
            "name": "ConnectinPuglia",
            "url": "https://connectinpuglia.com"
          },
          "areaServed": "Puglia, Italy",
          "description": "Private door-to-door transfers from Bari Karol Wojtyla Airport to destinations across Puglia. Fixed price, meet and greet, flight monitoring.",
          "serviceType": "Airport Transfer"
        })}</script>
      </Helmet>
      <TwitterMeta
        title="Private Transfer from Bari Airport | ConnectinPuglia"
        description="Book your private transfer from Bari Airport with ConnectinPuglia. Fixed rates, meet and greet, Mercedes-Benz E-Class sedan. Direct to your masseria, hotel, or resort across Puglia."
        image="https://connectinpuglia.com/images/transfers/bari-airport-hero.webp"
      />

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <HeroImage
          src="/images/transfers/bari-airport-hero.webp"
          alt="Private Transfer from Bari Airport — Door to Door, Fixed Price"
          objectPosition="center 60%"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/90 via-charcoal-950/70 to-charcoal-950/30" />
        <div className="relative z-10 container-page pt-28 pb-20 text-white max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <MapPin size={14} className="text-gold-400" strokeWidth={1.5} />
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-gold-400">
              BRI · Bari Karol Wojtyla International Airport
            </span>
          </div>
          <h1 className="font-serif font-light text-white leading-[1.1] mb-5"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
          >
            Private Transfer from Bari Airport —<br />
            <em className="text-gold-300 italic">Door to Door, Fixed Price.</em>
          </h1>
          <p className="font-sans font-light text-white/80 text-lg leading-relaxed max-w-2xl mb-10">
            Your driver is waiting at arrivals. Name sign, luggage assistance, real-time flight monitoring. ConnectinPuglia takes you directly to your destination across Puglia — no meters, no sharing, no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/quote-contact?service=Airport+Transfer&airport=BRI" className="btn-primary">
              Book This Transfer <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/393773096638?text=Hello%2C%20I%27d%20like%20to%20book%20a%20private%20transfer%20from%20Bari%20Airport%20(BRI)"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light"
            >
              <MessageCircle size={15} strokeWidth={1.5} /> WhatsApp for Instant Quote
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-charcoal-900 py-4">
        <div className="container-page">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 divide-x-0 md:divide-x divide-charcoal-700">
            {[
              { icon: <CheckCircle size={14} strokeWidth={1.5} />, text: 'Fixed price — agreed at booking' },
              { icon: <Search size={14} strokeWidth={1.5} />, text: 'Real-time flight monitoring' },
              { icon: <Clock size={14} strokeWidth={1.5} />, text: 'Available 24/7, 365 days' },
              { icon: <Shield size={14} strokeWidth={1.5} />, text: 'NCC Licensed & fully insured' },
              { icon: <Wifi size={14} strokeWidth={1.5} />, text: 'AC + WiFi on request' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/70 px-5 first:pl-0 last:pr-0">
                <span className="text-gold-400">{item.icon}</span>
                <span className="font-sans text-xs tracking-wide">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <div className="text-center mb-14">
            <p className="section-label mb-4">How It Works</p>
            <span className="divider-gold mx-auto mb-6 block" />
            <h2 className="section-title text-charcoal-900">Three Simple Steps</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x divide-charcoal-100">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center px-10 py-8">
                <span className="font-serif text-5xl font-light text-gold-200 mb-5">{step.number}</span>
                <h3 className="font-serif text-xl font-medium text-charcoal-900 mb-3">{step.title}</h3>
                <p className="font-sans text-sm text-charcoal-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS GRID */}
      <section className="py-20 bg-cream">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Destinations */}
            <div>
              <p className="section-label mb-4">Destinations from Bari</p>
              <span className="divider-gold mb-6 block" />
              <h2 className="font-serif text-3xl font-light text-charcoal-900 mb-8">
                Where We Take You
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destinations.map((d) => (
                  <div
                    key={d.name}
                    className="flex items-center justify-between bg-white border border-charcoal-100 px-5 py-4 hover:border-gold-400 transition-colors duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin size={14} strokeWidth={1.5} className="text-gold-500 flex-none" />
                      <span className="font-sans text-sm font-medium text-charcoal-800">{d.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-charcoal-400">
                      <Clock size={12} strokeWidth={1.5} />
                      <span className="font-sans text-xs">{d.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-sans text-xs text-charcoal-400 mt-4">
                Times are approximate and may vary with traffic. We cover all destinations across Puglia and Basilicata.
              </p>
            </div>

            {/* Luxury Properties */}
            <div>
              <p className="section-label mb-4">Luxury Properties Served</p>
              <span className="divider-gold mb-6 block" />
              <h2 className="font-serif text-3xl font-light text-charcoal-900 mb-8">
                Direct to the Finest Masserie
              </h2>
              <div className="flex flex-col gap-3">
                {properties.map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center justify-between border-b border-charcoal-100 pb-3 last:border-0 last:pb-0 group"
                  >
                    <div className="flex items-center gap-3">
                      <Star size={12} strokeWidth={1.5} className="text-gold-500 flex-none" />
                      <span className="font-sans text-sm text-charcoal-700 group-hover:text-charcoal-900 transition-colors">{p.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-charcoal-400">
                      <Clock size={12} strokeWidth={1.5} />
                      <span className="font-sans text-xs">{p.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-charcoal-900 text-white p-6">
                <p className="font-sans text-sm text-white/70 mb-4">
                  Staying at a property not listed here? We cover the entire region — just let us know your accommodation.
                </p>
                <Link
                  to="/quote-contact?service=Airport+Transfer&airport=BRI"
                  className="flex items-center gap-2 font-sans text-xs font-medium tracking-widest uppercase text-gold-400 hover:text-gold-300 transition-colors"
                >
                  Request a Custom Quote <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <p className="section-label mb-4">FAQ</p>
              <span className="divider-gold mb-6 block" />
              <h2 className="font-serif text-3xl font-light text-charcoal-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="font-sans text-sm text-charcoal-500 leading-relaxed mb-8">
                Everything you need to know about your private transfer from Bari Airport.
              </p>
              <a
                href="https://wa.me/393773096638?text=Hello%2C%20I%20have%20a%20question%20about%20a%20transfer%20from%20Bari%20Airport"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-sans text-sm font-medium text-gold-600 hover:text-gold-700 transition-colors"
              >
                <MessageCircle size={16} strokeWidth={1.5} />
                Ask us on WhatsApp
              </a>
            </div>
            <div className="lg:col-span-2">
              {faqs.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-cream">
        <div className="container-page">
          <div className="text-center mb-12">
            <p className="section-label mb-4">Guest Experiences</p>
            <span className="divider-gold mx-auto mb-6 block" />
            <h2 className="section-title text-charcoal-900">What Guests Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-white p-8 border border-charcoal-100">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" className="text-gold-500" />
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

      {/* FINAL CTA */}
      <section className="py-20 bg-charcoal-900 text-white">
        <div className="container-page text-center">
          <p className="section-label text-gold-400 mb-4">Ready to Book?</p>
          <span className="divider-gold mx-auto mb-6 block bg-gold-500" />
          <h2 className="font-serif font-light text-white text-4xl md:text-5xl max-w-xl mx-auto mb-5">
            Book Your Bari Airport Transfer
          </h2>
          <p className="font-sans text-white/60 max-w-md mx-auto mb-10 leading-relaxed">
            Fixed price, professional service, door to door. Request your quote now — we respond within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/quote-contact?service=Airport+Transfer&airport=BRI" className="btn-primary">
              Request a Quote <ArrowRight size={15} />
            </Link>
            <a
              href="tel:+393773096638"
              className="flex items-center gap-2 font-sans text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              <Phone size={15} strokeWidth={1.5} />
              Call Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-14 bg-white border-t border-charcoal-100">
        <div className="container-page">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-charcoal-400 mb-6 text-center">
            Other Transfer &amp; Tour Services
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Transfer from Brindisi Airport', to: '/transfer-from-brindisi-airport' },
              { label: 'Private Tours in Puglia', to: '/private-tours-puglia' },
              { label: 'Hourly Chauffeur', to: '/quote-contact?service=Hourly+Chauffeur' },
              { label: 'Wedding Transport', to: '/wedding-transfer-puglia' },
              { label: 'All Services', to: '/airport-transfers' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-sans text-sm text-charcoal-600 hover:text-gold-600 underline underline-offset-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
