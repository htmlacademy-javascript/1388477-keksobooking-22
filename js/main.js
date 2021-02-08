'use strict'
const HOUSING_TYPES = ['palace', 'flat', 'house', 'bungalow']
const CHECKIN__TIMES = ['12:00', '13:00', '14:00']
const CHECKOUT__TIMES = ['12:00', '13:00', '14:00']
const FEATURE__ITEMS = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
]
const PHOTO__URLS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]
const PRICE = {
  min: 0,
  max: 1000000,
}
const ROOMS_NUMBER = {
  min: 0,
  max: 100,
}
const GUESTS_NUMBER = {
  min: 0,
  max: 100,
}

const COORDINATE_RANGE = {
  latitude: {
    from: 35.65,
    to: 35.7,
  },
  longtitude: {
    from: 139.7,
    to: 139.8,
  },
  decimals: 5,
}
const AUTHOR_ID_RANGE = {
  min: 1,
  max: 8,
}
const SIMILAR_OFFER_COUNT = 10;
const getRandomInt = (min, max) => {
  if (min >= 0 && max > min) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
const getRandomFloat = (min, max, decimals = 2) => {
  if (min >= 0 && max > min) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(decimals))
  }
}
const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)]
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}
const getRandomLengthUniqArray = (array) => {
  const newArray = array.slice(getRandomInt(0, array.length - 1))
  shuffleArray(newArray)
  return newArray
}

const createOffer = () => {
  const xLocation = getRandomFloat(COORDINATE_RANGE.latitude.from, COORDINATE_RANGE.latitude.to, COORDINATE_RANGE.decimals)
  const yLocation = getRandomFloat(COORDINATE_RANGE.longtitude.from, COORDINATE_RANGE.longtitude.to, COORDINATE_RANGE.decimals)
  return {
    author: {
      avatar: `img/avatars/user${'0' + getRandomInt(AUTHOR_ID_RANGE.min, AUTHOR_ID_RANGE.max)}.png`,
    },
    offer: {
      title: 'Заголовок',
      address:`${xLocation}, ${yLocation}`,
      price: getRandomInt(PRICE.min, PRICE.max),
      type: getRandomArrayElement(HOUSING_TYPES),
      rooms: getRandomInt(ROOMS_NUMBER.min, ROOMS_NUMBER.max),
      guests: getRandomInt(GUESTS_NUMBER.min, GUESTS_NUMBER.max),
      checkin: getRandomArrayElement(CHECKIN__TIMES),
      checkout: getRandomArrayElement(CHECKOUT__TIMES),
      features: getRandomLengthUniqArray(FEATURE__ITEMS),
      description: 'Описание',
      photos: getRandomLengthUniqArray(PHOTO__URLS),
    },
    location: {
      x: xLocation,
      y: yLocation,
    },
  }
}
const similarOffers = new Array(SIMILAR_OFFER_COUNT).fill(null).map(() => createOffer());
similarOffers
