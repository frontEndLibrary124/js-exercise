const removeFalsyValue = (arr) => {
    return arr.filter(Boolean);
}

console.log(removeFalsyValue([1, false, 0, null, 2, undefined, 4, '', 5, NaN])); // [1, 2, 4, 5]