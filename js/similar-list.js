import {createOffers, housingTypeTranslation} from  './data.js'
const similarListElement = document.querySelector('#map-canvas')
const similarOfferTemplate = document.querySelector('#card').content.querySelector('.popup')
const similarOffers = createOffers()
const similarListFragment = document.createDocumentFragment()
similarOffers.forEach(({offer,author}) => {
  const offerElement = similarOfferTemplate.cloneNode(true)
  offerElement.querySelector('.popup__title').textContent = offer.title
  offerElement.querySelector('.popup__text--address').textContent = offer.address
  offerElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`
  offerElement.querySelector('.popup__type').textContent = housingTypeTranslation[offer.type]
  offerElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`
  offerElement.querySelector('.popup__features').innerHTML = ''
  offerElement.querySelector('.popup__features').insertAdjacentHTML('beforeend', offer.features.map((feature) => `<li class="popup__feature popup__feature--${feature}"></li>`).join(''))
  offerElement.querySelector('.popup__description').textContent = offer.description
  offerElement.querySelector('.popup__photos').innerHTML = ''
  offerElement.querySelector('.popup__photos').insertAdjacentHTML('beforeend', offer.photos.map((feature) => `<img src="${feature}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`).join(''))
  offerElement.querySelector('.popup__avatar').src = author.avatar
  similarListFragment.appendChild(offerElement)
})
similarListElement.appendChild(similarListFragment)
