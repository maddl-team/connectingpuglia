import DestinationTransferPage from '../../components/DestinationTransferPage'
import {
  routesToFasano,
  routesToMelograno,
  routesToIlFrantoio,
  routesToLeAlcove,
  routesToGrottaPalazzese,
} from '../../lib/arrivalRoutes'
import { fleetFamilyFaq, fleetGroupFaq, fleetVehicleFaq } from '../../lib/fleet'

export function TransferToBorgoEgnazia() {
  return (
    <DestinationTransferPage
      metaTitle="Private Transfer to Borgo Egnazia | ConnectinPuglia"
      metaDesc="Private airport transfer to Borgo Egnazia from Bari and Brindisi airports. Fixed price, meet and greet, driver knows the property entrance. ConnectinPuglia."
      canonical="https://connectinpuglia.com/transfer-to-borgo-egnazia"
      heroImg="/images/properties/borgo-egnazia-hero.webp"
      h1="Private Transfer to Borgo Egnazia — The Arrival Matters."
      subheadline="Your ConnectinPuglia driver meets you in arrivals, takes your luggage, and delivers you directly to the Borgo Egnazia entrance — no GPS confusion, no wrong turn, fixed price."
      routes={routesToFasano}
      aboutParagraphs={[
        "Borgo Egnazia is Puglia's most celebrated resort — a 63-hectare estate near Fasano built in the style of a Puglian village, with trullo houses, masseria-style villas, and three hotels. It hosted the 2024 G7 summit and is a long-standing favourite of celebrities, royalty, and discerning travellers from around the world.",
        "The resort sits in ancient olive groves near the coastal hamlet of Savelletri di Fasano. ConnectinPuglia has completed hundreds of transfers to Borgo Egnazia and knows the private access road, every gate, and all relevant entry procedures.",
      ]}
      propertiesServed={[
        { name: 'Borgo Egnazia — La Corte', to: '' },
        { name: 'Borgo Egnazia — Il Borgo', to: '' },
        { name: 'Borgo Egnazia — Le Ville', to: '' },
        { name: 'Masseria San Domenico', to: '/transfer-to-masseria-san-domenico' },
        { name: 'Masseria Torre Coccaro', to: '/transfer-to-masseria-torre-coccaro' },
        { name: 'Masseria Torre Maizza', to: '/transfer-to-masseria-torre-maizza' },
      ]}
      faqs={[
        { q: "How do I get from Bari Airport to Borgo Egnazia?", a: "Book a private transfer with ConnectinPuglia from BRI. Driver meets you in arrivals, approximately 60 minutes to Borgo Egnazia, fixed price." },
        { q: "How do I get from Brindisi Airport to Borgo Egnazia?", a: "Brindisi is the closest airport — approximately 30–35 minutes. Driver meets you in arrivals and takes you directly to the resort entrance." },
        { q: "Does ConnectinPuglia know the Borgo Egnazia access road?", a: "Yes — we have completed hundreds of transfers to this specific property. We know every entrance gate and access procedure." },
        { q: "Can I book a return transfer from Borgo Egnazia to the airport?", a: "Yes — both directions available. Book both simultaneously when you reserve your stay." },
        { q: "Do you offer day tours departing from Borgo Egnazia?", a: "Yes — all our private day tours depart from the resort at your chosen time." },
        { q: "What vehicle is best for a family transfer to Borgo Egnazia?", a: fleetFamilyFaq },
        { q: "Can you arrange multiple vehicles for a large group?", a: fleetGroupFaq },
        { q: "Is there public transport from the airports to Borgo Egnazia?", a: "No — there is no public transport to or from this resort. A private transfer or rental car is required." },
      ]}
      testimonials={[
        { text: "We arrived at Brindisi on a delayed afternoon flight — ConnectinPuglia had tracked it and the driver was waiting. Borgo Egnazia in 35 minutes. The holiday started perfectly.", author: "Charlotte & James P.", origin: "London, UK" },
        { text: "Staying at Borgo Egnazia requires arriving in style. ConnectinPuglia made sure we did.", author: "Isabella R.", origin: "New York, USA" },
      ]}
      internalLinks={[
        { label: 'Transfer from Bari Airport', to: '/transfer-from-bari-airport' },
        { label: 'Transfer from Bari Port', to: '/transfer-from-bari-port' },
        { label: 'Transfer from Brindisi Airport', to: '/transfer-from-brindisi-airport' },
        { label: 'Transfer to Fasano & Borgo Egnazia', to: '/transfer-to-fasano-borgo-egnazia' },
        { label: 'Masseria San Domenico Transfer', to: '/transfer-to-masseria-san-domenico' },
        { label: 'Private Tours from Fasano', to: '/private-tours-puglia' },
      ]}
    />
  )
}

