// getter's and setter's
class User {
  constructor(email, password) {
    //constructor set the email but not password because password is override in get and ser
    this.email = email;
    this.password = password;
  }
  // it is mendetory to declare both getter and setter

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value; // setter's are not return
  }
  // it is give the user as capital password
  get password() {
    return this._password.toUpperCase();
  }

  // it is set as it is in database
  set password(value) {
    this._password = value;
  }
}

const hitesh = new User("sahil@gmail.com", "abc");
console.log(hitesh.email);
console.log(hitesh.password);
