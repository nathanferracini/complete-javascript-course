'use strict';

const bookings = [];

const createBooking = function (flightNumber, numPassengers = 1, price = 199) {
  const booking = {
    flightNumber,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH321', 12, 800);
createBooking('LH321', undefined, 800);

const concatWord = function (string) {
  console.log(string);
  return string.replace(/ /g, '').toLowerCase();
};

const replaceFirstLetter = function (string) {
  return string.padStart(1, 'X');
};

const transformer = function (str, func) {
  console.log(func.name);
  return func(str);
};

console.log(transformer('Nathan split this', concatWord));

const appendString = function (str) {};

['1 1', '2 2', '3 3'].forEach(concatWord);

const arrowFunc = name => lastName => console.log('arr', name, lastName);
arrowFunc('Nathan')('Franco');

const sampleThisFunction = function (p1, p2) {
  console.log('sampleThis', this.name, p1, p2);
};

const ship = {
  name: 'Titanic',
};
const car = {
  name: 'supra',
};

sampleThisFunction.call(ship, 'a', 'b');
sampleThisFunction.call(car, '1', '2');
const sampleShip = sampleThisFunction.bind(ship, 'a');
sampleShip('c', 'f');
sampleShip('d');
//======================================================
const lufthansa = {
  name: 'Titanic',
};
lufthansa.planes = 300;
const buyPlanes = function () {
  console.log(this.planes);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', buyPlanes.bind(lufthansa));
//======================================================
const addTax = (rate, value) => value + value * rate;
console.log('tax original', addTax(0.1, 100));

const addTaxBR = addTax.bind(null, 0.5);
console.log('tax br', addTaxBR(100));

const arrAddTax = rate => value => value + value * rate;
console.log(arrAddTax(0.1)(100));

const arrAddTaxBR = arrAddTax(0.5);
console.log(arrAddTaxBR(100));
