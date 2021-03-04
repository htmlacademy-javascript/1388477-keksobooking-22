import './data.js'
import './utils.js'
import './cards.js'
import './ad-form.js'
import './map.js'
import './api.js'
import './popups.js'
import {setMainPinMarkerDefPos, setAddressControlValueDefault} from './map.js'
import {resetForms, setAdFormSubmit} from './ad-form.js'

export const resetPageAfterSendingData = () => {
  resetForms();
  setMainPinMarkerDefPos()
  setAddressControlValueDefault()
}

setAdFormSubmit(resetPageAfterSendingData)


