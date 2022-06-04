// Функція getSubstring(string, length) приймає рядок і повертає
// підрядок від початку і до length символів.Вона оголошує два параметри,
//     значення яких будуть задаватися під час її виклику:

// string - оригінальний рядок
// length - кількість символів з початку рядка для підрядка
// Присвой змінній substring вираз створення підрядка
// довжиною length символів(від початку) з рядка string.

// Оголошена функція getSubstring(string, length)
// Виклик функції getSubstring("Hello world", 3) повертає "Hel"
// Виклик функції getSubstring("Hello world", 6) повертає "Hello"
// Виклик функції getSubstring("Hello world", 8) повертає "Hello wo"
// Виклик функції getSubstring("Hello world", 11) повертає "Hello world"
// Виклик функції getSubstring("Hello world", 0) повертає ""

function getSubstring(string, length) {
  const substring = string.slice(0, length);

  return substring;
}
console.log(getSubstring("Hello world", 8));

//
//
//
// Функція formatMessage(message, maxLength) приймає рядок(параметр message)
// і форматує його, якщо довжина перевищує значення в параметрі maxLength.

// Доповни код функції таким чином, що якщо довжина рядка:

// не перевищує maxLength, функція повертає його в початковому вигляді.
// більша за maxLength, то функція обрізає рядок до maxLength символів
// і додає в кінець три крапки "...", після чого повертає скорочену версію.
// Оголошена функція formatMessage(message, maxLength)
// Виклик функції formatMessage("Curabitur ligula sapien", 16) повертає "Curabitur ligula..."
// Виклик функції formatMessage("Curabitur ligula sapien", 23) повертає "Curabitur ligula sapien"
// Виклик функції formatMessage("Vestibulum facilisis purus nec", 20) повертає "Vestibulum facilisis..."
// Виклик функції formatMessage("Vestibulum facilisis purus nec", 30) повертає "Vestibulum facilisis purus nec"
// Виклик функції formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) повертає "Nunc sed turpis..."
// Виклик функції formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)
// повертає "Nunc sed turpis a felis in nunc fringilla"

function formatMessage(message, maxLength) {
  let result;

  if (message.length <= maxLength) {
    result = message;
  } else {
    result = message.slice(0, maxLength) + "...";
  }

  return result;
}
console.log(formatMessage("Vestibulum facilisis purus nec", 30));
//
//
//

function formatMessage(message, maxLength) {
  let result;

  result =
    message.length <= maxLength ? message : message.slice(0, maxLength) + "...";

  return result;
}
