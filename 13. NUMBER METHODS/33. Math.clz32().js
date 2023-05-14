// converts the specified number into 32-bit binary representation 
// and returns the number of leading zero bits.
// Math.clz32(number)

// Parameter: number - value whose leading zero bits is to be calculated 
//                     (in 32-bit representation)
// Returns: number of 0 bits 32-bit binary representation of the number


let val1 = Math.clz32(5);
console.log(val1); // 29

let val2= Math.clz32(8);
console.log(val2); // 28

let val3 = Math.clz32(16);
console.log(val3); // 27

let val4 = Math.clz32(true);
console.log(val4); // 31

let val5 = Math.clz32(false);
console.log(val5); // 32

let val6 = Math.clz32('hello');
console.log(val6); // 32