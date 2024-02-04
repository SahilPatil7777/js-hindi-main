const name = "sahil";
const repoCount = 3;

// console.log(name + repoCount + " value"); do not used this syntax

// String interpolation way
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another way declare a string
const gameName = new String("sahil-patil-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__); //gives an object

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf("s"));

const newString = gameName.substring(0, 5);
// console.log(newString);

const anotherString = gameName.slice(-8, 4);
// console.log(anotherString);

const NewStringOne = "     hitesh  ";
// console.log(NewStringOne);
// console.log(NewStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";
// console.log(url.replace("%20", "-"));

console.log(url.includes("hitesh"));

console.log(gameName.split("-"));
