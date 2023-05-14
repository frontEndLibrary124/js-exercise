// Time: 
// Worst case - BigO(n^2)
// Avg case - BigO(nlogn)

const quickSort = (arr) => {
    let pvoid = arr[arr.length - 1];
    let leftArr = [];
    let rightArr = [];

    if (arr.length < 2) {
        return arr;
    }

    for (let i = 0; i < arr.length - 1; i ++) {
        if (pvoid > arr[i]) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pvoid, ...quickSort(rightArr)];
}

console.log(quickSort([4, 3, 5, 1, 2]));