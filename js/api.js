export const getData = (onSuccess) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((offers) => {
      onSuccess(offers);
    });
};

export const sendData = (onSuccess, onFail, body) => {};

// getData((offers) => {
//   createCardElements(offers);
//   renderMarkers(offers, createCardElements(offers))
// })
