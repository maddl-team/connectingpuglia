import DestinationTransferPage from '../../components/DestinationTransferPage'

export default function TransferToMonopoli() {
  return (
    <DestinationTransferPage
      metaTitle="Private Transfer to Monopoli from Airport | Connect in Puglia"
      metaDesc="Private transfer to Monopoli from Bari or Brindisi airport. Fixed price, professional driver, door to door. ConnectinPuglia."
      canonical="https://connectinpuglia.com/transfer-to-monopoli"
      heroImg="/images/destinations/monopoli-hero.png"
      h1="Private Transfer to Monopoli — Fixed Price, Door to Door."
      subheadline="Your driver meets you at arrivals and takes you directly to Monopoli's historic harbour or your hotel — no meters, no navigation, fixed price confirmed before you travel."
      routes={[
        {
          airport: 'Bari Airport',
          airportCode: 'BRI · Bari Karol Wojtyla',
          distance: '50 km',
          time: 'approx 40–45 min',
          via: 'A14 motorway',
          recommended: false,
        },
        {
          airport: 'Brindisi Airport',
          airportCode: 'BDS · Brindisi Papola Casale',
          distance: '60 km',
          time: 'approx 45–50 min',
          via: 'SS379 / A14',
          recommended: false,
        },
      ]}
      aboutParagraphs={[
        "Monopoli is one of Puglia's most engaging coastal towns — a working fishing harbour surrounded by Baroque churches, a medieval castle, and streets filled with the smell of fresh seafood and wood-fired bread. Unlike more tourist-heavy destinations, Monopoli retains a genuine local character that makes it one of the region's most rewarding places to stay.",
        "The coastline around Monopoli offers some of the best beaches in northern Puglia, and the town makes an excellent base for exploring both the Adriatic coast and the Valle d'Itria inland. Alberobello is just 30 minutes away; Polignano a Mare is 15 minutes north; Fasano and Ostuni are 25–40 minutes south.",
        "Masseria Il Melograno — one of Puglia's oldest and most celebrated luxury estates — is located in the olive groves immediately west of Monopoli, and is one of the properties ConnectinPuglia serves most frequently in this area.",
      ]}
      propertiesServed={[
        { name: 'Masseria Il Melograno', to: '/transfer-to-masseria-il-melograno' },
        { name: 'Don Ferrante Dimora di Charme', to: '' },
        { name: 'Hotel Cala San Vito', to: '' },
        { name: 'La Peschiera', to: '' },
        { name: 'Masseria Torre Coccaro', to: '/transfer-to-masseria-torre-coccaro' },
        { name: 'Borgo Egnazia', to: '/transfer-to-borgo-egnazia' },
      ]}
      faqs={[
        {
          q: "How far is Monopoli from Bari Airport?",
          a: "Monopoli is approximately 50km from Bari Airport (BRI) — about 40–45 minutes depending on traffic."
        },
        {
          q: "How far is Monopoli from Brindisi Airport?",
          a: "Monopoli is approximately 60km from Brindisi Airport (BDS) — about 45–50 minutes. Both airports serve Monopoli at similar travel times."
        },
        {
          q: "Is parking difficult in Monopoli?",
          a: "Monopoli's historic centre and seafront can be congested, especially in summer. A private transfer eliminates all parking challenges."
        },
        {
          q: "How do I get from Monopoli to Alberobello?",
          a: "Monopoli to Alberobello is approximately 30 minutes by private transfer. We offer inter-destination transfers at fixed prices."
        },
        {
          q: "Where is Masseria Il Melograno in relation to Monopoli?",
          a: "Masseria Il Melograno is located in the olive groves approximately 5km west of Monopoli town centre — about 10 minutes by private transfer."
        },
        {
          q: "Can I book a return transfer from Monopoli to the airport?",
          a: "Yes — both directions available. We recommend booking simultaneously."
        },
        {
          q: "Can you take me from Monopoli to Polignano?",
          a: "Yes — Monopoli to Polignano a Mare is approximately 15 minutes. We offer all inter-destination transfers at fixed prices."
        },
        {
          q: "Do you offer day tours from Monopoli?",
          a: "Yes — Valle d'Itria, Lecce and Salento, Matera, and wine tours all depart from Monopoli at your chosen time."
        },
      ]}
      testimonials={[
        {
          text: "Our driver from Bari Airport was waiting in arrivals and had us at our masseria near Monopoli in under 45 minutes. Professional, friendly, perfect vehicle.",
          author: "David & Rachel K.",
          origin: "Dublin, Ireland",
        },
        {
          text: "We moved from Fasano to Monopoli mid-stay — ConnectinPuglia handled the inter-property transfer seamlessly, with all our luggage, in under 30 minutes.",
          author: "Luisa M.",
          origin: "Milan, Italy",
        },
      ]}
      internalLinks={[
        { label: 'Transfer from Bari Airport', to: '/transfer-from-bari-airport' },
        { label: 'Masseria Il Melograno Transfer', to: '/transfer-to-masseria-il-melograno' },
        { label: 'Transfer to Polignano a Mare', to: '/transfer-to-polignano-a-mare' },
        { label: 'Transfer to Fasano', to: '/transfer-to-fasano-borgo-egnazia' },
        { label: 'Private Tours in Puglia', to: '/private-tours-puglia' },
        { label: 'All Airport Transfers', to: '/airport-transfers' },
      ]}
    />
  )
}
