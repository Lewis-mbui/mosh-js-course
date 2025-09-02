const person = {
  firstName: 'Lewis',
  secondName: 'Mugo',
  get fullName () {
    return `${this.firstName} ${this.secondName}`;
  },
  set fullName(value) {
    if (typeof value !== 'string')
      throw new Error('Value is not a string');

    const parts = value.split(' ');
    if (parts.length !== 2)
      throw new Error('Enter a first and last name');

    this.firstName = parts[0];
    this.secondName = parts[1];
  }
};

try {
  person.fullName = 'Damon';
}
catch (e) {
  alert(e);
}


console.log(person);