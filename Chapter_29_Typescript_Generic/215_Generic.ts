// Generic function in TypeScript

function identity<T>(arg: T): T {
    return arg;
}

identity("Hello, TypeScript!");
identity(42);
identity(true);

let output1 = identity<string>("Hello, TypeScript!");
let output2 = identity<number>(42);
let output3 = identity<boolean>(true);

console.log(output1);
console.log(output2);
console.log(output3);