import TransferPageTemplate from '../components/TransferPageTemplate'
import { fleetVehicleFaq } from '../lib/fleet'

export default function TransferBrindisiAirport() {
  return (
    <TransferPageTemplate
      slug="transfer-from-brindisi-airport"
      title="Private Transfer from Brindisi Airport — Door to Door, Fixed Price."
      subtitle="Book Your Brindisi Airport Transfer"
      metaTitle="Private Transfer from Brindisi Airport | ConnectinPuglia"
      metaDesc="Book your private transfer from Brindisi Airport (BDS) with ConnectinPuglia. Fixed rates, meet and greet, Mercedes-Benz E-Class sedan. Direct to your masseria across Puglia. Available 24/7."
      canonical="https://connectinpuglia.com/transfer-from-brindisi-airport"
      heroImg="/images/transfers/brindisi-airport-hero.webp"
      iataCode="BDS"
      iataFull="Brindisi Papola Casale Airport"
      intro="Your driver is waiting at arrivals. Name sign, luggage assistance, real-time flight monitoring. ConnectinPuglia takes you directly to your destination across Puglia — no meters, no sharing, no surprises."
      destinations={[
        { name: 'Fasano & Borgo Egnazia', time: '30 min' },
        { name: 'Ostuni', time: '35 min' },
        { name: 'Lecce', time: '35 min' },
        { name: 'Alberobello', time: '40 min' },
        { name: 'Monopoli', time: '40 min' },
        { name: 'Bari', time: '60 min' },
        { name: 'Matera', time: '75 min' },
        { name: 'Polignano a Mare', time: '45 min' },
      ]}
      properties={[
        { name: 'Borgo Egnazia', time: '30 min' },
        { name: 'Masseria San Domenico', time: '30 min' },
        { name: 'Masseria Torre Maizza', time: '30 min' },
        { name: 'Masseria Torre Coccaro', time: '30 min' },
        { name: 'Masseria Il Melograno', time: '25 min' },
        { name: 'Le Alcove Alberobello', time: '40 min' },
        { name: 'Masseria Il Frantoio', time: '45 min' },
        { name: 'Grotta Palazzese', time: '40 min' },
      ]}
      faqs={[
        { q: 'Where does the driver wait at Brindisi Airport?', a: 'Your driver waits inside the arrivals hall holding a name sign with your name. You will see them immediately as you exit the baggage and customs area.' },
        { q: 'What is the IATA code for Brindisi Airport?', a: 'BDS — Brindisi Papola Casale Airport, located approximately 4km north of Brindisi city centre.' },
        { q: 'How far is Brindisi Airport from Fasano and the masserie?', a: 'Brindisi is the closest airport to Fasano, Ostuni, and the Itria Valley masserie. Most properties are 25–40 minutes from BDS, significantly shorter than from Bari.' },
        { q: 'What if my flight is delayed?', a: 'We monitor all flights in real time. If your flight is delayed, your driver automatically adjusts and waits at no extra charge.' },
        { q: 'Can I book a return transfer from my masseria to Brindisi Airport?', a: 'Yes — we strongly recommend booking both directions simultaneously. Your driver will collect you at your property and take you directly to departures.' },
        { q: 'Which vehicles are available from Brindisi Airport?', a: fleetVehicleFaq },
        { q: 'Do you cover Brindisi Airport to Lecce?', a: 'Yes — Lecce is approximately 35 minutes from Brindisi Airport. We offer direct transfers as well as full-day tours combining transfer and guided city visit.' },
        { q: 'How do I book a Brindisi Airport transfer?', a: 'Use the enquiry form or contact us via WhatsApp. We confirm your fixed price within 2 hours.' },
      ]}
      testimonials={[
        { text: "Arrived at Brindisi at midnight, driver was right there in arrivals — no fuss, no waiting. At our masseria in Fasano within 30 minutes. Perfect start to the holiday.", author: 'David & Fiona T.', origin: 'Dublin, Ireland' },
        { text: "Our flight from Amsterdam was delayed by an hour. The driver was still waiting and hadn't charged a penny extra. Exactly the kind of reliability you need when travelling with young children.", author: 'Anneke V.', origin: 'Amsterdam, Netherlands' },
      ]}
    />
  )
}
