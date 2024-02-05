const accountId = 144553;
let accountEmail = "sahil@123.com";
var accountPassword = "1234";
accountCity = "Maharashtra";

// accountId = 123;// not alllowed

accountEmail = "SP@1234.com";
accountPassword = "5678";
accountCity = "Jaipur";
let accountState; //it gives undefined value

console.log(accountId);

/*
 Prefer not to use var
 Because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
