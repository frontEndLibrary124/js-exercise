const findLcm = (num1, num2) => {
    let max = Math.max(num1, num2);
    let lcm = 1;

    while(1) {
        if (max % num1 === 0 && max % num2 === 0) {
            lcm = max;
            break;
        }
        max += max;
    }

    return lcm;
}

console.log(findLcm(12, 30)); // 60