// object literal
const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    // console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // o/p: {}

// this means current context

// Constructor function
// const promiseOne = new Promise();
// const date = new Date(); //new keyword is constructor function that allow to create multiple instances from one object

function User(username, loginCount, isLoggedIn) {
  this.username = username; //left wala apala variable and right wala parameter pass kiva value
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("sahil", 11, false); //override value if not add new

console.log(userOne.constructor); //constructor is reference about you in this case user
// console.log(userTwo);

// new Keyword: create empty object it called instance
// 1.new object create
// 2.constructor fucntion call due to new keyword
// 3.this me argument inject hote hain
// 4.milate hain fucntion
