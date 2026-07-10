import DestinationTransferPage from '../../components/DestinationTransferPage'

export default function TransferToPolignano() {
  return (
    <DestinationTransferPage
      metaTitle="Private Transfer to Polignano a Mare | ConnectinPuglia"
      metaDesc="Private transfer to Polignano a Mare from Bari Airport. Fixed price, professional driver, direct to your hotel above the Adriatic. ConnectinPuglia."
      canonical="https://connectinpuglia.com/transfer-to-polignano-a-mare"
      heroImg="/images/destinations/polignano-hero.webp"
      h1="Private Transfer to Polignano a Mare — Above the Adriatic."
      subheadline="Your driver meets you at Bari Airport and takes you directly to your hotel in Polignano — one of the closest and most beautiful seaside destinations from BRI."
      routes={[
        {
          airport: 'Bari Airport',
          airportCode: 'BRI · Bari Karol Wojtyla',
          distance: '35 km',
          time: 'approx 30–35 min',
          via: 'A14 / SS16',
          recommended: true,
        },
        {
          airport: 'Brindisi Airport',
          airportCode: 'BDS · Brindisi Papola Casale',
          distance: '75 km',
          time: 'approx 55–60 min',
          via: 'SS379 / A14',
          recommended: false,
        },
      ]}
      aboutParagraphs={[
        "Polignano a Mare is perched dramatically on a limestone cliff above the Adriatic, with crystal-clear turquoise water crashing against the rocks below. Its old town is a tight maze of whitewashed buildings, aperitivo bars, and restaurants with extraordinary sea views — including the world-famous Grotta Palazzese, carved into a sea cave.",
        "At just 35 kilometres from Bari Airport, Polignano is one of the quickest destinations to reach from BRI — making it an ideal first or last night of a Puglia itinerary. The town is also a convenient base for day trips to Alberobello, Monopoli, and Matera.",
        "Polignano's historic centre has very limited parking — a rental car is a liability here. Your ConnectinPuglia driver delivers you to the exact hotel entrance, navigating the old town's restricted zones on your behalf.",
      ]}
      propertiesServed={[
        { name: 'Grotta Palazzese Hotel', to: '/transfer-to-grotta-palazzese' },
        { name: 'Covo dei Saraceni', to: '' },
        { name: 'Hotel Canne Bianche', to: '' },
        { name: 'Il Frantoio', to: '' },
        { name: 'Masseria Il Melograno', to: '/transfer-to-masseria-il-melograno' },
        { name: 'Borgo Egnazia', to: '/transfer-to-borgo-egnazia' },
      ]}
      faqs={[
        {
          q: "How far is Polignano a Mare from Bari Airport?",
          a: "Polignano is approximately 35km from Bari Airport (BRI) — about 30–35 minutes. It is one of the closest Adriatic destinations to BRI, making it an easy first stop on a Puglia itinerary."
        },
        {
          q: "Is parking difficult in Polignano a Mare?",
          a: "Yes — the old town has extremely limited parking and a ZTL in the centre. A private transfer delivers you to the hotel entrance, eliminating all parking challenges entirely."
        },
        {
          q: "What is Grotta Palazzese?",
          a: "Grotta Palazzese is a legendary hotel and restaurant in Polignano, built into a sea cave in the cliff face — one of the most photographed dining settings in Italy. ConnectinPuglia delivers guests directly to the hotel entrance."
        },
        {
          q: "Can I book a transfer from Polignano to Bari Airport?",
          a: "Yes — both directions available. We recommend booking both arrival and return simultaneously."
        },
        {
          q: "Can I do day trips from Polignano a Mare?",
          a: "Yes — Alberobello is approximately 30 minutes inland, Monopoli is 15 minutes south, and Matera is approximately 90 minutes. Book a private day tour or hourly chauffeur."
        },
        {
          q: "How do I get from Polignano to Fasano?",
          a: "Polignano to Fasano takes approximately 30 minutes by private transfer. We offer inter-destination transfers at fixed prices."
        },
        {
          q: "Can you take me from Polignano a Mare to Bari for the day?",
          a: "Yes — Polignano to Bari centre is approximately 35 minutes. We offer both one-way transfers and hourly chauffeur days."
        },
        {
          q: "Which vehicles are available for Polignano transfers?",
          a: "Mercedes-Benz E-Class (up to 3 passengers), V-Class (up to 7 passengers), and Vito Minibus (up to 8 passengers). All air-conditioned, WiFi on request."
        },
      ]}
      testimonials={[
        {
          text: "From Bari Airport to the Grotta Palazzese entrance in under 40 minutes — no drama, no wrong turns, just a perfectly smooth start to an extraordinary stay.",
          author: "Claudia F.",
          origin: "Rome, Italy",
        },
        {
          text: "The driver navigated the old town streets perfectly and dropped us right at our hotel. We couldn't have done that with a rental car.",
          author: "Anna & Peter S.",
          origin: "Vienna, Austria",
        },
      ]}
      internalLinks={[
        { label: 'Transfer from Bari Airport', to: '/transfer-from-bari-airport' },
        { label: 'Grotta Palazzese Transfer', to: '/transfer-to-grotta-palazzese' },
        { label: 'Transfer to Monopoli', to: '/transfer-to-monopoli' },
        { label: 'Transfer to Fasano', to: '/transfer-to-fasano-borgo-egnazia' },
        { label: 'Private Tours in Puglia', to: '/private-tours-puglia' },
        { label: 'All Airport Transfers', to: '/airport-transfers' },
      ]}
    />
  )
}
