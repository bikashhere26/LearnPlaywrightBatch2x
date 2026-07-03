// Multi-Level Inheritance in JavaScript

class A {
    constructor() {
        this.a = "A";
    }
}

class B extends A {
    constructor() {
        super();
        this.b = "B";
    }
}

class C extends B {
    constructor() {
        super();
        this.c = "C";
    }
}

let obj = new C();
console.log(obj.a);
console.log(obj.b);
console.log(obj.c);
console.log(obj);