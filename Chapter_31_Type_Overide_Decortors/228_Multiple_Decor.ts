function beforeSomething(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log("EAT");
        return originalMethod.apply(this, args);
    };
    return descriptor;
}

function BeforeSomeSomeThing(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log("SLEEP");
        return originalMethod.apply(this, args);
    };
    return descriptor;
}

class Dog {
    @beforeSomething
    @BeforeSomeSomeThing
    bark() {
        return "woof";
    }
}

let r = new Dog().bark();
console.log(r);