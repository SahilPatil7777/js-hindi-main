// reduce method:
const myNums = [1, 2, 3];

// using normal function
// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval;
// }, 0); // zero for acc to stort from zero

// console.log(myTotal);

// using arrow function
// const myTotal = myNums.reduce((acc, currval) => acc + currval, 0);

// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "python course",
    price: 5000,
  },
  {
    itemName: "java course",
    price: 7000,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
