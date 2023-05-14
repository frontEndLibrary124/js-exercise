// calculates the arc-cosine (inverse of cosine) of the specified angle
// and returns it.
// Math.acos(angle)

// Parameter: angle(radians) - in range -1 to 1 whose arc-cosine is to be calculated
// Returns: arc-cosine value of the angle.
//          NaN for argument greater than 1 or less than -1 or non-numeric.

// negative number (between -1 and 1)
let num1 = Math.acos(-1);
console.log(num1); // 3.141592653589793

// positive number (between -1 and 1)
let num2 = Math.acos(0.5);
console.log(num2); // 1.0471975511965979

// negative number less than -1
let num3 = Math.acos(-3);
console.log(num3); // NaN

// positive number greater than 1
let num4 = Math.acos(32);
console.log(num4); // NaN

// string
let num5 = Math.acos('hello');
console.log(num5); // NaN