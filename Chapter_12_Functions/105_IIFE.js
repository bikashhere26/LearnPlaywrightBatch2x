// IIFE functions types with examples

// IIFE stands for Immediately Invoked Function Expression. 
// It is a JavaScript function that runs as soon as it is defined. 
// The syntax for an IIFE is as follows:

(function() {
    console.log("This is an IIFE function!");
})();

// IIFE can also be used to create a private scope for variables and functions.

(function() {
    const privateVariable = "This is a private variable";
    console.log(privateVariable);
})();

// IIFE can also be used to pass parameters.

(function(name) {
    console.log(`Hello, ${name}!`);
})("Bikash");

// IIFE using arrow function

(() => {
    console.log("This is an IIFE using arrow function!");
})();