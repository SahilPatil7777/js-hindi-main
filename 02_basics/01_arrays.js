// arrays

const myArr = [0, 1, 2, 3, 4, 5];

// another way to declare array
const myHeros = ["shaktiman", "Hanuman", "krish"];

const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[1]);

// Arrays Methods

// myArr.push(6); // add 6 in myArr at last
// myArr.push(7); // add 7 in myArr at last
// myArr.pop(); // remove last element from myArr

// myArr.unshift(9); // unshift value at start index of myArr

// myArr.shift(); // shift remover value at start index of myArr

// console.log(myArr.includes(9));

// console.log(myArr.indexOf(1));

const newArr = myArr.join(); // values are bind in newArr but in string datatype

// console.log(myArr);
// console.log(newArr);

// slice, splice
console.log("A", myArr);

const myN1 = myArr.slice(1, 3); // it does'nt include 3 index
console.log(myN1);
console.log("B", myArr);

const myN2 = myArr.splice(1, 3); // it include 3 index also but it also splice that portition basically it manupulate the array
console.log("C", myArr);
console.log(myN2);
