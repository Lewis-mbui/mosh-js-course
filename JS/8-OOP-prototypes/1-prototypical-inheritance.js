/*

let num = 9;

const x = {};

const y = {};

console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));
*/

function Circle(radius) {
  this.radius = radius;

  this.draw = function() {
    console.log('draw');
  };
}

const circle = new Circle(10);