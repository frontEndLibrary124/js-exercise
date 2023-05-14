const linearSearch = (arr, n) => {
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] === n) {
            return i;
        }
    }
    
    return -1;
}

console.log(linearSearch([4, 2, 3, 5, 1], 2)); // 1
console.log(linearSearch([4, 2, 3, 5, 1], 7)); // -1