/*
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

// const myCircle = new Circle(1);
// myCircle.draw();
*/

// Creating a function using the inbuilt Function constructor
const Circle = new Function('radius', `
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
  return this;
`);


const myCircle = Circle.call({}, 1); // OR Circle.apply({}, [1]);
myCircle.draw(); // "draw"


function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

console.log(new Food("cheese", 5).name);
