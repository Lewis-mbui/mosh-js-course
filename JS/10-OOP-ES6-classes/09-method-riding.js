class Shape {
  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  // Method overriding
  move() {
    // call the implementation of the base class using
    // super keyword
    super.move();
    console.log('circle move');
  }
}

const c = new Circle();
c.move();