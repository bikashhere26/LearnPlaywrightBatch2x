// String properties in JavaScript

// length property
let str = "Hello, World!";
console.log(str.length); // Output: 13

// Accessing characters using index

console.log(str[0]); // Output: "H"
console.log(str[7]); // Output: "W"
console.log(str.at(-4)); // Output: "r"

// accessing characters using charAt() method
console.log(str.charAt(1)); // Output: "e"
console.log(str.charAt(7)); // Output: "W"
console.log(str.charAt(-3)); 
// Output: "" (empty string, as charAt does not support negative indices)

console.log(str.charCodeAt(0)); // Output: 72 (ASCII code for 'H')
