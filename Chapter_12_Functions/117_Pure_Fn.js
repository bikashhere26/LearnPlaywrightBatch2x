//examples of pure functions

// A pure function is a function that always produces the same output 
// for the same input and has no side effects.

// example of a pure function

function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // Output: 8    

// example of an impure function
let count = 0;

function increment() {
    count++;
    return count;
}

console.log(increment()); // Output: 1
console.log(increment()); // Output: 2  
