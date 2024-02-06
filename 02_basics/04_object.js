// declare object using constructor

// const tinderUser = new Object(); singleton object

const tinderUser = {}; // non-singleton object
tinderUser.id = "123abx";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// object inside object
const regularUser = {
  eamil: "Some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "sahil",
      lastname: "patil",
    },
  },
};
// accessing object inside object
// console.log(regularUser.fullname.userfullname.firstname);

// combining object
const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};
const obj4 = {
  5: "a",
  6: "b",
};
// const obj3 = { obj1, obj2 };//not good syntax for merge

// const obj3 = Object.assign({}, obj1, obj2, obj4); //syntax for merge // all values goes in {} and if {} is not there then it will go in first obj1

const obj3 = { ...obj1, ...obj2, ...obj4 }; //syntax for merge using spread operator
// console.log(obj3);

// objects in array
const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];
// console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //make each key: value in array

console.log(tinderUser.hasOwnProperty("isLoggedn")); //hasOwnProperty used for check property
