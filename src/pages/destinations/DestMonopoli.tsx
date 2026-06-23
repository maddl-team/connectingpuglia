import TransferPageTemplate from '../../components/TransferPageTemplate'

export default function DestMonopoli() {
  return (
    <TransferPageTemplate
      slug="monopoli"
      title="Private Transfer to Monopoli — Fixed Price."
      subtitle="Book Your Transfer to Monopoli"
      metaTitle="Private Transfer to Monopoli | Connect in Puglia"
      metaDesc="Private transfer to Monopoli from Bari or Brindisi airports. Fixed price, professional driver, door to door. ConnectinPuglia."
      canonical="https://connectinpuglia.com/monopoli"
      heroImg="/images/destinations/monopoli-hero.png"
      intro="Monopoli is one of Puglia's most beautiful coastal towns — a working fishing harbour, a historic castle, and some of the clearest water on the Adriatic. Your private driver takes you directly to your hotel, no parking stress."
      destinations={[
        { name: 'From Bari Airport (BRI)', time: '40 min' },
        { name: 'From Brindisi Airport (BDS)', time: '40 min' },
        { name: 'From Bari Train Station', time: '35 min' },
        { name: 'From Polignano a Mare', time: '15 min' },
        { name: 'From Fasano', time: '25 min' },
        { name: 'From Ostuni', time: '40 min' },
      ]}
      properties={[
        { name: 'Masseria Il Melograno', time: '40 min from BRI' },
        { name: 'Don Ferrante Dimora di Charme', time: '40 min from BRI' },
        { name: 'Borgo Egnazia', time: '60 min from BRI' },
        { name: 'Masseria Torre Coccaro', time: '60 min from BRI' },
      ]}
      faqs={[
        { q: 'How far is Monopoli from Bari Airport?', a: 'Monopoli is approximately 40 minutes from both Bari Airport (BRI) and Brindisi Airport (BDS) — a well-connected destination from either arrival point.' },
        { q: 'Is parking hard in Monopoli?', a: "Monopoli's historic centre and seafront can be very congested in summer. A private transfer eliminates all parking challenges." },
        { q: 'Can I get a day trip from Monopoli to Alberobello?', a: 'Yes — Alberobello is approximately 30 minutes inland. Book an hourly chauffeur or a private Valle d\'Itria day tour.' },
        { q: 'Do you cover Monopoli to Polignano?', a: 'Yes — Monopoli to Polignano is approximately 15 minutes. We offer inter-destination transfers at fixed prices.' },
        { q: 'Which vehicles are available for Monopoli transfers?', a: 'Mercedes-Benz E-Class (3 pax), V-Class (7 pax), and Vito Minibus (8 pax).' },
        { q: 'Can I book a return transfer from Monopoli to the airport?', a: 'Yes — both directions available. Provide your return date and time when booking.' },
      ]}
      testimonials={[]}
    />
  )
}
