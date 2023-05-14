const myfunc = (a, b) => {
    let sum = 0;
    for(let i = 1; i <= b; i ++) {
        sum += a;
    }
    return sum;
}

let startTime = performance.now();
let sum = myfunc(1, 100000000);
let endTime = performance.now();

console.log('Time: ', endTime - startTime);