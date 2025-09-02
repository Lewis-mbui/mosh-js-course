const numbers = [1, 2, 3, 4];

try {
  const count = countOccurences(null, 1);
  console.log(count);
}
catch (e) {
  alert(e.message);
}

function countOccurences(array, searchElement) {
  if (!Array.isArray(array))
    throw new Error('First argument must be an array');

  return array.reduce((accumulator, current) => {
    let occurrence = (current === searchElement) ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}