const findFibo = (n) => {
    let a = 0;
    let b = 1;
    let c = 0;

    for (let i = 0; i <= n; i ++) {
        console.log(c);
        a = b;
        b = c;
        c = a + b;
    }
}

findFibo(10);