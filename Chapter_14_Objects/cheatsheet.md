# JavaScript Objects Cheatsheet

## 1. What is an object?
An object is like a small box that stores many details about one thing.

Example:
```javascript
let dog = {
  name: "Tommy",
  color: "brown",
  age: 3
};
```

This means:
- name = Tommy
- color = brown
- age = 3

## 2. How to access object values?
```javascript
console.log(dog.name);   // Tommy
console.log(dog.color);  // brown
console.log(dog.age);    // 3
```

## 3. Simple idea
An object keeps all information about one thing in one place.

Examples:
- A person = name, age, city
- A car = brand, color, speed
- A school bag = books, pencils, color

## 4. Can we use const with objects?
Yes, you can use `const` for objects.

### Important point
`const` does not stop you from changing the object’s properties.
It only stops you from replacing the whole object.

### Example with const
```javascript
const student = {
  name: "Aarav",
  age: 20
};

student.age = 21; // allowed
```

### This is NOT allowed
```javascript
const student = {
  name: "Aarav"
};

student = { name: "Rahul" }; // error
```

## 5. let vs const with objects
### Using let
```javascript
let student = {
  name: "Aarav",
  age: 20
};

student.age = 21; // allowed
student = { name: "Rahul", age: 22 }; // allowed
```

### Using const
```javascript
const student = {
  name: "Aarav",
  age: 20
};

student.age = 21; // allowed
student = { name: "Rahul", age: 22 }; // not allowed
```

## 6. Easy memory trick
- `let` = can change and reassign
- `const` = cannot reassign the whole object, but can change its properties




## 7. Call by value vs call by reference
### Value example (simple numbers)
```javascript
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

Here, `b` gets a copy of `a`, so changing `b` does not change `a`.

### Reference example (objects)
```javascript
let person1 = { name: "Aarav", age: 20 };
let person2 = person1;

person2.age = 25;

console.log(person1.age); // 25
console.log(person2.age); // 25
```

Here, `person1` and `person2` point to the same object, so changing one affects the other.

## 8. Copy by reference
In JavaScript, objects are stored in memory.
When one object is assigned to another variable, both variables point to the same object.

Example:
```javascript
const person1 = {
  name: "Aarav",
  age: 20
};

const person2 = person1;
person2.age = 25;

console.log(person1.age); // 25
console.log(person2.age); // 25
```

This happens because `person1` and `person2` both point to the same object.

### How to make a true copy?
Use spread syntax:
```javascript
const person2 = { ...person1 };
```

This creates a new object, so changing `person2` will not affect `person1`.

## 9. 5th-grade explanation
An object is like a little box of facts about one thing.
It helps us keep related information together in one place.
