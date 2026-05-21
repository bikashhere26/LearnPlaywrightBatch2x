// JavaScript supports two main numeric types:
// 1. Number    - IEEE 754 double-precision floating point
// 2. BigInt    - arbitrary precision integer values

// Number literals
let decimal = 123;             // decimal integer
let floatNum = 3.14;           // floating point
let exponent = 1.23e4;         // scientific notation (12300)
let hex = 0xFF;                // hexadecimal (255)
let binary = 0b1010;           // binary (10)
let octal = 0o755;             // octal (493)
let withSeparator = 1_000_000; // numeric separator for readability

// BigInt literals
let bigInt = 9007199254740991n; // BigInt integer literal using n suffix
let hugeBigInt = 123456789012345678901234567890n;

// Special Number values
let infinity = Infinity;       // positive infinity
let negInfinity = -Infinity;   // negative infinity
let notANumber = NaN;          // not a valid number

console.log(typeof decimal);       // "number"
console.log(typeof floatNum);      // "number"
console.log(typeof exponent);      // "number"
console.log(typeof hex);           // "number"
console.log(typeof binary);        // "number"
console.log(typeof octal);         // "number"
console.log(typeof withSeparator); // "number"
console.log(typeof bigInt);        // "bigint"
console.log(typeof hugeBigInt);    // "bigint"
console.log(typeof infinity);      // "number"
console.log(typeof negInfinity);   // "number"
console.log(typeof notANumber);    // "number"

console.log(decimal, floatNum, exponent, hex, binary, octal, withSeparator);
console.log(bigInt, hugeBigInt);
console.log(infinity, negInfinity, notANumber);
