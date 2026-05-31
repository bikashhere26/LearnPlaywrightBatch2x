// concat method is used to merge two or more arrays. It does not change the existing arrays, 
// but instead returns a new array.

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let mergedArray = array1.concat(array2);
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

// You can also concatenate more than two arrays
let array3 = [7, 8, 9];
let mergedArray2 = mergedArray.concat(array3);
console.log(mergedArray2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Spread operator can also be used to concatenate arrays
let mergedArray3 = [...array1, ...array2, ...array3];
console.log(mergedArray3); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// join method is used to join all elements of an array into a string.
//  You can specify a separator between the elements.

let fruits = ['apple', 'banana', 'grape'];
let fruitString = fruits.join(', ');
console.log(fruitString); // "apple, banana, grape"


let fruitString1 = fruits.join('-');
console.log(fruitString1); // "apple-banana-grape"



