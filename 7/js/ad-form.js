export const adForm = document.querySelector('.ad-form')
export const adFormFieldsets = adForm.querySelectorAll('fieldset')
export const mapFiltersForm = document.querySelector('.map__filters')
export const mapFiltersFormControls = mapFiltersForm.querySelectorAll(' .map__filters > select, fieldset')
export const adFormAddressControl = adForm.querySelector('#address')
const housingType = adForm.querySelector('#type')
const pricePerNight = adForm.querySelector('#price')
const typeToMinPriceRange = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
}

const setAdFormDisabled = () => {
  adForm.classList.add('ad-form--disabled')
  adFormFieldsets.forEach((fieldset) => fieldset.setAttribute('disabled', ''))
  mapFiltersForm.classList.add('map__filters--disabled')
  mapFiltersFormControls.forEach((childElement) => childElement.setAttribute('disabled', ''))
}

const onHousingTypeSelectChange = () =>{
  pricePerNight.setAttribute('min', typeToMinPriceRange[housingType.value])
  pricePerNight.placeholder = typeToMinPriceRange[housingType.value]
}

housingType.addEventListener('change', onHousingTypeSelectChange)

adForm.addEventListener('change', (evt) => {
  if (evt.target.name === 'timein' || evt.target.name === 'timeout') {
    adForm.timein.value = evt.target.value
    adForm.timeout.value = evt.target.value
  }
})
onHousingTypeSelectChange()
setAdFormDisabled()
