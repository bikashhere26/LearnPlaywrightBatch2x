// Default parameter function examples

// Default parameters allow you to specify default values for function parameters.

function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet());
console.log(greet("Bikash"));



function add(a = 7, b = 5) {
    return a + b;
}

console.log(add());
console.log(add(5, 3));