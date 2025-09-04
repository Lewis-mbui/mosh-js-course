//String Primitive
const message = 'This is my friend\'s first message';

// String Object
const another = new String('Hi');

// Some Properties and methods
console.log(message.length);
console.log(message[0]);
console.log(message.includes('my'));
console.log(message.startsWith('t'));
console.log(message.indexOf('my'));
console.log(message.replace('first', 'second')); //Returns a new string with replaced characters
console.log(message.toUpperCase());
console.log(message.split(' '));