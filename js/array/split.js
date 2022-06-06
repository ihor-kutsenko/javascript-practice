// Доповни код функції splitMessage(message, delimeter) таким чином,
//     щоб вона повертала у змінній words результат поділу рядка message за
//     роздільником delimeter - масив рядків.

// Оголошена функція splitMessage(message, delimeter)
// Виклик splitMessage("Mango hurries to the train", " ") повертає ["Mango", "hurries", "to", "the", "train"]
// Виклик splitMessage("Mango", "") повертає ["M", "a", "n", "g", "o"]
// Виклик splitMessage("best_for_week", "_") повертає ["best", "for", "week"]
function splitMessage(message, delimeter) {
  let words;

  words = message.split(delimeter);

  return words;
}

console.log(splitMessage("Mango hurries to the train", " "));
console.log(splitMessage("Mango", ""));
console.log(splitMessage("best_for_week", "_"));
//
//
// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування,
//   залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord).Ця функція приймає рядок,
//   що складається зі слів, розділених лише пробілами(параметр message) та ціну
//   гравірування одного слова(параметр pricePerWord).

// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// Оголошена функція calculateEngravingPrice(message, pricePerWord)
// Виклик calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50
// Виклик calculateEngravingPrice("JavaScript is in my blood", 20) повертає 100
// Виклик calculateEngravingPrice("Web-development is creative work", 40) повертає 160
// Виклик calculateEngravingPrice("Web-development is creative work", 20) повертає 80

function calculateEngravingPrice(message, pricePerWord) {
  return message.split(" ").length * pricePerWord;
}
console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
console.log(calculateEngravingPrice("Web-development is creative work", 40));
console.log(calculateEngravingPrice("Web-development is creative work", 20));

function calculateEngravingPrice(message, pricePerWord) {
  let total = 0;
  for (let i = 0; i < message.split(" ").length; i += 1) {
    total += pricePerWord;
  }
  return total;
}
console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
console.log(calculateEngravingPrice("Web-development is creative work", 40));
console.log(calculateEngravingPrice("Web-development is creative work", 20));
