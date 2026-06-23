import DestinationTransferPage from '../../components/DestinationTransferPage'

export default function TransferToMatera() {
  return (
    <DestinationTransferPage
      metaTitle="Private Transfer to Matera from Puglia | Connect in Puglia"
      metaDesc="Private transfer to Matera from Bari Airport or Puglia masserie. Fixed price, door to door. ConnectinPuglia — Puglia's luxury transfer specialist."
      canonical="https://connectinpuglia.com/transfer-to-matera-from-puglia"
      heroImg="/images/destinations/matera-hero.png"
      h1="Private Transfer to Matera from Puglia — Into the Ancient City."
      subheadline="Your driver takes you directly from Bari Airport or your Puglia masseria to the UNESCO Sassi di Matera — one of the world's most extraordinary ancient cities."
      routes={[
        {
          airport: 'Bari Airport',
          airportCode: 'BRI · Bari Karol Wojtyla',
          distance: '65 km',
          time: 'approx 80–90 min',
          via: 'SS96 / SP7',
          recommended: true,
        },
        {
          airport: 'Brindisi Airport',
          airportCode: 'BDS · Brindisi Papola Casale',
          distance: '120 km',
          time: 'approx 100–110 min',
          via: 'SS379 / SS7',
          recommended: false,
        },
      ]}
      aboutParagraphs={[
        "Matera is one of the world's oldest continuously inhabited cities and a UNESCO World Heritage Site — a place that takes the breath away when first encountered. Its ancient Sassi districts (Sasso Caveoso and Sasso Barisano) are carved directly into the ravine walls, a labyrinthine network of cave churches, cisterns, and stone dwellings inhabited since the Palaeolithic era.",
        "Officially in the Basilicata region just across the border from Puglia, Matera is one of the most popular day trips and short stays for guests based in the Puglia masserie. The journey from Bari Airport is approximately 80–90 minutes; from the Fasano or Alberobello area, approximately 75–90 minutes.",
        "The Sassi area of Matera has restricted vehicle access with complex one-way systems and no reliable GPS routing. Your ConnectinPuglia driver knows exactly where to drop you for your hotel or viewpoint, and where to collect you. We also offer full-day Matera tours combining the transfer with a guided walking visit.",
      ]}
      propertiesServed={[
        { name: 'Sextantio Le Grotte della Civita', to: '' },
        { name: 'Palazzo Gattini Luxury Hotel', to: '' },
        { name: 'Aquatio Cave Luxury Hotel & SPA', to: '' },
        { name: 'Locanda di San Martino', to: '' },
        { name: 'Corte San Pietro', to: '' },
        { name: 'Il Belvedere Matera', to: '' },
      ]}
      faqs={[
        {
          q: "How do I get from Bari Airport to Matera?",
          a: "A private transfer with ConnectinPuglia takes approximately 80–90 minutes from Bari Airport. Your driver meets you in arrivals and takes you directly to the Sassi or your specific hotel in Matera."
        },
        {
          q: "Is Matera in Puglia?",
          a: "Matera is in the Basilicata region, just west of the Puglia border. It is typically reached in 80–90 minutes from Bari and is the most popular cross-regional day trip or short stay for Puglia visitors."
        },
        {
          q: "Can I visit Matera as a day trip from a Fasano masseria?",
          a: "Yes — Matera is approximately 75–90 minutes from the Fasano area. We offer full-day Matera private tours including the transfer and a guided walking tour of the Sassi."
        },
        {
          q: "Is there public transport from Bari to Matera?",
          a: "There is a Ferrovie Appulo Lucane (FAL) train from Bari to Matera, but it takes over 2 hours and is infrequent. A private transfer is significantly faster and far more comfortable."
        },
        {
          q: "Can GPS find hotels in the Sassi?",
          a: "GPS routing in the Sassi is very unreliable — the ancient streets have no standard addresses. ConnectinPuglia drivers know the exact drop-off points for every hotel in the Sassi and the one-way system through the ravine."
        },
        {
          q: "Can I book a Matera to Bari Airport return transfer?",
          a: "Yes — we offer both directions. You can also book a transfer from Matera to a Puglia masseria if you are spending a night or two in Matera."
        },
        {
          q: "How much does a transfer from Puglia to Matera cost?",
          a: "All prices are fixed and agreed at booking. The exact price depends on your pick-up location. Contact us via form or WhatsApp for an immediate quote."
        },
        {
          q: "Do you offer guided tours of Matera?",
          a: "Yes — our Matera day tour includes round-trip transfer from your Puglia accommodation plus a guided walking tour of the Sassi with a local expert guide."
        },
      ]}
      testimonials={[
        {
          text: "ConnectinPuglia took us from our masseria in Fasano to Matera and back — a perfect long day. The driver waited while we explored and knew exactly where to drop us.",
          author: "Thomas & Anna B.",
          origin: "Hamburg, Germany",
        },
        {
          text: "We arrived at Bari Airport specifically to spend two days in Matera before heading to our masseria. The ConnectinPuglia driver handled both legs seamlessly.",
          author: "Christopher W.",
          origin: "Chicago, USA",
        },
      ]}
      internalLinks={[
        { label: 'Transfer from Bari Airport', to: '/transfer-from-bari-airport' },
        { label: 'Transfer to Fasano & Borgo Egnazia', to: '/transfer-to-fasano-borgo-egnazia' },
        { label: "Transfer to Alberobello & Valle d'Itria", to: '/transfer-to-alberobello-valle-ditria' },
        { label: 'How to Get Around Puglia Without a Car', to: '/how-to-get-around-puglia-without-a-car' },
        { label: 'Private Tours in Puglia', to: '/private-tours-puglia' },
        { label: 'All Airport Transfers', to: '/airport-transfers' },
      ]}
    />
  )
}
