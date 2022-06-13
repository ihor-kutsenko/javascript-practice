const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  // Change code below this line
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",

  // Change code above this line
};
//===============================================================================================
//
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}
//
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// Виконай рефакторинг функції countProps(object),
//     використовуючи метод Object.keys() і, можливо, але не обов'язково, цикл for...of.

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта
// Функція використовує метод Object.keys() і, можливо, цикл for...of
function countProps(object) {
  // Change code below this line
  let propCount = [];

  const keys = Object.keys(object);

  // for (const key of keys) {
  //  propCount.push(object[key]);
  //   }
  // }

  return Object.keys(object).length;
  // Change code above this line
}
//===============================================================================================
//
//
// Напиши функцію getProductPrice(productName), яка приймає один параметр
// productName - назва продукту.Функція шукає об'єкт продукту з
// таким ім'ям(властивість name) в масиві products і повертає його
// ціну(властивість price).Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// Оголошена функція getProductPrice(productName).
// Виклик getProductPrice("Radar") повертає 1300.
// Виклик getProductPrice("Grip") повертає 1200.
// Виклик getProductPrice("Scanner") повертає 2700.
// Виклик getProductPrice("Droid") повертає 400.
// Виклик getProductPrice("Engine") повертає null.
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  for (const product of products) {
    if (product.name === productName) {
      return product.price;
    }
  }
  return null;

  // Change code above this line
}
//===============================================================================================
//
//
Напиши функцію getAllPropValues(propName), яка приймає один
параметр propName - ім'я (ключ) властивості. Функція повинна
повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта
в масиві products.Якщо в об'єктах відсутні властивості з таким ім'ям,
    функція повинна повернути порожній масив.

Оголошена функція getAllPropValues(propName)
Виклик getAllPropValues("name") повертає ["Radar", "Scanner", "Droid", "Grip"]
Виклик getAllPropValues("quantity") повертає [4, 3, 7, 9]
Виклик getAllPropValues("price") повертає [1300, 2700, 400, 1200]
Виклик getAllPropValues("category") повертає []

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  const propValues = [];
  for (const product of products) {
    if (product[propName]) {
      propValues.push(product[propName]);
    }
  }
  return propValues;

  // Change code above this line
}
//===============================================================================================
Напиши функцію calculateTotalPrice(productName), яка приймає один 
параметр productName - назва товару.Функція повинна повернути 
загальну вартість(ціна * кількість) товару з таким ім'ям з масиву products.

Оголошена функція calculateTotalPrice(productName)
Виклик calculateTotalPrice("Blaster") повертає 0
Виклик calculateTotalPrice("Radar") повертає 5200
Виклик calculateTotalPrice("Droid") повертає 2800
Виклик calculateTotalPrice("Grip") повертає 10800
Виклик calculateTotalPrice("Scanner") повертає 8100

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Change code below this line
for(const product of products){
  if(product.name === productName){
    return product.price * product.quantity
  }
}

return 0
  // Change code above this line
}
//===============================================================================================
//
// Перебери масив об'єктів colors, використовуючи цикл for...of.
//  Додай у масив hexColors значення властивостей hex, а в масив rgbColors
//   - значення властивостей rgb з усіх об'єктів масиву colors.

// Оголошена змінна colors
// Значення змінної colors - це масив
// Оголошена змінна hexColors
// Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Оголошена змінна rgbColors
// Значення змінної rgbColors - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}
//===============================================================================================

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}
//===============================================================================================
// Функція findMatches() приймає довільну кількість аргументів. 
// Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.

// Доповни код функції таким чином, щоб вона повертала новий масив matches,
//   в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

//   Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна 
// повернути масив[1, 2], тому що тільки вони є в масиві першого аргументу.

// Оголошена функція findMatches()
// Виклик findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повертає [1, 2]
// Виклик findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) повертає [17, 89, 2]
// Виклик findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) повертає [24, 9, 41]
// Виклик findMatches([63, 11, 8, 29], 4, 7, 16) повертає []


function findMatches(array, ...args) {
  const matches = []; 
for(const arg of args){
  if(array.includes(arg)){
    matches.push(arg)
  }
}
  
  return matches;
}

//===============================================================================================
