// if statement
const isUserLoggedIn = true;
const temperature = 41;
// if (temperature < 50) {
//   console.log("less than 50");
// }
// console.log("temperature greater than 50");

// if else statement
// if (temperature === 40) {
//   console.log("less than 50");
// } else {
//   console.log("temperature greater than 50");
// }
// console.log("execute toh hoga hi");

// comparison operator: <, >, <=, >=, !=, ==, ===, !==

// const score = 200;
//
// if (score > 100) {
//   const power = "fly";
//   console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); // give scope problem

// short-hand notation of if statement
// const balance = 1000;
// if (balance > 500) console.log("test"), console.log("test2");// implicit scope (but not good syntax)

// if else- ladder
// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("greater than or equal 1000");
// }

// multiple check using logical operator's
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
