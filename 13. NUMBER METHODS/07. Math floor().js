// rounds down a number to the next smallest integer

// Parameter: number
// Returns: the largest integer less than or equal to a given number.
//          returns 0 for null.

let num1 = Math.floor(5.2);
console.log(num1);  // 5

let num2 = Math.floor(9.1);
console.log(num2);  // 9

let num3 = Math.floor(-9.8);
console.log(num3);  // -10

let num4 = Math.floor(-2.2);
console.log(num4);  // -3

let num5 = Math.floor('3.2');
console.log(num5);  // 3

let num6 = Math.floor('-5.8');
console.log(num6);  // -6

let num7 = Math.floor(null);
console.log(num7);  // 0

let num8 = Math.floor('hello');
console.log(num8);  // NaN