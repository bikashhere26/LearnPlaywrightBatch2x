// Hierarchical Inheritance in JavaScript

class Animal{
    constructor(name){
        this.name = name;
    }

    eat(){
        console.log(this.name + " is eating");
    }
    sleep(){
        console.log(this.name + " is sleeping");
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    bark(){
        console.log(this.name + " is barking");
    }
}

class Cat extends Animal{
    constructor(name, color){
        super(name);
        this.color = color;
    }
    meow(){
        console.log(this.name + " is meowing");
    }
}
let dog = new Dog("Buddy", "Golden Retriever");
dog.eat();
dog.sleep();
dog.bark();

let cat = new Cat("Memo", "Orange");
cat.eat();
cat.sleep();
cat.meow();
