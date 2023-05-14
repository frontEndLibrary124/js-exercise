// truncates (shortens) a number and returns its integer portion

// Parameter: number
// Returns: integer part of a number / NaN

let num1 = Math.trunc(20.453);
console.log(num1);  // 20

let num2 = Math.trunc(-35.678);
console.log(num2);  // -35

let num3 = Math.trunc('-12.65');
console.log(num3);  // -12

let num4 = Math.trunc('hello');
console.log(num4);  // NaN