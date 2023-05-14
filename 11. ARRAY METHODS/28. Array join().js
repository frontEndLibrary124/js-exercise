// returns a new string by concatenating all of the elements in an array 
// separated by a specified separator

let arr = ['JavaScript', 'is', 'fun'];
let str = arr.join(' ');
console.log(str); // JavaScript is fun

arr = ['name', 'age', 'location'];
str = arr.join(' | ');
console.log(str); // name | age | location

arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
str = arr.join('');
console.log(str); // 0123456789