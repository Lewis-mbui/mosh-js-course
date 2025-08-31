const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
combined = [...first, 'a', ...second, 'b'];
console.log(combined);

// const copy = combined.splice();
const copy = [...combined];
console.log(copy);
