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
