import './photo-preview.js'
import {setMainPinMarkerDefPos, setAddressControlValueDefault} from './map.js'
import {resetForms, setAdFormSubmit} from './ad-form.js'
import 'leaflet/dist/leaflet.css';

export const resetPageAfterSendingData = () => {
  resetForms();
  setMainPinMarkerDefPos();
  setAddressControlValueDefault();
};

setAdFormSubmit(resetPageAfterSendingData);
