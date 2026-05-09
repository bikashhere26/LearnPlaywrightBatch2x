// --- Naming Conventions (Casing) in JavaScript ---

// 1. camelCase
// Usually used for variables and functions.
// First word is lowercase, subsequent words start with a capital letter.
var firstName = "Bikash";
var lastName = "Gupta";
function getUserDetails() { /*...*/ }

// 2. snake_case
// Words are separated by underscores. 
// More common in languages like Python or in database fields, but sometimes used in JS.
var first_name = "shalini";
var last_name = "kumar";

// 3. PascalCase (or UpperCamelCase)
// Every word starts with a capital letter.
// Typically used for Classes, Constructors, or Component names (in React).
class UserProfile {
    constructor(name) {
        this.name = name;
    }
}
function Person() { /*...*/ }

// 4. MACRO_CASE (or CONSTANT_CASE)
// All uppercase letters, with words separated by underscores.
// Used for constants whose values shouldn't change.
const MAX_LOGIN_ATTEMPTS = 5;
const API_BASE_URL = "https://api.example.com";

// 5. kebab-case (or dash-case)
// Words separated by hyphens.
// Note: NOT VALID for JavaScript variable names because '-' is the subtraction operator.
// var user-name = "Bikash"; // ❌ SyntaxError: Unexpected token '-'
// Used often in CSS classes (.user-profile), HTML attributes, and filenames (my-script.js).


// 

