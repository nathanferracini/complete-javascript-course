let markWeights = 78;
let markHeight = 1.69;
let johnWeights = 92;
let johnHeight = 1.95;
let markBMI = markWeights / markHeight ** 2;
let johnBMI = johnWeights / johnHeight ** 2;
let markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI)
if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
    console.log(`Mark's BMI (${markBMI}) is lower than John's (${johnBMI})!`)
}

const dolphinsScore1 = 96;
const dolphinsScore2 = 108;
const dolphinsScore3 = 89;
const dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;

let koalasScore1 = 88;
let koalasScore2 = 91;
let koalasScore3 = 110;
const koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

console.log(dolphinsAverage > koalasAverage, dolphinsAverage, koalasAverage)