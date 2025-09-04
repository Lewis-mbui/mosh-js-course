// Best and modern way to do sum of elements in an array
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum);