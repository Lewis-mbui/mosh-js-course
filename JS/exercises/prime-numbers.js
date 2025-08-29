showPrimes(20);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;
  return true;
}


/* function showPrimes(limit) {
  for (let i = 2; i <= limit; i++) {
    let factorCount = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) factorCount++;
    }

    if (factorCount < 3) console.log(i);
  }
} */
