// returns a specified part of the string between start and end indexes

let str = 'JavaScript Programming';

// index 4 to end
console.log(str.substring(4)); // Script Programming

// index 0 to 3
console.log(str.substring(0, 4)); // Java

// index 0 to 3 (if starIndex > endIndex, they are swapped)
console.log(str.substring(4, 0)); // Java

// index 0 to 3 (if startIndex < 0, then startIndex = 0)
console.log(str.substring(-10, 4)); // Java

// index 0 to str.lenght (if endIndex > str.length, then endIndex = str.length)
console.log(str.substring(0, 50)); // JavaScript Programming