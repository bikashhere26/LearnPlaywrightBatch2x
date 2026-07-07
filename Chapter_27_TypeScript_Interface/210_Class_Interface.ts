// Class implementing an interface 

interface Executable {
    name: string;
    run(): void;
    getStatus(): string;
}

class TestCase implements Executable {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    run(): void {
        console.log("Running test case: " + this.name);
    }
    getStatus(): string {
        return "Test case " + this.name + " is completed.";
    }
}
let test1: Executable = new TestCase("Login Test");
test1.run();
console.log(test1.getStatus());
