// divides its two arguments and computes the arctan (inverse of tangent)
// of the result.
// Math.atan2(x, y)

// Parameters:
// the atan2() method takes two parameters:
// x - number which is divided by the parameter y
// y - number that divides the parameter x
// here, the method computes the arctangent of x / y.

// Returns:
// angle (in radians) after computing the arctan of x / y.
// NaN for non-numeric arguments x and y.

// arctangent of 10 / 5
let num1 = Math.atan2(10, 5);
console.log(num1); // 1.1071487177940904

// arctangent of 0 / 10
let num2 = Math.atan(0, 10);
console.log(num2); // 0

// positive infinity
let num3 = Math.atan2(Infinity, 0);
console.log(num3); // 1.5707963267948966 (π/2)

// negative infinity 
let num4 = Math.atan2(-Infinity, 0);
console.log(num4); // -1.5707963267948966 (-π/2)

// both infinities
let num5 = Math.atan2(Infinity, -Infinity);
console.log(num5); // 2.356194490192345 (3*π/4)

// string
let num6 = Math.atan2('hello', 'world');
console.log(num6); // NaN