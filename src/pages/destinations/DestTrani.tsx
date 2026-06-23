import TransferPageTemplate from '../../components/TransferPageTemplate'

export default function DestTrani() {
  return (
    <TransferPageTemplate
      slug="trani"
      title="Private Transfer to Trani — Fixed Price."
      subtitle="Book Your Transfer to Trani"
      metaTitle="Private Transfer to Trani | Connect in Puglia"
      metaDesc="Private transfer to Trani from Bari Airport or other Puglia destinations. Fixed price, professional driver, door to door. ConnectinPuglia."
      canonical="https://connectinpuglia.com/trani"
      heroImg="/images/destinations/trani-hero.png"
      intro="Trani is one of Puglia's most elegant coastal cities — famous for its stunning Norman cathedral standing directly on the sea. Your private driver takes you directly to your hotel or villa, fixed price confirmed in advance."
      destinations={[
        { name: 'From Bari Airport (BRI)', time: '40 min' },
        { name: 'From Bari Train Station', time: '35 min' },
        { name: 'From Bari City', time: '40 min' },
        { name: 'From Polignano a Mare', time: '55 min' },
        { name: 'From Monopoli', time: '60 min' },
        { name: 'From Fasano', time: '75 min' },
      ]}
      properties={[
        { name: 'San Paolo al Convento', time: '40 min from BRI' },
        { name: 'Palazzo Filisio', time: '40 min from BRI' },
        { name: 'MD Hotel Trani', time: '40 min from BRI' },
      ]}
      faqs={[
        { q: 'How far is Trani from Bari Airport?', a: 'Trani is approximately 40 minutes from Bari Airport (BRI), making it one of the closer Puglia destinations to BRI.' },
        { q: 'Why visit Trani?', a: 'Trani is famous for its extraordinary Norman Cathedral of San Nicola Pellegrino, which stands directly on the sea — one of the most photographed sights in all of Puglia.' },
        { q: 'Can I visit Trani as a day trip from other Puglia destinations?', a: "Yes — we offer inter-destination transfers and day trips. Trani is 40 minutes from Bari and 55 minutes from Polignano a Mare." },
        { q: 'Is parking difficult in Trani?', a: "Trani's harbour area can be congested. A private transfer drops you directly at your hotel or the centro storico, eliminating any parking stress." },
        { q: 'Can I combine Trani with Barletta or Castel del Monte?', a: "Yes — our private Apulia Norte tour can combine Trani, Barletta, and Castel del Monte in a single day itinerary. Contact us to plan." },
        { q: 'How do I book a Trani transfer?', a: "Use the enquiry form or WhatsApp. Fixed-price confirmation within 2 hours." },
      ]}
      testimonials={[]}
    />
  )
}
