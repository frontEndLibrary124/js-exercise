// creates a new array with the results of calling 
// a function for every array element

let arr = [10, 20, 30, 40, 50];
let newArr = arr.map((elem) => elem * elem);
console.log(newArr); // [100, 400, 900, 1600, 2500]

arr = ['H', 'e', 'l', 'l', 'o'];
newArr = arr.map(ch => ch.charCodeAt(0));
console.log(newArr); // [72, 101, 108, 108, 111]