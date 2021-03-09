const DEFAULT_FILTER_VALUE = 'any'

export const mapFiltersForm = document.querySelector('.map__filters')
export const mapFiltersFormControls = mapFiltersForm.querySelectorAll('.map__filters > select, fieldset')
const housingType = mapFiltersForm.querySelector('#housing-type')
// const housingPrice = mapFiltersForm.querySelector('#housing-price')
// const housingRooms = mapFiltersForm.querySelector('#housing-rooms')
// const housingGuests = mapFiltersForm.querySelector('#housing-guests')


export const compareValues = (element) => {
  return housingType.value === element.offer.type || housingType.value === DEFAULT_FILTER_VALUE
}
export const setFiltersFormChange = (cb) => {
  mapFiltersForm.addEventListener('change', () => {
    cb()
  })
}