export function TransferToMasseriaSanDomenico() {
  return (
    <DestinationTransferPage
      metaTitle="Private Transfer to Masseria San Domenico | ConnectinPuglia"
      metaDesc="Private airport transfer to Masseria San Domenico from Bari and Brindisi airports. Fixed price, professional driver. ConnectinPuglia."
      canonical="https://connectinpuglia.com/transfer-to-masseria-san-domenico"
      heroImg="/images/properties/masseria-san-domenico-hero.webp"
      h1="Private Transfer to Masseria San Domenico — Fixed Price."
      subheadline="Your driver meets you in arrivals and delivers you directly to Masseria San Domenico's private entrance — no GPS confusion, door to door."
      routes={routesToFasano}
      aboutParagraphs={[
        "Masseria San Domenico is one of Puglia's most iconic luxury properties — a 15th-century coastal watchtower estate near Fasano, now home to a world-class thalasso spa, a renowned golf course, and 47 rooms set in ancient olive groves. It has been one of the most celebrated masserie in Italy for over two decades.",
        "The masseria is located in Savelletri di Fasano, a few kilometres from Fasano town, and just 30–35 minutes from Brindisi Airport. ConnectinPuglia has extensive experience with this specific property and knows every access road and gate.",
      ]}
      propertiesServed={[
        { name: 'Borgo Egnazia', to: '/transfer-to-borgo-egnazia' },
        { name: 'Masseria Torre Coccaro', to: '/transfer-to-masseria-torre-coccaro' },
        { name: 'Masseria Torre Maizza', to: '/transfer-to-masseria-torre-maizza' },
        { name: 'Masseria Il Melograno', to: '/transfer-to-masseria-il-melograno' },
        { name: 'Canne Bianche Lifestyle Hotel', to: '' },
      ]}
      faqs={[
        { q: "How far is Masseria San Domenico from the airport?", a: "Approximately 60 minutes from Bari Airport (BRI) and 30–35 minutes from Brindisi Airport (BDS)." },
        { q: "Where is Masseria San Domenico located?", a: "Near Savelletri di Fasano — approximately 60km from Bari, just inland from the Adriatic coast." },
        { q: "Does ConnectinPuglia know the access road?", a: "Yes — we have completed many transfers to this property. The entrance is off an unmarked road that GPS does not reliably find." },
        { q: "Can I book a return transfer from Masseria San Domenico?", a: "Yes — both directions available. Fixed price confirmed in advance." },
        { q: "Can I book day tours from Masseria San Domenico?", a: "Yes — all our private tours depart from the masseria at your chosen time." },
        { q: "Which airport should I fly into for Masseria San Domenico?", a: "Brindisi Airport (BDS) is closest — approximately 30–35 minutes." },
        { q: "Is there a golf course at Masseria San Domenico?", a: "Yes — the masseria operates an 18-hole golf course. We can arrange transfers to and from the course." },
        { q: "Can you coordinate transfers for a group stay?", a: fleetGroupFaq },
      ]}
      testimonials={[
        { text: "Straight from Brindisi Airport to Masseria San Domenico's gate in 35 minutes — driver was professional, vehicle immaculate, and he knew exactly where to go.", author: "William & Sarah M.", origin: "New York, USA" },
        { text: "We booked ConnectinPuglia for arrivals, departures, and two day tours. Flawless every time.", author: "Dr. A. Hoffmann", origin: "Zurich, Switzerland" },
      ]}
      internalLinks={[
        { label: 'Transfer from Brindisi Airport', to: '/transfer-from-brindisi-airport' },
        { label: 'Transfer from Bari Airport', to: '/transfer-from-bari-airport' },
        { label: 'Transfer from Bari Port', to: '/transfer-from-bari-port' },
        { label: 'Transfer to Fasano', to: '/transfer-to-fasano-borgo-egnazia' },
        { label: 'Borgo Egnazia Transfer', to: '/transfer-to-borgo-egnazia' },
        { label: 'Private Tours from Fasano', to: '/private-tours-puglia' },
      ]}
    />
  )
}

