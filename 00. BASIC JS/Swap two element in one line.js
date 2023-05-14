let a = 10;
let b = 20;

// [a, b] = [b, a]; // destructuring
b = a + (a = b) - b; // math

console.log(a, b);