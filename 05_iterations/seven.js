const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// callback function using map method
// in map it return the values
// const newNums = myNums.map((num) => num + 10);
// const newNums = myNums.map((num) => { num + 10 });// when you open scope {}, return it.

// console.log(newNums);

// chaining: used two or more than two method's
const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 40);
console.log(newNums);
