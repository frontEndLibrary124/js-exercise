const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i ++) {
        let min_index = i;
        // find most minimum number index
        for (let j = i + 1; j < arr.length; j ++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }

        // swap elements
        if (arr[min_index] < arr[i]) {
            let temp = arr[i];
            arr[i] = arr[min_index];
            arr[min_index] = temp;
        }
    }

    return arr;
}

console.log(selectionSort([4, 3, 5, 1, 2])); // [1, 2, 3, 4, 5]