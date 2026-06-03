// Arrow function real example

const square = n => n * n;
console.log(square(4)); // Output: 16

const isEven = n => n % 2 === 0;
console.log(isEven(4)); // Output: true

const isOdd = n => n % 2 !== 0;
console.log(isOdd(5)); // Output: true

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(getFullName("John", "Doe")); // Output: John Doe

const factorial = n => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120