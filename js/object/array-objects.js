const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На березі спокійних вод",
    author: "Роберт Шеклі",
    rating: 8.51,
  },
  {
    title: "Сон смішної людини",
    author: "Федір Достоєвський",
    rating: 7.75,
  },
];
// Наприклад, отримаємо список назв усіх книг в колекції books.

const bookNames = [];
for (const book of books) {
  bookNames.push(book.title);
}
console.log(bookNames);

// Дізнаємося середній рейтинг усієї нашої колекції.
// Для цього, додамо усі рейтинги, після чого поділимо
// це значення на кількість книг в колекції.
let totalRating = 0;
for (const book of books) {
  totalRating += book.rating;
}
const averRating = (totalRating / books.length).toFixed(2);
console.log(averRating);
//===============================================================================================
// Додай об'єкту bookShelf ще два методи, які поки що будуть
// повертати просто рядки за аналогією з getBooks() і addBook(bookName).

// Метод removeBook(bookName) буде видаляти книгу за назвою.
//  Повертає рядок "Deleting book <назва книги>", де < назва книги > -
//   це значення параметра bookName.

// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову.
//  Повертає рядок "Updating book <стара назва> to <нова назва>",
//   де < стара назва > і < нова назва > - це значення параметрів oldName і newName відповідно.

// Оголошена змінна bookShelf

// Значення змінної bookShelf - це об'єкт

// Значення властивості bookShelf.getBooks - це метод об'єкта

// Виклик методу bookShelf.getBooks() повертає рядок "Returning all books"

// Значення властивості bookShelf.addBook - це метод об'єкта

// Виклик методу bookShelf.addBook("Haze") повертає рядок "Adding book Haze"

// Значення властивості bookShelf.removeBook - це метод об'єкта

// Виклик методу bookShelf.removeBook("Red sunset") повертає рядок "Deleting book Red sunset"

// Значення властивості bookShelf.updateBook - це метод об'єкта

// Виклик методу bookShelf.updateBook("Sands of dune", "Dune") повертає рядок "Updating book Sands of dune to Dune"

const bookShelf = {
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },
};

//===============================================================================================
