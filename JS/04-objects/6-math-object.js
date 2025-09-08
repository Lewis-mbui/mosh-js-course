//Getting a random number between 2 values

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(getRandomNumber(1, 10));

console.log(Math.round(1.9));

console.log(Math.max(1,2,3,4,5,9));