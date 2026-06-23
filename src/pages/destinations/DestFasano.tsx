import TransferPageTemplate from '../../components/TransferPageTemplate'

export default function DestFasano() {
  return (
    <TransferPageTemplate
      slug="fasano-borgo-egnazia"
      title="Private Transfer to Fasano & Borgo Egnazia — Fixed Price."
      subtitle="Book Your Transfer to Fasano"
      metaTitle="Private Transfer to Fasano & Borgo Egnazia | Connect in Puglia"
      metaDesc="Private transfer to Fasano and Borgo Egnazia from Bari or Brindisi airports. Fixed price, professional driver, door to door. ConnectinPuglia."
      canonical="https://connectinpuglia.com/fasano-borgo-egnazia"
      heroImg="/images/destinations/fasano-hero.png"
      intro="Fasano is home to Puglia's most celebrated resort, Borgo Egnazia, along with some of the region's finest masserie. Your driver meets you at the airport and takes you directly to your property — no stress, no surprises."
      destinations={[
        { name: 'From Bari Airport (BRI)', time: '60 min' },
        { name: 'From Brindisi Airport (BDS)', time: '30 min' },
        { name: 'From Bari Train Station', time: '60 min' },
        { name: 'From Brindisi Port', time: '35 min' },
        { name: 'From Ostuni', time: '20 min' },
        { name: 'From Polignano a Mare', time: '30 min' },
      ]}
      properties={[
        { name: 'Borgo Egnazia', time: '60 min from BRI' },
        { name: 'Masseria San Domenico', time: '60 min from BRI' },
        { name: 'Masseria Torre Coccaro', time: '60 min from BRI' },
        { name: 'Masseria Torre Maizza', time: '60 min from BRI' },
        { name: 'Masseria Il Melograno', time: '50 min from BRI' },
        { name: 'Masseria Il Frantoio', time: '80 min from BRI' },
      ]}
      faqs={[
        { q: 'How far is Fasano from Bari Airport?', a: 'Fasano is approximately 60 minutes from Bari Airport (BRI) and just 30 minutes from Brindisi Airport (BDS). If you are staying near Fasano, BDS may be the more convenient choice.' },
        { q: 'How do I get to Borgo Egnazia from the airport?', a: 'Book a private transfer with ConnectinPuglia. We know the exact entrance to Borgo Egnazia and all major Fasano properties. Your driver meets you in arrivals and takes you directly to the resort entrance.' },
        { q: 'Which airport should I fly into for Fasano?', a: 'Brindisi Airport (BDS) is closer — just 30 minutes from central Fasano. Bari Airport (BRI) is also well-served and approximately 60 minutes away.' },
        { q: 'Are taxis available from the airport to Fasano?', a: 'Airport taxis are available but are metered and may not know the exact access to boutique masserie. A pre-booked private transfer with ConnectinPuglia guarantees a fixed price and driver who knows your property.' },
        { q: 'Can I book a Fasano to airport return transfer?', a: 'Yes — we offer transfers in both directions. Book both simultaneously for convenience.' },
        { q: 'Do you cover inter-property transfers around Fasano?', a: 'Yes — if you are moving between masserie or to/from Fasano town, we offer hourly chauffeur and point-to-point transfers.' },
      ]}
      testimonials={[
        { text: 'Driver was waiting outside Borgo Egnazia reception to take us back to Brindisi Airport — perfectly timed, incredibly professional. Will always use ConnectinPuglia.', author: 'Isabella R.', origin: 'New York, USA' },
      ]}
    />
  )
}
