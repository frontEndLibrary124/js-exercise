// reduces the array to a single value by executing a callback function 
// on two values of the array (from right to left)

let arr = [10, 20, 30, 40, 50];
let sum = arr.reduceRight((a, b) => a + b);
console.log(sum); // 150