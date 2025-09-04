const numbers = [1, 2, 3, 4];

const allPositive = numbers.every((value) => {
  return value >= 0;
});

const numbers2 = [1, 2, -4, 5];

const atLeastOnePositive = numbers2.some((value) => {
  return value >= 0;
});

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(allPositive);
console.log(atLeastOnePositive);
console.log(array1.every(isBelowThreshold));