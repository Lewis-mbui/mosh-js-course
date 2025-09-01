const numbers = [1, 2, 3, 4];

const count = countOccurences(numbers, 1);
console.log(count);

/*
function countOccurences(array, searchElement) {
  let count = 0;

  for (let value of array) 
    if (value === searchElement)
      count += 1;

  return count;
} */

function countOccurences(array, searchElement) {
  return array.reduce((accumulator, current) => {
    let occurrence = (current === searchElement) ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}