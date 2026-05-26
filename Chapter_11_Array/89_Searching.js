// searching for an element in an array using indexOf, includes, find, findIndex

let colors = ["Red", "Green", "Blue"];

// Using indexOf
console.log(colors.indexOf("Green")); // Output: 1
console.log(colors.indexOf("Yellow")); // Output: -1 (not found)

// using lastIndexOf
colors.push("Red");
console.log(colors);
console.log(colors.lastIndexOf("Red")); // Output: 4


// Using includes
console.log(colors.includes("Blue")); // Output: true
console.log(colors.includes("Yellow")); // Output: false    

// Using find
let foundColor = colors.find(color => color === "Red");
console.log(foundColor); // Output: "Red"

// Using findIndex
let foundIndex = colors.findIndex(color => color === "Green");
console.log(foundIndex); // Output: 1



