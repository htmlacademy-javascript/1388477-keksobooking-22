import {sendData} from './api.js'
import {showNotificationPopup, succesPopupTemplate, errorPopupTemplate} from './popups.js'
import {mapFiltersForm, mapFiltersFormControls} from './filters.js'
import {resetPageAfterSendingData} from './main.js'
import {avatarFileChooser, avatarPreview,housingPhotoFileChooser, housingPhotoPreview, resetPreview} from './photo-preview'

const TitleValueLength = {
  MIN: 30,
  MAX: 100,
};

export const adForm = document.querySelector('.ad-form');
export const adFormFieldsets = adForm.querySelectorAll('fieldset');
export const adFormAddressControl = adForm.querySelector('#address');
export const adFormSubmitBtn = adForm.querySelector('.ad-form__submit');
const adFormTitleControl = adForm.querySelector('#title');
const adFormRoomsControl = adForm.querySelector('#room_number');
const adFormGuestsControl = adForm.querySelector('#capacity');
const adFormResetBtn = adForm.querySelector('.ad-form__reset');
const housingType = adForm.querySelector('#type');
const pricePerNight = adForm.querySelector('#price');

const typeToMinPriceRange = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
};

const setPageNotActive = () => {
  adForm.classList.add('ad-form--disabled');
  adFormFieldsets.forEach((fieldset) => fieldset.setAttribute('disabled', ''));
  mapFiltersForm.classList.add('map__filters--disabled');
  mapFiltersFormControls.forEach((childElement) => childElement.setAttribute('disabled', ''));
};

export const setPageActive = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormFieldsets.forEach((fieldset) => fieldset.removeAttribute('disabled'));
};

export const setFiltersFormActive = () => {
  mapFiltersForm.classList.remove('map__filters--disabled');
  mapFiltersFormControls.forEach((childElement) => childElement.removeAttribute('disabled'));
};

const onHousingTypeSelectChange = () =>{
  pricePerNight.setAttribute('min', typeToMinPriceRange[housingType.value]);
  pricePerNight.placeholder = typeToMinPriceRange[housingType.value];
};

adFormTitleControl.addEventListener('input', () => {
  const valueLength = adFormTitleControl.value.length;
  if (valueLength < TitleValueLength.MIN) {
    adFormTitleControl.setCustomValidity('Ещё ' + (TitleValueLength.MIN - valueLength) +' симв.')
  } else if (valueLength > TitleValueLength.MAX) {
    adFormTitleControl.setCustomValidity('Удалите лишние ' + (valueLength - TitleValueLength.MAX) +' симв.')
  } else {
    adFormTitleControl.setCustomValidity('')
  }

  adFormTitleControl.reportValidity()
});

const roomsToGuestsRatio = {
  '1': '1',
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100':'0',
};

const validateCapacity = () => {
  const capacity = adFormGuestsControl.value;
  const rooms = adFormRoomsControl.value;
  const allowed = roomsToGuestsRatio[rooms];
  const isValid = allowed.includes(capacity);
  adFormGuestsControl.setCustomValidity(isValid ? '' : 'не подходит');
  adFormGuestsControl.reportValidity();
};

const onFormChange = (evt) => {
  if (evt.target === adFormRoomsControl || evt.target === adFormGuestsControl) {
    validateCapacity()
  }
};

adFormResetBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetPageAfterSendingData();

});

housingType.addEventListener('change', onHousingTypeSelectChange);

adForm.addEventListener('change', onFormChange);

adForm.addEventListener('change', (evt) => {
  if (evt.target.name === 'timein' || evt.target.name === 'timeout') {
    adForm.timein.value = evt.target.value;
    adForm.timeout.value = evt.target.value;
  }
});

export const setAdFormSubmit = (onSuccess) =>{
  adForm.addEventListener('submit', (evt) =>{
    evt.preventDefault();
    sendData(() => {
      showNotificationPopup(succesPopupTemplate);
      onSuccess();
    },
    () => showNotificationPopup(errorPopupTemplate),
    new FormData(evt.target));
  });
};

export const resetForms = () => {
  adForm.reset();
  mapFiltersForm.reset();
  resetPreview(housingPhotoFileChooser,housingPhotoPreview);
  resetPreview(avatarFileChooser, avatarPreview);

}

onHousingTypeSelectChange();
setPageNotActive();
