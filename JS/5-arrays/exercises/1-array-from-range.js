const numbers = arrayFromRange(-4, 2);

console.log(numbers);

function arrayFromRange(min, max) {
  const numbers = [];

  for (let number = min; number <= max; number++) numbers.push(number);

  return numbers;
}