// returns the nearest 32-bit single precision float 
// representation of a Number

// Parameter: a double float number

let num1 = Math.fround(1.5);
console.log(num1);  // 1.5

let num2 = Math.fround(5.05);
console.log(num2);  // 5.050000190734863

console.log(2 ** 130);  // 1.361129467683754e+39
let num3 = Math.fround(2 ** 130);
console.log(num3);  // Infinity

let num4 = Math.fround(5);
console.log(num4);  // 5

let num5 = Math.fround(1.337);
console.log(num5);  // 1.3370000123977661