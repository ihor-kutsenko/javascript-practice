// Напиши функцію findLongestWordstring), яка приймає довільний рядок,
//     що складається тільки зі слів, розділених пробілом(параметр string),
//         і повертає найдовше слово в цьому рядку.

// Оголошена функція findLongestWord(string)
// Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// Виклик функції findLongestWord("Google do a roll") повертає Google
// Виклик функції findLongestWord("May the force be with you") повертає force
// Виклик функції findLongestWord() з випадковим рядком повертає правильне значення
function findLongestWord(string) {
  const array = string.split(" ");
  let LongestWord = array[0];

  for (let i = 0; i < array.length; i += 1) {
    if (LongestWord.length < array[i].length) {
      LongestWord = array[i];
    }
  }
  return LongestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));
