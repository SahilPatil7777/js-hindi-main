// for loop
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("five is best number");
  }
  //console.log(element);
}
// console.log(element); // not accessable

for (let i = 1; i <= 10; i++) {
  // console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value: ${j} and inner loop ${i}`);
    // table print
    // console.log(i + "*" + j + " = " + i * j);
  }
  // console.log("next table");
}

let myArray = ["nihal", "akash", "rohit"];
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  // const element = myArray[index];
  // console.log(element);
}

// break and continue

for (let index = 1; index < 20; index++) {
  if (index == 5) {
    // console.log("5 is detected");
    break;
  }
  // console.log(`Value of i is ${index}`);
}

for (let index = 1; index < 20; index++) {
  if (index == 5) {
    console.log("5 is detected");
    continue;
  }
  console.log(`Value of i is ${index}`);
}
