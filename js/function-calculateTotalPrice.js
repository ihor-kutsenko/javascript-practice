// Функція calculateTotalPrice рахує і повертає загальну суму покупки.
// Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// orderedQuantity - кількість одиниць товару в замовленні;
// pricePerItem - ціна однієї одиниці товару.
// Доповни код функції таким чином, щоб у змінну totalPrice записувалася
//  загальна сума покупки - результат множення кількості товарів на ціну одного.

// Оголошена функція calculateTotalPrice (orderedQuantity, pricePerItem)
// Виклик calculateTotalPrice(5, 100) повертає 500
// Виклик calculateTotalPrice(8, 60) повертає 480
// Виклик calculateTotalPrice(3, 400) повертає 1200
// Виклик calculateTotalPrice(1, 3500) повертає 3500
// Виклик calculateTotalPrice(12, 70) повертає 840

// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

function calculateTotalPrice(orderedQuantity, pricePerItem) {
  const totalPrice = orderedQuantity * pricePerItem;
  return totalPrice;
}

console.log(calculateTotalPrice(5, 100));
console.log(calculateTotalPrice(4, 80));
console.log(calculateTotalPrice(1, 777));
