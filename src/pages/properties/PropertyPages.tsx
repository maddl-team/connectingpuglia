import TransferPageTemplate from '../../components/TransferPageTemplate'

const sharedProps = {
  heroImg: '/images/properties/borgo-egnazia-hero.png',
  destinations: [
    { name: 'From Bari Airport (BRI)', time: '60 min' },
    { name: 'From Brindisi Airport (BDS)', time: '30 min' },
    { name: 'From Bari Train Station', time: '60 min' },
    { name: 'From Brindisi Port', time: '35 min' },
    { name: 'From Lecce', time: '90 min' },
    { name: 'From Matera', time: '90 min' },
  ],
  properties: [
    { name: 'Masseria San Domenico', time: 'nearby · 5 min' },
    { name: 'Masseria Torre Coccaro', time: 'nearby · 10 min' },
    { name: 'Masseria Torre Maizza', time: 'nearby · 10 min' },
    { name: 'Masseria Il Melograno', time: 'nearby · 20 min' },
    { name: 'Le Alcove Alberobello', time: '25 min' },
    { name: 'Grotta Palazzese', time: '35 min' },
  ],
}

export function PropBorgoEgnazia() {
  return (
    <TransferPageTemplate
      slug="borgo-egnazia"
      title="Private Transfer to Borgo Egnazia — Door to Door, Fixed Price."
      subtitle="Book Your Borgo Egnazia Transfer"
      metaTitle="Private Transfer to Borgo Egnazia | Connect in Puglia"
      metaDesc="Private airport transfer to Borgo Egnazia from Bari and Brindisi airports. Fixed price, professional driver who knows the property entrance. ConnectinPuglia."
      canonical="https://connectinpuglia.com/borgo-egnazia"
      intro="Borgo Egnazia, Puglia's most celebrated resort, sits in the olive groves near Fasano. Your ConnectinPuglia driver knows the resort's private entrance road and delivers you directly — no GPS confusion, no wrong turns."
      faqs={[
        { q: 'How do I get from Bari Airport to Borgo Egnazia?', a: 'Book a private transfer with ConnectinPuglia. Your driver meets you in the BRI arrivals hall and takes you directly to Borgo Egnazia — approximately 60 minutes, fixed price.' },
        { q: 'How do I get from Brindisi Airport to Borgo Egnazia?', a: 'Brindisi is the closest airport to Borgo Egnazia — approximately 30 minutes. Your driver meets you in arrivals and takes you directly to the resort entrance.' },
        { q: 'Does ConnectinPuglia know the Borgo Egnazia entrance road?', a: 'Yes — we have completed hundreds of transfers to Borgo Egnazia. We know every entrance, every access gate, and all relevant contacts at the property.' },
        { q: 'Can I book a return transfer from Borgo Egnazia to the airport?', a: 'Yes — we offer transfers in both directions. Book both simultaneously when you reserve your stay.' },
        { q: 'Do you offer day trips from Borgo Egnazia?', a: 'Yes — we offer private day tours to Alberobello, Lecce, Matera, and wine estates, departing from Borgo Egnazia at your preferred time.' },
        { q: 'Which vehicle is best for a family transfer to Borgo Egnazia?', a: 'The Mercedes-Benz V-Class accommodates up to 7 passengers with luggage — ideal for families. Child seats available on request.' },
      ]}
      testimonials={[
        { text: "Our stay at Borgo Egnazia started perfectly — ConnectinPuglia was waiting in arrivals at Brindisi, and we were at the resort within half an hour. No stress whatsoever.", author: 'Charlotte & James P.', origin: 'London, UK' },
      ]}
      {...sharedProps}
    />
  )
}

