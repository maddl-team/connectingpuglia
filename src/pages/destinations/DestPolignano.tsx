import TransferPageTemplate from '../../components/TransferPageTemplate'

export default function DestPolignano() {
  return (
    <TransferPageTemplate
      slug="polignano-a-mare"
      title="Private Transfer to Polignano a Mare — Fixed Price."
      subtitle="Book Your Transfer to Polignano a Mare"
      metaTitle="Private Transfer to Polignano a Mare | Connect in Puglia"
      metaDesc="Private transfer to Polignano a Mare from Bari or Brindisi airports. Fixed price, professional driver, door to door. ConnectinPuglia."
      canonical="https://connectinpuglia.com/polignano-a-mare"
      heroImg="/images/destinations/polignano-hero.png"
      intro="Polignano a Mare — perched dramatically above the Adriatic, world-famous for its cliffside restaurants and sea caves. Your private driver delivers you directly to your hotel or villa, no parking battles required."
      destinations={[
        { name: 'From Bari Airport (BRI)', time: '35 min' },
        { name: 'From Brindisi Airport (BDS)', time: '45 min' },
        { name: 'From Bari Train Station', time: '30 min' },
        { name: 'From Monopoli', time: '15 min' },
        { name: 'From Fasano', time: '30 min' },
        { name: 'From Bari City', time: '35 min' },
      ]}
      properties={[
        { name: 'Grotta Palazzese Hotel', time: '35 min from BRI' },
        { name: 'Covo dei Saraceni', time: '35 min from BRI' },
        { name: 'Masseria Il Melograno', time: '45 min from BRI' },
        { name: 'Borgo Egnazia', time: '60 min from BRI' },
      ]}
      faqs={[
        { q: 'How far is Polignano a Mare from Bari Airport?', a: 'Polignano a Mare is approximately 35 minutes from Bari Airport — one of the closest seaside destinations to BRI.' },
        { q: 'Is parking difficult in Polignano?', a: "Yes — Polignano's old town has very limited parking and a ZTL zone in the centre. A private transfer eliminates this entirely." },
        { q: 'Can you take me from Polignano to Grotta Palazzese?', a: 'Grotta Palazzese is in Polignano itself. Your driver delivers you directly to the hotel entrance.' },
        { q: 'Can I do a day trip from Polignano to Alberobello?', a: 'Yes — Alberobello is approximately 30 minutes from Polignano. Book a half-day private tour or hourly chauffeur.' },
        { q: 'Do you cover Polignano to Bari?', a: 'Yes — inter-city transfers between Polignano and Bari are available, approximately 35 minutes.' },
        { q: 'Which vehicles are available for Polignano transfers?', a: 'Mercedes-Benz E-Class (3 pax), V-Class (7 pax), and Vito Minibus (8 pax).' },
      ]}
      testimonials={[
        { text: "The driver took us straight to the Grotta Palazzese hotel entrance — we had no idea how narrow and steep the old town streets were until we arrived. A private transfer was absolutely the right choice.", author: 'Claudia F.', origin: 'Rome, Italy' },
      ]}
    />
  )
}
