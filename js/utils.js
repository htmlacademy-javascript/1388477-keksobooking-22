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
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}
export const getRandomLengthUniqArray = (array) => {
  shuffleArray(array)
  const newArray = array.slice(getRandomInt(0, array.length - 1))
  return newArray
}

export const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};
