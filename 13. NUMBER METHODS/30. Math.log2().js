// returns the base 2 logarithm of a number.
// It is equivalent to log2(x)
// Math.log2(x)

// Parameter: x - A number
// Returns: the base 2 logarithm of the given number.
//          NaN for negative numbers and non-numeric arguments.


let val1 = Math.log2(1);
console.log(val1); // 0

let val2 = Math.log2(2);
console.log(val2); // 1

let val3 = Math.log2('50');
console.log(val3); // 5.643856189774724

let val4 = Math.log2(0);
console.log(val4); // -Infinity

let val5 = Math.log2(-1);
console.log(val5); // NaN