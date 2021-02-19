const adForm = document.querySelector('.ad-form')
const housingType = adForm.querySelector('#type')
const pricePerNight = adForm.querySelector('#price')
const typeToMinPriceRange = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
}
const initPricePerNight = () =>{
  pricePerNight.setAttribute('min', typeToMinPriceRange[housingType.value])
  pricePerNight.placeholder = typeToMinPriceRange[housingType.value]
}
housingType.addEventListener('change', initPricePerNight)

adForm.addEventListener('change', (evt) => {
  if (evt.target.name === 'timein' || evt.target.name === 'timeout') {
    adForm.timein.value = evt.target.value
    adForm.timeout.value = evt.target.value
  }
})
initPricePerNight()
