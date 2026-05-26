// adding remove functions in an array

let colors = ["Red", "Green", "Blue"];

// Adding an element at the end
colors.push("Yellow");
console.log(colors);

// Adding an element at the beginning
colors.unshift("Orange");
console.log(colors);

// Removing an element from the end
colors.pop();
console.log(colors);

// Removing an element from the beginning
colors.shift();
console.log(colors);    

// Adding & Removing
let statuses = ["pass", "fail", "skip"];
console.log(statuses);
statuses.push("blocked");
console.log(statuses);
statuses.unshift("pending");
console.log(statuses);
statuses.pop();
console.log(statuses);
statuses.shift();
console.log(statuses);

//