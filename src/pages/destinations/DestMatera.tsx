import TransferPageTemplate from '../../components/TransferPageTemplate'

export default function DestMatera() {
  return (
    <TransferPageTemplate
      slug="matera-from-puglia"
      title="Private Transfer to Matera from Puglia — Fixed Price."
      subtitle="Book Your Transfer to Matera"
      metaTitle="Private Transfer to Matera from Puglia | Connect in Puglia"
      metaDesc="Private transfer to Matera from Bari or Brindisi airports and Puglia destinations. Fixed price, door to door. ConnectinPuglia."
      canonical="https://connectinpuglia.com/matera-from-puglia"
      heroImg="/images/destinations/matera-hero.png"
      intro="Matera — one of the world's oldest continuously inhabited cities and a UNESCO World Heritage Site — is approximately 90 minutes from Bari. Your private driver takes you directly to the Sassi district, no navigation required."
      destinations={[
        { name: 'From Bari Airport (BRI)', time: '90 min' },
        { name: 'From Bari Train Station', time: '85 min' },
        { name: 'From Fasano', time: '90 min' },
        { name: 'From Ostuni', time: '100 min' },
        { name: 'From Alberobello', time: '75 min' },
        { name: 'From Lecce', time: '150 min' },
      ]}
      properties={[
        { name: 'Sextantio Le Grotte della Civita', time: '90 min from BRI' },
        { name: 'Palazzo Gattini', time: '90 min from BRI' },
        { name: 'Locanda di San Martino', time: '90 min from BRI' },
        { name: 'Aquatio Cave Luxury Hotel', time: '90 min from BRI' },
      ]}
      faqs={[
        { q: 'How do I get to Matera from Bari Airport?', a: 'A private transfer with ConnectinPuglia takes approximately 90 minutes from Bari Airport. We deliver you directly to the Sassi district or your specific hotel.' },
        { q: 'Is Matera in Puglia?', a: "Matera is actually in the Basilicata region, just across the border from Puglia — but it is easily accessible and commonly visited as a day trip or short stay from Puglia." },
        { q: 'Can I visit Matera as a day trip from Puglia?', a: "Yes — we offer full-day private tours from Puglia that include the drive to Matera, a guided walk through the Sassi, lunch, and return transfer." },
        { q: 'Is there public transport from Bari to Matera?', a: "There is a Ferrovie Appulo Lucane (FAL) train from Bari to Matera, but it takes over 2 hours and is infrequent. A private transfer is faster and far more comfortable." },
        { q: 'Can cars enter the Sassi in Matera?', a: "The Sassi area has restricted access. Private hire drivers know the drop-off and parking arrangements for each hotel. Navigating by GPS is unreliable in the ancient lanes." },
        { q: 'How do I book a Matera transfer?', a: "Use the enquiry form or WhatsApp. We confirm your fixed price within 2 hours." },
      ]}
      testimonials={[
        { text: "Matera blew us away — and getting there from our masseria in Fasano couldn't have been easier. ConnectinPuglia made what could have been a complicated day completely effortless.", author: 'Thomas & Anna B.', origin: 'Hamburg, Germany' },
      ]}
    />
  )
}
