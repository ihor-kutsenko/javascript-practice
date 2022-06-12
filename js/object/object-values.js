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
