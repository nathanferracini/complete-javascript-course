'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderEnhanced(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// console.log(restaurant.openingHours.mon.open);
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours?.mon?.open);
console.log('optional chaining', restaurant.openingHours?.fri?.open);

for (const day of Object.keys(restaurant.openingHours)) {
  console.log(day);
}

const { name, openingHours: foo, categories } = restaurant;
console.log(name, openingHours, categories);

const threeParametersFuncition = function ({
  first,
  second = 'second',
  third,
}) {
  console.log('first', first);
  console.log('second', second);
  console.log('third', third);
};

threeParametersFuncition({
  third: 'terceiro',
  first: 'primeiro',
});

const {
  name: restaurantName,
  openingHours: {
    fri: { open, close },
  },
  categories: tags,
  nonExisting: priceRange = '$$$',
} = restaurant;
console.log(restaurantName, 'fri', tags, priceRange, open, close);

// const {
//   fri: { open, close },
// } = hours;
// console.log(open, close);

// dd
let [x, y, z] = [1, 2];
console.log(x, y, z);

let [first, second, , third] = restaurant.categories;
console.log(first, second, third);

[second, first, , third] = [first, second, , third];
console.log(first, second, third);

const [starter, mainCourse] = restaurant.order(0, 1);
console.log(starter, mainCourse);

const nested = [1, 2, 3, [4, 5]];
const [i, , , [j, k]] = nested;
console.log(i, j, k);

const [p, q, r = 'default'] = [8, 9];
console.log(p, q, r);

const newArr = ['Spread', ...nested];
console.log('whithout spread', newArr);
console.log('whith spread', ...newArr);

const originalObject = {
  a: 1,
  b: 2,
  c: 3,
};
const objectSpread = { ...originalObject, d: 4, e: 5 };
console.log('objectSpread', objectSpread);

const { a: head, e: tail, ...objectRest } = objectSpread;
console.log('objectRest', head, tail, objectRest);

const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a, b, others);
for (const num of others) console.log(num);

const rest1 = {
  name: 'Capri',
  numGuest: 20,
};

const rest2 = {
  name: 'La Pizza',
  owner: 'Pablo Palmares',
};

rest2.numGuest = rest2.numGuest || 10;
console.log(rest2);
