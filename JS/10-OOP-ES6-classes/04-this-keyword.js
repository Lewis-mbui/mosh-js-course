'use strict';

const Circle = function() {
  this.draw = function() {
    console.log(this, 'hello');
  }
}

const c = new Circle();
// Method Call
c.draw();

// strict will refuse the modification of this
// therefore it will be undefined
const draw = c.draw;

// Function call.
// Same as doing:
// const c = Circle();
// c.draw();
draw();