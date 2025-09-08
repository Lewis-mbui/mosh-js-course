let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address1;

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));

// Constructor Function
function Address(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}

function areEqual(obj1, obj2) {
  for (let key in obj1)
    if (obj1[key] !== obj2[key]) return false;
  return true;
}

function areSame(obj1, obj2) {
  return (obj1 === obj2);
}