export function TransferToMasseriaTorreMaizza() {
  return (
    <DestinationTransferPage
      metaTitle="Private Transfer to Masseria Torre Maizza | ConnectinPuglia"
      metaDesc="Private airport transfer to Masseria Torre Maizza from Bari and Brindisi airports. Fixed price, professional driver. ConnectinPuglia."
      canonical="https://connectinpuglia.com/transfer-to-masseria-torre-maizza"
      heroImg="/images/properties/masseria-torre-maizza-hero.webp"
      h1="Private Transfer to Masseria Torre Maizza — Fixed Price."
      subheadline="Your driver delivers you directly to the Masseria Torre Maizza entrance — a Rocco Forte property in the olive groves near Fasano."
      routes={routesToFasano}
      aboutParagraphs={[
        "Masseria Torre Maizza is a beautifully restored 16th-century masseria near Fasano, now a Rocco Forte Hotels property. The estate's private tower, olive grove setting, and world-class spa make it one of the most refined masseria experiences in Puglia.",
        "The property is located in the Fasano countryside and shares the same olive-grove landscape as Borgo Egnazia and Masseria San Domenico. ConnectinPuglia knows the access approach and delivers guests directly to the entrance.",
      ]}
      propertiesServed={[
        { name: 'Borgo Egnazia', to: '/transfer-to-borgo-egnazia' },
        { name: 'Masseria San Domenico', to: '/transfer-to-masseria-san-domenico' },
        { name: 'Masseria Torre Coccaro', to: '/transfer-to-masseria-torre-coccaro' },
        { name: 'Masseria Il Melograno', to: '/transfer-to-masseria-il-melograno' },
      ]}
      faqs={[
        { q: "How far is Masseria Torre Maizza from the airport?", a: "Approximately 60 minutes from Bari Airport and 30 minutes from Brindisi Airport." },
        { q: "Is Masseria Torre Maizza a Rocco Forte property?", a: "Yes — it is part of the Rocco Forte Hotels collection." },
        { q: "Does ConnectinPuglia know the access road?", a: "Yes — we know the exact approach and entrance gate." },
        { q: "Can I book a return transfer?", a: "Yes — both directions available, fixed price confirmed in advance." },
        { q: "Do you offer day tours from Masseria Torre Maizza?", a: "Yes — all our Puglia day tours depart from the masseria." },
        { q: "Which airport is recommended for Masseria Torre Maizza?", a: "Brindisi Airport (BDS) is closest at 30 minutes." },
        { q: "Can you coordinate group arrivals?", a: fleetGroupFaq },
        { q: "Is there public transport to Masseria Torre Maizza?", a: "No — a private transfer is required. The property is in countryside with no public transport access." },
      ]}
      testimonials={[
        { text: "Brindisi Airport to Masseria Torre Maizza in exactly 32 minutes. The driver was there before we were.", author: "Giulia & Federico R.", origin: "Milan, Italy" },
      ]}
      internalLinks={[
        { label: 'Transfer from Brindisi Airport', to: '/transfer-from-brindisi-airport' },
        { label: 'Transfer from Bari Airport', to: '/transfer-from-bari-airport' },
        { label: 'Transfer from Bari Port', to: '/transfer-from-bari-port' },
        { label: 'Transfer to Fasano', to: '/transfer-to-fasano-borgo-egnazia' },
        { label: 'Borgo Egnazia Transfer', to: '/transfer-to-borgo-egnazia' },
        { label: 'All Airport Transfers', to: '/airport-transfers' },
      ]}
    />
  )
}

