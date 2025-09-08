/*
function Circle(radius) {
  this.radius = radius;

  this.draw = function() {
    console.log('draw');
  }
}
*/

function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function() {
    this.draw(); // Accessing prototype member in an instance member
    console.log('move');
  }
}


// Prototype Members
// Circle.prototype === c1.__proto__
// Add the draw method to that object
Circle.prototype.draw = function() {
  console.log('draw');
}

// This implementation will be used instead
// of the one in objectBase because it is more
// accessible
Circle.prototype.toString = function() {
  return 'Circle with radius ' + this.radius;
}

const c1 = new Circle(1);
const c2 = new Circle(2);