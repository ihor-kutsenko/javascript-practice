const temps = [14, -4, 25, 8, 11];

console.log(...temps);
console.log(Math.max(...temps));
console.log(Math.min(...temps));

const copyOfTemps = [...temps];
console.log(copyOfTemps);
//
//
const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps);
//
//
const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15, propD: 20 };

const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }
