import {isEscEvent} from './utils.js';

const ALERT_SHOW_TIME = 4000;

export const succesPopupTemplate = document.querySelector('#success').content.querySelector('.success');

export const errorPopupTemplate = document.querySelector('#error').content.querySelector('.error');

const documentMainElement = document.querySelector('main');

let popupElement = null;

export const showNotificationPopup = (popupTemplate) => {
  popupElement = popupTemplate.cloneNode(true);
  popupElement.style.zIndex = '1000';
  documentMainElement.appendChild(popupElement);
  document.addEventListener('keydown', onPopupEscKeydown);
  popupElement.addEventListener('click', onPopupClick)
}


const closeNotificationPopup = () => {
  if (popupElement) {
    popupElement.remove();
    document.removeEventListener('keydown', onPopupEscKeydown);
  }
}


export const showErrAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

const onPopupEscKeydown = (evt) => {
  if(isEscEvent(evt)) {
    evt.preventDefault();
    closeNotificationPopup();
  }
}

const onPopupClick = () => {
  closeNotificationPopup();
}

