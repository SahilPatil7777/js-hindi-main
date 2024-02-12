// Array specific loops
// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

// forof loop on array
for (const num of arr) {
  //   console.log(num);
}

const greetings = "hello world";
// forof loop on string
for (const greet of greetings) {
  //   console.log(`each char is ${greet}`);
}

// Map
const map = new Map();
map.set("IN", "India");
map.set("USA", "United State of America");
map.set("FR", "France");
map.set("IN", "India"); //it will not add india again because map is known for it's uniqueness

// console.log(map);

// forof loop on Map
for (const [key, value] of map) {
  //   console.log(key, ":-", value);
}

// forof loop on object : it will not work on object
const myObj = {
  game1: "NFS",
  game2: "GTA",
};

// it give and error
for (const [key, value] of myObj) {
  // both key and values
  console.log(key, ":-", value);
}