export function TransferToMasseriaIlMelograno() {
  return (
    <DestinationTransferPage
      metaTitle="Private Transfer to Masseria Il Melograno | ConnectinPuglia"
      metaDesc="Private airport transfer to Masseria Il Melograno near Monopoli from Bari and Brindisi airports. Fixed price, professional driver. ConnectinPuglia."
      canonical="https://connectinpuglia.com/transfer-to-masseria-il-melograno"
      heroImg="/images/properties/masseria-il-melograno-hero.webp"
      h1="Private Transfer to Masseria Il Melograno — Fixed Price."
      subheadline="Your driver delivers you directly to Masseria Il Melograno near Monopoli — one of Puglia's oldest and most celebrated luxury estates."
      routes={routesToMelograno}
      aboutParagraphs={[
        "Masseria Il Melograno, near Monopoli, is one of the oldest and most celebrated masseria luxury hotels in Puglia — a 16th-century estate of extraordinary character, with 37 rooms set among thousands of ancient olive trees.",
        "The masseria is located in the countryside west of Monopoli, approximately 50 minutes from Bari Airport. ConnectinPuglia drivers know the exact approach road and gate code procedure.",
      ]}
      propertiesServed={[
        { name: 'Borgo Egnazia', to: '/transfer-to-borgo-egnazia' },
        { name: 'Masseria Torre Coccaro', to: '/transfer-to-masseria-torre-coccaro' },
        { name: 'Masseria San Domenico', to: '/transfer-to-masseria-san-domenico' },
        { name: 'Grotta Palazzese', to: '/transfer-to-grotta-palazzese' },
      ]}
      faqs={[
        { q: "How far is Masseria Il Melograno from Bari Airport?", a: "Approximately 55km — about 50–55 minutes from BRI." },
        { q: "Where is Masseria Il Melograno located?", a: "In the olive groves near Monopoli — approximately 50km south of Bari." },
        { q: "Does ConnectinPuglia know the access road?", a: "Yes — we know the exact access coordinates and entrance approach for this property." },
        { q: "Can I book a return transfer?", a: "Yes — both directions available." },
        { q: "Do you offer day tours from Masseria Il Melograno?", a: "Yes — all our Puglia tours depart from the masseria." },
        { q: "Which airport is better for Masseria Il Melograno?", a: "Both airports are approximately equidistant. BRI is marginally better at 50–55 minutes." },
        { q: "Is there public transport to Masseria Il Melograno?", a: "No — a private transfer is essential." },
        { q: "Can you manage group arrivals?", a: fleetGroupFaq },
      ]}
      testimonials={[
        { text: "Our driver knew the exact entrance to Masseria Il Melograno without needing GPS — that alone made the arrival special.", author: "Monica & Luca F.", origin: "London, UK" },
      ]}
      internalLinks={[
        { label: 'Transfer from Bari Airport', to: '/transfer-from-bari-airport' },
        { label: 'Transfer from Bari Port', to: '/transfer-from-bari-port' },
        { label: 'Transfer to Monopoli', to: '/transfer-to-monopoli' },
        { label: 'Transfer to Fasano', to: '/transfer-to-fasano-borgo-egnazia' },
        { label: 'All Airport Transfers', to: '/airport-transfers' },
      ]}
    />
  )
}

