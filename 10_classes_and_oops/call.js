function SetUsername(username) {
  // complex DB calls
  this.username = username;
  console.log("Called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username); //SetUsername method not call if you are not used .call method and pass this in call because it will take properties or function done in SetUsername // basically .call will call SetUsername but to access it's properties you need to pass this in call then username will set in object createUser o/p: { username: 'chai', email: 'chai@123', password: '123'
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@123", "123");
console.log(chai);
