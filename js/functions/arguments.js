function multiply() {
  let total = 1;

  for (const argument of arguments) {
    total *= argument;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120
//
//
function fn() {
  // Змінна args буде містити повноцінний масив
  const args = Array.from(arguments);
}
 function fn(...args) 