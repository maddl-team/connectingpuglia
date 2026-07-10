import TransferPageTemplate from '../components/TransferPageTemplate'
import { fleetVehicleFaq } from '../lib/fleet'

export default function TransferBrindisiPort() {
  return (
    <TransferPageTemplate
      slug="transfer-from-brindisi-port"
      title="Private Transfer from Brindisi Port — Direct to Your Destination."
      subtitle="Book Your Brindisi Port Transfer"
      metaTitle="Private Transfer from Brindisi Port | ConnectinPuglia"
      metaDesc="Private transfer from Brindisi Port to masserie and hotels across Puglia. Fixed price, dockside meet & greet, professional driver. ConnectinPuglia."
      canonical="https://connectinpuglia.com/transfer-from-brindisi-port"
      heroImg="/images/transfers/brindisi-port-hero.webp"
      intro="Arriving by ferry from Greece, Albania, or Croatia? Your driver meets you dockside at the port and takes you directly to your destination — no meters, no haggling, fixed price confirmed in advance."
      destinations={[
        { name: 'Fasano & Borgo Egnazia', time: '35 min' },
        { name: 'Ostuni', time: '40 min' },
        { name: 'Lecce', time: '40 min' },
        { name: 'Alberobello', time: '45 min' },
        { name: 'Monopoli', time: '45 min' },
        { name: 'Bari', time: '65 min' },
        { name: 'Matera', time: '80 min' },
        { name: 'Polignano a Mare', time: '50 min' },
      ]}
      properties={[
        { name: 'Borgo Egnazia', time: '35 min' },
        { name: 'Masseria San Domenico', time: '35 min' },
        { name: 'Masseria Torre Maizza', time: '35 min' },
        { name: 'Masseria Il Melograno', time: '30 min' },
        { name: 'Masseria Torre Coccaro', time: '35 min' },
        { name: 'Le Alcove Alberobello', time: '45 min' },
        { name: 'Masseria Il Frantoio', time: '50 min' },
        { name: 'Grotta Palazzese', time: '50 min' },
      ]}
      faqs={[
        { q: 'Where does the driver meet me at Brindisi Port?', a: 'Your driver meets you at the ferry terminal exit, holding a name sign. We will confirm the exact meeting point based on your ferry and terminal when you book.' },
        { q: 'Which ferry routes arrive at Brindisi Port?', a: 'Brindisi receives ferries from Corfu, Igoumenitsa, Patras, Vlora, Durrës, and Bar — operated by Grimaldi Lines, Jadrolinija, and others.' },
        { q: 'Can you wait if my ferry is delayed?', a: 'Yes — we monitor all ferry schedules and your driver adjusts automatically. No extra charge for delays.' },
        { q: 'How long does it take from Brindisi Port to a masseria?', a: 'Most masserie in the Fasano and Ostuni area are 30–40 minutes from Brindisi Port. It is the most convenient port arrival point for the Itria Valley.' },
        { q: 'Can I book a return transfer to Brindisi Port?', a: 'Yes — we offer transfers in both directions. We recommend booking both simultaneously.' },
        { q: 'Which vehicles are available?', a: fleetVehicleFaq },
        { q: 'Can you help with luggage after a long ferry crossing?', a: 'Absolutely — luggage assistance is always included. Your driver will help you from the moment you disembark.' },
        { q: 'How do I book?', a: 'Use the enquiry form or WhatsApp. We confirm your fixed price within 2 hours.' },
      ]}
      testimonials={[
        { text: "After a 9-hour overnight ferry from Corfu, the last thing we wanted was to navigate taxis and buses. ConnectinPuglia was right there at the port — exactly as promised.", author: 'Helen & James W.', origin: 'Edinburgh, UK' },
      ]}
    />
  )
}
