// discuss about strings in JavaScript

// strings are immutable in JavaScript, which means that once a string is created,
//  it cannot be changed. 
// However, you can create a new string by concatenating or slicing existing strings.

// Single quotes
let a = 'hello';

// Double quotes
let b = "world";

// Template literals (backticks)
let c = `hello world`;
console.log(a); // Output: "hello"

// String concatenation
let d = a + ' ' + b; // Output: "hello world"
console.log(d);

// String interpolation using template literals
let e = `${a} ${b}`; // Output: "hello world"
console.log(e);

console.log(String(200)); // Output: "200"

console.log(String(true)); // Output: "true"

console.log(String(null)); // Output: "null"

console.log(String(undefined)); // Output: "undefined"

console.log(String([1, 2, 3])); // Output: "1,2,3"