export function PropMasseriaSanDomenico() {
  return (
    <TransferPageTemplate
      slug="masseria-san-domenico"
      title="Private Transfer to Masseria San Domenico — Fixed Price."
      subtitle="Book Your Masseria San Domenico Transfer"
      metaTitle="Private Transfer to Masseria San Domenico | Connect in Puglia"
      metaDesc="Private airport transfer to Masseria San Domenico from Bari and Brindisi airports. Fixed price, professional driver. ConnectinPuglia."
      canonical="https://connectinpuglia.com/masseria-san-domenico"
      intro="Masseria San Domenico is one of Puglia's landmark luxury resorts — a 15th-century watchtower estate near Fasano with a world-class thalasso spa. Your ConnectinPuglia driver delivers you directly to its private entrance."
      faqs={[
        { q: 'How do I get to Masseria San Domenico from the airport?', a: 'Private transfer with ConnectinPuglia from Bari Airport (60 min) or Brindisi Airport (30 min). Fixed price, driver meets you in arrivals.' },
        { q: 'Where is Masseria San Domenico located?', a: 'Masseria San Domenico is located in Savelletri di Fasano, a few kilometres from Fasano town and approximately 60 minutes from Bari Airport.' },
        { q: 'Can I book a return transfer from Masseria San Domenico to the airport?', a: 'Yes — both directions available. We recommend booking both simultaneously.' },
        { q: 'Do you offer day trips from Masseria San Domenico?', a: "Yes — private tours to Alberobello, the Valle d'Itria, Lecce, and Matera all depart from the property at your chosen time." },
        { q: 'How do you find the entrance to Masseria San Domenico?', a: "We know the exact entrance road and access details for Masseria San Domenico from years of transfers. No GPS confusion." },
        { q: 'What is the best vehicle for a transfer to Masseria San Domenico?', a: 'Mercedes-Benz E-Class for 1–3 guests, V-Class for families and groups.' },
      ]}
      testimonials={[
        { text: "ConnectinPuglia drove us from Brindisi Airport straight to the Masseria San Domenico entrance — no detours, no confusion. Friendly, professional, impeccable vehicle.", author: 'William & Sarah M.', origin: 'New York, USA' },
      ]}
      {...sharedProps}
    />
  )
}

export function PropMasseriaTorreMaizza() {
  return (
    <TransferPageTemplate
      slug="masseria-torre-maizza"
      title="Private Transfer to Masseria Torre Maizza — Fixed Price."
      subtitle="Book Your Masseria Torre Maizza Transfer"
      metaTitle="Private Transfer to Masseria Torre Maizza | Connect in Puglia"
      metaDesc="Private airport transfer to Masseria Torre Maizza from Bari and Brindisi airports. Fixed price, professional driver. ConnectinPuglia."
      canonical="https://connectinpuglia.com/masseria-torre-maizza"
      intro="Masseria Torre Maizza, a Rocco Forte property near Fasano, is a beautifully restored 16th-century masseria surrounded by olive groves. Your driver knows the property entrance and delivers you directly, no wrong turns."
      faqs={[
        { q: 'How far is Masseria Torre Maizza from the airport?', a: 'Approximately 60 minutes from Bari Airport (BRI) and 30 minutes from Brindisi Airport (BDS).' },
        { q: 'Does ConnectinPuglia know the Masseria Torre Maizza access road?', a: 'Yes — we have extensive experience with this property and know the exact access approach and entrance gate.' },
        { q: 'Can I book a return transfer from Masseria Torre Maizza?', a: 'Yes — both directions available, fixed price confirmed in advance.' },
        { q: 'Do you offer day tours from Masseria Torre Maizza?', a: "Yes — all our private day tours depart from the masseria at your chosen time." },
        { q: 'Is there public transport to Masseria Torre Maizza?', a: 'No — there is no public transport to or from this property. A private transfer or rental car is required.' },
        { q: 'Which airports serve Masseria Torre Maizza?', a: 'Both Bari (BRI) and Brindisi (BDS) airports. Brindisi is closer at approximately 30 minutes.' },
      ]}
      testimonials={[]}
      {...sharedProps}
    />
  )
}

export function PropMasseriaIlMelograno() {
  return (
    <TransferPageTemplate
      slug="masseria-il-melograno"
      title="Private Transfer to Masseria Il Melograno — Fixed Price."
      subtitle="Book Your Masseria Il Melograno Transfer"
      metaTitle="Private Transfer to Masseria Il Melograno | Connect in Puglia"
      metaDesc="Private airport transfer to Masseria Il Melograno from Bari and Brindisi airports. Fixed price, professional driver. ConnectinPuglia."
      canonical="https://connectinpuglia.com/masseria-il-melograno"
      intro="Masseria Il Melograno near Monopoli is one of Puglia's oldest and most celebrated luxury estates. Your ConnectinPuglia driver delivers you directly to its private entrance — approximately 50 minutes from Bari Airport."
      faqs={[
        { q: 'How far is Masseria Il Melograno from Bari Airport?', a: 'Approximately 50 minutes from Bari Airport (BRI) and 30 minutes from Brindisi Airport (BDS).' },
        { q: 'Where is Masseria Il Melograno located?', a: 'Near Monopoli, in the olive groves of southern Puglia — approximately 50km south of Bari.' },
        { q: 'Is there public transport to Masseria Il Melograno?', a: 'No — a private transfer is required. The masseria is in the countryside with no bus or taxi access.' },
        { q: 'Can I book a return transfer from Masseria Il Melograno?', a: 'Yes — both airport directions available. Fixed price confirmed in advance.' },
        { q: 'Do you offer day trips from Masseria Il Melograno?', a: 'Yes — Alberobello, Ostuni, Polignano, and Lecce are all within reach for private day tours.' },
        { q: 'How does ConnectinPuglia find the entrance to this masseria?', a: 'We know the access coordinates and entrance approach from years of repeat transfers to this specific property.' },
      ]}
      testimonials={[]}
      {...sharedProps}
    />
  )
}

