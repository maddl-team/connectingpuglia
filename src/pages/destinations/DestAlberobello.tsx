import TransferPageTemplate from '../../components/TransferPageTemplate'

export default function DestAlberobello() {
  return (
    <TransferPageTemplate
      slug="alberobello-valle-ditria"
      title="Private Transfer to Alberobello & Valle d'Itria — Fixed Price."
      subtitle="Book Your Transfer to Alberobello"
      metaTitle="Private Transfer to Alberobello & Valle d'Itria | Connect in Puglia"
      metaDesc="Private transfer to Alberobello and the Valle d'Itria from Bari or Brindisi airports. Fixed price, door to door, luxury fleet. ConnectinPuglia."
      canonical="https://connectinpuglia.com/alberobello-valle-ditria"
      heroImg="/images/destinations/alberobello-hero.png"
      intro="Alberobello's iconic trulli and the Valle d'Itria are among Puglia's most visited and beloved destinations. Your driver meets you at the airport and delivers you directly to your trullo or masseria — no GPS frustration."
      destinations={[
        { name: 'From Bari Airport (BRI)', time: '55 min' },
        { name: 'From Brindisi Airport (BDS)', time: '40 min' },
        { name: 'From Bari Train Station', time: '55 min' },
        { name: 'From Fasano', time: '25 min' },
        { name: 'From Ostuni', time: '40 min' },
        { name: 'From Lecce', time: '80 min' },
      ]}
      properties={[
        { name: 'Le Alcove Alberobello', time: '55 min from BRI' },
        { name: 'Trulli Holiday', time: '55 min from BRI' },
        { name: 'Masseria Il Frantoio', time: '80 min from BRI' },
        { name: 'Borgo Egnazia', time: '60 min from BRI' },
        { name: 'Masseria Torre Coccaro', time: '60 min from BRI' },
      ]}
      faqs={[
        { q: 'How do I get to Alberobello from Bari Airport?', a: 'A private transfer with ConnectinPuglia takes approximately 55 minutes from Bari Airport (BRI). Your driver meets you in arrivals and delivers you directly to your trullo or hotel entrance.' },
        { q: 'Is Alberobello a ZTL zone?', a: 'Yes — the historic trulli district of Alberobello is restricted traffic. Private hire drivers hold the permits. Rental car drivers face automatic fines.' },
        { q: 'Which airport is closer to Alberobello?', a: 'Bari Airport (BRI) and Brindisi Airport (BDS) are roughly equidistant — approximately 55 and 40 minutes respectively. BDS may be marginally faster.' },
        { q: 'Can you take me from Alberobello to other Valle d\'Itria villages?', a: "Yes — Locorotondo, Cisternino, and Martina Franca are all within 20 minutes. Book an hourly chauffeur for the day to explore the entire valley." },
        { q: 'Do you offer Valle d\'Itria day tours?', a: "Yes — our Valle d'Itria private tour covers Alberobello, Locorotondo, and Cisternino in a full-day itinerary." },
        { q: 'How do I get from Alberobello to a Fasano masseria?', a: "Alberobello to the Fasano masserie is approximately 25 minutes. We offer inter-property transfers at fixed prices." },
      ]}
      testimonials={[
        { text: "Trulli, olive trees, total silence — and our driver had us there from Bari Airport in under an hour. He even pointed out Locorotondo from the road.", author: 'Sophie H.', origin: 'Paris, France' },
      ]}
    />
  )
}
