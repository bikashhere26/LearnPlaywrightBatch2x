let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(grid.length);   // Output: 3
// Accessing elements in a 2D array

console.log(grid[0][0]); // Output: 1
console.log(grid[1][2]); // Output: 6  
console.log(grid[2][1]); // Output: 8

// Modifying elements in a 2D array
grid[0][1] = 20;
console.log(grid[0][1]); // Output: 20

// Adding a new row to the 2D array
grid.push([10, 11, 12]);
console.log(grid[3]); // Output: [10, 11, 12]   

console.log('\n');

for (let i = 0; i < grid.length; i++) {
console.log(grid[i].join('  ')); // Print each row as a string
}

console.table(grid); // Print using table method

