const anyToBool = (arr) => {
    return arr.map(Boolean);
}

let arr = ['hello', null, undefined, 1, true, '', 'world', NaN];

console.log(anyToBool(arr)); // [true, false, false, true, true, false, true, false]