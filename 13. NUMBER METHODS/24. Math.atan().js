// calculates the arctangent (inverse of tangent) of the specified angle 
// and returns it.
// Math.atan(angle)

// Parameter: angle - in radians whose arctangent value is calculated.
// Returns: arctangent value of the angle argument.
//          NaN if argument is a non-numeric value

// negative number
let num1 = Math.atan(-10);
console.log(num1); // -1.4711276743037347

// zero
let num2 = Math.atan(0);
console.log(num2); // 0

// positive infinity
let num3 = Math.atan(Infinity);
console.log(num3); // 1.5707963267948966

// negative infinity
let num4 = Math.atan(-Infinity);
console.log(num4); // -1.5707963267948966

// string
let num5 = Math.atan('hello');
console.log(num5); // NaN