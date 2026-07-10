import type { RouteCard } from '../components/DestinationTransferPage'

function bariPort(distance: string, time: string, via: string, recommended?: boolean): RouteCard {
  return {
    airport: 'Bari Port',
    airportCode: 'Bari · Porto di Bari',
    distance,
    time,
    via,
    recommended,
  }
}

export const routesToFasano: RouteCard[] = [
  {
    airport: 'Bari Airport',
    airportCode: 'BRI · Bari Karol Wojtyla',
    distance: '75 km',
    time: 'approx 60 min',
    via: 'SS16 Adriatica',
  },
  {
    airport: 'Brindisi Airport',
    airportCode: 'BDS · Brindisi Papola Casale',
    distance: '40 km',
    time: 'approx 35 min',
    via: 'SS379',
    recommended: true,
  },
  bariPort('65 km', 'approx 55 min', 'SS16 Adriatica'),
]

export const routesToOstuni: RouteCard[] = [
  {
    airport: 'Brindisi Airport',
    airportCode: 'BDS · Brindisi Papola Casale',
    distance: '30 km',
    time: 'approx 25–30 min',
    via: 'SS379 / SP17',
    recommended: true,
  },
  {
    airport: 'Bari Airport',
    airportCode: 'BRI · Bari Karol Wojtyla',
    distance: '110 km',
    time: 'approx 80–90 min',
    via: 'SS16 Adriatica',
  },
  bariPort('80 km', 'approx 65 min', 'SS16 Adriatica'),
]

export const routesToAlberobello: RouteCard[] = [
  {
    airport: 'Bari Airport',
    airportCode: 'BRI · Bari Karol Wojtyla',
    distance: '65 km',
    time: 'approx 55 min',
    via: 'SS96 / SP5',
  },
  {
    airport: 'Brindisi Airport',
    airportCode: 'BDS · Brindisi Papola Casale',
    distance: '55 km',
    time: 'approx 45 min',
    via: 'SS379 / SP23',
    recommended: true,
  },
  bariPort('65 km', 'approx 55 min', 'SS96 / SP5'),
]

export const routesToPolignano: RouteCard[] = [
  {
    airport: 'Bari Airport',
    airportCode: 'BRI · Bari Karol Wojtyla',
    distance: '35 km',
    time: 'approx 30–35 min',
    via: 'SS16 Adriatica',
    recommended: true,
  },
  {
    airport: 'Brindisi Airport',
    airportCode: 'BDS · Brindisi Papola Casale',
    distance: '75 km',
    time: 'approx 55–60 min',
    via: 'SS379 / SS16',
  },
  bariPort('35 km', 'approx 30 min', 'SS16 Adriatica'),
]

export const routesToMonopoli: RouteCard[] = [
  {
    airport: 'Bari Airport',
    airportCode: 'BRI · Bari Karol Wojtyla',
    distance: '50 km',
    time: 'approx 40–45 min',
    via: 'SS16 Adriatica',
  },
  {
    airport: 'Brindisi Airport',
    airportCode: 'BDS · Brindisi Papola Casale',
    distance: '60 km',
    time: 'approx 45–50 min',
    via: 'SS379 / SS16',
  },
  bariPort('45 km', 'approx 35 min', 'SS16 Adriatica'),
]

export const routesToLecce: RouteCard[] = [
  {
    airport: 'Brindisi Airport',
    airportCode: 'BDS · Brindisi Papola Casale',
    distance: '38 km',
    time: 'approx 35–40 min',
    via: 'SS613',
    recommended: true,
  },
  {
    airport: 'Bari Airport',
    airportCode: 'BRI · Bari Karol Wojtyla',
    distance: '135 km',
    time: 'approx 90–100 min',
    via: 'SS16 Adriatica',
  },
  bariPort('150 km', 'approx 90 min', 'SS16 Adriatica / SS613'),
]

export const routesToMatera: RouteCard[] = [
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
  },
  bariPort('70 km', 'approx 80 min', 'SS96 / SP7'),
]

export const routesToTrani: RouteCard[] = [
  {
    airport: 'Bari Airport',
    airportCode: 'BRI · Bari Karol Wojtyla',
    distance: '45 km',
    time: 'approx 35–40 min',
    via: 'SS16 Adriatica north',
    recommended: true,
  },
  {
    airport: 'Brindisi Airport',
    airportCode: 'BDS · Brindisi Papola Casale',
    distance: '155 km',
    time: 'approx 110–120 min',
    via: 'SS16 Adriatica',
  },
  bariPort('50 km', 'approx 40 min', 'SS16 Adriatica north'),
]

export const routesToMelograno: RouteCard[] = [
  {
    airport: 'Bari Airport',
    airportCode: 'BRI · Bari Karol Wojtyla',
    distance: '55 km',
    time: 'approx 50–55 min',
    via: 'SS16 Adriatica',
    recommended: true,
  },
  {
    airport: 'Brindisi Airport',
    airportCode: 'BDS · Brindisi Papola Casale',
    distance: '55 km',
    time: 'approx 45–50 min',
    via: 'SS379 / SS16',
  },
  bariPort('50 km', 'approx 50 min', 'SS16 Adriatica'),
]

export const routesToIlFrantoio: RouteCard[] = [
  {
    airport: 'Brindisi Airport',
    airportCode: 'BDS · Brindisi Papola Casale',
    distance: '45 km',
    time: 'approx 40–45 min',
    via: 'SS379 / SP17',
    recommended: true,
  },
  {
    airport: 'Bari Airport',
    airportCode: 'BRI · Bari Karol Wojtyla',
    distance: '95 km',
    time: 'approx 80–85 min',
    via: 'SS16 Adriatica',
  },
  bariPort('85 km', 'approx 75 min', 'SS16 Adriatica'),
]

export const routesToLeAlcove: RouteCard[] = [
  {
    airport: 'Bari Airport',
    airportCode: 'BRI · Bari Karol Wojtyla',
    distance: '65 km',
    time: 'approx 55 min',
    via: 'SS96 / SP5',
    recommended: true,
  },
  {
    airport: 'Brindisi Airport',
    airportCode: 'BDS · Brindisi Papola Casale',
    distance: '55 km',
    time: 'approx 45 min',
    via: 'SS379 / SP23',
  },
  bariPort('65 km', 'approx 55 min', 'SS96 / SP5'),
]

export const routesToGrottaPalazzese: RouteCard[] = [
  {
    airport: 'Bari Airport',
    airportCode: 'BRI · Bari Karol Wojtyla',
    distance: '35 km',
    time: 'approx 30–35 min',
    via: 'SS16 Adriatica',
    recommended: true,
  },
  {
    airport: 'Brindisi Airport',
    airportCode: 'BDS · Brindisi Papola Casale',
    distance: '75 km',
    time: 'approx 55–60 min',
    via: 'SS379 / SS16',
  },
  bariPort('35 km', 'approx 30 min', 'SS16 Adriatica'),
]
