// computes the sign of the specified number and 
// returns 1 if the number is positive and -1 if it's negative

// Parameter: number
// Returns: 1 or -1 or NaN

let val1 = Math.sign(25);
console.log(val1);  // 1

let val2 = Math.sign(-40);
console.log(val2);  // -1

let val3 = Math.sign('hello');
console.log(val3);  // NaN

let val4 = Math.sign(0);
console.log(val4);  // 0

let val5 = Math.sign(-0);
console.log(val5);  // -0