let person = { name: 'Mosh' };

/*
//console.log(Object.keys(person));

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);
*/

Object.defineProperty(person, 'name', {
  writable: false,  // cannot change the property
  enumerable: false,  //  cannot enumerate the property
  configurable: false  //  cannot delete the property
});

person.name = 'John';

delete person.name;

console.log(Object.keys(person));