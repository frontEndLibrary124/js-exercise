// checks whether the passed argument is an array or not

let test = Array.isArray([1, 2, 3, 4, 5]);
console.log(test); // true

test = Array.isArray('Hello');
console.log(test); // false