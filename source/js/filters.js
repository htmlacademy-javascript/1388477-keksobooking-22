const ALLOWED_OFFERS_NUMBER = 10;
const DEFAULT_CONTROL_VALUE = 'any';

export const mapFiltersForm = document.querySelector('.map__filters');
export const mapFiltersFormControls = mapFiltersForm.querySelectorAll('.map__filters > select, fieldset');
const housingType = mapFiltersForm.querySelector('#housing-type');
const housingPrice = mapFiltersForm.querySelector('#housing-price');
const housingRooms = mapFiltersForm.querySelector('#housing-rooms');
const housingGuests = mapFiltersForm.querySelector('#housing-guests');


const checkType = ({offer}, control) => {
  return control.value === offer.type || control.value === DEFAULT_CONTROL_VALUE;
};

const checkRooms = ({offer}, control) => {
  return parseInt(control.value) === offer.rooms || control.value === DEFAULT_CONTROL_VALUE;
};

const checkPrice = ({offer}, control) => {
  const LOW_PRICE = 10000;
  const HIGH_PRICE = 50000;

  switch (control.value) {
    case DEFAULT_CONTROL_VALUE: return true;
    case 'middle': return offer.price >= LOW_PRICE && offer.price < HIGH_PRICE;
    case 'low': return offer.price < LOW_PRICE;
    case 'high': return offer.price >= HIGH_PRICE;
    default: return false;
  }
};

const checkFeatures = ({offer}) => {
  const checkedFeatures = mapFiltersForm.querySelectorAll('.map__checkbox:checked');
  let counter = 0;

  checkedFeatures.forEach((feature) => {
    if (offer.features.includes(feature.value)) {
      counter++;
    }
  });

  return counter === checkedFeatures.length;
};

const checkGuests = ({offer}, control) => {
  return parseInt(control.value) === offer.guests || control.value === DEFAULT_CONTROL_VALUE;
};

export const compareFiltersValues = (offer) => {
  return checkType(offer, housingType) &&
  checkRooms(offer, housingRooms) &&
  checkPrice(offer, housingPrice) &&
  checkGuests(offer,housingGuests) &&
  checkFeatures(offer);
};

export const setFiltersFormChange = (cb) => {
  mapFiltersForm.addEventListener('change', () => {
    cb();
  });
};

export const getFilteredOffers = (offers) => {
  const filteredOffers = offers.filter(compareFiltersValues).slice(0, ALLOWED_OFFERS_NUMBER);
  return filteredOffers;
};

