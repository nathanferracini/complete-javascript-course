'use strict';
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const addExpense = function (state, value, description, user = 'jonas') {
  const lowerUser = user.toLowerCase();
  const limit = spendingLimits[lowerUser] ? spendingLimits[lowerUser] : 0;

  return value <= limit
    ? [...state, { value: -value, description, lowerUser }]
    : state;
};
const newBudget1 = addExpense(budget, 10, 'Pizza 🍕');
const newBudget2 = addExpense(newBudget1, 100, 'Going to movies 🍿', 'Matilda');
const newBudget3 = addExpense(newBudget2, 200, 'Stuff', 'Jay');
console.log(newBudget3);

const checkExpenses = function (state) {
  // state
  //   .filter(el => el.value < -(spendingLimits?.[el.user] ?? 0))
  //   .forEach(el => (el.flag = 'limit'));
  return state.map(entry => {
    return entry.value < -(spendingLimits?.[entry.user] ?? 0)
      ? { ...entry, flag: 'limit' }
      : entry;
  });
};
console.log('original', newBudget3);
const finalBudget = checkExpenses(newBudget3);
console.log('finalbudget', finalBudget);

// const logBigExpensesOld = function (bigLimit) {
//   let output = '';
//   for (const el of budget) {
//     if (el.value <= -bigLimit) {
//       output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
//     }
//   }
//   output = output.slice(0, -2); // Remove last '/ '
//   console.log(output);
// };
// logBigExpensesOld(500);

const logBigExpenses = function (bigLimit) {
  const message = budget
    .filter(el => el.value <= -bigLimit)
    .map(el => el.description.slice(-2))
    .join(' / ');
  console.log(message);
};

logBigExpenses(500);
