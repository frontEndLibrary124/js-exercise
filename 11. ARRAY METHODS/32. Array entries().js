// returns a new array iterator object containing key/value
// pairs for each array index

let arr = ['Apple', 'Banana', 'Mango', 'Orange'];
let iterator = arr.entries();

// Method-01
for (let entry of iterator) {
    console.log(entry); // [0, 'Apple'] ... [3, 'Orange']
}

console.log('');

// Method-02
let languages = ['JavaScript', 'Python', 'Java', 'C', 'C++'];

iterator = languages.entries();

console.log(iterator.next().value); // [0, 'JavaScript']
console.log(iterator.next().value); // [1, 'Python']
console.log(iterator.next().value); // [2, 'Java']
console.log(iterator.next().value); // [3, 'C']