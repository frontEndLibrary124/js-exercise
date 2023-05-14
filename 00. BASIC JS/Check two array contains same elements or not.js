const checkSameArray = (arr1, arr2) => {
    return (arr1.length === arr2.length) && arr1.every((elem) => {
        return arr2.includes(elem);
    });
}

let res = checkSameArray([1, 2, 3, 4], [2, 1, 3, 5]);
console.log(res);