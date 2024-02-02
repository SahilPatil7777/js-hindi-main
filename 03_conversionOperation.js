let score = "sahil";

// console.log(typeof score);
// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => it will be convert to 33
// "33abc" => it will not convert and when you print give NaN
// true => it will convert to 0 and false will convert to 1
// sahil => it will not convert and when you print give NaN

let isLoggedIn = "";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

// 1 => it will convert to true and 0 => it will convert to false
// "" => false
// "hitesh" => it will convert to true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// 33 => it will convert to "33"

// **********************************  Operations  ***********************************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 2);
// console.log(2 % 2);

let str1 = "hello";
let str2 = " sahil";
let str3 = str1 + str2;

// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); //in this case it will join to string i.e 122
// console.log(1 + 2 + "2"); // in this case it will first add 1 and 2 then join 3 with 2 i.e. 32

// onsole.log(+true);//not good syntax
// onsole.log(+"");//not good syntax

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // not good syntax

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
