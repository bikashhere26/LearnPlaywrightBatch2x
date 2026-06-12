// primitive vs reference types example

// Primitive types (string, number, boolean, null, undefined, symbol) are immutable
//  and stored by value

let x = 10;
let y = x; // y is a copy of x, they are independent

console.log(x); // Output: 10
console.log(y); // Output: 10

x = 20; // Modifying x does not affect y
console.log(x); // Output: 20
console.log(y); // Output: 10

// Reference types (objects, arrays, functions) are mutable and stored by reference

let obj1 = { name: 'Alice' };
let obj2 = obj1; // obj2 is a reference to the same object as obj1

console.log(obj1); // Output: { name: 'Alice' }
console.log(obj2); // Output: { name: 'Alice' }

obj1.name = 'Bob'; // Modifying obj1 also affects obj2
console.log(obj1); // Output: { name: 'Bob' }
console.log(obj2); // Output: { name: 'Bob' }

