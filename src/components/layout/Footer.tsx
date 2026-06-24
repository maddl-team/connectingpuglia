import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'

const footerLinks = [
  {
    heading: 'Transfers',
    links: [
      { label: 'From Bari Airport', to: '/transfer-from-bari-airport' },
      { label: 'From Brindisi Airport', to: '/transfer-from-brindisi-airport' },
      { label: 'From Bari Train Station', to: '/transfer-from-bari-train-station' },
      { label: 'From Brindisi Port', to: '/transfer-from-brindisi-port' },
      { label: 'All Airport Transfers', to: '/airport-transfers' },
    ],
  },
  {
    heading: 'Private Tours',
    links: [
      { label: "Valle d'Itria Tour", to: '/tour-valle-ditria' },
      { label: 'Wine Tour Puglia', to: '/tour-wine-puglia' },
      { label: 'Salento Tour', to: '/tour-salento' },
      { label: 'Baroque Puglia', to: '/tour-baroque-puglia' },
      { label: 'Food & Olive Oil Tour', to: '/tour-food-olive-oil' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', to: '/about-us' },
      { label: 'Our Fleet', to: '/our-fleet' },
      { label: 'B2B Partners', to: '/b2b-hotels-masserie' },
      { label: 'Wedding Transfers', to: '/wedding-transfer-puglia' },
      { label: 'Contact & Quote', to: '/quote-contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="container-page pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-charcoal-700">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex flex-col leading-none mb-6">
              <span className="font-serif text-2xl font-medium tracking-wide">
                Connectin<span className="text-gold-500">Puglia</span>
              </span>
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/50 mt-1">
                Private Transfers &amp; Tours
              </span>
            </Link>
            <p className="font-sans text-sm text-white/60 leading-relaxed max-w-xs mb-6">
              Your premium private transfer and tour partner in Puglia — professional, warm, and deeply local.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+393773096638" className="flex items-center gap-3 text-sm text-white/60 hover:text-gold-400 transition-colors">
                <Phone size={14} strokeWidth={1.5} />
                +39 377 309 6638
              </a>
              <a href="mailto:info@connectinpuglia.com" className="flex items-center gap-3 text-sm text-white/60 hover:text-gold-400 transition-colors">
                <Mail size={14} strokeWidth={1.5} />
                info@connectinpuglia.com
              </a>
              <span className="flex items-center gap-3 text-sm text-white/60">
                <MapPin size={14} strokeWidth={1.5} />
                Puglia, Southern Italy
              </span>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-gold-500 mb-5">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/40">
            &copy; {new Date().getFullYear()} ConnectinPuglia. NCC Licensed. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/connectinpuglia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-gold-400 transition-colors"
              aria-label="ConnectinPuglia on Instagram"
            >
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a
              href="https://facebook.com/connectinpuglia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-gold-400 transition-colors"
              aria-label="ConnectinPuglia on Facebook"
            >
              <Facebook size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
