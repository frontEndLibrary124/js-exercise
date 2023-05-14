function hello() {
    return [...arguments].sort();
    // return [].slice.call(arguments).sort();
}

console.log(hello(1, 3, 5, 7, 2, 0, 4));