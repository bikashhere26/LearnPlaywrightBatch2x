// Method Overriding in JavaScript is a feature that allows a subclass to provide 
// a specific implementation of a method that is already defined in its superclass. 
// When a method in a subclass has the same name, return type, and parameters as a 
// method in its superclass, the subclass's method overrides the superclass's method.

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