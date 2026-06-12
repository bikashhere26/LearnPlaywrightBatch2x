const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

console.log(user);
console.log(user.name);
console.log(user["age"]);

// Dynamic property access
const key = "age";
console.log(user[key]);

// adding/modifying properties
user.name = "Jane"; // Modifying existing property
user.city = "New York"; // Adding new property
console.log(user);


let obj = { name: "Login" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));