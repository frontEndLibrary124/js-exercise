// returns a new Array Iterator object that contains 
// the values for each index in the array

let fruits = ['Apple', 'Mango', 'Banana', 'Orange', 'Grapes'];
let iteratorObj = fruits.values();

for (let value of iteratorObj) {
    console.log(value); // Apple Mango Banana Orange Grapes
}

console.log('');

let languages = ['JavaScript', 'Python', 'Java', 'C', 'C++'];
let iteratorObj2 = languages.values();

console.log(iteratorObj2.next().value); // JavaScript
console.log(iteratorObj2.next().value); // Python
console.log(iteratorObj2.next().value); // Java
console.log(iteratorObj2.next().value); // C
console.log(iteratorObj2.next().value); // C++