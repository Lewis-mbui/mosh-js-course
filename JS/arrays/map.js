/*
// Basic functioning
const array = [1, 4, 9, 16];

const mapped = array.map((x) => x * 2);

console.log(mapped);

// Generating some markup using map
const numbers = [1, 2, 4, -3, 6];

const items = numbers.map((value) => '<li>' + value + '</li>');
console.log(items);
const html = '<ul>' + items.join('') + '</ul>';

console.log(html);
*/
const numbers = [1, 2, 4, -3, 6];

// Chaining
const items = numbers
  .filter(n => n >= 0)
  .map(value => ({value: value}))
  .filter(obj => obj.value > 2)
  .map(obj => obj.value);

console.log(items);
