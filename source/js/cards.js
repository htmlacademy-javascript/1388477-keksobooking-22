import {getFilteredOffers} from './filters.js'

const housingTypeTranslation = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
};

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const setFeatures = (element, source) => {
  if(!source.length) {
    element.remove();
  }else{
    element.insertAdjacentHTML('beforeend', source.map((feature) => `<li class="popup__feature popup__feature--${feature}"></li>`).join(''));
  }
};

const setPhotos = (element, source) => {
  if(!source.length){
    element.remove();
  }else{
    element.insertAdjacentHTML('beforeend', source.map((photo) => `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`).join(''));
  }
};

export const createCardElements = (offers) => {
  const cards = getFilteredOffers(offers).map(({offer,author}) => {
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.popup__title').textContent = offer.title;
    cardElement.querySelector('.popup__text--address').textContent = offer.address;
    cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
    cardElement.querySelector('.popup__type').textContent = housingTypeTranslation[offer.type];
    cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    cardElement.querySelector('.popup__features').innerHTML = '';
    setFeatures(cardElement.querySelector('.popup__features'), offer.features);
    cardElement.querySelector('.popup__description').textContent = offer.description;
    cardElement.querySelector('.popup__photos').innerHTML = '';
    setPhotos(cardElement.querySelector('.popup__photos'), offer.photos);
    cardElement.querySelector('.popup__avatar').src = author.avatar;
    return cardElement;
  })
  return cards;
}

