// Magic of Prototype in js
// new keyword in object
// prototype means access till null, mean go up and up.
// it is prototype-based language(meanig aceessing properties till get null.go till last. it provide OOP's, protype - inheritance, this keyword ( protype behaviour means har nahi manana )).
// function is fucntion also and object also
function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2; // because function is also object
// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);//o/p : {} prototype will bydeuault context set

function createuser(username, score) {
  this.username = username;
  this.score = score;
}

createuser.prototype.increament = function () {
  this.score++; //this means jiske ne bhi bulaya hain usaka value increament karo
};

createuser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const chai = new createuser("chai", 24); // new keyword is import
const tea = new createuser("tea", 240);

chai.printMe(); // no need to used prototype it manage it task of access automatically

/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/
