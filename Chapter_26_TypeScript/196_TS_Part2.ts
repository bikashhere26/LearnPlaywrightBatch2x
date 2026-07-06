// primitive data types in typescript

export {}; // Ensure this file is treated as a module

let Name: string = "Login Test";
let age: number = 30;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

//Array data types in typescript
let arr1: number[] = [1, 2, 3, 4, 5];
let arr2: string[] = ["a", "b", "c", "d", "e"];
let arr3: boolean[] = [true, false, true, false, true];
let arr4: any[] = [1, "a", true, null, undefined];

// Any (avoid when possible)
let anything: any = "hello";

// Unknown (safer than any)
let unknown: unknown = "hello";


let message: string = "Hello, TypeScript!";
let count: number = 42;
// let isActive: boolean = true;

console.log("Message:", message);
console.log("Count:", count);
console.log("Is Active:", isActive);


