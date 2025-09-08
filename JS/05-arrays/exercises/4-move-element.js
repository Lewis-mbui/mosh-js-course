const numbers = [1, 2, 3, 4];

console.log(move(numbers, 1, 2));

/*
function move(array, index, offset) {
  const output = [];
  // Element to be moved
  const number = array[index]; 
  // index at which to put the desired element in the new array
  const newIndex = index + offset; 

  // Check validity of new index
  if (newIndex < 0 || newIndex > array.length - 1)
    console.error('Invalid offset');
  else {
    // Copy values of array to the new array
    for (let value of array) output.push(value);

    // Remove the desired number from the new array
    output.splice(index, 1);
    // Add the desired number at desired index
    output.splice(newIndex, 0, number);
    return output;
  }
}
*/

function move(array, index, offset) {
  const position = index + offset;

  if (position >= array.length || position < 0) {
    console.error('Invalid offset!!');
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}