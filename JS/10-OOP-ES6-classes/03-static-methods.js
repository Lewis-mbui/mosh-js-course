class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance method
  draw() {
    console.log(`draw`);
  }

  // static method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

// use defined statice method by referencing the class
// to create a circle object
const circle = Circle.parse('{"radius": 1}');
console.log(circle);