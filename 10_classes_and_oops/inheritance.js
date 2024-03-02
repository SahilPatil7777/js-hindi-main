// inheritance
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`UserName is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    // set this properties
    // not need to used .call method and pass this keyword in last time because we have class syntax.Instead we used super keyword
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@gmail.com", "123");
chai.addCourse();
chai.logMe(); //have access to  properties of parent class

const masalaChai = new User("masalaChai");
// masalaChai.addCourse(); //no access to parent class of child class properties
masalaChai.logMe();

console.log(chai instanceof User); // o/p: true
