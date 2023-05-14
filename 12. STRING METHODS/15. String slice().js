// extracts and returns a section of a string

let str = 'JavaScript Programming';

// index 11 to end
console.log(str.slice(11)); // Programming

// index 0 to 3
console.log(str.slice(0, 4)); // Java

// 11th last element to end
console.log(str.slice(-11)); // Programming

// 11th last element to 5th last element
console.log(str.slice(-11, -4)); // Program