// computes the hyperbolic sine of the specified number and returns it.
// It is equivalent to (e^x - e^-x)/2.
// Math.sinh(number)

// Parameter: number - whose hyperbolic sine is to be calculated.
// Returns: hyperbolic sine of the given argument number.
//          NaN (Not a Number) for a non-numeric argument.

// negative number
let num1 = Math.sinh(-1);
console.log(num1); // -1.1752011936438014

// zero
let num2 = Math.sinh(0);
console.log(num2); // 0

// positive number
let num3 = Math.sinh(2);
console.log(num3); // 3.626860407847019

// positive infinity
let num4 = Math.sinh(Infinity);
console.log(num4); // Infinity

// negative infinity
let num5 = Math.sinh(-Infinity);
console.log(num5); // -Infinity

// string
let num6 = Math.sinh('hello');
console.log(num6); // NaN