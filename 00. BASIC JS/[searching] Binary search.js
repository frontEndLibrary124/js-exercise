const binarySearch = (arr, n) => {
    let i = 0;
    let j = arr.length - 1;

    while (i <= j) {
        let mid = Math.floor((j - i) / 2 + i);

        if (arr[mid] === n) return mid;

        if (arr[mid] < n) {
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 7)); // -1