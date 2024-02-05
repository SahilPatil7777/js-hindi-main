const marvel_heros = ["Thor", "IronMan", "spiderMan"];
const dc_heros = ["superMan", "batMan", "flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// Spread Operator
const allNewHeros = [...marvel_heros, ...dc_heros]; // spread operator is used to concatinate && it is better than concate because you can add 2 or more arrays
// console.log(allNewHeros);

// flat is used to merge arrays of array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

console.log(Array.isArray("hitesh")); // gives the false
console.log(Array.from("hitesh")); //convert to arrays
console.log(Array.from({ name: "hitesh" })); //Interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // convert to arrays
