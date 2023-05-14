// returns an array by changing (adding/removing) its elements in place

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let removedItems = arr.splice(3, 2, 40, 50);
console.log(removedItems); // [4, 5]
console.log(arr); // [1, 2, 3, 40, 50, 6, 7, 8]