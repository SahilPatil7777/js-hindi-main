// const coding = ["js", "java", "python", "Mangodb"];

// forEach loop cannot return values
// const values = coding.forEach((item) => {
//   console.log(item);
//   return item;
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7];

// filter method  operation return  only true values
// const newNums = myNums.filter((num) => num > 4);

// another way using filters
// const newNums = myNums.filter((num) => {
//   return num > 4;
// });
// console.log(newNums);

// Using for loop
// const newNums = [];

// you need to explicitly return values using forEach loop
// myNums.forEach((num) => {
//   if (num > 4) {
// newNums.push(num);
//   }
// });
// console.log(newNums);

// filter properties
const names = [
  { name: "sahil", age: 21, birthPlace: "bhatane" },
  { name: "akash", age: 23, birthPlace: "jambhulpada" },
  { name: "nihal", age: 20, birthPlace: "chandip" },
  { name: "rohit", age: 23, birthPlace: "Bhatane" },
  { name: "bhavesh", age: 24, birthPlace: "virar" },
  { name: "yash", age: 23, birthPlace: "virar" },
  { name: "raj", age: 19, birthPlace: "khardi" },
  { name: "jayesh", age: 25, birthPlace: "rajavali" },
];

let userNames = names.filter((nam) => nam.birthPlace === "virar");
userNames = names.filter((nam) => {
  return nam.age >= 24 && nam.birthPlace === "virar";
});

console.log(userNames);
