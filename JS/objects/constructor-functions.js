// Constructor functions

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
}

const myCircle = new Circle(1);
console.log(myCircle);