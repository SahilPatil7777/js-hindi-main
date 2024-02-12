// foreach loop
const coding = ["js", "java", "python", "Mangodb"];

// write callback function with no name
coding.forEach(function (item) {
  //   console.log(item);
});

// another variation
coding.forEach((val) => {
  //   console.log(val);
});

// give function in callback function
function printMe(item) {
  //   console.log(item);
}

// it give item, index and whole array
coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

// object in array
const mycoding = [
  {
    lanName: "javascript",
    lanFileName: "js",
  },
  {
    lanName: "java",
    lanFileName: "java",
  },
  {
    lanName: "python",
    lanFileName: "py",
  },
];

// access object in arrays using forEach loop
mycoding.forEach((item) => {
  console.log(item.lanName);
});
