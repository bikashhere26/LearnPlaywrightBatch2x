// let is block-scoped and is hoisted, but it is not initialized until its declaration is evaluated. This means that you cannot access a let variable before it is declared, which results in a ReferenceError.

// Example of let hoisting and block scope

let x = "global";
if (true) {
    let x = "block";
    console.log(x); // "block"
}

console.log(x); // "global"

// Example of let hoisting and temporal dead zone   
