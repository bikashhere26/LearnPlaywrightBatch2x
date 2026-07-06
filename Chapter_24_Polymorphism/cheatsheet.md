# Polymorphism Cheat Sheet

## What is Polymorphism?
Polymorphism means "many forms".
It allows one method name to behave differently depending on the object that uses it.

## Simple Example
```js
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog says: woof");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat says: meow");
  }
}

let a1 = new Dog();
let a2 = new Cat();

a1.speak();
a2.speak();
```

## Explanation
- Both `Dog` and `Cat` use the same `speak()` method name.
- But each class gives it a different behavior.
- This is called polymorphism.

## Easy Way to Remember
- Same action
- Different result
