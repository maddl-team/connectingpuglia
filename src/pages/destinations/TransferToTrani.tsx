import DestinationTransferPage from '../../components/DestinationTransferPage'
import { routesToTrani } from '../../lib/arrivalRoutes'

export default function TransferToTrani() {
  return (
    <DestinationTransferPage
      metaTitle="Private Transfer to Trani from Airport | ConnectinPuglia"
      metaDesc="Private transfer to Trani from Bari Airport or Bari Port. Fixed price, professional driver, door to door. ConnectinPuglia — Puglia's luxury transfer specialist."
      canonical="https://connectinpuglia.com/transfer-to-trani"
      heroImg="/images/destinations/trani-hero.webp"
      h1="Private Transfer to Trani — The Cathedral on the Sea."
      subheadline="Your driver meets you at Bari Airport or Bari Port and takes you directly to Trani — one of Puglia's most elegant coastal cities, known for its extraordinary Norman cathedral standing on the edge of the Adriatic."
      routes={routesToTrani}
      aboutParagraphs={[
        "Trani is one of the least-visited and most rewarding cities in all of Puglia. Its Cathedral of San Nicola Pellegrino — a Norman masterpiece of white limestone built directly on a promontory above the Adriatic — is considered one of the most beautiful buildings in southern Italy. The Romanesque campanile and the setting against the sea make it genuinely unforgettable.",
        "Beyond the cathedral, Trani's historic centre offers a working harbour, ancient Jewish quarter, Swabian castle, and a sophisticated restaurant and wine bar scene built on the local Bombino Bianco wine. The city is notably less crowded than Polignano or Alberobello, which is part of its appeal.",
        "At just 45 kilometres north of Bari Airport, Trani is an easy and underrated destination for those seeking authentic Puglia without the tourist crowds. It makes an excellent starting or ending point for a Puglia itinerary.",
      ]}
      propertiesServed={[
        { name: 'San Paolo al Convento', to: '' },
        { name: 'Palazzo Filisio', to: '' },
        { name: 'MD Hotel Trani', to: '' },
        { name: 'Charme Hotel', to: '' },
        { name: 'Lu Mbroia Hotel', to: '' },
        { name: 'Masseria Borgo dei Trulli', to: '' },
      ]}
      faqs={[
        {
          q: "How far is Trani from Bari Airport?",
          a: "Trani is approximately 45km north of Bari Airport (BRI) — about 35–40 minutes on the A14 motorway."
        },
        {
          q: "Why visit Trani?",
          a: "Trani's Cathedral of San Nicola Pellegrino, standing directly on the sea, is widely considered one of the finest Norman buildings in Italy. The city also has an atmospheric harbour, a Jewish quarter, a Swabian castle, and excellent restaurants."
        },
        {
          q: "Can I combine Trani with Castel del Monte in a day?",
          a: "Yes — Castel del Monte, the octagonal Hohenstaufen fortress and UNESCO World Heritage Site, is approximately 30 minutes from Trani. We can combine both in a half-day excursion."
        },
        {
          q: "Can I combine Trani with Barletta?",
          a: "Yes — Barletta, home to the famous Bronze Colossus and one of Puglia's best-preserved Swabian castles, is just 10 minutes north of Trani. Both cities can easily be combined in a half day."
        },
        {
          q: "Can I book a return transfer from Trani to Bari Airport?",
          a: "Yes — both directions available. Fixed price confirmed in advance."
        },
        {
          q: "Is parking difficult in Trani?",
          a: "The harbour and historic centre can be congested. A private transfer delivers you directly to your hotel, eliminating parking entirely."
        },
        {
          q: "How do I get from Trani to Polignano a Mare?",
          a: "Trani to Polignano a Mare is approximately 55 minutes by private transfer. We offer inter-destination transfers at fixed prices."
        },
        {
          q: "Do you offer day tours from Trani?",
          a: "Yes — day trips to Castel del Monte, Barletta, Andria, and the Murge plateau all depart from Trani. We also offer winery visits in the Andria and Canosa area."
        },
      ]}
      testimonials={[
        {
          text: "We started our Puglia trip in Trani — a ConnectinPuglia driver picked us up from Bari Airport and we were at our harbour-view hotel in 40 minutes. What a perfect introduction to the region.",
          author: "Richard & Caroline W.",
          origin: "Edinburgh, UK",
        },
        {
          text: "Trani was the great discovery of our trip — and getting there from Bari Airport couldn't have been simpler. Clean car, friendly driver, zero fuss.",
          author: "Simone L.",
          origin: "Paris, France",
        },
      ]}
      internalLinks={[
        { label: 'Transfer from Bari Airport', to: '/transfer-from-bari-airport' },
        { label: 'Transfer from Bari Port', to: '/transfer-from-bari-port' },
        { label: 'Transfer to Polignano a Mare', to: '/transfer-to-polignano-a-mare' },
        { label: 'Transfer to Fasano', to: '/transfer-to-fasano-borgo-egnazia' },
        { label: 'Private Tours in Puglia', to: '/private-tours-puglia' },
        { label: 'Our Fleet', to: '/our-fleet' },
        { label: 'All Airport Transfers', to: '/airport-transfers' },
      ]}
    />
  )
}
