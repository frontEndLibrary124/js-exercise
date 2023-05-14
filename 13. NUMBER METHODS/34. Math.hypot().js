// returns the square root of the sum of squares of its arguments.
// It returns Math.sqrt(n1*n1 + n2*n2 + ... + nx*nx).
// Math.hypot(n1, n2, ..., nx)

// Parameter: takes in arbitrary (one or more) valbers as arguments.
// Returns:  the square root of the sum of squares of the given arguments.
//           NaN if any argument is non-valeric.
//           +0 if no arguments are given.


let val1 = Math.hypot(3, 4);
console.log(val1); // 5

let val2 = Math.hypot(1, 2, 3);
console.log(val2); // 3.741657386773941

let val3 = Math.hypot(-10);
console.log(val3); // 10

let val4 = Math.hypot(2, 3, '4');
console.log(val4); // 5.385164807134504

let val5 = Math.hypot();
console.log(val5); // 0