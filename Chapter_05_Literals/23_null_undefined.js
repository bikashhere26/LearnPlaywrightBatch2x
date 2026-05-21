// 23_null_undefined.js
// Difference between null and undefined in JavaScript

// undefined means a variable has been declared but not assigned a value.
let a;
console.log('a:', a); // undefined
console.log('typeof a:', typeof a); // "undefined"

// null is an assignment value that represents "no value" or "empty value".
let b = null;
console.log('b:', b); // null
console.log('typeof b:', typeof b); // "object" (this is a known JavaScript quirk)

// Comparison examples:
console.log('a == b:', a == b);   // true, because == does type coercion
console.log('a === b:', a === b); // false, because === checks type too

// Summary:
// - undefined means a variable exists but has no value yet.
// - null means a variable has been explicitly set to have no value.
