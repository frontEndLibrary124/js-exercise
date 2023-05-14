const binarySearch = (arr, n, left, right) => {
    if (left > right) return -1;

    let mid = Math.floor((right - left) / 2 + left);

    if (arr[mid] === n) return mid;

    if (arr[mid] > n) {
        return binarySearch(arr, n, left, mid - 1);
    } else {
        return binarySearch(arr, n, mid + 1, right);
    }
}

const recursiveBinarySearch = (arr, n) => {
    return binarySearch(arr, n, 0, arr.length - 1);
}

console.log(recursiveBinarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(recursiveBinarySearch([1, 2, 3, 4, 5], 7)); // -1