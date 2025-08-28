showNumbers(17);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    let label = (i % 2 === 0) ? "EVEN" : "ODD";
    console.log(i, label);
  }
}