export function PropMasseriaIlFrantoio() {
  return (
    <TransferPageTemplate
      slug="masseria-il-frantoio"
      title="Private Transfer to Masseria Il Frantoio — Fixed Price."
      subtitle="Book Your Masseria Il Frantoio Transfer"
      metaTitle="Private Transfer to Masseria Il Frantoio | Connect in Puglia"
      metaDesc="Private airport transfer to Masseria Il Frantoio near Ostuni from Bari and Brindisi airports. Fixed price, professional driver. ConnectinPuglia."
      canonical="https://connectinpuglia.com/masseria-il-frantoio"
      intro="Masseria Il Frantoio near Ostuni is a celebrated organic farm estate and acclaimed dinner destination. Your driver delivers you directly to its countryside entrance — GPS cannot reliably find this property, but we always can."
      faqs={[
        { q: 'How far is Masseria Il Frantoio from the airport?', a: 'Approximately 80 minutes from Bari Airport (BRI) and 45 minutes from Brindisi Airport (BDS).' },
        { q: 'Can GPS find Masseria Il Frantoio?', a: 'GPS typically struggles with the final approach to this property. ConnectinPuglia drivers know the exact access track and entrance gate.' },
        { q: 'Can I book dinner at Masseria Il Frantoio and a return transfer?', a: 'Yes — we offer evening return transfers from the masseria. Book in advance, especially in high season.' },
        { q: 'Which airport is best for Masseria Il Frantoio?', a: 'Brindisi Airport (BDS) is closer — approximately 45 minutes. Bari Airport (BRI) is approximately 80 minutes.' },
        { q: 'Do you offer day trips from Masseria Il Frantoio?', a: 'Yes — Ostuni, Lecce, Alberobello and other Puglia highlights are all accessible as private day tours.' },
        { q: 'Is there any public transport to Masseria Il Frantoio?', a: 'No — the property is in open countryside and requires a car or private transfer.' },
      ]}
      testimonials={[]}
      {...sharedProps}
    />
  )
}

export function PropLeAlcoveAlberobello() {
  return (
    <TransferPageTemplate
      slug="le-alcove-alberobello"
      title="Private Transfer to Le Alcove Alberobello — Fixed Price."
      subtitle="Book Your Le Alcove Transfer"
      metaTitle="Private Transfer to Le Alcove Alberobello | Connect in Puglia"
      metaDesc="Private airport transfer to Le Alcove, Alberobello from Bari and Brindisi airports. Fixed price, professional driver. ConnectinPuglia."
      canonical="https://connectinpuglia.com/le-alcove-alberobello"
      intro="Le Alcove offers the unique experience of staying inside authentic Alberobello trulli. Your driver delivers you directly to the property entrance in the heart of the UNESCO trulli district — no ZTL worries."
      faqs={[
        { q: 'How far is Le Alcove from Bari Airport?', a: 'Approximately 55 minutes from Bari Airport (BRI) and 40 minutes from Brindisi Airport (BDS).' },
        { q: 'Is Alberobello a ZTL zone?', a: 'Yes — the trulli district is restricted traffic. Private hire drivers have the necessary permits to access hotel drop-off points.' },
        { q: 'Can I book a return transfer from Le Alcove to the airport?', a: 'Yes — both directions available. We recommend booking both simultaneously.' },
        { q: 'Do you offer day trips from Alberobello?', a: "Yes — our Valle d'Itria day tour covers Locorotondo, Cisternino, and Martina Franca from Alberobello." },
        { q: 'What is the best vehicle for a transfer to Le Alcove?', a: 'Mercedes-Benz E-Class for 1–3 guests, V-Class for families.' },
        { q: 'How do I book?', a: 'Use the enquiry form or WhatsApp. Fixed-price confirmation within 2 hours.' },
      ]}
      testimonials={[]}
      {...sharedProps}
    />
  )
}