export function TransferToMasseriaIlFrantoio() {
  return (
    <DestinationTransferPage
      metaTitle="Private Transfer to Masseria Il Frantoio | ConnectinPuglia"
      metaDesc="Private airport transfer to Masseria Il Frantoio near Ostuni from Bari and Brindisi airports. Fixed price, professional driver. ConnectinPuglia."
      canonical="https://connectinpuglia.com/transfer-to-masseria-il-frantoio"
      heroImg="/images/properties/masseria-il-frantoio-hero.webp"
      h1="Private Transfer to Masseria Il Frantoio — Fixed Price."
      subheadline="Your driver delivers you directly to Masseria Il Frantoio's countryside entrance near Ostuni — GPS cannot reliably find this property, but we always can."
      routes={routesToIlFrantoio}
      aboutParagraphs={[
        "Masseria Il Frantoio near Ostuni is a Relais & Châteaux property — an organic farm estate celebrated for its extraordinary multi-course dinners, served in its ancient stone vaults from ingredients grown on the property. It is one of the most distinctive and personal masseria experiences in Puglia.",
        "The masseria is in open countryside between Ostuni and the coast, on an unmade road without a precise GPS-findable address. ConnectinPuglia has the specific coordinates and access approach and has completed many transfers to this property.",
      ]}
      propertiesServed={[
        { name: 'Masseria Il Frantoio', to: '' },
        { name: 'Masseria Torre Coccaro', to: '/transfer-to-masseria-torre-coccaro' },
        { name: 'Borgognoni', to: '' },
        { name: 'Torre Del Diamante', to: '' },
        { name: 'Le Alcove Alberobello', to: '/transfer-to-le-alcove-alberobello' },
      ]}
      faqs={[
        { q: "How far is Masseria Il Frantoio from Brindisi Airport?", a: "Approximately 45km — about 40–45 minutes from BDS, making Brindisi the recommended airport." },
        { q: "Can GPS find Masseria Il Frantoio?", a: "GPS regularly fails on the final approach. ConnectinPuglia drivers have the specific coordinates and access track details." },
        { q: "Can I book a dinner transfer to Masseria Il Frantoio?", a: "Yes — we offer evening transfers for dinner guests arriving from nearby hotels and masserie. Book in advance." },
        { q: "Can I book a return transfer?", a: "Yes — both directions available." },
        { q: "Do you offer day tours from Masseria Il Frantoio?", a: "Yes — all our Puglia tours depart from the masseria." },
        { q: "Which airport is best?", a: "Brindisi Airport (BDS) — approximately 40–45 minutes." },
        { q: "Is this a Relais & Châteaux property?", a: "Yes — Masseria Il Frantoio is a member of Relais & Châteaux." },
        { q: "Can you manage group arrivals?", a: fleetGroupFaq },
      ]}
      testimonials={[
        { text: "The driver took us down a dirt track in the dark and delivered us to the most magical masseria we've ever stayed in. We'd never have found it ourselves.", author: "Sarah & James O.", origin: "Dublin, Ireland" },
      ]}
      internalLinks={[
        { label: 'Transfer from Brindisi Airport', to: '/transfer-from-brindisi-airport' },
        { label: 'Transfer to Ostuni', to: '/transfer-to-ostuni' },
        { label: 'Transfer from Bari Airport', to: '/transfer-from-bari-airport' },
        { label: 'Transfer from Bari Port', to: '/transfer-from-bari-port' },
        { label: 'All Airport Transfers', to: '/airport-transfers' },
      ]}
    />
  )
}

export function TransferToLeAlcoveAlberobello() {
  return (
    <DestinationTransferPage
      metaTitle="Private Transfer to Le Alcove Alberobello | ConnectinPuglia"
      metaDesc="Private airport transfer to Le Alcove, Alberobello from Bari and Brindisi airports. Fixed price, door to door. ConnectinPuglia."
      canonical="https://connectinpuglia.com/transfer-to-le-alcove-alberobello"
      heroImg="/images/properties/le-alcove-alberobello-hero.webp"
      h1="Private Transfer to Le Alcove Alberobello — Fixed Price."
      subheadline="Your driver delivers you to the entrance of Le Alcove, inside Alberobello's UNESCO trulli district — no ZTL worries, no GPS confusion."
      routes={routesToLeAlcove}
      aboutParagraphs={[
        "Le Alcove offers the unique experience of staying inside an authentic Alberobello trullo — the iconic conical stone dwellings that make this UNESCO World Heritage Site one of the most distinctive places to stay in all of Italy. Staying here is to stay inside the landscape itself.",
        "The trulli district of Alberobello (Rione Monti) is a restricted traffic zone. Your ConnectinPuglia driver holds the necessary permits to access hotel drop-off points inside the district, delivering you directly to Le Alcove's reception.",
      ]}
      propertiesServed={[
        { name: 'Le Alcove Alberobello', to: '' },
        { name: 'Il Poeta Contadino', to: '' },
        { name: 'Masseria Il Frantoio', to: '/transfer-to-masseria-il-frantoio' },
        { name: 'Borgo Egnazia', to: '/transfer-to-borgo-egnazia' },
      ]}
      faqs={[
        { q: "How far is Le Alcove from Bari Airport?", a: "Approximately 55 minutes from BRI and 45 minutes from BDS." },
        { q: "Is the Alberobello trulli district restricted traffic?", a: "Yes — a ZTL zone. Private hire drivers hold the permits to access hotel entrances." },
        { q: "Can I book a return transfer?", a: "Yes — both directions available." },
        { q: "Do you offer Valle d'Itria day tours?", a: "Yes — our Valle d'Itria tour covers Alberobello, Locorotondo, and Cisternino." },
        { q: "Which airport is closer to Alberobello?", a: "Both are similar distances — BDS approximately 45 minutes, BRI approximately 55 minutes." },
        { q: "Can you coordinate transfers for a group?", a: fleetGroupFaq },
        { q: "How do I get from Le Alcove to Fasano?", a: "Le Alcove to the Fasano area is approximately 25 minutes. We offer inter-property transfers at fixed prices." },
        { q: "Is there public transport to Alberobello?", a: "There is a train from Bari to Alberobello (Ferrovie del Sud Est) but it is slow and infrequent. A private transfer is faster and more convenient." },
      ]}
      testimonials={[
        { text: "Driver delivered us to Le Alcove's entrance in the trulli district — something we could never have done ourselves in a rental car.", author: "Rebecca & Henry L.", origin: "London, UK" },
      ]}
      internalLinks={[
        { label: 'Transfer from Bari Airport', to: '/transfer-from-bari-airport' },
        { label: 'Transfer from Bari Port', to: '/transfer-from-bari-port' },
        { label: "Transfer to Alberobello & Valle d'Itria", to: '/transfer-to-alberobello-valle-ditria' },
        { label: "Valle d'Itria Day Tour", to: '/tour-valle-ditria' },
        { label: 'All Airport Transfers', to: '/airport-transfers' },
      ]}
    />
  )
}

