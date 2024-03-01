let myName = "sahil    ";
let myChai = "chai     ";

console.log(myName.trueLength);

let myHeros = ["hanuman", "spiderman"];

let heroPower = {
  hanuman: "gada",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.sahil = function () {
  //add property in object so it will access by object, arrays, string
  console.log(`sahil is present in all objects`);
};

Array.prototype.heySahil = function () {
  // only array have power to access heysahil
  //
  console.log(`sahil says hello`);
};
// heroPower.sahil();
// myHeros.sahil();

// myHeros.heySahil();
// heroPower.heySahil();//heroPower.heySahil is not a function  or not access

// inheritance or prototypal inheritance
// in few year ago there is no such class so we create object and add properties
// old approach
const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "js Assignment",
  fullTime: true,
  __proto__: TeachingSupport, // it borrow properties of TeachingSupport
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher); //it work the same that TeachingSupport borrow properties of Teacher but it is easy syntax

let anotherUserName = "chaiAurcode     ";
String.prototype.trueLength = function () {
  console.log(`${this}`); //o/p : chaiAurcode
  console.log(`True length is: ${this.trim().length}`);
};
anotherUserName.trueLength();
"sahil".trueLength();
"iceTea".trueLength();
