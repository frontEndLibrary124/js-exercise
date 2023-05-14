// computes the trigonometric tangent of the specified angle and returns it
// Math.tan(angle)

// Parameter: angle - in radians
// Returns: tangent of a given angle
//          NaN for a non-numeric argument

let val1 = Math.tan(1);
console.log(val1);  // 1.5574077246549023

let val2 = Math.tan(-1);
console.log(val2);  // -1.5574077246549023

let val3 = Math.tan(Math.PI);
console.log(val3);  // -1.2246467991473532e-16

let val4 = Math.tan('hello');
console.log(val4);  // NaN

let val5 = Math.tan(Infinity);
console.log(val5);  // NaN

let val6 = Math.tan(-Infinity);
console.log(val6);  // NaN