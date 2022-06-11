const clients = ["Mango", "Ajax", "Poly"];
for (let i = 0; i < clients.length; i += 1) {
  console.log(clients[i]);
}
console.log(clients);

//===================================

const books = ["Mango", "Ajax", "Poly"];
for (const book of books) {
  console.log(book);
}

// ==============================

const clubs = ["Mango", "Poly", "Ajax"];
const clubNameToFind = "Poly";
let message = "Клієнт з таким ім'ям відсутній в базі даних!";

for (const club of clubs) {
  if (club === clubNameToFind) {
    message = "Клієнт з таким ім'ям є в базі даних!";
    break;
  }
}

console.log(message);

// ==================================

// Використовуємо цикл для виведення тільки чисел, більших за певне значення.
//  Version 1

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (const number of numbers) {
//   if (number < threshold) {
//     continue;
//   }
//   console.log(`Число більше за ${threshold}: ${number}`);
// }

// Version 2

const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > threshold) {
    continue;
  }
  console.log(`Число менше за ${threshold}: ${numbers[i]}`);
}
