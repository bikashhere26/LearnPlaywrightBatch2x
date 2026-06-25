# JavaScript Class, Object, and Constructor Cheat Sheet

## 1. Class
A class is like a blueprint or a recipe.

- It tells JavaScript how something should look.
- It is used to create many similar things.

Example:
```javascript
class Car {
  constructor(color) {
    this.color = color;
  }
}
```

## 2. Object
An object is one real thing created from a class.

- If the class is the recipe, the object is the actual thing made from it.
- You can create many objects from one class.

Example:
```javascript
let car1 = new Car("red");
console.log(car1.color);
```

## 3. Constructor
A constructor is a special method inside a class.

- It runs automatically when a new object is created.
- It is used to set initial values.

Example:
```javascript
class Car {
  constructor(color, brand) {
    this.color = color;
    this.brand = brand;
  }
}
```

## 4. Simple Full Example
```javascript
class Car {
  constructor(color, brand) {
    this.color = color;
    this.brand = brand;
  }
}

let car1 = new Car("red", "Toyota");
let car2 = new Car("blue", "Honda");

console.log(car1.color); // red
console.log(car2.brand); // Honda
```

## 5. Easy Way to Remember
- Class = blueprint
- Object = real thing
- Constructor = setup values for the object

## 6. One-Line Summary
A class tells JavaScript how to make something, and an object is the actual thing made from it.
