// how getter and setter define throught object
const User = {
  _email: "H@hc.com",
  _password: "abx",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};
// we have used factory function (Object.create)
const tea = Object.create(User);
console.log(tea.email); //it access email instead of _email because behind the scene it access not properties it access the method name
