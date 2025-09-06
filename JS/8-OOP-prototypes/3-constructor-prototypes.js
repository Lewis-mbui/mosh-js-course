// Object.getPrototypeOf(myObj);

// myObj.__proto__ (parent of myObj)
// Constructor.prototype => the object that will be used as the parent for objects created using this constructor

function Circle(radius) {
  this.radius = radius;
}

const circle = new Circle(1);