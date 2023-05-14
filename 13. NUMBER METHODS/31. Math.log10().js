// returns the base 10 logarithm of a number.
// It is equivalent to log10(x)
// Math.log10(x)

// Parameter: x - A number
// Returns: the base 10 logarithm of the given number.
//          NaN for negative numbers and non-numeric arguments.


let val1 = Math.log10(1);
console.log(val1); // 0

let val2 = Math.log10(100);
console.log(val2); // 2

let val3 = Math.log10('10');
console.log(val3); // 1

let val4 = Math.log10(0);
console.log(val4); // -Infinity

let val5 = Math.log10(-1);
console.log(val5); // NaN