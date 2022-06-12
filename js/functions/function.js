// 1. Оголошення параметрів x, y, z
function multiply(x, y, z) {
  console.log(`Результат множення дорівнює ${x * y * z}`);
}

// 2. Передача аргументів
multiply(2, 3, 5); // Результат множення дорівнює 30
multiply(4, 8, 12); // Результат множення дорівнює 384
multiply(17, 6, 25); // Результат множення дорівнює 2550
//
//
//
function multiply(x, y, z) {
  // Повертаємо результат виразу множення
  return x * y * z;
}

// Результат роботи функції можна зберегти у змінну
let result = multiply(2, 3, 5);
console.log(result); // 30

result = multiply(4, 8, 12);
console.log(result); // 384

result = multiply(17, 6, 25);
console.log(result); // 2550
