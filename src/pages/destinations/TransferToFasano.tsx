import DestinationTransferPage from '../../components/DestinationTransferPage'
import { routesToFasano } from '../../lib/arrivalRoutes'

export default function TransferToFasano() {
  return (
    <DestinationTransferPage
      metaTitle="Private Transfer to Fasano & Borgo Egnazia | ConnectinPuglia"
      metaDesc="Private transfer to Fasano and Borgo Egnazia from Bari or Brindisi airport, or Bari Port. Fixed rates, meet and greet, Audi A4 sedan. Book your transfer now."
      canonical="https://connectinpuglia.com/transfer-to-fasano-borgo-egnazia"
      heroImg="/images/destinations/fasano-hero.webp"
      h1="Private Transfer to Fasano & Borgo Egnazia — Arrive in Style."
      subheadline="Your driver is waiting at arrivals or dockside. Fixed price, meet and greet, door to door from Bari or Brindisi airport — or Bari Port — directly to your masseria or resort in the Fasano area."
      routes={routesToFasano}
      aboutParagraphs={[
        "Fasano is the heart of Puglia's luxury belt — a quiet inland town surrounded by centuries-old olive groves, dry stone walls, and whitewashed masserie. This stretch of countryside between the Adriatic coast and the Valle d'Itria hills has become one of Italy's most coveted destinations for discerning travellers.",
        "The area is home to some of Puglia's most celebrated properties: Borgo Egnazia — the flagship resort that hosted the 2024 G7 summit and a favourite of international celebrities — along with Masseria San Domenico, Masseria Torre Maizza, and Masseria Torre Coccaro. The coastal hamlet of Savelletri di Fasano, just minutes away, offers direct Adriatic access.",
        "ConnectinPuglia drivers know every access road, gate, and entrance track in the Fasano area. We have completed thousands of transfers to properties here and take pride in delivering guests seamlessly from the arrivals hall to the resort front door.",
      ]}
      propertiesServed={[
        { name: 'Borgo Egnazia', to: '/transfer-to-borgo-egnazia' },
        { name: 'Masseria San Domenico', to: '/transfer-to-masseria-san-domenico' },
        { name: 'Masseria Torre Maizza', to: '/transfer-to-masseria-torre-maizza' },
        { name: 'Masseria Torre Coccaro', to: '/transfer-to-masseria-torre-coccaro' },
        { name: 'Canne Bianche Lifestyle Hotel', to: '' },
        { name: 'Masseria Calderisi', to: '' },
        { name: 'Masseria Cimino', to: '' },
        { name: 'Masseria Don Luigi', to: '' },
      ]}
      faqs={[
        {
          q: "What is the best way to get from Bari Airport to Borgo Egnazia?",
          a: "Book a private transfer with ConnectinPuglia from Bari Airport (BRI). Your driver meets you in the arrivals hall with a name sign, assists with luggage, and takes you directly to the Borgo Egnazia entrance — approximately 60 minutes via the SS16 Adriatica, fixed price."
        },
        {
          q: "What is the best way to get from Brindisi Airport to Fasano?",
          a: "Brindisi Airport (BDS) is the recommended arrival point for Fasano — just 35 minutes via SS379. Your ConnectinPuglia driver meets you in arrivals and delivers you directly to your masseria or resort."
        },
        {
          q: "How much does a transfer from Bari Airport to Fasano cost?",
          a: "All our prices are fixed and agreed at the time of booking — no surge pricing, no hidden extras. Contact us via the enquiry form or WhatsApp for an immediate quote based on your vehicle choice and destination."
        },
        {
          q: "Is Bari or Brindisi airport closer to Fasano?",
          a: "Brindisi Airport (BDS) is significantly closer — approximately 40km and 35 minutes. Bari Airport (BRI) is approximately 75km and 60 minutes via the SS16 Adriatica. If you have a choice of airports, we recommend BDS for Fasano and the surrounding masserie."
        },
        {
          q: "Can I get a transfer from Bari Port to Fasano?",
          a: "Yes — if you arrive by ferry at Bari Port from Greece or Albania, your ConnectinPuglia driver meets you dockside and takes you directly to Fasano in approximately 55 minutes via the SS16 Adriatica. Fixed price confirmed at booking."
        },
        {
          q: "Can ConnectinPuglia take me directly to my resort entrance?",
          a: "Yes — your driver delivers you to the exact entrance of your resort or masseria, including gated properties with private roads. We know every property in the Fasano area and all their access details."
        },
        {
          q: "Can I book a return transfer from Fasano to the airport?",
          a: "Yes — we offer transfers in both directions. We strongly recommend booking both arrival and departure transfers simultaneously to guarantee availability. Your driver will collect you from your property entrance at the agreed time."
        },
        {
          q: "Are there other masserie in the Fasano area beyond the major resorts?",
          a: "Yes — the Fasano area is home to dozens of boutique masserie including Masseria Calderisi, Masseria Cimino, Masseria Don Luigi, and Canne Bianche on the coast. ConnectinPuglia serves all of them."
        },
        {
          q: "Do you offer private tours from Fasano and Borgo Egnazia?",
          a: "Yes — we offer a full range of private day tours departing from Fasano and all local masserie: Valle d'Itria and trulli, wine tours, Lecce and Salento, Matera, and food and olive oil experiences."
        },
      ]}
      testimonials={[
        {
          text: "We arrived at Brindisi and our ConnectinPuglia driver had us at Borgo Egnazia in under 40 minutes. The perfect start to a perfect stay.",
          author: "James & Lucy F.",
          origin: "Dublin, Ireland",
        },
        {
          text: "ConnectinPuglia is the only transfer service I recommend for Masseria San Domenico or Torre Maizza. Reliable, professional, and they know every entrance road perfectly.",
          author: "Sophia R.",
          origin: "Zurich, Switzerland",
        },
      ]}
      internalLinks={[
        { label: 'Transfer from Bari Airport', to: '/transfer-from-bari-airport' },
        { label: 'Transfer from Brindisi Airport', to: '/transfer-from-brindisi-airport' },
        { label: 'Transfer from Bari Port', to: '/transfer-from-bari-port' },
        { label: 'Transfer to Borgo Egnazia', to: '/transfer-to-borgo-egnazia' },
        { label: 'Transfer to Ostuni', to: '/transfer-to-ostuni' },
        { label: "Private Tours from Fasano", to: '/private-tours-puglia' },
        { label: 'All Airport Transfers', to: '/airport-transfers' },
      ]}
    />
  )
}
