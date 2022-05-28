function calculateTotalPrice(orderedQuantity, pricePerItem) {
  const totalPrice = orderedQuantity * pricePerItem;
  return totalPrice;
}

console.log(calculateTotalPrice(5, 100));
console.log(calculateTotalPrice(4, 80));
console.log(calculateTotalPrice(1, 777));
