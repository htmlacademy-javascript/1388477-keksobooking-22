import {showErrAlert} from './popups.js'

export const getData = (onSuccess) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((offers) => onSuccess(offers))
    .catch(() => showErrAlert())
};

export const sendData = (onSuccess, onFail, body) => {
  fetch('https://22.javascript.pages.academy/keksobooking',{method: 'POST',body})
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => onFail());
};

