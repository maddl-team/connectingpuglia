import DestinationTransferPage from '../../components/DestinationTransferPage'
import { routesToOstuni } from '../../lib/arrivalRoutes'

export default function TransferToOstuni() {
  return (
    <DestinationTransferPage
      metaTitle="Private Transfer to Ostuni from Airport | ConnectinPuglia"
      metaDesc="Private transfer to Ostuni from Bari or Brindisi airport, or Bari Port. Fixed rates, meet and greet, Mercedes-Benz E-Class sedan. Direct to Ostuni and surrounding masserie. Book now."
      canonical="https://connectinpuglia.com/transfer-to-ostuni"
      heroImg="/images/destinations/ostuni-hero.webp"
      h1="Private Transfer to Ostuni — The White City Calls."
      subheadline="Your driver meets you at arrivals or dockside and takes you directly to Ostuni — no meters, no navigation stress, fixed price confirmed before you travel."
      routes={routesToOstuni}
      aboutParagraphs={[
        "Ostuni is one of Puglia's most striking hilltop towns — a labyrinth of brilliant whitewashed walls, vaulted alleyways, and a magnificent 15th-century Gothic cathedral perched at its summit, visible from miles across the Adriatic plain. The town is known as La Città Bianca, the White City, and it earns that name entirely.",
        "Beyond the centro storico, the Ostuni area is home to some of Puglia's finest rural accommodation — including Masseria Il Frantoio (a Relais & Châteaux property), Torre Del Diamante, Le Carrube, Cervarolo, Dagilupi, and the Rosa Marina coastal resort. The coastline below Ostuni offers some of the cleanest beach water in southern Italy.",
        "ConnectinPuglia drivers know every access road to every property in the Ostuni area. The historic centre is a ZTL zone — private hire drivers hold the permits to deliver guests directly to hotel entrances. Rental cars cannot access the centre without risking automatic fines.",
      ]}
      propertiesServed={[
        { name: 'Masseria Il Frantoio (Relais & Châteaux)', to: '/transfer-to-masseria-il-frantoio' },
        { name: 'Torre Del Diamante', to: '' },
        { name: 'Le Carrube', to: '' },
        { name: 'Cervarolo', to: '' },
        { name: 'Dagilupi', to: '' },
        { name: 'Rosa Marina Resort', to: '' },
        { name: 'La Sommità Relais', to: '' },
        { name: 'Masseria Montenapoleone', to: '' },
      ]}
      faqs={[
        {
          q: "How far is Ostuni from Brindisi Airport?",
          a: "Ostuni is approximately 30km from Brindisi Airport (BDS) — about 25–30 minutes by car. Brindisi is the recommended airport for Ostuni and all surrounding masserie."
        },
        {
          q: "How far is Ostuni from Bari Airport?",
          a: "Ostuni is approximately 110km from Bari Airport (BRI) — about 80–90 minutes via the SS16 Adriatica, depending on traffic. If you have a choice of airports, Brindisi is significantly more convenient for Ostuni."
        },
        {
          q: "Can I get a transfer from Bari Port to Ostuni?",
          a: "Yes — arriving by ferry at Bari Port, your driver meets you dockside and takes you to Ostuni in approximately 65 minutes via the SS16 Adriatica. Fixed price confirmed at booking."
        },
        {
          q: "Can cars enter Ostuni old town?",
          a: "The historic centre of Ostuni is a ZTL (Zona a Traffico Limitato) — restricted traffic. Private hire drivers hold the necessary permits. Rental car drivers risk automatic fines of €100–300 per entry, often arriving weeks after returning home."
        },
        {
          q: "How much does a transfer from Brindisi Airport to Ostuni cost?",
          a: "All prices are fixed and agreed at booking — no meters, no surprises. Contact us via the form or WhatsApp for an immediate quote based on your vehicle and pick-up/drop-off points."
        },
        {
          q: "Do you serve the masserie around Ostuni, not just the town?",
          a: "Yes — we serve all masserie and rural properties in the Ostuni area, including Masseria Il Frantoio, Torre Del Diamante, Le Carrube, Cervarolo, Dagilupi, and the coast at Rosa Marina."
        },
        {
          q: "Can I book a return transfer from Ostuni to the airport?",
          a: "Yes — both directions available. We strongly recommend booking arrival and departure simultaneously to guarantee availability."
        },
        {
          q: "Can you take me from Ostuni to Alberobello or Lecce?",
          a: "Yes — inter-destination transfers are available. Ostuni to Alberobello is approximately 40 minutes; Ostuni to Lecce is approximately 60 minutes."
        },
        {
          q: "Do you offer private day tours from Ostuni?",
          a: "Yes — we offer private tours from Ostuni to Alberobello and the Valle d'Itria, Lecce and Salento, Matera, wine estates, and food producers."
        },
      ]}
      testimonials={[
        {
          text: "Arrived at Brindisi at 11pm — our driver was already waiting. 30 minutes later we were at our masseria near Ostuni with a glass of wine in hand. Absolutely seamless.",
          author: "Francesca & Marco T.",
          origin: "London, UK",
        },
        {
          text: "The driver took us straight to our hotel entrance inside the old town — something we couldn't have done with a rental car. Professional, punctual, perfect vehicle.",
          author: "Klaus & Helga M.",
          origin: "Munich, Germany",
        },
      ]}
      internalLinks={[
        { label: 'Transfer from Bari Airport', to: '/transfer-from-bari-airport' },
        { label: 'Transfer from Brindisi Airport', to: '/transfer-from-brindisi-airport' },
        { label: 'Transfer from Bari Port', to: '/transfer-from-bari-port' },
        { label: 'Transfer to Fasano & Borgo Egnazia', to: '/transfer-to-fasano-borgo-egnazia' },
        { label: 'Transfer to Lecce', to: '/transfer-to-lecce' },
        { label: 'Masseria Il Frantoio Transfer', to: '/transfer-to-masseria-il-frantoio' },
        { label: 'All Airport Transfers', to: '/airport-transfers' },
      ]}
    />
  )
}
