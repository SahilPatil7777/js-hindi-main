// Promises in JavaScript are objects representing the eventual completion or failure of an asynchronous operation.
// They are used to handle asynchronous operations such as fetching data from a server, reading files, or executing
// time - consuming computations,where the result of the operation may not be available immediately.

// create promise
const promiseOne = new Promise(function (resolve, reject) {
  //  Do an async task
  // DB calls ,cryptography task,network calls
  setTimeout(function () {
    console.log("Async task is complete");
    resolve(); // now it connect with .then
  }, 1000);
});

// comsumed promise
// .then has direct relation with resolve
promiseOne.then(function () {
  console.log("promised comsumed");
});
// ********************************************************************
// did in one part
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 is complete");
    resolve(); // now it connect with .then
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});
// *******************************************************
// create promise

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "chai@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "sahil", password: "123" });
    } else {
      reject("ERROR:Something went wrong"); // give an error
    }
  }, 1000);
});

// the value from upper vala then return to niche vala then
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error); //now it connect with .catch
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR:JS went wrong"); // give an error
    }
  }, 1000);
});

// second apprach to consumed promise
async function consumedPromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumedPromiseFive();

// async function getAllUsers() {
//   try {
// const response = await fetch("https://jsonplaceholder.typicode.com/users");
// const data = await response.json();
// console.log(data);
//   } catch (error) {
// console.log("E: ", error);
//   }
// }
// getAllUsers();

// yahi kam using .then

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

// fetch is execute first than other .then, .catch, .finally because it make special queue for fetch.
// micro task queue
