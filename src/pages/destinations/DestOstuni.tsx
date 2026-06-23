import TransferPageTemplate from '../../components/TransferPageTemplate'

export default function DestOstuni() {
  return (
    <TransferPageTemplate
      slug="ostuni"
      title="Private Transfer to Ostuni — The White City, Fixed Price."
      subtitle="Book Your Transfer to Ostuni"
      metaTitle="Private Transfer to Ostuni | Connect in Puglia"
      metaDesc="Private transfer to Ostuni from Bari or Brindisi airports. Fixed price, professional driver, direct to your hotel or masseria. ConnectinPuglia."
      canonical="https://connectinpuglia.com/ostuni"
      heroImg="/images/destinations/ostuni-hero.png"
      intro="Ostuni — the White City — sits dramatically on a hilltop above miles of olive groves and the Adriatic. Your driver meets you at the airport and delivers you directly to your hotel or masseria, with no ZTL worries."
      destinations={[
        { name: 'From Bari Airport (BRI)', time: '65 min' },
        { name: 'From Brindisi Airport (BDS)', time: '35 min' },
        { name: 'From Bari Train Station', time: '70 min' },
        { name: 'From Fasano', time: '20 min' },
        { name: 'From Lecce', time: '60 min' },
        { name: 'From Alberobello', time: '40 min' },
      ]}
      properties={[
        { name: 'La Sommità Relais', time: '65 min from BRI' },
        { name: 'Masseria Il Frantoio', time: '70 min from BRI' },
        { name: 'Masseria Montenapoleone', time: '70 min from BRI' },
        { name: 'Masseria Il Melograno', time: '50 min from BRI' },
        { name: 'Borgo Egnazia', time: '60 min from BRI' },
      ]}
      faqs={[
        { q: 'How far is Ostuni from Bari Airport?', a: 'Ostuni is approximately 65 minutes from Bari Airport (BRI) and 35 minutes from Brindisi Airport (BDS).' },
        { q: 'Can cars enter Ostuni old town?', a: 'The historic centre (centro storico) of Ostuni is a ZTL zone. Private hire drivers hold the necessary permits. Rental car drivers risk automatic fines.' },
        { q: 'Which airport is best for Ostuni?', a: 'Brindisi Airport (BDS) is closest — just 35 minutes. Bari is also convenient at 65 minutes.' },
        { q: 'How do I get from Ostuni to the beach?', a: 'The coast near Ostuni (Rosa Marina, Torre Guaceto) is 20–25 minutes by car. Book an hourly chauffeur for flexible beach access.' },
        { q: 'Can you take me from Ostuni to Alberobello?', a: 'Yes — inter-destination transfers are available. Ostuni to Alberobello takes approximately 40 minutes.' },
        { q: 'Do you offer Ostuni day tours?', a: 'Yes — we offer private guided tours combining Ostuni with nearby Fasano, Monopoli, or Alberobello.' },
      ]}
      testimonials={[
        { text: 'Arrived at Brindisi late at night — driver was already waiting. 35 minutes later we were at our masseria near Ostuni. Absolutely flawless.', author: 'Marco & Lucia B.', origin: 'Milan, Italy' },
      ]}
    />
  )
}
