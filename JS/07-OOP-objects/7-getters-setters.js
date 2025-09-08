// Reading private members
// Method 1:
/*
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.draw = function() {
    console.log('draw');
  };
  
  this.getDefaultLocation = function() {
    return defaultLocation;
  };
}

const circle = new Circle(10);
console.log(circle.getDefaultLocation());
*/

// Method 2 (BEST WAY):
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.draw = function() {
    console.log('draw');
  };
  
  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y)
        throw new Error('Invalid Location!');

      defaultLocation = value;
    }
  });
}

const circle = new Circle(10);
console.log(circle.defaultLocation);
circle.defaultLocation = {x: 12, y:17};
console.log(circle);