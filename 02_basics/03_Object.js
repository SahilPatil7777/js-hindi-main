// singleton : when you make object using constructor then it is singleton

// ways to declare object 1.object literals 2.constructor
// object.create using constructor

// object literals
const mySys = Symbol("key1"); //declare symbol and act as key in object and print it

const JsUser = {
  name: "Hitesh",
  "full name": "sahilpatil",
  [mySys]: "key1",
  age: 21,
  location: "Maharashtra",
  email: "sahilpatil@123.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
// two ways to access
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser."full name"); not allowed
// console.log(JsUser[mySys]);

JsUser.email = "sahil@google.com"; //change the value

// lock the value mean do not change the value
// Object.freeze(JsUser);
JsUser.email = "sahil@chatgpt.com";

// console.log(JsUser);

JsUser.greeting = function () {
  console.log("good morning");
};

JsUser.greeting2 = function () {
  console.log(`good morning, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
