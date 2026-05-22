// Loose comparision and Strict comparision (== vs ===)

let x = 5;
let y = "5";
console.log(x == y); // true (loose comparision, type coercion happens)
console.log(x === y); // false (strict comparision, no type coercion)

console.log(0 == ""); // true (loose comparision, empty string is coerced to 0)
console.log(0 === ""); // false (strict comparision, different types)
console.log(true == 1); // true (loose comparision, true is coerced to 1)
console.log(true === 1); // false (strict comparision, different types)
console.log(null == undefined); // true (loose comparision, null and undefined are considered equal)
console.log(null === undefined); // false (strict comparision, different types) 


