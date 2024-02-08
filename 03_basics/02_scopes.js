// global and local scope
// {}: means scope when it come with any function ,if else or for loop then that is called as scope of that program

// Global scope
// var c = 300;
let a = 399;

// block scope
if (true) {
  let a = 10;
  const b = 2;
  var c = 30; // it does not follow any scope that why it's not used
  // becuase even if scope c is in this loop only but it print c that's why var is not used
}

// console.log(a);
// console.log(b);
// console.log(c);

// Nested scope : only child can access the parent properties not vice versa
// function one() {
//   const username = "hitesh";

//   function two() {
// const website = "youtube";
// console.log(username);
//   }
// console.log(website);//not within scope

//   two(); //execute
// }
// one(); //execute

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    // console.log(username + website);
  }
  //   console.log(website);// not within scope
}
// console.log(username); //not within scope

// ***************************************** Intresting *********************************************
// addone(5);// it can be run easily
function addone(num) {
  return num + 1;
}
addone(5);

// expression // different way of function

//  addtwo(5); // it cannot be run easily
const addtwo = function (num) {
  return num + 2;
};
addtwo(5);
