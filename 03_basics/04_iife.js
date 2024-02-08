// Immediately Invoked Function Expressions (IIFE): Immediately execute function or remove pollution of global scope

(function chai() {
  // named iife
  console.log("DB CONNECTED");
})();
// syntax
// ()(): first () bracket's are function defination second () bracket's are execution

((name) => {
  // unnamed iife with parameter
  console.log(`DB CONNECTED TWO ${name}`);
})("sahil");

// if you want to run to iife then used ; at the execution
