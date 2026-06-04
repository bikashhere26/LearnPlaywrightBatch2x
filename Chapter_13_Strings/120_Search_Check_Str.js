// Searching and checking strings

let str = "Hello, world!";

// includes() method
console.log(str.includes("world")); // Output: true 
console.log(str.includes("Word")); // Output: false

// startsWith() method
console.log(str.startsWith("Hello")); // Output: true
console.log(str.startsWith("world")); // Output: false

// endsWith() method
console.log(str.endsWith("world!")); // Output: true
console.log(str.endsWith("Hello")); // Output: false

// indexOf() method
console.log(str.indexOf("zworld")); // Output: -1 (not found)
console.log(str.indexOf("world")); // Output: 7 (index of first occurrence)
console.log(str.indexOf("o")); // Output: 4 (index of first occurrence of 'o')

// lastIndexOf() method
console.log(str.lastIndexOf("o")); // Output: 8 (index of last occurrence of 'o')
console.log(str.lastIndexOf("l")); // Output: 10 (index of last occurrence of 'l')

// search() method
console.log(str.search("world")); // Output: 7 (index of first occurrence) 
console.log(str.search(/ld/)); // Output: 10 (index of first occurrence of 'ld' using regex)

// Regex methods
console.log(str.match(/o/g)); // Output: ["o", "o"] (array of all occurrences of 'o')