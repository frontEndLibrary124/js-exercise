// computes the hyperbolic arctangent of the specified value and returns it.
// Math.atanh(number)

// Parameter: number - between -1 and 1 whose hyperbolic arctangent is to be calculated.
// Returns: hyperbolic arctangent of the argument number.
//          NaN if the argument is either non-numeric or greater than 1 or less than -1.

// zero (between -1 and 1)
let num1 = Math.atanh(0);
console.log(num1); // 0

// positive number (between -1 and 1)
let num2 = Math.atanh(0.5);
console.log(num2); // 0.5493061443340548

// positive number greater than 1
let num3 = Math.atanh(2);
console.log(num3); // NaN

// negative number less than -1
let num4 = Math.atanh(-4);
console.log(num4); // NaN

// argument -1
let num5 = Math.atanh(-1);
console.log(num5); // -Infinity

// argument 1
let num6 = Math.atanh(1);
console.log(num6); // Infinity

// string
let num7 = Math.atanh('hello');
console.log(num7); // NaN