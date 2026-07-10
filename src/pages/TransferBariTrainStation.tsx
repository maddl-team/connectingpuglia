import TransferPageTemplate from '../components/TransferPageTemplate'
import { fleetVehicleFaq } from '../lib/fleet'

export default function TransferBariTrainStation() {
  return (
    <TransferPageTemplate
      slug="transfer-from-bari-train-station"
      title="Private Transfer from Bari Train Station — Direct to Your Destination."
      subtitle="Book Your Bari Train Station Transfer"
      metaTitle="Private Transfer from Bari Train Station | ConnectinPuglia"
      metaDesc="Private transfer from Bari Centrale train station to masserie and hotels across Puglia. Fixed price, professional driver, door-to-door service. ConnectinPuglia."
      canonical="https://connectinpuglia.com/transfer-from-bari-train-station"
      heroImg="/images/transfers/bari-train-hero.webp"
      intro="Arriving by Italo or Trenitalia high-speed train? Your driver meets you outside Bari Centrale station and takes you directly to your destination across Puglia — no waiting, no navigation, fixed price."
      destinations={[
        { name: 'Fasano & Borgo Egnazia', time: '60 min' },
        { name: 'Polignano a Mare', time: '30 min' },
        { name: 'Monopoli', time: '35 min' },
        { name: 'Alberobello', time: '55 min' },
        { name: 'Ostuni', time: '65 min' },
        { name: 'Lecce', time: '90 min' },
        { name: 'Matera', time: '85 min' },
        { name: 'Trani', time: '35 min' },
      ]}
      properties={[
        { name: 'Borgo Egnazia', time: '60 min' },
        { name: 'Masseria San Domenico', time: '60 min' },
        { name: 'Masseria Torre Maizza', time: '60 min' },
        { name: 'Masseria Il Melograno', time: '50 min' },
        { name: 'Masseria Torre Coccaro', time: '60 min' },
        { name: 'Grotta Palazzese', time: '30 min' },
        { name: 'Le Alcove Alberobello', time: '55 min' },
        { name: 'Masseria Il Frantoio', time: '80 min' },
      ]}
      faqs={[
        { q: 'Where does the driver meet me at Bari train station?', a: 'Your driver meets you at the main exit of Bari Centrale station, holding a name sign. We will confirm the exact meeting point when you book.' },
        { q: 'Which trains arrive at Bari Centrale?', a: 'Bari Centrale is served by Italo and Trenitalia high-speed services from Rome, Naples, and Milan, as well as regional services across Puglia.' },
        { q: 'How long does it take from Bari station to a masseria?', a: 'Most masserie in the Fasano area are 55–65 minutes from Bari Centrale. Polignano a Mare and Monopoli are 30–35 minutes.' },
        { q: 'Can you wait if my train is delayed?', a: 'Yes — we monitor train arrivals and your driver adjusts automatically. No extra charge for train delays.' },
        { q: 'Can I book a return transfer to Bari station?', a: 'Yes — we offer both directions. Book simultaneously for the best availability.' },
        { q: 'Which vehicles are available?', a: fleetVehicleFaq },
        { q: 'Can you take me from Bari station to Matera?', a: 'Yes — Matera is approximately 85 minutes from Bari Centrale. We also offer full-day tours combining the transfer with a Matera guided visit.' },
        { q: 'How do I book?', a: 'Use the enquiry form or WhatsApp. We confirm your fixed price within 2 hours.' },
      ]}
      testimonials={[
        { text: "Took the Italo from Rome and had a ConnectinPuglia driver waiting outside the station. Couldn't have been easier — straight to our masseria without a single stress.", author: 'Caroline M.', origin: 'London, UK' },
      ]}
    />
  )
}
