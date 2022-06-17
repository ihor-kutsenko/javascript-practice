// Звичайне оголошення функції
function classicAdd(a, b, c) {
  return a + b + c;
}

const arrowAdd = (a, b, c) => {
  return a + b + c;
};
//===============================================================================================

// До  (явне повернення (explicit return))
function classicAdd(a, b, c) {
  return a + b + c;
}

// Після (неявне повернення (implicit return))
const arrowAdd = (a, b, c) => a + b + c;
//===============================================================================================

const numbers = [5, 10, 15, 20, 25];

// Оголошення функції
numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
});

// Анонімна стрілочна функція
numbers.forEach((number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
});
//===============================================================================================
const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
};

numbers.forEach(logMessage);
