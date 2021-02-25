import {adForm, adFormFieldsets, mapFiltersForm, mapFiltersFormControls, adFormAddressControl} from './ad-form.js'
import {cardElements} from './cards.js'
import {similarOffers} from './cards.js'

/* global L:readonly */
const CenterOfTokyoCoords = {
  LATITUDE: 35.68261672982978,
  LONGTITUDE: 139.7528278025191,
}

const getAddressValue = () => `${(mainPinMarker.getLatLng().lat).toFixed(5)}, ${(mainPinMarker.getLatLng().lng).toFixed(5)}`

const onMainPinMarkerMoveend = () => {
  adFormAddressControl.value = getAddressValue()
}

const onMapLoad = () => {
  adForm.classList.remove('ad-form--disabled')
  adFormFieldsets.forEach((fieldset) => fieldset.removeAttribute('disabled'))
  mapFiltersForm.classList.remove('map__filters--disabled')
  mapFiltersFormControls.forEach((childElement) => childElement.removeAttribute('disabled'))
}

const map = L.map('map-canvas')
  .on('load', onMapLoad)
  .setView(
    {
      lat: CenterOfTokyoCoords.LATITUDE,
      lng: CenterOfTokyoCoords.LONGTITUDE,
    },
    12,
  )
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map)

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
})

const mainPinMarker = L.marker(
  {
    lat: CenterOfTokyoCoords.LATITUDE,
    lng: CenterOfTokyoCoords.LONGTITUDE,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

similarOffers.forEach(({location}, index) =>{
  const lat = location.x
  const lng = location.y

  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(
      cardElements[index],
      {
        keepInView: true,
      },
    );
})


mainPinMarker.addTo(map);

adFormAddressControl.value = getAddressValue()

mainPinMarker.on('moveend', onMainPinMarkerMoveend)

