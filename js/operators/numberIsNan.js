// Для перевірки на число можна використовувати метод Number.isNaN(val).
//  Він перевіряє, чи вказане значення є NaN.
//  Метод відповідає на запитання "Це Not A Number?" і повертає:

// true - якщо значення val - NaN
// false - якщо значення val - не NaN

// Для всіх значень val, крім NaN, при передачі в Number.isNaN(val) поверне false.
// Цей метод не намагається перетворити val в число, а просто виконує перевірку на NaN.

const validNumber = Number("51");
console.log(Number.isNaN(validNumber));

const invalidNumber = Number("string");
console.log(Number.isNaN(invalidNumber));
