// used java script after ES6
// class constructor and static

// class User {
//   constructor(username, email, password) {
// set this properties
// this.username = username;
// this.email = email;
// this.password = password;
//   }
//
//   encryptPassword() {
// return `${this.password}abc`;
//   }
//
//   ChangeUserName() {
// return `${this.username.toUpperCase()}`;
//   }
// }
//
// const chai = new User("chai", "chai@gmail.com", "123");
// console.log(chai.encryptPassword());
// console.log(chai.ChangeUserName());

// Behind the scene without classes how can we do
function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.ChangeUserName = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User("tea", "tea@gmail.com", "123");
console.log(tea.encryptPassword());
console.log(tea.ChangeUserName());
