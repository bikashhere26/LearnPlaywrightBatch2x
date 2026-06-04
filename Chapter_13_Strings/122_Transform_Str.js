// String transformation methods in JavaScript

let str = "  Hello, World!  ";

// toUpperCase() method
console.log(str.toUpperCase()); // Output: "  HELLO, WORLD!  "

// toLowerCase() method
console.log(str.toLowerCase()); // Output: "  hello, world!  "

// trim() method
console.log(str.trim()); // Output: "Hello, World!"

// trimStart() method
console.log(str.trimStart()); // Output: "Hello, World!  "

// trimEnd() method
console.log(str.trimEnd()); // Output: "  Hello, World!"

// replace() method
console.log(str.replace("World", "JavaScript")); // Output: "  Hello, JavaScript!  "

// replaceAll() method
console.log(str.replaceAll("o", "0")); // Output: "  Hell0, W0rld!  "

// split() method
console.log(str.split(", ")); // Output: ["  Hello", "World!  "]

// repeat() method
console.log(str.trim().repeat(3)); // Output: "Hello, World!Hello, World!Hello, World!"

// Concatenation using concat() method
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2, "!")); // Output: "Hello, World!"    


let r = "pass,fail,skip".split(",");
console.log(r);

let rr = "test_login_pass".split("_").join(" ");
console.log(rr);

let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date);