export function TransferToMasseriaTorreCoccaro() {
  return (
    <DestinationTransferPage
      metaTitle="Private Transfer to Masseria Torre Coccaro | ConnectinPuglia"
      metaDesc="Private airport transfer to Masseria Torre Coccaro from Bari and Brindisi airports. Fixed price, professional driver. ConnectinPuglia."
      canonical="https://connectinpuglia.com/transfer-to-masseria-torre-coccaro"
      heroImg="/images/properties/masseria-torre-coccaro-hero.webp"
      h1="Private Transfer to Masseria Torre Coccaro — Fixed Price."
      subheadline="Your driver delivers you directly to the Masseria Torre Coccaro estate entrance near Fasano — a Relais & Châteaux property with a private beach club."
      routes={routesToFasano}
      aboutParagraphs={[
        "Masseria Torre Coccaro is a beautiful Relais & Châteaux property near Fasano — a 17th-century estate with 37 rooms, a celebrated spa, and a private beach club on the Adriatic coast at Savelletri. It is one of the most complete masseria experiences in Puglia.",
        "The estate is in the same olive-grove belt as Borgo Egnazia and Masseria San Domenico. ConnectinPuglia knows the exact access road and entrance gate and has delivered guests here many times.",
      ]}
      propertiesServed={[
        { name: 'Borgo Egnazia', to: '/transfer-to-borgo-egnazia' },
        { name: 'Masseria San Domenico', to: '/transfer-to-masseria-san-domenico' },
        { name: 'Masseria Torre Maizza', to: '/transfer-to-masseria-torre-maizza' },
        { name: 'Masseria Il Melograno', to: '/transfer-to-masseria-il-melograno' },
      ]}
      faqs={[
        { q: "How far is Masseria Torre Coccaro from the airport?", a: "Approximately 60 minutes from Bari Airport and 30 minutes from Brindisi Airport." },
        { q: "Does ConnectinPuglia know the Torre Coccaro entrance?", a: "Yes — we have completed many transfers to this property and know all access details." },
        { q: "Does the masseria have a private beach?", a: "Yes — at Savelletri, approximately 5 minutes by car. We can arrange beach shuttle transfers." },
        { q: "Can I book a return transfer?", a: "Yes — both directions available." },
        { q: "Do you offer day tours from Masseria Torre Coccaro?", a: "Yes — all our Puglia tours depart from the masseria." },
        { q: "Which airport for Torre Coccaro?", a: "Brindisi Airport (BDS) is closest — approximately 30 minutes." },
        { q: "Can you manage group arrivals?", a: fleetGroupFaq },
        { q: "Is there public transport?", a: "No — a private transfer is required." },
      ]}
      testimonials={[
        { text: "Masseria Torre Coccaro's entrance is on an unmarked road. Our ConnectinPuglia driver went straight to it. We'd never have found it ourselves.", author: "Nadia & Laurent B.", origin: "Paris, France" },
      ]}
      internalLinks={[
        { label: 'Transfer from Brindisi Airport', to: '/transfer-from-brindisi-airport' },
        { label: 'Transfer from Bari Airport', to: '/transfer-from-bari-airport' },
        { label: 'Transfer from Bari Port', to: '/transfer-from-bari-port' },
        { label: 'Transfer to Fasano', to: '/transfer-to-fasano-borgo-egnazia' },
        { label: 'Borgo Egnazia Transfer', to: '/transfer-to-borgo-egnazia' },
        { label: 'All Airport Transfers', to: '/airport-transfers' },
      ]}
    />
  )
}

