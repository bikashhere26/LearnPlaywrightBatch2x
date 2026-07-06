let unknown: unknown = "hello";
if(typeof unknown === "string"){
    let strLength: number = unknown.length;
    console.log("String length:", strLength);
}
else{
    console.log("Unknown is not a string.");
}

let message: string = "Hello";
let username: string;
let userId: number;

// function annotations
function greetUser(name: string): void {
    console.log(`Hello, ${name}!`);
}

greetUser("Bikash");

//arrow function annotations

const addNumbers = (a: number, b: number): number => {
    return a + b;
}

console.log("Sum:", addNumbers(5, 10));

// object annotations

let user: { name: string; age: number } = {
    name: "Bikash",
    age: 30
};

console.log("User:", user);