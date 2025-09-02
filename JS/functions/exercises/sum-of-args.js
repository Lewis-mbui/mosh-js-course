console.log(sum([1, 2, 3]));

/*
function sum() {
  const values = [];

  //console.log(arguments);

  for (arg of arguments) {
    if (Array.isArray(arg)) {
      for (element of arg) values.push(element);
    }
    else values.push(arg);
  }

  //console.log(values);

  return values.reduce((a, b) => a + b);
}
*/

function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]];

  return items.reduce((a, b) => a + b);
}