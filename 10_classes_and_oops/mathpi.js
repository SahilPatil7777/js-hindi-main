// why Math.PI value is not change
// Object.getOwnPropertyDescriptor tells about hidden properties about object

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);
// o / p:
// {
//   value: 3.141592653589793,
//   writable: false,// not able to change value
//   enumerable: false,
//   configurable: false
// }

// console.log(Math.PI);
// Math.PI = 4;
// console.log(Math.PI);

// check Descriptor Property
const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("chai nahi bani");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name")); //give descriptor property of name

// change the properties to false( You only change the descriptor property of your own object )
Object.defineProperty(chai, "name", {
  //   writable: false,
  enumerable: true,
});
//
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  //for iterating an object Object.entries(chai) will used
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
