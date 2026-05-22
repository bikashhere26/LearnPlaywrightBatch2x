// TypeOf Operator
// The typeof operator returns a string indicating the type of the unevaluated operand.

console.log(typeof 42);           // "number"
console.log(typeof "hello");      // "string"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object"  (legacy bug)
console.log(typeof {});         // "object"
console.log(typeof []);         // "object"  (arrays are objects)
console.log(typeof function(){}); // "function" (functions are callable objects)

// Note: typeof null returns "object" due to a historical bug in JavaScript, but it is generally considered a primitive value.
