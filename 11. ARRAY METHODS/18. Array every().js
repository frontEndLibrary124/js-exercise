// checks if all the array elements pass the given test function
// returns true if all the array elements pass the given test function
// Otherwise returns false

let arr = [20, 22, 26, 24, 32];

let check = arr.every((elem) => {
    return elem >= 18;
});

console.log(check); // true