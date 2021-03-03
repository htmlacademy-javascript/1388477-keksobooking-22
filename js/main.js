import './data.js'
import './utils.js'
import './cards.js'
import './ad-form.js'
import './map.js'
import './api.js'
import './popups.js'
import {createCardElements} from './cards.js'
import {renderMarkers} from './map.js'
import {getData} from './api.js'
import {showErrAlert} from './popups.js'

getData((offers) => {
  createCardElements(offers);
  renderMarkers(offers, createCardElements(offers))
})


// fetch('https://22.javascript.pages.academy/keksobooking/data')
//   .then((response) => response.json())
//   .then((offers) => {
//     createCardElements(offers);
//     renderMarkers(offers, createCardElements(offers))
//   })
//   .catch(() => {
//     showErrAlert('Не удалось получить данные с сервера')
//   })

