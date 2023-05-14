// computes the trigonometric sine of the specified angle and returns it
// Math.sin(angle)

// Parameter: angle - in radians
// Returns: sine value of a given angle
//          NaN for non numeric argument

let val1 = Math.sin(1);
console.log(val1);  // 0.8414709848078965

let val2 = Math.sin(-1);
console.log(val2);  // -0.8414709848078965

let val3 = Math.sin(Math.PI);
console.log(val3);  // 1.2246467991473532e-16

let val4 = Math.sin('hello');
console.log(val4);  // NaN

let val5 = Math.sin(Infinity);
console.log(val5);  // NaN

let val6 = Math.sin(-Infinity);
console.log(val6);  // NaN