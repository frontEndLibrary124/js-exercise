let arr = [1, 2, 3, 4, 5];

// swap 0 and 1 no position
arr[0] = arr[0] + arr[1];
arr[1] = arr[0] - arr[1];
arr[0] = arr[0] - arr[1];

// simple way
[arr[0], arr[1]] = [arr[1], arr[0]];