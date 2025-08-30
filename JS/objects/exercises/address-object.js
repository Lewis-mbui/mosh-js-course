const address = {
  street: 'Kenyatta Ave.',
  city: 'Nairobi',
  zipcode: '0200'
};

showAddress(address);

function showAddress(obj) {
  for (key in obj) console.log(key, obj[key]);
}