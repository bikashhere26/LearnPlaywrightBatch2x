// splice function in array is used to add or remove elements from an array. It modifies the original array and returns the removed elements (if any).

let colors = ["Red", "Green", "Blue"];
console.log(colors);

// Adding elements using splice
colors.splice(1, 0, "Yellow"); // adds "Yellow" at index 1 without removing any element
console.log(colors);

// Removing elements using splice
// colors.splice(start, deleteCount)
colors.splice(1, 1); // removes 1 element at index 1 (Green)
console.log(colors);

// Adding & Removing
let statuses = ["pass", "fail", "skip"];
console.log(statuses);
statuses.splice(2, 0, "blocked"); // adds "blocked" at index 2 without removing any element
console.log(statuses);
statuses.splice(1, 1); // removes 1 element at index 1 (fail)
console.log(statuses);


