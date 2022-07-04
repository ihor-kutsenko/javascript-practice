// Напиши функцію getExtremeElements(array), яка приймає один параметр array
//     - масив елементів довільної довжини.Функція повинна повертати масив з двох елементів
//         - першого і останнього елемента параметра array.

// Оголошена функція getExtremeElements(array)
// Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
// Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
// Виклик getExtremeElements(["apple", "peach", "pear", "banana"])
// повертає["apple", "banana"]
function getExtremeElements(array) {
  return [array[0], array[array.length - 1]];
}
console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
//

// variant 2
function getExtremeElements(array) {
  const firstElement = array[0];
  const lastElementIndex = array.length - 1;
  const lastElement = array[lastElementIndex];
  return [firstElement, lastElement];
}
// /////
const clients = ["Mango", "Poly", "Ajax"];
const lastelementindex = clients.length - 1;
console.log(lastelementindex);
console.log(clients[lastelementindex]);
