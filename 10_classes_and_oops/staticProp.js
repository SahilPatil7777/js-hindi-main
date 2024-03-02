// staic keyword
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`username: ${this.username}`);
  }

  static createId() {
    // static stop access of createId
    return `123`;
  }
}

const sahil = new User("sahil");
// console.log(sahil.createId()); //static stop access of createId to parent

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
console.log(iphone.createId()); //static stop access of createId to child
