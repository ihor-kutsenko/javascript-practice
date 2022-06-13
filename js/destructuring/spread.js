const temps = [14, -4, 25, 8, 11];

console.log(...temps);
console.log(Math.max(...temps));
console.log(Math.min(...temps));

const copyOfTemps = [...temps];
console.log(copyOfTemps);
//
//===============================================================================================
//
const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps);
//
//===============================================================================================
//
const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15, propD: 20 };

const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }
//===============================================================================================
// У змінних firstGroupScores, secondGroupScores і
// thirdGroupScores зберігаються результати тестування окремих груп.
// Використовуючи розподіл, доповни код таким чином, щоб:

// У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);
//===============================================================================================
// Напиши функцію makeTask(data) яка приймає
// один параметр data - об'єкт з наступними властивостями.

// text - текст завдання.
// category - категорія завдання.
// priority - пріоритет завдання.
// Функція повинна створити і повернути новий об'єкт завдання,
// не змінюючи напряму параметр data.У новому об'єкті повинна бути властивість completed,
// значення якої зберігається в однойменній локальній змінній.

// В параметрі data гарантовано буде тільки властивість text, а інші дві,
//     category і priority, можуть бути відсутніми.Тоді, в новому об'єкті завдання,
//     у властивостях category і priority повинні бути значення за замовчуванням,
//     що зберігаються в однойменних локальних змінних.

// Оголошена функція makeTask(data)

// Виклик makeTask({}) повертає { category: "General", priority: "Normal", completed: false }

// Виклик makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })
// повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

// Виклик makeTask({ category: "Finance", text: "Take interest" })
//  повертає { category: "Finance", priority: "Normal", text: "Take interest", completed: false }

// Виклик makeTask({ priority: "Low", text: "Choose shampoo" })
//  повертає { category: "General", priority: "Low", text: "Choose shampoo", completed: false }

// Виклик makeTask({ text: "Buy bread" })
// повертає { category: "General", priority: "Normal", text: "Buy bread", completed: false }

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  return { category: "General", priority: "Normal", ...data, completed: false };
  // Change code above this line
}
console.log(makeTask({}));
console.log(
  makeTask({
    category: "Homemade",
    priority: "Low",
    text: "Take out the trash",
  })
);
console.log(makeTask);
console.log(makeTask);

//===============================================================================================
