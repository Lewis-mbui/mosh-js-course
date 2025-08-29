const marks = [80, 80, 90];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  let average = calculateAverage(marks);

  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';
}

function calculateAverage(marks) {
  let total = 0;
  let grade;

  for(let mark of marks) total += mark;

  return total / marks.length;
}