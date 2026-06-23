import DestinationTransferPage from '../../components/DestinationTransferPage'

export default function TransferToLecce() {
  return (
    <DestinationTransferPage
      metaTitle="Private Transfer to Lecce from Airport | Connect in Puglia"
      metaDesc="Private transfer to Lecce from Bari or Brindisi airport. Fixed price, meet and greet, direct to your hotel in the Baroque capital of the South. ConnectinPuglia."
      canonical="https://connectinpuglia.com/transfer-to-lecce"
      heroImg="/images/destinations/lecce-hero.png"
      h1="Private Transfer to Lecce — The Florence of the South."
      subheadline="Your driver meets you at the airport and delivers you directly to your Lecce hotel — navigating the ZTL on your behalf, fixed price confirmed before you travel."
      routes={[
        {
          airport: 'Brindisi Airport',
          airportCode: 'BDS · Brindisi Papola Casale',
          distance: '38 km',
          time: 'approx 35–40 min',
          via: 'SS613',
          recommended: true,
        },
        {
          airport: 'Bari Airport',
          airportCode: 'BRI · Bari Karol Wojtyla',
          distance: '135 km',
          time: 'approx 90–100 min',
          via: 'A14 / SS16',
          recommended: false,
        },
      ]}
      aboutParagraphs={[
        "Lecce is one of the great surprises of Italian travel — a city of extraordinary Baroque architecture carved in warm golden stone, with more ornate churches, palazzi, and piazze per square kilometre than almost anywhere else in the country. Nicknamed the Florence of the South, its centro storico has been undergoing a quiet renaissance that has attracted boutique hotels, acclaimed restaurants, and design-focused travellers from across Europe.",
        "The city is the ideal base for exploring the Salento peninsula — the heel of Italy's boot — with Otranto's Byzantine mosaics, Gallipoli's island old town, and some of the clearest sea water in the Mediterranean all within an hour's drive. The Salento summer festival season (June–August) makes Lecce one of the most vibrant destinations in southern Italy.",
        "The historic centre of Lecce is an extensive ZTL zone. Private hire drivers hold the permits and can deliver guests directly to hotel entrances inside the pedestrian area — something that rental car drivers cannot do without risking automatic fines.",
      ]}
      propertiesServed={[
        { name: 'Risorgimento Resort', to: '' },
        { name: 'Patria Palace Hotel', to: '' },
        { name: 'Palazzo Rollo', to: '' },
        { name: 'Alvino 1884', to: '' },
        { name: 'Masseria Torre Coccaro', to: '/transfer-to-masseria-torre-coccaro' },
        { name: 'Masseria Il Frantoio', to: '/transfer-to-masseria-il-frantoio' },
      ]}
      faqs={[
        {
          q: "Which airport is closest to Lecce?",
          a: "Brindisi Airport (BDS) is the recommended airport for Lecce — just 38km and approximately 35–40 minutes. Bari Airport (BRI) is approximately 135km and 90–100 minutes."
        },
        {
          q: "Is Lecce centre a ZTL zone?",
          a: "Yes — the historic centre of Lecce is an extensive restricted traffic zone. Private hire drivers hold the permits to access hotel drop-off points. Rental car drivers risk automatic fines of €100–300 per entry."
        },
        {
          q: "How much does a transfer from Brindisi Airport to Lecce cost?",
          a: "All prices are fixed and agreed at booking. Contact us via form or WhatsApp for an immediate quote."
        },
        {
          q: "Can I do day trips from Lecce to Otranto and Gallipoli?",
          a: "Yes — our Salento private tour covers Lecce, Otranto, and Gallipoli in a full day. Alternatively, book an hourly chauffeur for maximum flexibility."
        },
        {
          q: "Can I book a return transfer from Lecce to the airport?",
          a: "Yes — both directions available. We recommend booking both simultaneously."
        },
        {
          q: "Can you take me from Lecce to Fasano or Ostuni?",
          a: "Yes — inter-regional transfers are available. Lecce to Ostuni is approximately 60 minutes; Lecce to Fasano is approximately 80 minutes."
        },
        {
          q: "Do you serve masserie near Lecce?",
          a: "Yes — several boutique masserie and country hotels are located in the countryside outside Lecce. Contact us with your specific property and we will confirm the transfer."
        },
        {
          q: "Do you offer private tours from Lecce?",
          a: "Yes — Baroque Puglia tour, Salento day tour, Otranto and Gallipoli coast, and wine tours in the Salento all depart from Lecce at your chosen time."
        },
      ]}
      testimonials={[
        {
          text: "Our driver from Brindisi Airport had us at our boutique hotel inside Lecce's old town in under 40 minutes — the only way to arrive in this city.",
          author: "Elena & Marco B.",
          origin: "Vienna, Austria",
        },
        {
          text: "We spent three days in Lecce using ConnectinPuglia for all our excursions — Otranto, Gallipoli, two wineries. Every driver was punctual, professional, and incredibly knowledgeable.",
          author: "Jennifer T.",
          origin: "New York, USA",
        },
      ]}
      internalLinks={[
        { label: 'Transfer from Brindisi Airport', to: '/transfer-from-brindisi-airport' },
        { label: 'Transfer from Bari Airport', to: '/transfer-from-bari-airport' },
        { label: 'Salento Day Tour', to: '/tour-salento' },
        { label: 'Transfer to Ostuni', to: '/transfer-to-ostuni' },
        { label: 'Transfer to Matera', to: '/transfer-to-matera-from-puglia' },
        { label: 'All Airport Transfers', to: '/airport-transfers' },
      ]}
    />
  )
}
