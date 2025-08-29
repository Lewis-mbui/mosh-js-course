// Object-oriented Programming (OOP)

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true,
  draw: function() {
    console.log('draw');
  },
  move: function() {
    console.log('move');
  }
};

circle.draw(); // Method