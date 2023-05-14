const findFreq = (str) => {
    let obj = {};

    for (let i = 0; i < str.length; i ++) {
        if (str[i] in obj) {
            obj[str[i]] = obj[str[i]] + 1;
        } else {
            obj[str[i]] = 1;
        }
    }
    
    return obj;
}

let freqObj = findFreq('aabbccddd11122334');

for (let i in freqObj) {
    console.log(`${i} ---> ${freqObj[i]}`);
}