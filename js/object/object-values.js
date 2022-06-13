const goods = {
  apples: 6,
  grapes: 3,
  bread: 4,
  cheese: 7,
};

const values = Object.values(goods);

let total = 0;

for (const value of values) {
  total += value;
}
console.log(total);

// Напиши функцію countTotalSalary(salaries),
//   яка приймає об'єкт зарплат, де ім'я властивості -
//   це ім'я співробітника, а значення властивості -
//     це зарплата.Функція повинна розрахувати загальну суму зарплат співробітників
//     і повернути її.Використовуй змінну totalSalary для зберігання загальної суми зарплати.

// Оголошена функція countTotalSalary(salaries)
// Виклик countTotalSalary({}) повертає 0
// Виклик countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) повертає 330
// Виклик countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) повертає 400
// Функція враховує тільки власні властивості об'єкта
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const values = Object.values(salaries);
  for (let value of values) {
    totalSalary += value;
  }
  // Change code above this line
  return totalSalary;
}
//===============================================================================================
