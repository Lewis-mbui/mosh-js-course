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
