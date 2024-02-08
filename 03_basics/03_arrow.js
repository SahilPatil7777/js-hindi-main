// when you want to  refered current context like username, price then used this keyword
// context: simply value or varibles that hold the values
const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    // console.log(this);// this talk about current value or context
  },
};
// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this); //  this referred to empty object

// cannot used this in function
// function chai() {
// let username = "hitesh"
// console.log(this.username);
// }
//
// chai();

// another way of declare function
// cannot used this in function
// const chai = function () {
// let username = "hitesh";
// console.log(this.username);
// };
// chai();

// arrow function
// cannot used this in function
// const chai = () => {
// let username = "hitesh";
// console.log(this.username);
// };
// chai();

// basic arrow function
// const addTwo = (num1, num2) => {
// return num1 + num2;
// };

// implicit return arrow function: we don't used {} bracket's and return
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

// return an object
const addTwo = (num1, num2) => ({ username: "sahil" });

console.log(addTwo(2, 4));

// when you {} bracket then you need to used return statement but if you used () then no need to used return statemen
