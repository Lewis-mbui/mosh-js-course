const numbers = [1, 2, 8, 9, 4, 12, 3];

const max = getMax(numbers);

console.log(max);

/*
function getMax(array) {
  if (array.length === 0) return undefined;

  let maxNumber = array[0];

  for (let element of array) 
    if (element > maxNumber) 
      maxNumber = element;

  return maxNumber;
}*/

function getMax(array) {
  /*
  if (array.length === 0) return undefined;

  return array.reduce((accumulator, current) => {
    return (accumulator > current) ? accumulator : current;
  }); */
  if (array.length === 0) return undefined;

  return array.reduce((a, b) => (a > b) ? a : b);
}