export function TransferToGrottaPalazzese() {
  return (
    <DestinationTransferPage
      metaTitle="Private Transfer to Grotta Palazzese, Polignano | ConnectinPuglia"
      metaDesc="Private airport transfer to Grotta Palazzese Hotel in Polignano a Mare from Bari Airport. Fixed price, professional driver. ConnectinPuglia."
      canonical="https://connectinpuglia.com/transfer-to-grotta-palazzese"
      heroImg="/images/properties/grotta-palazzese-hero.webp"
      h1="Private Transfer to Grotta Palazzese, Polignano a Mare."
      subheadline="Your driver delivers you to the Grotta Palazzese entrance above the Adriatic cliffs — navigating Polignano's old town on your behalf."
      routes={routesToGrottaPalazzese}
      aboutParagraphs={[
        "Grotta Palazzese in Polignano a Mare is one of the world's most famous hotels and restaurant venues — built into a sea cave carved into the limestone cliff above the Adriatic, it offers a dining and swimming experience unlike anywhere else in Italy.",
        "Polignano's old town has extremely restricted parking — the historic centre is a ZTL zone and vehicle access is limited. Your ConnectinPuglia driver navigates the restricted zone and delivers you directly to the hotel entrance, eliminating all parking and navigation challenges.",
      ]}
      propertiesServed={[
        { name: 'Grotta Palazzese Hotel', to: '' },
        { name: 'Covo dei Saraceni', to: '' },
        { name: 'Masseria Il Melograno', to: '/transfer-to-masseria-il-melograno' },
        { name: 'Borgo Egnazia', to: '/transfer-to-borgo-egnazia' },
      ]}
      faqs={[
        { q: "How far is Grotta Palazzese from Bari Airport?", a: "Polignano a Mare is approximately 35km — about 30–35 minutes from BRI, one of the closest seaside destinations to BRI." },
        { q: "Is Polignano old town a ZTL zone?", a: "Yes — restricted traffic. Private hire drivers hold permits to access hotel drop-off zones." },
        { q: "Can I book a dinner-only transfer to Grotta Palazzese?", a: "Yes — evening transfers for dinner reservations are available. Book in advance, especially in high season." },
        { q: "Can I book a return transfer?", a: "Yes — both directions available." },
        { q: "Can I do day trips from Polignano?", a: "Yes — Alberobello, Monopoli, and Matera are all accessible as day trips." },
        { q: "How do I get from Polignano to Fasano?", a: "Approximately 30 minutes by private transfer." },
        { q: "Which vehicles are available?", a: fleetVehicleFaq },
        { q: "Can you manage group arrivals?", a: fleetGroupFaq },
      ]}
      testimonials={[
        { text: "Grotta Palazzese's entrance is on a narrow cliff road — our ConnectinPuglia driver dropped us exactly at the hotel door in 35 minutes from the airport.", author: "Claudia F.", origin: "Rome, Italy" },
        { text: "We booked a dinner transfer from Fasano to Grotta Palazzese and back. Timed perfectly, driver waited for us — an unforgettable evening, stress-free.", author: "Laurent & Isabelle M.", origin: "Lyon, France" },
      ]}
      internalLinks={[
        { label: 'Transfer from Bari Airport', to: '/transfer-from-bari-airport' },
        { label: 'Transfer from Bari Port', to: '/transfer-from-bari-port' },
        { label: 'Transfer to Polignano a Mare', to: '/transfer-to-polignano-a-mare' },
        { label: 'Transfer to Fasano', to: '/transfer-to-fasano-borgo-egnazia' },
        { label: 'Masseria Il Melograno Transfer', to: '/transfer-to-masseria-il-melograno' },
        { label: 'All Airport Transfers', to: '/airport-transfers' },
      ]}
    />
  )
}
