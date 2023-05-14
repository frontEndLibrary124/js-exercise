// brouser's time zone in string
var dt = new Date();
console.log(dt); // 2023-03-11T14:08:26.732Z

// creating date objects
var dt = new Date();
var dt = new Date(date-string);
var dt = new Date(year, month, day, hour, minute, second, ms);
var dt = new Date(milliseconds);

// date string
var dt = new Date('2023-03-10');
var dt = new Date('March 10, 2023 12:00:00');

// year, month...
var dt = new Date(2023, 03, 10, 10, 40, 30, 100);

// milliseconds
var dt = new Date(0); // 01 January 1970 + 0
var dt = new Date(100000000000);
var dt = new Date(-100000000000);





// display dates
var dt = new Date();

console.log(dt.toString()); // Sat Mar 11 2023 14:19:18 GMT+0000
console.log(dt.toDateString()); // Sat Mar 11 2023
console.log(dt.toUTCString()); // Sat, 11 Mar 2023 14:21:18 GMT
console.log(dt.toISOString()); // 2023-03-11T14:21:18.675Z





// date input
// ISO date  ---> "2023-03-25" (The International Standard)
// Sort date ---> "03/25/2023"
// Long date ---> "Mar 25 2023" or "25 Mar 2023"

// ISO date
var dt = new Date("2023-03-25");
var dt = new Date("2023-03");
var dt = new Date("2023");

var dt = new Date("2023-03-25T12:00:00Z");
var dt = new Date("2023-03-25T12:00:00-00:30");


// Short date
var dt = new Date("03/25/2023");


// Long date
const dt = new Date("Mar 25 2023");
const dt = new Date("25 Mar 2023");
const dt = new Date("January 25 2023");
const dt = new Date("Jan 25 2023");
const dt = new Date("JANUARY, 25, 2023");