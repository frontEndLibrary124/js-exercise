const printASCII = () => {
    for (let i = 33; i < 256; i ++) {
        console.log(`${String.fromCodePoint(i)} ---> ${String.fromCharCode(i)}`);
    }
}

printASCII();