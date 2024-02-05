// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// Comparison and equality operator work differently in javascript
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
/* ***** The reason is that an equality check == and comparisons > <>= <= work differently****
                             comparison convert null to a number, treating it as 0.that's 
                          // why null >= 0 is true and null >= 0 is false */
// console.log(undefined == 0);
// console.log(undefined >= 0);
// console.log(undefined < 0);

// strict check === it not only check value but also it's datatypes
console.log("2" === 2);
