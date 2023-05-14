const climbingStaircase = (n) => {
    let a = 0;
    let b = 1;
    let c = 0;

    while(n --) {
        c = a + b;
        a = b;
        b = c;
    }

    return c;
}

console.log(climbingStaircase(5)); // 8