export function PropMasseriaTorreCoccaro() {
  return (
    <TransferPageTemplate
      slug="masseria-torre-coccaro"
      title="Private Transfer to Masseria Torre Coccaro — Fixed Price."
      subtitle="Book Your Masseria Torre Coccaro Transfer"
      metaTitle="Private Transfer to Masseria Torre Coccaro | Connect in Puglia"
      metaDesc="Private airport transfer to Masseria Torre Coccaro from Bari and Brindisi airports. Fixed price, professional driver. ConnectinPuglia."
      canonical="https://connectinpuglia.com/masseria-torre-coccaro"
      intro="Masseria Torre Coccaro near Fasano is a beautiful Relais & Châteaux property with a renowned spa and private beach club. Your driver delivers you directly to the estate entrance — door to door, fixed price."
      faqs={[
        { q: 'How far is Masseria Torre Coccaro from the airport?', a: 'Approximately 60 minutes from Bari Airport (BRI) and 30 minutes from Brindisi Airport (BDS).' },
        { q: 'Does ConnectinPuglia know the Torre Coccaro entrance?', a: 'Yes — we have completed many transfers to this property and know the exact access approach and gate code procedure.' },
        { q: 'Can I book a return transfer from Masseria Torre Coccaro?', a: 'Yes — both directions available. Fixed price confirmed in advance.' },
        { q: 'Do you offer day tours from Masseria Torre Coccaro?', a: 'Yes — all our Puglia day tours depart from the masseria at your chosen time.' },
        { q: 'Is Masseria Torre Coccaro close to the sea?', a: 'Yes — the masseria has a private beach club on the Adriatic coast approximately 5 minutes away. We can arrange transfers to and from it.' },
        { q: 'Which airport should I fly into for Masseria Torre Coccaro?', a: 'Brindisi Airport (BDS) is closest at approximately 30 minutes. Bari Airport (BRI) is approximately 60 minutes.' },
      ]}
      testimonials={[]}
      {...sharedProps}
    />
  )
}

export function PropGrottaPalazzese() {
  return (
    <TransferPageTemplate
      slug="grotta-palazzese"
      title="Private Transfer to Grotta Palazzese, Polignano — Fixed Price."
      subtitle="Book Your Grotta Palazzese Transfer"
      metaTitle="Private Transfer to Grotta Palazzese | Connect in Puglia"
      metaDesc="Private airport transfer to Grotta Palazzese Hotel in Polignano a Mare from Bari Airport. Fixed price, professional driver. ConnectinPuglia."
      canonical="https://connectinpuglia.com/grotta-palazzese"
      heroImg="/images/properties/grotta-palazzese-hero.png"
      intro="Grotta Palazzese in Polignano a Mare — one of the world's most famous restaurant settings, carved into a sea cave. The hotel sits dramatically above the Adriatic. Your driver delivers you directly to the entrance, navigating the old town on your behalf."
      faqs={[
        { q: 'How far is Grotta Palazzese from Bari Airport?', a: "Polignano a Mare is approximately 35 minutes from Bari Airport — one of the closest seaside destinations to BRI. Grotta Palazzese is in Polignano's historic centre." },
        { q: 'Is parking possible near Grotta Palazzese?', a: "Parking in Polignano's old town is extremely limited. A private transfer drops you at the hotel entrance, eliminating any parking challenge." },
        { q: 'Can ConnectinPuglia access the Polignano historic centre?', a: "Yes — private hire drivers have the permits to access hotel drop-off zones in Polignano's restricted centre." },
        { q: 'Can I book a dinner reservation transfer to Grotta Palazzese?', a: 'Yes — we offer evening drop-off and pick-up transfers for dinner reservations at Grotta Palazzese, booked separately from accommodation.' },
        { q: 'Can I book a return transfer from Grotta Palazzese to the airport?', a: 'Yes — both directions available. Fixed price confirmed in advance.' },
        { q: 'Do you offer day trips from Polignano a Mare?', a: 'Yes — Alberobello, Monopoli, and Matera are all accessible as day trips from Polignano.' },
      ]}
      testimonials={[]}
      destinations={[
        { name: 'From Bari Airport (BRI)', time: '35 min' },
        { name: 'From Brindisi Airport (BDS)', time: '45 min' },
        { name: 'From Bari Train Station', time: '30 min' },
        { name: 'From Monopoli', time: '15 min' },
        { name: 'From Fasano', time: '30 min' },
        { name: 'From Alberobello', time: '30 min' },
      ]}
      properties={[
        { name: 'Grotta Palazzese Hotel', time: 'destination' },
        { name: 'Covo dei Saraceni', time: 'nearby' },
        { name: 'Masseria Il Melograno', time: '45 min' },
        { name: 'Borgo Egnazia', time: '60 min' },
      ]}
    />
  )
}
