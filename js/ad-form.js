const adForm = document.querySelector('.ad-form')
const housingType = adForm.querySelector('#type')
const pricePerNight = adForm.querySelector('#price')
const checkInTime = adForm.querySelector('#timein')
const checkOutTime = adForm.querySelector('#timeout')
const typeToMinPriceRange = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
}
housingType.addEventListener('change', () => {
  pricePerNight.setAttribute('min',typeToMinPriceRange[housingType.value] )
  pricePerNight.placeholder = typeToMinPriceRange[housingType.value]
})

adForm.addEventListener('change', (evt) => {
  adForm.timein.value = evt.target.value
  adForm.timeout.value = evt.target.value
  console.dir(adForm)
  console.log(evt.target)
  console.log(adForm.timein.value)
})
console.log(adForm.timein)


