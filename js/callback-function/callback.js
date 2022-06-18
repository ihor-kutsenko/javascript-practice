function greet(name) {
  return `Ласкаво просимо ${name}.`;
}
function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

registerGuest("Манго", greet);
//===============================================================================================

// Функція може приймати будь - яку кількість колбеків.
//     Наприклад, уявімо, що ми пишемо логіку прийняття дзвінків для телефону.
//     Програма повинна увімкнути автовідповідач, якщо абонент - недоступний,
//     або з'єднати дзвінок в іншому випадку.
//     Доступність абонента будемо імітувати генератором випадкового числа,
//     щоб між різними викликами функції можна було отримати різні результати.
// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// processCall("Манго");

//===============================================================================================
function processCall(recipient, onAvailable, onNotAvailable) {
  // Імітуємо доступність абонента випадковим числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`З'єднуємо з ${name}, очікуйте...`);
  // Логіка прийняття дзвінка
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
  // Логіка активації автовідповідача
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступний, записуємо голограму.`);
  // Логіка запису голограми
}

processCall("Манго", takeCall, activateAnsweringMachine);
processCall("Полі", takeCall, leaveHoloMessage);
//===============================================================================================
const doMath = function (a, b, callback) {
  const result = callback(a, b);
};
const add = function (x, y) {
  return x + y;
};
doMath(2, 3, add);
//===============================================================================================
// Доповни функцію makeMessage таким чином,
//     щоб вона очікувала другим параметром(параметр callback)
// колбек - функцію і повертала її виклик.Функція deliverPizza
// або makePizza буде передаватися як колбек і очікувати аргументом ім'я готової піци, що доставляється.

// Оголошена функція deliverPizza
// Оголошена функція makePizza
// Оголошена функція makeMessage
// Функція makeMessage приймає два параметри,
//     названі відповідно до завдання, pizzaName і callback
// Виклик makeMessage("Royal Grand", makePizza)
// повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// Виклик makeMessage("Ultracheese", deliverPizza) повертає рядок "Delivering Ultracheese pizza."
function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}
