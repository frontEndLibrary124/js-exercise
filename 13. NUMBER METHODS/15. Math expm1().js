// returns e (Euler's number) raised to given power minus 1.
// It is equivalent to e^x - 1 in mathematics.

// Parameter: x -> a number.
// Returns: e^x - 1 for argument x, where e is Euler's number (2.71828).

let val1 = Math.expm1(0);
console.log(val1); // 0

let val2 = Math.expm1(1);
console.log(val2); // 1.718281828459045

let val3 = Math.expm1("2");
console.log(val3); // 6.38905609893065

let val4 = Math.expm1(-1);
console.log(val4); // -0.6321205588285577