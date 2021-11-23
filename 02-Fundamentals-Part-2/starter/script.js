"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive')

logger(12);

function logger(age) {
    console.log('My name is Nathan and my age is', age);
}

const ageLogger = function (age) {
    console.log('My name is Nathan and my age is', age);
}

ageLogger(12)

const quickAgeLogger = age => console.log('My name is Nathan and my age is', age);

quickAgeLogger(18)

const yearsUntilRetirement = yearOfBirth => {
    const age = 2021 - yearOfBirth
    const retirement = 62 - age
    return retirement
}

const yearsUntilRetirementSentence = (birthYear, firstName) => {
    const age = 2021 - birthYear
    const retirement = 65 - age
    return `${firstName} ${age}, retires in ${retirement} years`
}
console.log(yearsUntilRetirementSentence(1987, 'Nathan'))

const years = [1987, 1988, 1989];
console.log(years)
console.log(years[0])

years[5] = 2010;
console.log(years)
years.push(2021)
console.log(years)
years.unshift(1986)
console.log(years)
console.log(years.indexOf(1987), years.includes(1987),
    years.indexOf(19871), years.includes(19871))

const nathan = {
    firstName: 'Nathan',
    lastName: 'Ferracini',
    birthYear: 1987,
    setAgeProperty: function () {
        this.age = 2021 - this.birthYear;
    },
    calcAge: function () { return 2021 - this.birthYear },
}

console.log(nathan, nathan.firstName, nathan['firstName'])
console.log(nathan.setAgeProperty());
console.log(nathan.birthYear, nathan.calcAge(), nathan.age)
