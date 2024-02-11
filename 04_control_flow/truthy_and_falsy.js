// truthy and falsy value. where truthy value that assume the value is true and  falsy value assume the value is false
const userEmail = [];

// if (userEmail) {
//   console.log("Got user Email");
// } else {
//   console.log("Don't have user email");
// }

// falsy values
// - false
// - 0
// - (-0)
// - BigInt 0n
// - ""
// - null
// - undefined
// - NaN

// truthy values
// - "0"
// - 'false'
// - " "
// - []
// - {}
// - function(){}

// how to check an array using condition
// if (userEmail.length === 0) {
//   console.log("Array is empty");
// }

// how to check an object using condition
// const emptyObj = {};

// if (Object.keys(emptyObj).length === 0) {
//return array
//   console.log("Object is empty");
// }

// some interview question
// false == "";
// true;
//
// false == 0;
// true;
//
// 0 == "";
// true

// Nullish Coalescing Opearator (??): null undefined
// it check the safety of program  on the basis of null , undefined. so program will run properly.
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? undefined ?? 15;

console.log(val1);

// Terniary Operator:(?:)

// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
