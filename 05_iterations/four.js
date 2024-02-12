const myObject = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};

// forin Loop on object
for (const key in myObject) {
  //   console.log(key); // give key
  //   console.log(myObject[key]); // give values
  //   console.log(`${key} shortcut is for ${myObject[key]}`);
}

// forin Loop on Arrays
const programming = ["js", "java", "c++", "c", "react"];

for (const key in programming) {
  //   console.log(key);//only give index
  //   console.log(programming[key]);
}

// forin Loop on map: map is not iteratable so it will not written in loop like this
const map = new Map();
map.set("IN", "India");
map.set("USA", "United State of America");
map.set("FR", "France");
map.set("IN", "India");

for (const key in map) {
  //   console.log(key);
}
