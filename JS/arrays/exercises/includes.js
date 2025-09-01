const numbers = [1, 2, 3, 4, 5];

console.log(includes(numbers, 9));

// function includes(array, searchElement) {
//   let isTrue = 'false';

//   array.forEach((number) => {
//     if (number === searchElement) isTrue = 'true';
//   });

//   console.log(isTrue);
// }

function includes(array, searchElement) {
  for (let element of array)
    if (element === searchElement) return true
  return false;
}