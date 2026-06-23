import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

// Main pages
import Home from './pages/Home'
import AirportTransfers from './pages/AirportTransfers'
import PrivateToursPuglia from './pages/PrivateToursPuglia'
import B2BHotelsMasserie from './pages/B2BHotelsMasserie'
import CorporateEvents from './pages/CorporateEvents'
import WeddingTransfer from './pages/WeddingTransfer'
import OurFleet from './pages/OurFleet'
import AboutUs from './pages/AboutUs'
import QuoteContact from './pages/QuoteContact'

// Airport & Port transfers
import TransferBariAirport from './pages/TransferBariAirport'
import TransferBrindisiAirport from './pages/TransferBrindisiAirport'
import TransferBariTrainStation from './pages/TransferBariTrainStation'
import TransferBrindisiPort from './pages/TransferBrindisiPort'

// Destination pages (/transfer-to-X)
import TransferToFasano from './pages/destinations/TransferToFasano'
import TransferToOstuni from './pages/destinations/TransferToOstuni'
import TransferToAlberobello from './pages/destinations/TransferToAlberobello'
import TransferToPolignano from './pages/destinations/TransferToPolignano'
import TransferToMonopoli from './pages/destinations/TransferToMonopoli'
import TransferToLecce from './pages/destinations/TransferToLecce'
import TransferToMatera from './pages/destinations/TransferToMatera'
import TransferToTrani from './pages/destinations/TransferToTrani'

// Luxury property pages (/transfer-to-X)
import {
  TransferToBorgoEgnazia,
  TransferToMasseriaSanDomenico,
  TransferToMasseriaTorreMaizza,
  TransferToMasseriaIlMelograno,
  TransferToMasseriaIlFrantoio,
  TransferToLeAlcoveAlberobello,
  TransferToMasseriaTorreCoccaro,
  TransferToGrottaPalazzese,
} from './pages/properties/PropertyTransferPages'

// Tour sub-pages
import {
  TourValleDItria,
  TourWinePuglia,
  TourSalento,
  TourBaroquePuglia,
  TourFoodOliveOil,
} from './pages/tours/TourPages'

// B2B sub-pages
import {
  B2BMasserieResorts,
  B2BHotels,
  B2BTravelDesigners,
  B2BWeddingPlanners,
} from './pages/b2b/B2BPages'

// GEO / AI pages
import HowToGetAroundPuglia from './pages/HowToGetAroundPuglia'
import HowToGetToMasseria from './pages/HowToGetToMasseria'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main pages */}
          <Route index element={<Home />} />
          <Route path="airport-transfers" element={<AirportTransfers />} />
          <Route path="private-tours-puglia" element={<PrivateToursPuglia />} />
          <Route path="b2b-hotels-masserie" element={<B2BHotelsMasserie />} />
          <Route path="corporate-events" element={<CorporateEvents />} />
          <Route path="wedding-transfer-puglia" element={<WeddingTransfer />} />
          <Route path="our-fleet" element={<OurFleet />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="quote-contact" element={<QuoteContact />} />

          {/* Airport & Port */}
          <Route path="transfer-from-bari-airport" element={<TransferBariAirport />} />
          <Route path="transfer-from-brindisi-airport" element={<TransferBrindisiAirport />} />
          <Route path="transfer-from-bari-train-station" element={<TransferBariTrainStation />} />
          <Route path="transfer-from-brindisi-port" element={<TransferBrindisiPort />} />

          {/* Destinations */}
          <Route path="transfer-to-fasano-borgo-egnazia" element={<TransferToFasano />} />
          <Route path="transfer-to-ostuni" element={<TransferToOstuni />} />
          <Route path="transfer-to-alberobello-valle-ditria" element={<TransferToAlberobello />} />
          <Route path="transfer-to-polignano-a-mare" element={<TransferToPolignano />} />
          <Route path="transfer-to-monopoli" element={<TransferToMonopoli />} />
          <Route path="transfer-to-lecce" element={<TransferToLecce />} />
          <Route path="transfer-to-matera-from-puglia" element={<TransferToMatera />} />
          <Route path="transfer-to-trani" element={<TransferToTrani />} />

          {/* Luxury Properties */}
          <Route path="transfer-to-borgo-egnazia" element={<TransferToBorgoEgnazia />} />
          <Route path="transfer-to-masseria-san-domenico" element={<TransferToMasseriaSanDomenico />} />
          <Route path="transfer-to-masseria-torre-maizza" element={<TransferToMasseriaTorreMaizza />} />
          <Route path="transfer-to-masseria-il-melograno" element={<TransferToMasseriaIlMelograno />} />
          <Route path="transfer-to-masseria-il-frantoio" element={<TransferToMasseriaIlFrantoio />} />
          <Route path="transfer-to-le-alcove-alberobello" element={<TransferToLeAlcoveAlberobello />} />
          <Route path="transfer-to-masseria-torre-coccaro" element={<TransferToMasseriaTorreCoccaro />} />
          <Route path="transfer-to-grotta-palazzese" element={<TransferToGrottaPalazzese />} />

          {/* Private Tour sub-pages */}
          <Route path="tour-valle-ditria" element={<TourValleDItria />} />
          <Route path="tour-wine-puglia" element={<TourWinePuglia />} />
          <Route path="tour-salento" element={<TourSalento />} />
          <Route path="tour-baroque-puglia" element={<TourBaroquePuglia />} />
          <Route path="tour-food-olive-oil" element={<TourFoodOliveOil />} />

          {/* B2B sub-pages */}
          <Route path="b2b-masserie-resorts" element={<B2BMasserieResorts />} />
          <Route path="b2b-hotels" element={<B2BHotels />} />
          <Route path="b2b-travel-designers-dmc" element={<B2BTravelDesigners />} />
          <Route path="b2b-wedding-planners" element={<B2BWeddingPlanners />} />

          {/* GEO / AI pages */}
          <Route path="how-to-get-around-puglia-without-a-car" element={<HowToGetAroundPuglia />} />
          <Route path="how-to-get-to-a-masseria-in-puglia" element={<HowToGetToMasseria />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
