// Multiple Inheritance in JavaScript
class A {
    constructor() {
        this.a = "A";
    }
}

class B {
    constructor() {
        this.b = "B";
    }
}

class C extends A {
    constructor() {
        super();
        this.c = "C";
    }
}

// This will cause an error in JavaScript
// class D extends A, B {   