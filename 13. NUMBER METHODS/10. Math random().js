// returns a floating-point, pseudo-random number 
// between 0 (inclusive) and 1 (exclusive)

let random1 = Math.random();
console.log(random1);  // 0.8166931973137739


// Generate random number between two numbers
// Syntax: Math.random() * (range) + (start_position)

let random2 = Math.random() * 10 + 5;
console.log(random2); // random between 5(inclusive) and 15(exclusive)

let random3 = Math.random() * 11 + 5;
console.log(random3); // random between 5(inclusive) and 15(inclusive)