// computes the square root of a specified number and returns it

// Parameter: number
// Returns: the square root of a given positive integer or decimal

let num1 = Math.sqrt(16);
console.log(num1);  // 4

let num2 = Math.sqrt(-16);
console.log(num2);  // NaN

let num3 = Math.sqrt('16');
console.log(num3);  // 4

let num4 = Math.sqrt('hello');
console.log(num4);  // NaN

let num5 = Math.sqrt(Infinity);
console.log(num5);  // Infinity

let num6 = Math.sqrt(-Infinity);
console.log(num6);  // NaN