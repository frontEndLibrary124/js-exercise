// returns the natural logarithm of 1 plus the given number.
// It is equivalent to ln(1+p).
// Math.log1p(x)

// Parameter: x - A number
// Returns: the natural logarithm (base e) of (1+ given number).
//          NaN for number < -1 and non-numeric arguments.

let val1 = Math.log1p(0);
console.log(val1); // 0

let val2 = Math.log1p(1);
console.log(val2); // 0.6931471805599453

let val3 = Math.log1p('10');
console.log(val3); // 2.3978952727983707

let val4 = Math.log1p(-1);
console.log(val4); // -Infinity

let val5 = Math.log1p(-50);
console.log(val5); // NaN