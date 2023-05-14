// first maps each element of an array using a mapping function, 
// then flattens it into a new array.

let arr = [1, 2, 3, 4, 5];

let newArr = arr.flatMap((elem) => elem * 2);

console.log(newArr); // [2, 4, 6, 8, 10]