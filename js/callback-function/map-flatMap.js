//
// *Example #1
//==================================================================================================================
// Використовуючи метод map(), зроби так, щоб у змінній titles вийшов
// масив назв книг(властивість title) з усіх об'єктів масиву books.
// Значення змінної titles - це масив["The Last Kingdom", "Beside Still Waters",
//     "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map((book) => book.title);
// console.log(titles);
//
// *Example #2
//==================================================================================================================
// Використовуючи метод flatMap(), зроби так,
//     щоб у змінній genres вийшов масив усіх жанрів книг(властивість genres) з масиву книг books.
//     Значення змінної genres - це масив [ "adventure", "history", "fiction", "horror", "mysticism" ]
//
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line

const allGenres = books.flatMap((book) => book.genres);
console.log(allGenres);
// Доповни код таким чином, щоб у змінній  uniqueGenres - масив унікальних жанрів, без повторень.
const uniqueGenres = allGenres.filter(
  (genre, index, array) => array.indexOf(genre) === index
);
console.log(uniqueGenres);
//
// *Example #3
//==================================================================================================================
// Доповни функцію getFriends(users) таким чином, щоб вона повертала
//  масив друзів всіх користувачів(властивість friends).У декількох користувачів
//  можуть бути однакові друзі, зроби так, щоб масив, що повертається, не містив повторень.
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39,
  },
];

const getFriends = (users) => {
  return users
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index);
};
console.log(getFriends(users));
// // *Example #4
//==================================================================================================================
// Доповни функцію getSortedFriends(users) таким чином,
//   щоб вона повертала масив унікальних імен друзів(властивість friends),
//     відсортований за алфавітом.
const getSortedFriends = (users) => {
  return [...users]
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .sort((a, b) => a.localeCompare(b));
};
console.log(getSortedFriends(users));
