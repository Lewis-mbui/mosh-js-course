function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const myCircle = new Circle(10);

for (let key in myCircle)
  if (typeof myCircle[key] !== 'function')
    console.log(key, myCircle[key]);

const keys = Object.keys(myCircle);
console.log(keys);

if ('radius' in myCircle) console.log('Circle has a radius');