// tests whether any of the array elements pass the given test function

let arr = [22, 16, 20, 26, 34];
let test = arr.some((age) => age < 18);
console.log(test); // true