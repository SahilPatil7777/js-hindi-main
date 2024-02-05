// Dates

let myDate = new Date();

// console.log(typeof myDate);

// console.log(myDate.toString()); // o/p => Mon Feb 05 2024 07:59:21 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // o/p => Mon Feb 05 2024
// console.log(myDate.toLocaleString()); // o/p => 2/5/2024, 7:57:19 AM
// console.log(myDate.toLocaleDateString()); // o/p => 2/5/2024
// console.log(myDate.toJSON()); // o/p => 2024-02-05T02:28:34.401Z
// console.log(myDate.toISOString()); // o/p => 2024-02-05T02:28:34.401Z

let myCreatedDate = new Date(2023, 0, 23); // month start from 0 in javascript
// let myCratedDate = new Date(2023, 0, 23, 5, 3);
// let myCratedDate = new Date("2023-01-14"); // in dd-mm-yy the month start from 1
// let myCratedDate = new Date("01-14-2023");

// console.log(myCratedDate.toLocaleString());

// TimeStamps

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // convert to milisecond
// console.log(Math.round(Date.now() / 1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getTime());


newDate.toLocaleString("default"{
    weekday: "long",
})