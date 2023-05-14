let arr = [1, 2, 3, 4, 5];
arr.fill(10, 2, 5); // args: fill_value, start_index, end_index
console.log(arr); // [1, 2, 10, 10, 10]

let ara = new Array(5).fill('Hello');
console.log(ara); // ['Hello', 'Hello', 'Hello', 'Hello', 'Hello']