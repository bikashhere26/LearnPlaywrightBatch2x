// uses of map, filter, reduce and flat methods in array

let numbers = [1, 2, 3, 4, 5];

// map method
let squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9, 16, 25]

// filter method
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce method
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15 

// flat method
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flattenedArray = nestedArray.flat(2);
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]  


