// returns the value of the first array element that satisfies
// the provided test function

let arr = [1, 3, 5, 8, 13, 16];

let val = arr.find((elem) => !(elem % 2));

console.log(val); // 8