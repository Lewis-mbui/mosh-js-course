class Shape {
  constructor(color) {
    this.color = color;
    this.sayHi = () => {console.log('hello')};
  }

  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    // super sets all the instance methods and props
    // to the childs instance members
    super(color);
    this.radius = radius;
  }

  draw() {
    console.log('draw');
  }
}

const c = new Circle('red', 1);