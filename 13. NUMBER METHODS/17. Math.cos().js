// computes the trigonometric cosine of the specified angle and returns it
// Math.cos(angle)

// Parameter: angle - in radians
// Returns: cosine value of the given angle
//          NaN for a non-numeric argument

let val1 = Math.cos(1);
console.log(val1);  // 0.5403023058681398

let val2 = Math.cos(-1);
console.log(val2);  // 0.5403023058681398

let val3 = Math.cos(Math.PI);
console.log(val3);  // -1

let val4 = Math.cos('hello');
console.log(val4);  // NaN

let val5 = Math.cos(Infinity);
console.log(val5);  // NaN

let val6 = Math.cos(-Infinity);
console.log(val6);  // NaN