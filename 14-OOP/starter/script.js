'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const nathan = new Person('Nathan', 1987);
console.log(nathan);
console.log(nathan instanceof Person);
console.log(typeof nathan);

//Prototype
Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};
jonas.calcAge();
nathan.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(nathan.__proto__ === Person.prototype);

Person.prototype.species = 'Homo Sapiens';

console.log(jonas.species, nathan.species);
console.log(
  nathan.hasOwnProperty('species'),
  nathan.hasOwnProperty('firstName')
);

console.dir(x => x + 1);
console.dir(function (x) {
  x + 1;
});
Person.hey = function () {
  console.log('Hey!');
};
Person.hey();

//expression
// const PersonCl = class {};

//declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.transactions = [100, 2000, 30];
  }

  set movement(tr) {
    this.transactions.push(tr);
  }

  calcAge() {
    console.log(2021 - this.birthYear);
  }

  get age() {
    return 2021 - this.birthYear;
  }

  static hey() {
    console.log('Static Hey!');
  }
}

const nathanCl = new PersonCl('Nathan', 1987);
console.log(nathanCl);
nathanCl.movement = 500;
nathanCl.movement = 500;
console.log(nathanCl);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}!`);
};

nathanCl.greet();
nathanCl.calcAge();
console.log(nathanCl.age);

PersonCl.hey();

const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },
  initPerson(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const sarah = Object.create(PersonProto);
sarah.initPerson('Sarah', 1988);
sarah.calcAge();
