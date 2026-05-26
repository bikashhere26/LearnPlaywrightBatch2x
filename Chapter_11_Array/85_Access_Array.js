// accessing and modifying array elements

let colors = ["Red", "Green", "Blue"];

// Accessing an element
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

// Modifying an element
colors[1] = "Yellow";
console.log(colors[1]);
console.log(colors);        

// Accessing & Modifying
let statuses = ["pass", "fail", "skip"];
console.log(statuses[0]);
console.log(statuses[2]);

console.log(statuses.at(-1));
console.log(statuses.at(-2));
console.log(statuses.at(-3));
// console.log(statuses.at(-4)); undefined

// Modify
statuses[1] = "blocked";
console.log(statuses);

