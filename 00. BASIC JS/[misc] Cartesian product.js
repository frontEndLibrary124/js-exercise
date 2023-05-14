// Time: O(mxn)

const CartesianProduct = (arr1, arr2) => {
    let res = [];

    for (let i = 0; i < arr1.length; i ++) {
        for (let j = 0; j < arr2.length; j ++) {
            res.push([arr1[i], arr2[j]]);
        }
    }

    return res;
}

console.log(CartesianProduct([1, 2], [1, 2, 3])); // [ [ 1, 1 ], [ 1, 2 ], [ 1, 3 ], [ 2, 1 ], [ 2, 2 ], [ 2, 3 ] ]