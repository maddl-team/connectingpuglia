import DestinationTransferPage from '../../components/DestinationTransferPage'
import { routesToAlberobello } from '../../lib/arrivalRoutes'

export default function TransferToAlberobello() {
  return (
    <DestinationTransferPage
      metaTitle="Private Transfer to Alberobello & Valle d'Itria | ConnectinPuglia"
      metaDesc="Private transfer to Alberobello and the Valle d'Itria from Bari or Brindisi airport, or Bari Port. Fixed price, door to door, Mercedes-Benz E-Class sedan. ConnectinPuglia."
      canonical="https://connectinpuglia.com/transfer-to-alberobello-valle-ditria"
      heroImg="/images/destinations/alberobello-hero.webp"
      h1="Private Transfer to Alberobello & Valle d'Itria — Into the Heart of Puglia."
      subheadline="Your driver meets you at the airport or Bari Port and delivers you directly to your trullo, masseria, or hotel — no GPS confusion in the UNESCO trulli district, no ZTL worries."
      routes={routesToAlberobello}
      aboutParagraphs={[
        "Alberobello is one of the most extraordinary places in Italy — a UNESCO World Heritage Site whose trulli district, Rione Monti, contains over 1,500 of the region's iconic conical stone dwellings. No photograph fully prepares you for the reality of arriving among them.",
        "The Valle d'Itria extends around Alberobello in a landscape of vineyards, olive groves, and storybook hilltop villages: Locorotondo with its circular layout and white-painted houses, Cisternino with its celebrated butcher-restaurants, and Martina Franca with its elegant Baroque palazzi. Together they form one of Puglia's most complete and rewarding areas to explore.",
        "The Alberobello centro storico is a ZTL zone with extremely limited vehicle access. Your ConnectinPuglia driver knows the permitted drop-off points for every hotel and trullo accommodation and will deliver you directly — a service that a rental car simply cannot provide.",
      ]}
      propertiesServed={[
        { name: 'Le Alcove Alberobello', to: '/transfer-to-le-alcove-alberobello' },
        { name: 'Trulli Holiday', to: '' },
        { name: 'Il Poeta Contadino', to: '' },
        { name: 'Masseria Il Frantoio', to: '/transfer-to-masseria-il-frantoio' },
        { name: 'Borgo Egnazia', to: '/transfer-to-borgo-egnazia' },
        { name: 'Masseria Torre Coccaro', to: '/transfer-to-masseria-torre-coccaro' },
      ]}
      faqs={[
        {
          q: "How do I get from Bari Airport to Alberobello?",
          a: "A private transfer with ConnectinPuglia takes approximately 55 minutes from Bari Airport (BRI). Your driver meets you in the arrivals hall and delivers you directly to your trullo or hotel entrance."
        },
        {
          q: "Which airport is closer to Alberobello?",
          a: "Brindisi Airport (BDS) is marginally closer — approximately 55km and 45 minutes. Bari Airport (BRI) is approximately 65km and 55 minutes. Both are served well by ConnectinPuglia."
        },
        {
          q: "Is Alberobello a ZTL zone?",
          a: "Yes — the trulli district (Rione Monti and Rione Aia Piccola) is a restricted traffic area. Private hire drivers hold the permits. Rental car drivers face automatic fines of €100–300."
        },
        {
          q: "Can I visit the other Valle d'Itria villages on the same day?",
          a: "Yes — if you book an hourly chauffeur for the day, we can take you through Locorotondo, Cisternino, and Martina Franca in a single itinerary. Alternatively, book our Valle d'Itria private day tour."
        },
        {
          q: "How much does a transfer from Bari Airport to Alberobello cost?",
          a: "All prices are fixed and agreed at booking. Contact us via the form or WhatsApp for an immediate quote."
        },
        {
          q: "Can I book a return transfer from Alberobello to the airport?",
          a: "Yes — both directions available. We recommend booking both arrival and departure simultaneously."
        },
        {
          q: "Are there masserie near Alberobello?",
          a: "Yes — the countryside around Alberobello contains numerous boutique masserie. Le Alcove is within the trulli district itself; Masseria Il Frantoio is approximately 25 minutes towards Ostuni."
        },
        {
          q: "Do you offer day tours from Alberobello?",
          a: "Yes — our Valle d'Itria private day tour covers Alberobello, Locorotondo, and Cisternino. We also offer Matera day trips and Lecce & Salento tours departing from Alberobello."
        },
      ]}
      testimonials={[
        {
          text: "Our driver dropped us right at the entrance to the trulli district and was waiting exactly there two hours later to take us to our masseria. Couldn't have been easier.",
          author: "Sophie & Thomas H.",
          origin: "Paris, France",
        },
        {
          text: "The Valle d'Itria is the most beautiful part of Italy I've ever seen, and arriving by private transfer made the whole experience magical from the first minute.",
          author: "Rebecca L.",
          origin: "Sydney, Australia",
        },
      ]}
      internalLinks={[
        { label: 'Transfer from Bari Airport', to: '/transfer-from-bari-airport' },
        { label: 'Transfer from Brindisi Airport', to: '/transfer-from-brindisi-airport' },
        { label: 'Transfer from Bari Port', to: '/transfer-from-bari-port' },
        { label: "Valle d'Itria Day Tour", to: '/tour-valle-ditria' },
        { label: 'Le Alcove Alberobello Transfer', to: '/transfer-to-le-alcove-alberobello' },
        { label: 'Transfer to Fasano', to: '/transfer-to-fasano-borgo-egnazia' },
        { label: 'All Airport Transfers', to: '/airport-transfers' },
      ]}
    />
  )
}
