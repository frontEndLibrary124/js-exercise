// returns a new array with all elements that pass
// the test defined by the given function

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter all even numbers
let newArr = arr.filter((elem) => {
    return !(elem % 2);
});

console.log(newArr); // [2, 4, 6, 8, 10]