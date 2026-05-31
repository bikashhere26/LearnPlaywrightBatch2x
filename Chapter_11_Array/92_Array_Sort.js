// array sorting by using sort method

let numbers = [5, 2, 9, 1, 5, 6];
numbers.sort();
console.log(numbers); // [1, 2, 5, 5, 6, 9] // 

// Note: sort() converts elements to strings and sorts them lexicographically by default

// To sort numbers correctly, we need to provide a compare function

let num = [20,12,5,1,100];
num.sort((a, b) => a - b);
console.log("Ascending order is : ",num); // [1, 5, 12, 20, 100] - sorted in ascending order    

num.sort((a, b) => b - a);
console.log("Descending order is : ",num); // [100, 20, 12, 5, 1] - sorted in descending order

// Sorting strings
let fruits = ['banana', 'apple', 'grape', 'orange'];
fruits.sort();
console.log("Fruits in alphabetical order : ",fruits); // [ 'apple', 'banana', 'grape', 'orange' ] - sorted alphabetically

// Sorting objects
let people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

people.sort((a, b) => a.age - b.age);
console.log("People sorted by age (ascending): ",people); // sorted by age in ascending order

people.sort((a, b) => b.age - a.age);
console.log("People sorted by age (descending): ",people); // sorted by age in descending order   

