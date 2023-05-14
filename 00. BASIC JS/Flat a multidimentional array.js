const flatArray = (arr) => {
    return arr.flat(Infinity);
}

console.log(flatArray([1, [2, 3], [4, 5, [6, 7, 8]]])); // [1, 2, 3, 4, 5, 6, 7, 8]