// calculates the hyperbolic tangent of the specified number and returns it.
// It is equivalent to (ex - e-x)/(ex + e-x).
// Math.tanh(number)

// Parameter: number - whose hyperbolic tangent is to be calculated.
// Returns: hyperbolic tangent of the given argument number.
//          NaN (Not a Number) for a non-numeric argument.

// negative number
let num1 = Math.tanh(-1);
console.log(num1); // -0.7615941559557649

// zero
let num2 = Math.tanh(0);
console.log(num2); // 0

// positive number
let num3 = Math.tanh(2);
console.log(num3); // 0.9640275800758169


// negative infinity
let num4 = Math.tanh(-Infinity);
console.log(num4); // -1

// positive infinity 
let num5 = Math.tanh(Infinity);
console.log(num5); // 1

// string
let num6 = Math.tanh('hello');
console.log(num6); // NaN