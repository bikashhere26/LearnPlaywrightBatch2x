// ReadOnly data types in typescript

export{}; // Ensure this file is treated as a module

interface User {
    readonly name: string; // Readonly property cannot be modified after initialization
    readonly age: number;  // Readonly property cannot be modified after initialization
    email: string;
    isAdmin?: boolean;
}
let user1: User = {
    name: "Bikash",
    age: 30,
    email: "bikash@example.com"
}
console.log(user1);

// user1.name = "Aditya"; // Error: Cannot assign to 'name' because it is a read-only property
// user1.age = 35; // Error: Cannot assign to 'age' because it is a read-only property




