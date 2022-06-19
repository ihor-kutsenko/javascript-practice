// *Example #1
//==================================================================================================================
// Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates,
//     відсортована за зростанням, а у змінній alphabeticalAuthors - копія масиву імен авторів authors,
//         відсортована за алфавітом.
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

console.log(releaseDates);
console.log(ascendingReleaseDates);
console.log(authors);
console.log(alphabeticalAuthors);
// *Example #2
//==================================================================================================================
// Онлайн бібіліотеці необхідно відображати книги, відсортовані за датою видання,
//     за її зростанням або спаданням.Доповни код таким чином,
//     щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates,
//         відсортована за зростанням, а у змінній descendingReleaseDates - копія, відсортована за спаданням.

const ascendingReleaseDates1 = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates2 = [...releaseDates].sort((a, b) => b - a);

console.log(ascendingReleaseDates1);
console.log(descendingReleaseDates2);
// *Example #3
//==================================================================================================================
// Онлайн бібіліотеці необхідно відображати книги, відсортовані за автором,
//     в алфавітному і зворотному алфавітному порядку.Доповни код таким чином,
//     щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors,
//     відсортована за алфавітом, а у змінній authorsInReversedOrder - копія,
//         відсортована у зворотному алфавітному порядку.
const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

console.log(authorsInAlphabetOrder);
console.log(authorsInReversedOrder);

// *Example #4
//==================================================================================================================
// Доповни код таким чином, щоб:

// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...books].sort((a, b) =>
  a.author.localeCompare(b.author)
);

const sortedByReversedAuthorName = [...books].sort((a, b) =>
  b.author.localeCompare(a.author)
);

const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

console.log(sortedByAuthorName);
// *Example #5
//==================================================================================================================
// Доповни функцію sortByAscendingBalance(users) таким чином, щоб вона повертала масив користувачів,
//     відсортований за зростанням їх балансу(властивість balance).
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];
const sortByAscendingBalance = (users) => {
  return [...users].sort((a, b) => a.balance - b.balance);
};
console.log(sortByAscendingBalance(users));
// *Example #6
//==================================================================================================================
// Доповни функцію sortByDescendingFriendCount(users) таким чином,
//     щоб вона повертала масив користувачів, відсортований за спаданням
//     кількості їхніх друзів(властивість friends).
const sortByDescendingFriendCount = (users) => {
  return [...users].sort((a, b) => b.friends.length - a.friends.length);
};
// *Example #7
//==================================================================================================================
// Доповни функцію sortByName(users) таким чином, щоб вона повертала масив користувачів,
//     відсортований за їх ім'ям (властивість name) в алфавітному порядку.
const sortByName = (users) => {
  return [...users].sort((a, b) => a.name.localeCompare(b.name));
};
