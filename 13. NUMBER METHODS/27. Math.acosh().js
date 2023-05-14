// computes the hyperbolic arc-cosine of the specified number 
// and returns it.
// Math.acosh(number)

// Parameter: number - a positive value whose hyperbolic arc-cosine is to be calculated.
// Returns: hyperbolic arc-cosine of the given positive argument number.
//          NaN for zero, negative and non-numeric argument.

// positive number (integer)
let num1 = Math.acosh(50);
console.log(num1); // 4.6050701709847575

// positive number (float)
let num2 = Math.acosh(5.5);
console.log(num2); // 2.3895264345742184

// negative number
let num3 = Math.acosh(-10.5);
console.log(num3); // NaN

// zero
let num4 = Math.acosh(0);
console.log(num4); // NaN

// string
let num5 = Math.acosh('hello');
console.log(num5); // NaN