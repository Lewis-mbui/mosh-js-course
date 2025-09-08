// mixin function
// rest operator returns an array of objects
function mixin(target, ...sources) {
  // spreading the array into objects
  Object.assign(target, ...sources);
}

// Define feature as an object
const canEat = {
  eat: function() {
    this.hunger--;
    console.log('eating');
  }
}

// Another feature as an object
const canWalk = {
  walk: function() {
    console.log('walking');
  }
};

// Another feature
const canSwim = {
  swim: function() {
    console.log('swim');
  }
};

// Method 1: Combining the features to form an object Person
/*
const person = Object.assign({}, canEat, canWalk);
console.log(person);
*/

// Method 2: Constructors
function Person() {
}

// Object.assign(Person.prototype, canEat, canWalk);
mixin(Person.prototype, canEat, canWalk);

const person = new Person();
console.log(person);

// New Object Goldfish can swim as well
function Goldfish() {
}

// Object.assign(Goldfish.prototype, canEat, canSwim);
mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();
console.log(goldfish);