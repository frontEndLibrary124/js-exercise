// calculates the arcsine (inverse of sine) of the specified angle 
// and returns it.
// Math.asin(angle)

// Parameter: angle - in radians whose arcsine is to be calculated
// Returns: arcsine value of the angle
//          NaN if the argument is either non-numeric 
//          or greater than 1 or less than -1

// negative number (between -1 and 1)
let num1 = Math.asin(-1);
console.log(num1); // -1.5707963267948966

// positive number (between -1 and 1)
let num2 = Math.asin(0.5);
console.log(num2); // 0.5235987755982989

// negative number less than -1
let num3 = Math.asin(-50);
console.log(num3); // NaN

// positive number greater than 1
let num4 = Math.asin(100);
console.log(num4); // NaN

// string
let num5 = Math.asin('hello');
console.log(num5); // NaN