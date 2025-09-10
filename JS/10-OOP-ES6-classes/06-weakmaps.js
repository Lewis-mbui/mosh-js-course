// Takes an object as a key and anything as value
// Preference: a weakmap for every defined private prop or method
const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    _move.set(this, () => {
      console.log('move', this);
    });
  }

  draw() {
    // Access the private method and call it
    _move.get(this)();

    // Access the private method
    console.log(`circle of radius ${_radius.get(this)}`);
  }
}

const c = new Circle(1);
c.draw();