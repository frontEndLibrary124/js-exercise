// creates a new array from any array-like or iterable object

let arr = Array.from('12345', (e) => e * 5);
console.log(arr); // [5, 10, 15, 20, 25]