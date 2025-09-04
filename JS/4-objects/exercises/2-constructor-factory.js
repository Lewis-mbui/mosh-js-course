const address1 = createAddress('Moi Ave.', 'Nairobi', '0987');
const address2 = new Address('Uhuru Way', 'Nyeri', '00100');

console.log(address1);
console.log(address2);

// Factory function
function createAddress(street, city, zipcode) {
  return {
    street,
    city,
    zipcode
  };
}

// Constructor Function
function Address(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}