# Inheritance Cheatsheet

## Inheritance in JavaScript (easy explanation)

- Inheritance means: "child gets parent’s things."
- In JavaScript, one object or class can use code from another object or class.
- This helps reuse code and avoid repetition.

### How it works

- Every object has a hidden link to a parent object called `prototype`.
- If a child object does not know how to do something, it asks its parent.
- If the parent also does not know, it asks the parent's parent, and so on.
- This chain is called the prototype chain.

### Example with classes

```javascript
class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof!");
  }
}

let dog = new Dog();
dog.speak(); // Woof!
```

- `Dog` is the child.
- `Animal` is the parent.
- `Dog` inherits from `Animal`.
- When you call `dog.speak()`, JavaScript uses the child method first.

### Types of inheritance JavaScript supports

1. **Single inheritance**
   - One child, one direct parent.
   - Example: `class Child extends Parent`

2. **Multilevel inheritance**
   - Parent has a parent too.
   - Example:
     - `Animal`
     - `Mammal extends Animal`
     - `Dog extends Mammal`
   - Child inherits from parent and grandparent.

3. **Hierarchical inheritance**
   - One parent, many children.
   - Example:
     - `Animal`
     - `Dog extends Animal`
     - `Cat extends Animal`
   - Both `Dog` and `Cat` share `Animal` features.

### What JavaScript does not support

- **Multiple inheritance** is not supported.
- You cannot do:
  - `class Child extends Parent1, Parent2 { }`
- JavaScript only allows one direct parent class.


********************************************************************

### The `super` keyword

- `super` is used inside a child class to access the parent class.
- Use `super(...)` in a child constructor to call the parent constructor.
- Use `super.methodName()` to call a parent method from the child.

Example:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // call parent constructor
    this.breed = breed;
  }

  speak() {
    super.speak(); // call parent method
    console.log("Woof!");
  }
}
```

- `super(...)` runs the parent constructor.
- `super.speak()` runs the parent method.
- `super` only works in classes that extend another class.

### Simple summary

- Inheritance = child uses parent's code.
- JavaScript has one parent only.
- Child can have parent and grandparent.
- JavaScript does not let a child have two parents at once.