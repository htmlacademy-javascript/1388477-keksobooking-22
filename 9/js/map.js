import {adFormAddressControl, setPageActive} from './ad-form.js'
import {getData} from './api.js'
import {createCardElements} from './cards.js'

/* global L:readonly */
const CenterOfTokyoCoords = {
  LATITUDE: 35.68261672982978,
  LONGTITUDE: 139.7528278025191,
}

export const getAddressValue = () => `${(mainPinMarker.getLatLng().lat).toFixed(5)}, ${(mainPinMarker.getLatLng().lng).toFixed(5)}`

const onMainPinMarkerMoveend = () => {
  adFormAddressControl.value = getAddressValue()
}

const onMapLoad = () => {
  setPageActive()
  getData((offers) => {
    createCardElements(offers);
    renderMarkers(offers, createCardElements(offers))
  })
}

const map = L.map('map-canvas')
  .on('load', onMapLoad)
  .setView(
    {
      lat: CenterOfTokyoCoords.LATITUDE,
      lng: CenterOfTokyoCoords.LONGTITUDE,
    },
    10,
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

export const mainPinMarker = L.marker(
  {
    lat: CenterOfTokyoCoords.LATITUDE,
    lng: CenterOfTokyoCoords.LONGTITUDE,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
export const renderMarkers = (offers, cardElements) => {
  offers.forEach(({location}, index) =>{
    const lat = location.lat
    const lng = location.lng

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
  } )
}

export const setMainPinMarkerDefPos = () => {
  mainPinMarker.setLatLng(L.latLng(CenterOfTokyoCoords.LATITUDE, CenterOfTokyoCoords.LONGTITUDE))
}

export const setAddressControlValueDefault = () => {
  adFormAddressControl.value = getAddressValue();
}

mainPinMarker.addTo(map);

setAddressControlValueDefault()

mainPinMarker.on('moveend', onMainPinMarkerMoveend)

