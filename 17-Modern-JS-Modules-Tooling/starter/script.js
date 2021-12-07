import * as cm from './commons.js';
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash';

console.log(cm.fileName);
console.log(cm.nextNumber());
console.log(cm.nextNumber());
console.log(cm.nextNumber());
console.log(cm.nextNumber());
console.log('Nathan');

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 3 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone, stateDeepClone);
