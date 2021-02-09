import {getRandomInt, getRandomFloat, getRandomArrayElement, getRandomLengthUniqArray} from './utils.js'
const HOUSING_TYPES = ['palace', 'flat', 'house', 'bungalow']
const CHECKIN_TIMES = ['12:00', '13:00', '14:00']
const CHECKOUT_TIMES = ['12:00', '13:00', '14:00']
const FEATURE_ITEMS = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
]
const PHOTO_URLS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]
const Price = {
  MIN: 0,
  MAX: 1000000,
}
const RoomsNumber = {
  MIN: 0,
  MAX: 100,
}
const GuestsNumber = {
  MIN: 0,
  MAX: 100,
}

const CoordinateRange = {
  Latitude: {
    FROM: 35.65,
    TO: 35.7,
  },
  Longtitude: {
    FROM: 139.7,
    TO: 139.8,
  },
  DECIMALS: 5,
}
const AuthorIdRange = {
  MIN: 1,
  MAX: 8,
}
const SIMILAR_OFFER_COUNT = 10;
const createOffer = () => {
  const xLocation = getRandomFloat(CoordinateRange.Latitude.FROM, CoordinateRange.Latitude.TO, CoordinateRange.DECIMALS)
  const yLocation = getRandomFloat(CoordinateRange.Longtitude.FROM, CoordinateRange.Longtitude.TO, CoordinateRange.DECIMALS)
  return {
    author: {
      avatar: `img/avatars/user0${getRandomInt(AuthorIdRange.MIN, AuthorIdRange.MAX)}.png`,
    },
    offer: {
      title: 'Заголовок',
      address:`${xLocation}, ${yLocation}`,
      price: getRandomInt(Price.MIN, Price.MAX),
      type: getRandomArrayElement(HOUSING_TYPES),
      rooms: getRandomInt(RoomsNumber.MIN, RoomsNumber.MAX),
      guests: getRandomInt(GuestsNumber.MIN, GuestsNumber.MAX),
      checkin: getRandomArrayElement(CHECKIN_TIMES),
      checkout: getRandomArrayElement(CHECKOUT_TIMES),
      features: getRandomLengthUniqArray(FEATURE_ITEMS),
      description: 'Описание',
      photos: getRandomLengthUniqArray(PHOTO_URLS),
    },
    location: {
      x: xLocation,
      y: yLocation,
    },
  }
}
const similarOffers = new Array(SIMILAR_OFFER_COUNT).fill(null).map(() => createOffer());
similarOffers

