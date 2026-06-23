import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

type DropdownItem = { label: string; to: string }

type NavItem =
  | { label: string; to: string; dropdown?: DropdownItem[] }
  | { label: string; to: null; dropdown: DropdownItem[] }

const navItems: NavItem[] = [
  {
    label: 'Airport Transfers',
    to: '/airport-transfers',
    dropdown: [
      { label: 'From Bari Airport', to: '/transfer-from-bari-airport' },
      { label: 'From Brindisi Airport', to: '/transfer-from-brindisi-airport' },
      { label: 'From Bari Train Station', to: '/transfer-from-bari-train-station' },
      { label: 'From Brindisi Port', to: '/transfer-from-brindisi-port' },
    ],
  },
  {
    label: 'Destinations',
    to: null,
    dropdown: [
      { label: 'Fasano & Borgo Egnazia', to: '/transfer-to-fasano-borgo-egnazia' },
      { label: 'Ostuni', to: '/transfer-to-ostuni' },
      { label: "Alberobello & Valle d'Itria", to: '/transfer-to-alberobello-valle-ditria' },
      { label: 'Polignano a Mare', to: '/transfer-to-polignano-a-mare' },
      { label: 'Monopoli', to: '/transfer-to-monopoli' },
      { label: 'Lecce', to: '/transfer-to-lecce' },
      { label: 'Matera from Puglia', to: '/transfer-to-matera-from-puglia' },
      { label: 'Trani', to: '/transfer-to-trani' },
    ],
  },
  {
    label: 'Luxury Properties',
    to: null,
    dropdown: [
      { label: 'Borgo Egnazia', to: '/transfer-to-borgo-egnazia' },
      { label: 'Masseria San Domenico', to: '/transfer-to-masseria-san-domenico' },
      { label: 'Masseria Torre Maizza', to: '/transfer-to-masseria-torre-maizza' },
      { label: 'Masseria Il Melograno', to: '/transfer-to-masseria-il-melograno' },
      { label: 'Masseria Il Frantoio', to: '/transfer-to-masseria-il-frantoio' },
      { label: 'Le Alcove Alberobello', to: '/transfer-to-le-alcove-alberobello' },
      { label: 'Masseria Torre Coccaro', to: '/transfer-to-masseria-torre-coccaro' },
      { label: 'Grotta Palazzese', to: '/transfer-to-grotta-palazzese' },
    ],
  },
  {
    label: 'Private Tours',
    to: '/private-tours-puglia',
    dropdown: [
      { label: "Valle d'Itria Tour", to: '/tour-valle-ditria' },
      { label: 'Wine Tour', to: '/tour-wine-puglia' },
      { label: 'Salento Tour', to: '/tour-salento' },
      { label: 'Baroque Puglia', to: '/tour-baroque-puglia' },
      { label: 'Food & Olive Oil Tour', to: '/tour-food-olive-oil' },
    ],
  },
  {
    label: 'B2B Partners',
    to: '/b2b-hotels-masserie',
    dropdown: [
      { label: 'For Masserie & Resorts', to: '/b2b-masserie-resorts' },
      { label: 'For Hotels', to: '/b2b-hotels' },
      { label: 'For Travel Designers & DMC', to: '/b2b-travel-designers-dmc' },
      { label: 'For Wedding Planners', to: '/b2b-wedding-planners' },
      { label: 'Corporate & Events', to: '/corporate-events' },
    ],
  },
  { label: 'About Us', to: '/about-us' },
  { label: 'Our Fleet', to: '/our-fleet' },
]

function DrawerNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false)
  const hasDropdown = item.dropdown && item.dropdown.length > 0

  return (
    <div>
      <div className="flex items-center justify-between">
        {item.to ? (
          <NavLink
            to={item.to}
            onClick={onClose}
            className={({ isActive }) =>
              `font-serif text-2xl font-light flex-1 transition-colors py-1 ${isActive ? 'text-gold-400' : 'text-white hover:text-gold-300'}`
            }
          >
            {item.label}
          </NavLink>
        ) : (
          <span className="font-serif text-2xl font-light flex-1 text-white/70 py-1">
            {item.label}
          </span>
        )}
        {hasDropdown && (
          <button
            onClick={() => setOpen((o) => !o)}
            className="ml-3 p-1 text-white/60 hover:text-gold-400 transition-colors"
          >
            <ChevronDown size={18} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>
      {hasDropdown && open && (
        <div className="mt-2 ml-4 flex flex-col gap-1 border-l border-charcoal-700 pl-4">
          {item.dropdown!.map((sub) => (
            <Link
              key={sub.to}
              to={sub.to}
              onClick={onClose}
              className="font-sans text-base text-white/60 hover:text-gold-300 transition-colors py-1"
            >
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-charcoal-900/98 backdrop-blur-sm shadow-lg py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container-page flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none flex-none group">
            <span className="font-serif text-lg font-medium tracking-wide text-white group-hover:text-gold-400 transition-colors duration-300">
              Connectin<span className="text-gold-500">Puglia</span>
            </span>
            <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-white/50 mt-0.5">
              Private Transfers &amp; Tours
            </span>
          </Link>

          {/* CTA — always visible */}
          <Link
            to="/quote-contact"
            className="hidden sm:inline-flex items-center gap-2 bg-gold-500 text-charcoal-900 font-sans font-semibold text-xs tracking-widest uppercase px-5 py-3 hover:bg-gold-400 transition-colors duration-200 flex-none"
          >
            Book Your Transfer
          </Link>

          {/* Burger — always visible */}
          <button
            className="text-white p-2 -mr-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Full-screen drawer — all viewports */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal-950 flex flex-col pt-20 px-8 pb-10 overflow-y-auto transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-5 mt-6">
          {navItems.map((item) => (
            <DrawerNavItem key={item.label} item={item} onClose={() => setMenuOpen(false)} />
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/quote-contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary w-full justify-center text-center"
          >
            Book Your Transfer
          </Link>
        </div>
      </div>
    </>
  )
}
