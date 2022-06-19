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
// *Example #6
//==================================================================================================================
// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.

// Оголошена змінна calculateTotalPrice
// Змінній calculateTotalPrice присвоєна стрілочна функція з параметрами (quantity, pricePerItem)
// Виклик calculateTotalPrice(5, 100) повертає 500
// Виклик calculateTotalPrice(8, 60) повертає 480
// Виклик calculateTotalPrice(3, 400) повертає 1200
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
//
//==================
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// =========================================
// function calculateTotalPrice(quantity, pricePerItem) {
//
//   return quantity * pricePerItem;
// }
//
// *Example #7
//==================================================================================================================
// Функція changeEven(numbers, value) приймає масив чисел numbers і
// оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою -
//     не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.

// Оголошена функція changeEven(numbers, value)
// Функція changeEven не змінює значення параметра numbers
// Виклик changeEven([1, 2, 3, 4, 5], 10) повертає новий масив [1, 12, 3, 14, 5]
// Виклик changeEven([2, 8, 3, 7, 4, 6], 10) повертає новий масив [12, 18, 3, 7, 14, 16]
// Виклик changeEven([17, 24, 68, 31, 42], 100) повертає новий масив [17, 124, 168, 31, 142]
// Виклик changeEven([44, 13, 81, 92, 36, 54], 100) повертає новий масив [144, 13, 81, 192, 136, 154]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
// =======================================
// function changeEven(numbers, value) {
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   // Change code above this line
// }

// =======================================
function changeEven(numbers, value) {
  const newArray = [];
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      newArray.push(number + value);
    } else {
      newArray.push(number);
    }
  });
  return newArray;
}
console.log(changeEven([1, 2, 3, 4, 5], 10));
