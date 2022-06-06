// Доповни код функції makeStringFromArray(array, delimeter) таким чином,
//     щоб вона повертала у змінній string результат з'єднання елементів масиву
//     array з роздільником delimeter - рядок.

// Оголошена функція makeStringFromArray(array, delimeter)
// Виклик makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") повертає "Mango hurries to the train"
// Виклик makeStringFromArray(["M", "a", "n", "g", "o"], "")) повертає "Mango"
// Виклик makeStringFromArray(["top", "picks", "for", "you"], "_") повертає "top_picks_for_you"
function makeStringFromArray(array, delimeter) {
  let string;

  string = array.join(delimeter);

  return string;
}
console.log(
  makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
);
console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));
