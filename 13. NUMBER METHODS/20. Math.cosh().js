// computes the hyperbolic cosine of the specified number and returns it.
// It is equivalent to (ex + e-x)/2.
// Math.cosh(number)

// Parameter: number - whose hyperbolic cosine is to be calculated.
// Returns: hyperbolic cosine of the given argument number.
//          NaN (Not a Number) for a non-numeric argument.

// negative number
let num1 = Math.cosh(-1);
console.log(num1); // 1.5430806348152437

// zero
let num2 = Math.cosh(0);
console.log(num2); // 1

// positive number
let num3 = Math.cosh(2);
console.log(num3); // 3.7621956910836314

// positive infinity
let num4 = Math.cosh(Infinity);
console.log(num4); // Infinity

// negative infinity
let num5 = Math.cosh(-Infinity);
console.log(num5); // Infinity

// string
let num6 = Math.cosh('hello');
console.log(num6); // NaN