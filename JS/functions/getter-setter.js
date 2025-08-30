const person = {
  firstName: 'Lewis',
  secondName: 'Mugo',
  get fullName () {
    return `${this.firstName} ${this.secondName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.secondName = parts[1];
  }
};

console.log(person.fullName);

person.fullName = 'John Smith';

console.log(person);