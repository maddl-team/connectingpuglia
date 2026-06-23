import TransferPageTemplate from '../../components/TransferPageTemplate'

export default function DestLecce() {
  return (
    <TransferPageTemplate
      slug="lecce"
      title="Private Transfer to Lecce — The Florence of the South."
      subtitle="Book Your Transfer to Lecce"
      metaTitle="Private Transfer to Lecce | Connect in Puglia"
      metaDesc="Private transfer to Lecce from Bari or Brindisi airports. Fixed price, professional driver, direct to your hotel. ConnectinPuglia — Puglia's luxury transfer specialist."
      canonical="https://connectinpuglia.com/lecce"
      heroImg="/images/destinations/lecce-hero.png"
      intro="Lecce, the Florence of the South, is a Baroque masterpiece carved in golden stone. Your private driver meets you at the airport and takes you directly to your hotel — navigating the ZTL zones on your behalf."
      destinations={[
        { name: 'From Bari Airport (BRI)', time: '90 min' },
        { name: 'From Brindisi Airport (BDS)', time: '35 min' },
        { name: 'From Bari Train Station', time: '90 min' },
        { name: 'From Ostuni', time: '60 min' },
        { name: 'From Otranto', time: '40 min' },
        { name: 'From Gallipoli', time: '35 min' },
      ]}
      properties={[
        { name: 'Risorgimento Resort', time: '35 min from BDS' },
        { name: 'Patria Palace Hotel', time: '35 min from BDS' },
        { name: 'Masseria Torre Coccaro', time: '60 min from BDS' },
        { name: 'Masseria Il Frantoio', time: '80 min from BRI' },
      ]}
      faqs={[
        { q: 'How far is Lecce from Brindisi Airport?', a: 'Lecce is approximately 35 minutes from Brindisi Airport (BDS) — making BDS the natural choice for guests visiting Lecce and the Salento peninsula.' },
        { q: 'What is a ZTL zone in Lecce?', a: "Lecce's entire historic centre is a ZTL (restricted traffic area). Private hire drivers hold the permits to access hotel drop-off zones. Rental cars face automatic fines of €100–300." },
        { q: 'Can I get from Lecce to Otranto and Gallipoli in a day?', a: 'Yes — our Salento private tour combines Lecce, Otranto, and Gallipoli in a full-day itinerary.' },
        { q: 'Which airport should I fly into for Lecce?', a: 'Brindisi Airport (BDS) is strongly recommended for Lecce — just 35 minutes. Bari Airport (BRI) is also possible at approximately 90 minutes.' },
        { q: 'Do you cover transfers from Lecce to masserie in the Fasano area?', a: 'Yes — inter-regional transfers are available. Lecce to Fasano takes approximately 90 minutes.' },
        { q: 'Can I book a Lecce to Bari Airport transfer?', a: 'Yes — both directions available. Lecce to Bari Airport takes approximately 90 minutes.' },
      ]}
      testimonials={[
        { text: "We were dropped right at the entrance to our boutique hotel in Lecce's old town — something a rental car absolutely could not have done. Perfect service.", author: 'Elena K.', origin: 'Vienna, Austria' },
      ]}
    />
  )
}
