const courses = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'}
];

let course = courses.find(function(course) {
  return course.name === 'a';
});

console.log(course);

course = courses.findIndex(function(course) {
  return course.name === 'b';
});

console.log(course);