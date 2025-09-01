// Default sorting
const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
console.log(numbers);

// Numeric Sorting (Ascending order)
const array1 = [1, 30, 4, 21, 100000];
array1.sort((a, b) => a - b);
console.log(array1);

// Numeric Sorting (Descending order)
const array2 = [1, 30, 4, 21, 100000];
array2.sort((a, b) => b - a);
console.log(array2);

// Sorting a list of objects
const courses = [
  {id: 1, name: 'node.js'},
  {id: 2, name: 'Javascript'}
];

courses.sort((a, b) => {
  // Bypassing case sensitivity
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(courses);