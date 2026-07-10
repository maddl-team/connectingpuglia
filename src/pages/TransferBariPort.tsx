import TransferPageTemplate from '../components/TransferPageTemplate'
import { fleetVehicleFaq } from '../lib/fleet'

export default function TransferBariPort() {
  return (
    <TransferPageTemplate
      slug="transfer-from-bari-port"
      title="Private Transfer from Bari Port — Direct to Your Destination."
      subtitle="Book Your Bari Port Transfer"
      metaTitle="Private Transfer from Bari Port | ConnectinPuglia"
      metaDesc="Private transfer from Bari Port to masserie and hotels across Puglia. Fixed price, dockside meet & greet, professional driver. ConnectinPuglia."
      canonical="https://connectinpuglia.com/transfer-from-bari-port"
      heroImg="/images/transfers/bari-port-hero.webp"
      intro="Arriving by ferry from Greece, Albania, or Croatia? Your driver meets you dockside at Bari Port and takes you directly to your destination — no meters, no haggling, fixed price confirmed in advance."
      destinations={[
        { name: 'Polignano a Mare', time: '30 min' },
        { name: 'Monopoli', time: '35 min' },
        { name: 'Fasano & Borgo Egnazia', time: '55 min' },
        { name: 'Alberobello', time: '55 min' },
        { name: 'Trani', time: '40 min' },
        { name: 'Ostuni', time: '65 min' },
        { name: 'Matera', time: '80 min' },
        { name: 'Lecce', time: '90 min' },
      ]}
      properties={[
        { name: 'Grotta Palazzese', time: '30 min' },
        { name: 'Masseria Il Melograno', time: '50 min' },
        { name: 'Borgo Egnazia', time: '55 min' },
        { name: 'Masseria San Domenico', time: '55 min' },
        { name: 'Masseria Torre Maizza', time: '55 min' },
        { name: 'Masseria Torre Coccaro', time: '55 min' },
        { name: 'Le Alcove Alberobello', time: '55 min' },
        { name: 'Masseria Il Frantoio', time: '75 min' },
      ]}
      faqs={[
        { q: 'Where does the driver meet me at Bari Port?', a: 'Your driver meets you at the ferry terminal exit, holding a name sign. We will confirm the exact meeting point based on your ferry and terminal when you book.' },
        { q: 'Which ferry routes arrive at Bari Port?', a: 'Bari receives ferries from Patras, Igoumenitsa, Corfu, and Durrës — operated by Grimaldi Lines, Ventouris Ferries, Adria Ferries, and others.' },
        { q: 'Can you wait if my ferry is delayed?', a: 'Yes — we monitor all ferry schedules and your driver adjusts automatically. No extra charge for delays.' },
        { q: 'How long does it take from Bari Port to a masseria?', a: 'Most masserie in the Fasano and Ostuni area are 55–65 minutes from Bari Port. Polignano a Mare and Monopoli are 30–35 minutes.' },
        { q: 'Can I book a return transfer to Bari Port?', a: 'Yes — we offer transfers in both directions. We recommend booking both simultaneously.' },
        { q: 'Which vehicles are available?', a: fleetVehicleFaq },
        { q: 'Can you help with luggage after a long ferry crossing?', a: 'Absolutely — luggage assistance is always included. Your driver will help you from the moment you disembark.' },
        { q: 'How do I book?', a: 'Use the enquiry form or WhatsApp. We confirm your fixed price within 2 hours.' },
      ]}
      testimonials={[
        { text: "After an overnight ferry from Igoumenitsa, we were exhausted. ConnectinPuglia was waiting at Bari Port with a name sign — straight to our masseria, no stress at all.", author: 'Thomas & Sarah K.', origin: 'Munich, Germany' },
      ]}
    />
  )
}
