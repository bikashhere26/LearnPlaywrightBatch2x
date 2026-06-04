// Substring methods
let str = "Login_Test_Pass_001";

console.log(str.substring(0, 5)); // Output: "Login"
console.log(str.substring(6, 10)); // Output: "Test"
console.log(str.substring(11)); // Output: "Pass_001"
console.log(str.substring(-3)); // Output: "Login_Test_Pass_001" (negative indices are treated as 0)

// slice() method
console.log(str.slice(0, 5)); // Output: "Login"
console.log(str.slice(6, 10)); // Output: "Test"
console.log(str.slice(11)); // Output: "Pass_001"
console.log(str.slice(-3)); // Output: "001" (last 3 characters)

