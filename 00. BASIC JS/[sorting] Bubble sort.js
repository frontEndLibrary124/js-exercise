const bubble_sort = (arr) => {
    for (let i = 0; i < arr.length; i ++) {
        for (let j = 0; j < arr.length - i; j ++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

console.log(bubble_sort([4, 3, 5, 1, 2])); // [1, 2, 3, 4, 5]