/*
function Circle(radius) {
  this.radius = radius;

  this.draw = function() {
    console.log('draw');
  }
} */

class Circle {
  // special method for initializing objects
  constructor(radius) {
    this.radius = radius;
    
    // this method is defined on the instance
    this.move = function() {
      console.log('move');
    }
  }

  // Methods defined here will end up in the __proto__ of
  // the object
  draw() {
    console.log(`draw circle of radius: ${this.radius}`)
  }
}

const c = new Circle(2);