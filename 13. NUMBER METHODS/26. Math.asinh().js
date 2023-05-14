// computes the hyperbolic arcsine of the specified number and returns it.
// Math.asinh(number)

// Parameter: number - whose hyperbolic arcsine is to be calculated.
// Returns: hyperbolic arcsine of the given argument number.
//          NaN for a non-numeric argument.

// negative number
let num1 = Math.asinh(-5);
console.log(num1); // -2.3124383412727525

// zero
let num2 = Math.asinh(0);
console.log(num2); // 0

// positive number
let num3 = Math.asinh(32);
console.log(num3); // 4.15912713462618

// positive infinity
let num4 = Math.asinh(Infinity);
console.log(num4); // Infinity

// negative infinity
let num5 = Math.asinh(-Infinity);
console.log(num5); // -Infinity

// string
let num6 = Math.asinh('hello');
console.log(num6); // NaN