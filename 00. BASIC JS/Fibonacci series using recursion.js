const recursiveFibo = (n) => {
    if (n <= 1) {
        return n;
    }
    
    return recursiveFibo(n - 1) + recursiveFibo(n - 2);
}

for (let i = 0; i <= 10; i ++) {
    console.log(recursiveFibo(i));
}