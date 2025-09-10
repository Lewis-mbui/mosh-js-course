// Symbol() generates a Unique Identifer and returns it
const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    // this.radius = radius;
    // this['radius'] = radius;
    this[_radius] = radius;
  }

  [_draw]() {
  }
}

const c = new Circle(1);
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);