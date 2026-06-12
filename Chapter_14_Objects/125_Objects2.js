let dog = {
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: 5,
    color: 'golden'
};

console.log(dog.name);
console.log(dog.breed);
console.log(dog.age);

// Modifying object properties
dog.age = 6;
console.log(dog.age);

// assigning new object reference to the same variable
dog = {
    name: 'Max',
    breed: 'Labrador',
    age: 3,
    color: 'brown'
};
console.log(dog.name);
console.log(dog.breed);
console.log(dog.age);

let cat = dog; // cat now references the same object as dog
console.log(cat.name);
cat.age = 7; // Modifying the age property through cat will also affect dog
cat.color = 'black'; // Modifying the color property through cat will also affect dog
console.log(dog.age); // Output: 7
console.log(dog.color); // Output: "black"