export const getRandomInt = (min, max) => {
  if (min >= 0 && max > min) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
export const getRandomFloat = (min, max, decimals = 2) => {
  if (min >= 0 && max > min) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(decimals))
  }
}

export const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)]


export const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};
