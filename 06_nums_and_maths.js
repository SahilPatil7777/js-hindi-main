//************************************  Numbers ************************************************
const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// mathods of number
// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

const otherNumber = 123.8388;

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN"));

// ******************************************** Maths *************************************************************
// console.log(Math);

// console.log(Math.abs(-4));

// console.log(Math.round(14.8));

// console.log(Math.ceil(4.2));

// console.log(Math.floor(4.9));

// console.log(Math.sqrt(4));

// console.log(Math.pow(2, 2));

// console.log(Math.min(4, 3, 2, 1));

// console.log(Math.max(4, 3, 2, 1));

// console.log(Math.random()); //give value under o to 1

// console.log(Math.random() * 10 + 1); // it shift 1 digit to left for.ex. 1.22 be like 2.2

// console.log(Math.floor(Math.random() * 10) + 1); // if digit is like 0.01 then math.floor give 0 so add 1

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
