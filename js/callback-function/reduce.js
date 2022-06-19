// *Example #1
//==================================================================================================================
// Ігровому сервісу необхідний функціонал підрахунку середнього часу,
//     проведеного в іграх.Доповни код таким чином, щоб у змінній totalPlayTime
//      вийшло загальний ігровий час з масиву playtimes.

// Оголошена змінна players
// Значення змінної players - це об'єкт гравців з ігровим часом кожного
// Оголошена змінна playtimes
// Значення змінної playtimes - це масив [1270, 468, 710, 244]
// Оголошена змінна totalPlayTime
// Значення змінної totalPlayTime - це число 2692
// Для перебирання масиву playtimes використовується метод reduce()
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((acc, number) => {
//   return acc + number;
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime);
// console.log(averagePlayTime);
//
// *Example #2
//==================================================================================================================
// Нашому сервісу необхідно розрахувати середній час,
//     проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу.
//     Розрахувати час для кожного з гравців можна,
//     розділивши його час(властивість playtime) на кількість ігор(властивість gamesPlayed).

// Оголошена змінна players
// Значення змінної players - це масив об'єктів гравців
// Оголошена змінна totalAveragePlaytimePerGame
// Значення змінної totalAveragePlaytimePerGame - це число 1023
// Для перебирання масиву players використовується метод reduce()
const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
  return acc + player.playtime / player.gamesPlayed;
}, 0);
console.log(totalAveragePlaytimePerGame);
// *Example #3
//==================================================================================================================
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

// Change code below this line
const calculateTotalBalance = (users) => {
  return users.reduce((acc, user) => {
    return acc + user.balance;
  }, 0);
};
// Change code above this line
console.log(calculateTotalBalance(users));

//===================================================================================
// Доповни функцію getTotalFriendCount(users) таким чином,
//     щоб вона рахувала і повертала загальну кількість друзів(властивість friends)
//     усіх користувачів з масиву users.
//     Виклик функції із зазначеним масивом користувачів повертає число 14
const getTotalFriendCount = (users) =>
  users.reduce((acc, user) => acc + user.friends.length, 0);

// const getTotalFriendCount = (users) => {
//   return users.reduce((acc, user) => {
//     return acc + user.friends.length;
//   }, 0);
// };

console.log(getTotalFriendCount(users));
