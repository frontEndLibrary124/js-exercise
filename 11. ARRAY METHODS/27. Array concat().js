// returns a new array by marging two or more values/arrays

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = arr1.concat(arr2);
console.log(newArr); // [1, 2, 3, 4, 5, 6]

let arr3 = [
    [4, 5],
    [6, 7, 8]
];

// copies object references to the new array
let newAra = newArr.concat(8, arr3);
console.log(newAra); // [1, 2, 3, 4, 5, 6, 8, [4, 5], [6, 7, 8]]