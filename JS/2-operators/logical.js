// Logical AND (&&)
// Returns TRUE if both operands are TRUE
// console.log(true && true);

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;

// NOT (!)
let applicationRefused = !eligibleForLoan;

console.log('Eligible', eligibleForLoan);
console.log('Application Refused', applicationRefused);

// NON-BOOLEAN OPERANDS
// Falsy (False):
// undefined
// null
// false
// ''
// NaN

// Anything that is not Falsy --> Truthy

// SHORTCIRCUITING AND DEFAULT VALUES
let userColor = 'red';
let defaultColor = 'blue';

let currentColor = userColor || defaultColor;

console.log(currentColor);


