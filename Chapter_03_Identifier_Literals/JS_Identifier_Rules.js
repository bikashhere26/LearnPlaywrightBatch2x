// VALID IDENTIFIERS

// 1. Starting with a letter, underscore, or dollar sign
let myVariable = "Starts with a letter";
let _internalState = "Starts with an underscore";
let $element = "Starts with a dollar sign";

// 2. Subsequent characters can be letters, digits, underscores, or dollar signs
let user123 = "Contains numbers";
let first_name = "Contains underscores";
let total$Amount = "Contains dollar signs";

// 3. Identifiers are case-sensitive (these are three different variables)
let score = 10;
let Score = 20;
let SCORE = 30;

// 4. Using Unicode characters is allowed
let café = "French roast";
let π = 3.14159;


// ---------------------------------------------------------
// INVALID IDENTIFIERS (Uncommenting these will cause errors)


// Cannot start with a digit
// let 1stPlace = "invalid";

// Cannot use other special characters (like hyphens or spaces)
// let first-name = "invalid";

// let my var = "invalid";
// Cannot use reserved keywords
// let class = "invalid";
// let function = "invalid";

