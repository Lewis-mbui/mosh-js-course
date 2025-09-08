function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
}

function Circle() {
}

extend(Circle, Shape);

// NOTE: The redefinition of the "duplicate"
// method should come after extending Circle
// with Shape
Circle.prototype.duplicate = function() {
  // Calling or using original implementation
  Shape.prototype.duplicate.call(this); 

  console.log('duplicate circle');
}

const c = new Circle();
c.duplicate();