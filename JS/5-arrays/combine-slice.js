const first = [{id: 1}];
const second = [3, 4, 5];

const combined = first.concat(second);
combined[0].id = 10;

console.log(combined);
console.log(first); // Has also changed since objects are copied by ref.