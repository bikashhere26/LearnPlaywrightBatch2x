// array slicing using slice method

let numbers = [1, 2, 3, 4, 5];
console.log("Sliced numbers : ",numbers.slice(1, 3)); 
// [2, 3] - slice from index 1 to index 3 (4 is not included)

// when no end parameter is provided, it slices till the end of the array
console.log("Sliced numbers : ",numbers.slice(2)); 
// [3, 4, 5] - slice from index 2 to the end of the array

// when negative indices are used, it counts from the end of the array
console.log("Sliced numbers : ",numbers.slice(-3)); 
// [3, 4, 5] - slice the last 3 elements of the array

// when only 0 is used as the start index, it slices from the beginning of the array
console.log("Sliced numbers : ",numbers.slice(0));  
// [1, 2, 3, 4, 5] - slice from index 0 to the end of the array (entire array)

let fruits = ['apple', 'banana', 'grape', 'orange'];
console.log("Sliced fruits : ",fruits.slice(0, 2)); 
// [ 'apple', 'banana' ] - slice from index 0 to index 2 (grape is not included)

