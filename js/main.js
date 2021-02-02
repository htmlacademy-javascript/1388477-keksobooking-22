const getRandomInt = (min, max) =>{
  if (min >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

const getRandomFloat = (min, max, decimals = 2) =>{
  if(min >= 0 && max > min) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
  }
}
getRandomInt(7,10)
getRandomFloat(10,20)
