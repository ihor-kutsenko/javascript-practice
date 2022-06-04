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
