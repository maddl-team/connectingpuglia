import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from './Header'
import Footer from './Footer'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://connectinpuglia.com/#business',
  name: 'ConnectinPuglia',
  description: 'Premium NCC licensed private transfer and tour operator in Puglia, southern Italy.',
  url: 'https://connectinpuglia.com',
  telephone: '+393921234567',
  email: 'info@connectinpuglia.com',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Puglia',
    addressCountry: 'IT',
  },
  areaServed: {
    '@type': 'State',
    name: 'Puglia',
  },
  priceRange: '€€€',
  image: 'https://connectinpuglia.com/images/site-og-default.png',
}

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
