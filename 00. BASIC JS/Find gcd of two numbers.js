const findGCD = (num1, num2) => {
    let min = Math.min(num1, num2);

    let i = 1;
    let gcd = 1;

    while(i <= min) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i;
        }
        i ++;
    }

    return gcd;
}

console.log(findGCD(36, 60)); // 12