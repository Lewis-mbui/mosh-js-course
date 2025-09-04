showStars(10);

function showStars(rows) {
  let string = '';

  for (let i = 0; i < rows; i++) {
    string += '*';
    console.log(string);
  }
}

/* 
  Using Nested For loop

  function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
      let pattern = '';

      for (let i = 0; i < row; i++) pattern += '*';

      console.log(pattern);
    }
  }

*/