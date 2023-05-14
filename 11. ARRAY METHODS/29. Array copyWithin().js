// copies array elements from one position to another and
// returns the modified array

let arr = ['Apple', 'Banana', 'Grapes', 'Pinapple', 'Mango', 'Orange'];
arr.copyWithin(3, 0, 1); // args: target_pos, start_index, end_index
console.log(arr); // ['Apple', 'Banana', 'Grapes', 'Apple', 'Mango', 'Orange']