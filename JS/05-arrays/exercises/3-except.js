const numbers = [1, 2, 3, 4, 1, 1];

const output = except(numbers, [3]);
console.log(output);

function except(array, excluded) {
  const output = [];

  for (let value of array) 
    if (!excluded.includes(value)) 
      output.push(value);
  
  return output;
}