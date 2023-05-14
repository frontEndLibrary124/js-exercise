const selection_sort = (arr) => {
    for (let i = 1; i < arr.length; i ++) {
        let item = arr[i];
        let j = i - 1;
        
        while (j >= 0 && item < arr[j]) {
            arr[j + 1] = arr[j];
            j --;
        }

        arr[j + 1] = item;
    }

    return arr;
}

console.log(selection_sort([4, 3, 5, 1, 2])); // [1, 2, 3, 4, 5]