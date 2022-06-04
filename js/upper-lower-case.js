// Функція normalizeInput(input) приймає рядок(параметр input)
// і повертає такий самий рядок, але в нижньому регістрі.
// Присвой змінній normalizedInput вираз створення рядка у нижньому регістрі з параметра input.

// Оголошена функція normalizeInput(input)
// Виклик функції normalizeInput("Hello world") повертає "hello world"
// Виклик функції normalizeInput("This ISN'T SpaM") повертає "this isn't spam"
// Виклик функції normalizeInput("Big SALE") повертає "big sale"

function normalizedInput(input) {
  const normalizedInput = input.toLowerCase();

  return normalizedInput;
}

console.log(normalizedInput("This ISN'T SpaM"));

const BRAND_NAME = "SAMSUNG";
const userInput = "saMsUng";
const normalizedToUpperCaseInput = userInput.toUpperCase();

console.log(userInput); // 'saMsUng'
console.log(userInput === BRAND_NAME); // false
console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

//
//
// Функція checkForSpam(message) приймає рядок(параметр message),
//     перевіряє його на вміст заборонених слів spam і sale, і повертає результат
// перевірки.Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.

// Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
// Якщо в рядку відсутні заборонені слова, функція повертає буль false.
// Оголошена функція checkForSpam(message).
// Виклик функції checkForSpam("Latest technology news") повертає false
// Виклик функції checkForSpam("JavaScript weekly newsletter")повертає false
// Виклик функції checkForSpam("Get best sale offers now!") повертає true
// Виклик функції checkForSpam("Amazing SalE, only tonight!") повертає true
// Виклик функції checkForSpam("Trust me, this is not a spam message") повертає true
// Виклик функції checkForSpam("Get rid of sPaM emails. Our book in on sale!") повертає true
// Виклик функції checkForSpam("[SPAM] How to earn fast money?") повертає true
function checkForSpam(message) {
  let result;

  message = message.toLowerCase();
  if (message.includes("spam") || message.includes("sale")) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

//
//
function checkForSpam(message) {
  let result;
  // Change code below this line
  message = message.toLowerCase();
  result = message.includes("spam") || message.includes("sale") ? true : false;

  // Change code above this line
  return result;
}
