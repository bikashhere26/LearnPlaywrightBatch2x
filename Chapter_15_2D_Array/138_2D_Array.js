// 2D matrix with examples

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// print all elements of the matrix

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

for (let i = 0; i < matrix.length; i++) {
      console.log(matrix[i]);
  }

console.table(matrix); // Print using table method

for (let i = 0; i < matrix.length; i++) {
      console.log(matrix[i].join(' ')); // Print each row as a string   
  }