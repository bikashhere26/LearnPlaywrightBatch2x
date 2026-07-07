// Generic class in TypeScript

class GenericClass<T> {
    value: T;
    constructor(value: T) {
        this.value = value;
    }
    getValue(): T {
        return this.value;
    }
}

const genericInstance = new GenericClass<string>("Hello, TypeScript!");
console.log(genericInstance.getValue());

const genericInstance2 = new GenericClass<number>(42);
console.log(genericInstance2.getValue());

const genericInstance3 = new GenericClass<boolean>(true);
console.log(genericInstance3.getValue());