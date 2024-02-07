// function

// console.log("s");
// console.log("a");
// console.log("h");
// console.log("i");
// console.log("l");

// function defination
function sayMyName() {
  console.log("s");
  console.log("a");
  console.log("h");
  console.log("i");
  console.log("l");
}

// sayMyName(); //execution or reference

// function addTwoNumbers(num1, num2) {
// num1,num2 are parameter
//   console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const result = addTwoNumbers(2, 3); // 2,3 are arguments
// console.log(result);

function loginUserMessage(username = "dam") {
  //dam is default value when value is not defined
  if (username === undefined) {
    // !username it is same
    console.log("please enter username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("sahil patil"));
// console.log(loginUserMessage());

// when there are many argument then used ...rest operator
function calculateCartPrice(val1, val2, ...num1) {
  //val1, val2, ...num1 do this also as parameter
  return num1;
}
// console.log(calculateCartPrice(200, 400, 500, 2000));

// how to pass object in function
// const user = {
//   username: "sahil",
//   price: "120",
// };

function handleObject(anyobject) {
  //   console.log(
  // `Username is ${anyobject.username} and price is ${anyobject.price}`
  //   );
}
// handleObject(user);

// you can directly pass object in function call
handleObject({
  username: "sahil",
  price: "120",
});

// pass arrays in functions
const mynewArray = [200, 400, 100, 600];

function returnsecondValue(getArray) {
  return getArray[1];
}
// console.log(returnsecondValue(mynewArray));
// console.log(returnsecondValue([200, 400, 100, 600]));
