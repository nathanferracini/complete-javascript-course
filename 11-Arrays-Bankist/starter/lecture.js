'use strict';
let arr = [...'nathan'];
console.log(arr);
console.log(arr.slice(2));
console.log(arr.splice(-1));
console.log(arr);

let arr2 = [...'nathan'];
arr2.reverse();
console.log(arr2);

console.log(arr2.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.forEach(function (mov, index, array) {
  if (mov > 0) {
    console.log(`${index}: You deposited ${mov}`);
  } else {
    console.log(`${index}: You withdrew ${Math.abs(mov)}`);
  }
});

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

for (let [k, v] of currencies) {
  console.log(k, v);
}
currencies.forEach(function (value, key, map) {
  console.log(key, value);
});

//map
const timesTwo = movements.map(function (value, i, arr) {
  return value * 1.1;
});
console.log('tax 1.1', timesTwo);
//filter
//reduce

const deposits = movements.filter(mov => mov > 0);
const withdrawal = movements.filter(mov => mov < 0);
console.log(deposits, withdrawal);
console.log(
  'Total',
  movements.reduce((acc, mov) => acc + mov)
);

const max = movements.reduce((acc, value) => (acc < value ? acc : value));
console.log(max);

console.log(
  'some',
  movements.some(mov => mov >= 1500)
);
console.log('includes', movements.includes(1500));
