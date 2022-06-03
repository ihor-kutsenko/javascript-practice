// Функція getSubscriptionPrice(type) отримує рядок з типом передплати
// користувача(параметр type), перевіряє її на збіг з трьома можливими
// типами щомісячної передплати та повертає ціну, що зберігається у змінній price.

// Якщо значення параметра type - це рядок:

// "starter" - ціна передплати 0 кредитів.
// "professional" - ціна передплати 20 кредитів.
// "organization" - ціна передплати 50 кредитів.
// Спочатку в тілі функції була інструкція if...else, яка виглядала ось так.

// if (type === "starter") {
//   price = 0;
// } else if (type === "professional") {
//   price = 20;
// } else if (type === "organization") {
//   price = 50;
// }
// Після рефакторингу інструкція if..else була замінена на switch. Доповни код інструкції switch, щоб функція працювала правильно.

// Оголошена функція getSubscriptionPrice(type)
// Виклик getSubscriptionPrice("professional") повертає число 20
// Виклик getSubscriptionPrice("organization") повертає число 50
// Виклик getSubscriptionPrice("starter") повертає число 0

function getSubscriptionPrice(type) {
  let price;

  switch (type) {
    case "starter":
      price = 0;
      break;

    case "professional":
      price = 20;
      break;

    case "organization":
      price = 50;
      break;
  }

  return price;
}
//
//
// варіант 2
//
function getSubscriptionPrice(type) {
  let price;

  if (type === "starter") {
    price = 0;
  } else if (type === "professional") {
    price = 20;
  } else if (type === "organization") {
    price = 50;
  }

  return price;
}
console.log(getSubscriptionPrice("professional"));
//
//
//
// Функція getShippingCost(country) повинна перевіряти можливість доставки
// товару в країну користувача(параметр country) і повертати повідомлення
// про результат, що зберігається у змінній message.Обов'язково використовуй інструкцію switch.

// Формат рядка, що повертається "Shipping to <country> will cost <price> credits",
//     де замість < country > і < price >, необхідно підставити відповідні значення.

// Список країн і вартість доставки:

// China - 100 кредитів
// Chile - 250 кредитів
// Australia - 170 кредитів
// Jamaica - 120 кредитів
// Зі списку видно, що доставка можлива не скрізь.Якщо зазначена країна відсутня у списку,
//     то функція повинна повернути рядок "Sorry, there is no delivery to your country"

// Оголошена функція getShippingCost(country)
// В тілі функції використана інструкція switch
// Виклик getShippingCost("Australia") повертає "Shipping to Australia will cost 170 credits"
// Виклик getShippingCost("Germany") повертає "Sorry, there is no delivery to your country"
// Виклик getShippingCost("China") повертає "Shipping to China will cost 100 credits"
// Виклик getShippingCost("Chile") повертає "Shipping to Chile will cost 250 credits"
// Виклик getShippingCost("Jamaica") повертає "Shipping to Jamaica will cost 120 credits"
// Виклик getShippingCost("Sweden") повертає "Sorry, there is no delivery to your country"

function getShippingCost(country) {
  let message;

  switch (country) {
    case "China":
      price = 100;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;

    case "Chile":
      price = 250;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;

    case "Australia":
      price = 170;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;

    case "Jamaica":
      price = 120;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;

    default:
      message = "Sorry, there is no delivery to your country";
  }

  return message;
}
