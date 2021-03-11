import {adFormAddressControl, setPageActive, setFiltersFormActive} from './ad-form.js'
import {getData} from './api.js'
import {createCardElements} from './cards.js'
import {getFilteredOffers,setFiltersFormChange} from './filters.js'
import {debounceEvent} from './utils.js'
import L from 'leaflet'

const RERENDER_DELAY = 500;

const CenterOfTokyoCoords = {
  LATITUDE: 35.68261672982978,
  LONGTITUDE: 139.7528278025191,
};

export const getAddressValue = () => `${(mainPinMarker.getLatLng().lat).toFixed(5)}, ${(mainPinMarker.getLatLng().lng).toFixed(5)}`;

const onMainPinMarkerMoveend = () => {
  adFormAddressControl.value = getAddressValue();
};

const onMapLoad = () => {
  setPageActive();
  getData((offers) => {
    renderMarkers(offers, createCardElements(offers));
    setFiltersFormActive();
    setFiltersFormChange(debounceEvent(() => renderMarkers(offers, createCardElements(offers)), RERENDER_DELAY));
  });
};

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
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

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

const markers = L.layerGroup().addTo(map);

export const renderMarkers = (offers, cardElements) => {
  markers.clearLayers();
  getFilteredOffers(offers).forEach(({location}, index) =>{
    const lat = location.lat;
    const lng = location.lng;

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
      .addTo(markers)
      .bindPopup(
        cardElements[index],
        {
          keepInView: true,
        },
      );
  } );
};

export const setMainPinMarkerDefPos = () => {
  mainPinMarker.setLatLng(L.latLng(CenterOfTokyoCoords.LATITUDE, CenterOfTokyoCoords.LONGTITUDE));
}

export const setAddressControlValueDefault = () => {
  adFormAddressControl.value = getAddressValue();
}

mainPinMarker.addTo(map);

setAddressControlValueDefault();

mainPinMarker.on('moveend', onMainPinMarkerMoveend);

