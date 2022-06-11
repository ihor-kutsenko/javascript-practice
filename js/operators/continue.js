const number = 10;
for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }
  console.log("Непарні числа i: ", i);
}

const num = 10;
for (let i = 0; i < num; i += 1) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log("Парні числа i: ", i);
}
