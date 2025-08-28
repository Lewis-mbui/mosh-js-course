let person = {
  name: 'Lewis',
  age: 23
};

for (key in person) console.log(key, person[key]);

let colors = ['red', 'green', 'blue'];

for (index in colors) console.log(index, colors[index]);