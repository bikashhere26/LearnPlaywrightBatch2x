// In JavaScript:
// - single quotes and double quotes are interchangeable for plain strings.
// - backticks are used for template literals, which support interpolation and multi-line text.

let single = 'Hello';
let double = "World";
let backtick = `Hello ${double}`;

console.log(single);   // Hello
console.log(double);   // World
console.log(backtick); // Hello World

// example of interpolation and multi-line string with backticks
let name = "Alice";
let age = 30;

let message = `Name: ${name}
Age: ${age}
Welcome!`;

console.log(message);