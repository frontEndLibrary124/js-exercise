// returns the natural logarithm of a number.
// equivalent to ln(x)
// Math.log(x)

// Parameter: x - A number
// Returns: the natural logarithm (base e) of the given number.
//          NaN for negative numbers and non-numeric arguments.


let val1 = Math.log(1);
console.log(val1); // 0

let val2 = Math.log(Math.E);
console.log(val2); // 1

let val3 = Math.log("10");
console.log(val3); // 2.302585092994046

let val4 = Math.log(0);
console.log(val4); // -Infinity

let val5 = Math.log(-1);
console.log(val5); // NaN


// calculate the logarithm in any base
const findLog = (base, num) => {
    return Math.log(num) / Math.log(base);
}

let val = findLog(2, 8);
console.log(val); // 3