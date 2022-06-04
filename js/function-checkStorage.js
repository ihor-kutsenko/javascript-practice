// // Функція checkStorage(available, ordered) перевіряє можливість оформлення
// замовлення і повертає повідомлення про результат.Вона оголошує два параметри,
//     значення яких будуть задаватися під час її виклику:

// // available - загальна кількість товарів на складі
// // ordered - одиниць товару в замовленні
// // Використовуючи розгалуження, доповни код функції таким чином, що:

// // Якщо в замовленні вказане число, яке перевищує кількість товарів на складі,
//  у змінну message записується рядок "Not enough goods in stock!".
// // В іншому випадку записується рядок "Order is processed, our manager
// will contact you.".

// Оголошена функція checkStorage(available, ordered).
// Виклик checkStorage(100, 50) повертає "Order is processed, our manager will contact you."
// Виклик checkStorage(100, 130) повертає "Not enough goods in stock!"
// Виклик checkStorage(200, 20) повертає "Order is processed, our manager will contact you."
// Виклик checkStorage(200, 150) повертає "Order is processed, our manager will contact you."
// Виклик checkStorage(150, 180) повертає "Not enough goods in stock!"

function checkStorage(available, ordered) {
  let message;

  if (available >= ordered) {
    message = "Order is processed, our manager will contact you.";
  } else {
    message = "Not enough goods in stock!";
  }

  return message;
}
console.log(checkStorage(100, 50));
//
//

function checkStorage(available, ordered) {
  if (ordered === 0) {
    return "Your order is empty!";
  }
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }

  return "The order is accepted, our manager will contact you";
}

// ВАРІАНТ 2
//
//
function checkStorage(available, ordered) {
  let message;

  message =
    ordered > available
      ? "Not enough goods in stock!"
      : "The order is accepted, our manager will contact you";

  return message;
}
