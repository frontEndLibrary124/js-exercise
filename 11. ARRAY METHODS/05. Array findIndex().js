// returns the index of the first array element that satisfies 
// the provided test function or else returns -1

let arr = [1, 3, 4, 5, 7, 8];

let res = arr.findIndex((elem) => {
    return !(elem % 2);
});

console.log(res); // 2