// Primitive datatypes: Call by value

// 7 types: String, number, boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id);
// console.log(anotherId);

console.log(id === anotherId);

const bigNumber = 12345453545n;

/*JavaScript is a dynamically typed language, 
which means that data types of variables are determined by the value they hold at runtime 
and can change throughout the program as we assign different values to them.*/

// Non-Primitive datatypes(Reference)

// types: Arrays, Objects, Functions

const heros = ["Hanuman", "Naagraj", "doga"];
let myObj = {
  name: "sahil",
  age: 21,
};

const myFunction = function () {
  console.log("Hello World");
};

console.log(typeof anotherId);
