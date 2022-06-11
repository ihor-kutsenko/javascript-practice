// Будемо заповнювати місця в готелі доти, доки поточна
// кількість клієнтів не буде дорівнювати максимально можливій.

let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  clientCounter += 1;
}
console.log(clientCounter);

// ========

let password = "";

do {
  password = prompt("Введіть пароль довший 4-х символів", "");
} while (password.length < 5);

console.log("Ввели пароль: ", password);

const max = 10;
for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}
