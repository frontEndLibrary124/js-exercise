// rounds a decimal number up to the next largest integer and returns it. 
// That is, 4.3 will be rounded to 5 (next largest integer)

// Parameter: number
// Returns: the nearest largest integer / NaN

let num1 = Math.ceil(5.2);
console.log(num1);  // 6

let num2 = Math.ceil(9.1);
console.log(num2);  // 10

let num3 = Math.ceil(-9.8);
console.log(num3);  // -9

let num4 = Math.ceil(-2.2);
console.log(num4);  // -2

let num5 = Math.ceil('3.2');
console.log(num5);  // 4

let num6 = Math.ceil('hello');
console.log(num6);  // NaN