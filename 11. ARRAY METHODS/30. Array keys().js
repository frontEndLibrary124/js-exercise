// returns a new Array Iterator object that contains 
// the keys for each element in the array

let arr = ['H', 'e', 'l', 'l', 'o'];
let iterator = arr.keys();

for (let key of iterator) {
    console.log(key); // 0 1 2 3 4
}