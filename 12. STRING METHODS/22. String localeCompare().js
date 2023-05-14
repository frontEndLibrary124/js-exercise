// checks if a given string comes before, after, or is equivalent 
// as another string in sort order
// Syntax: referenceString.localeCompare(compareString, locales, options);
// Returns:
// -1 : if the reference string is sorted before compareStr.
//  0 : if two strings are equivalent.
//  1 : if the reference string is sorted after compareStr.

let res = 'a'.localeCompare('b');
console.log(res); // -1

res = 'b'.localeCompare('a');
console.log(res); // 1

res = 'a'.localeCompare('a');
console.log(res); // 0