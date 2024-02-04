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

// console.log(id === anotherId);

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
  // console.log("Hello World");
};

// console.log(typeof anotherId);

/* Return type of variables in javascript
   1. Primitive Datatypes
   Number => number
   String => string
   Boolean => boolean
   null => object
   undefined => undefined
   Symbol => Symbol
   BigInt => binint

   2. Non-Primitive Datatypes
   Arrays => object
   Object => object
   Function => function object
*/

// ******************************************** Memories *********************************************************

// Two types of memory : Stack used in primitive datatypes, Heap used in non-primitive datatypes
// Stack is just give the copy of variables
// Stack
let myName = "sahil";

let anotherName = myName;
anotherName = "sahilpatil";

// console.log(myName);
// console.log(anotherName);

// Heap: when you take reference from heap it gives original value reference
// Heap

let userOne = {
  email: "user@goole.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "sahil@google.com";
console.log(userOne.email);
console.log(userTwo.email);
