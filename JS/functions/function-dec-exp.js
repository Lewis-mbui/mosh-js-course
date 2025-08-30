// Function Declaration
function walk() {
  console.log('walk');
}

// Named function expression
let run = function running() {
  console.log('run');
};

run();

// Anonymous Function expression
let move = function() {
  console.log('move');
};

move();

let moving = move;

moving();