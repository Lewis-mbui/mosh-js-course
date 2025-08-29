const now = new Date();
const date1 = new Date('May 11 2018 09:00')
const date2 = new Date(2018, 4, 11, 9);

console.log(now);
console.log(date1);
console.log(date2);

console.log(now.getDate());

now.setFullYear(2019);
console.log(now);

console.log(now.toDateString());