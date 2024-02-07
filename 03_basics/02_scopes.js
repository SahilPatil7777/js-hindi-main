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

console.log(a);
// console.log(b);
// console.log(c);
