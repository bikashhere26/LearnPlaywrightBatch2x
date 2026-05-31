// uses of map, filter, reduce and flat methods in array

let numbers = [1, 2, 3, 4, 5];

// map method
let squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9, 16, 25]

// filter method
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// ===== REDUCE METHOD - LAYMAN EXPLANATION =====
// 
// Think of reduce like this:
// Imagine you have a bag of coins and want to count total money.
// You start with $0 (initial value)
// Then you pick each coin one by one and add it to your total
// After going through all coins, you get the final sum
//
// Syntax: array.reduce((accumulator, currentValue) => { return accumulator + currentValue }, initialValue)
//
// Parameters:
// 1. accumulator = the "running total" that builds up as you go through each element
// 2. currentValue = the current element being processed in the array
// 3. initialValue = the starting value (0 in this case)

console.log("===== REDUCE METHOD EXAMPLES =====");

// Example 1: Sum all numbers (like counting coins)
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum); // 15 (1+2+3+4+5)

// Example 2: Multiply all numbers together
let numbers = [1, 2, 3, 4, 5];
let product = numbers.reduce((acc, num) => acc * num, 1);
console.log("Product of numbers:", product); // 120 (1*2*3*4*5)

// Example 3: Find the maximum number
let numbers = [1, 2, 3, 4, 5];
let max = numbers.reduce((acc, num) => acc > num ? acc : num);
console.log("Maximum number:", max); // 5

// Example 4: Count frequency of items (reduce to object)
let fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
let fruitCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log("Fruit count:", fruitCount); // { apple: 3, banana: 2, orange: 1 }

// Example 5: Convert array to single string
let words = ['Hello', 'World', 'JavaScript'];
let sentence = words.reduce((acc, word) => acc + ' ' + word);
console.log("Sentence:", sentence); // Hello World JavaScript

// flat method
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flattenedArray = nestedArray.flat(2);
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]  





