// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h

const Car = function (brand, speed) {
  this.brand = brand;
  this.speed = speed;
};

// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.brand} is at ${this.speed} km/h`);
};

// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.brand} is at ${this.speed} km/h`);
};
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
const bmw = new Car('BMW', 100);
const mercedes = new Car('Mercedes', 100);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.break();

mercedes.break();
mercedes.break();
mercedes.break();
mercedes.accelerate();

// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

// Coding Challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
class CarCl {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.brand} is at ${this.speed} km/h`);
    return this;
  }

  break() {
    this.speed -= 5;
    console.log(`${this.brand} is at ${this.speed} km/h`);
    return this;
  }
}
const ford = new CarCl('Ford', 120);

// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
console.log(ford.speedUS, ford.speed);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
ford.speedUS = 50;
console.log(ford.speedUS);
ford.accelerate();
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h
// -----------------

// Coding Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)

// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism 😉
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

// Coding Challenge #4
// Your tasks:
// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class
class EV extends CarCl {
  constructor(brand, speed, currentBattery) {
    super(brand, speed);
    this.charge = currentBattery;
  }

  chargeBattery(chargeTo) {
    this.charge = chargeTo;
  }

  accelerate() {
    this.speed += 20;
    this.charge -= 1;
    console.log(
      `${this.brand} going at ${this.speed}km/h with charge of ${this.charge}%`
    );
    return this;
  }
}
const tesla = new EV('tesla', 120, 23);
tesla.accelerate();
tesla.accelerate();
tesla.break().break().accelerate();
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
