// creates a new array by flattening a nested array 
// up to the specified depth

let arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];

let newArr = arr.flat(2);

console.log(newArr); // [1, 2, 3, 4, 5, 6, Array(2)]