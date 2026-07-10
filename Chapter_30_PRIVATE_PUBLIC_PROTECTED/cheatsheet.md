# Abstract Class Cheatsheet

## Simple idea
An abstract class is like a recipe card or a blueprint.

- It gives the basic plan.
- It tells what should be there.
- But it does not finish everything by itself.

## 5th-grade explanation
Think of a recipe card:
- The recipe card says what ingredients are needed.
- It gives the basic steps.
- But the actual food is made by the cook.

So:
- Recipe card = abstract class
- Cooked food = real class

## Easy example
Imagine a recipe card for a cake:
- It says to add flour, sugar, and eggs.
- But different people can make different cakes from the same recipe.

That is how an abstract class works.

## In programming terms
An abstract class is a parent class that:
- gives a common plan to child classes
- can contain some completed code
- can also contain methods that must be completed by child classes

## Very simple analogy
- Abstract class = a parent plan
- Child class = the real thing built from the plan

## Important point
You cannot make an object directly from an abstract class.
It is only meant to be used as a base for other classes.

## Small TypeScript example
```ts
abstract class Animal {
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bow Bow");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow");
  }
}

let dog = new Dog();
dog.makeSound();
```

## Memory trick
Abstract class = "shared recipe" for other classes.





