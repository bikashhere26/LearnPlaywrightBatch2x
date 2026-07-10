// Override keyword is used to override the type of a property or method in a derived class. 
// It allows you to specify that a property or method in the derived class is intended to override a 
// property or method in the base class, even if the types are not compatible.

class Base {
    greet(): string {
        return "Hello from Base class";
    }
}

class Derived extends Base {
    override greet(): string {
        return "Hello from Derived class";
    }
}
let instance = new Derived();
console.log(instance.greet()); // Output: "Hello from Derived class"

// *******************************************************************************************

class Basetest{
    ready():void{
        console.log("[Base] Open browser");
    }
    done():void{
        console.log("[Base] Close browser");
    }
}

class loginTest extends Basetest{
    override ready():void{
        console.log("[LoginTest] Open browser and navigate to login page");
    }
    override done():void{
        console.log("[LoginTest] Close browser");
    }
}

class APITest extends Basetest{
    override ready():void{
        console.log("[APITest] Open browser and navigate to API page");
    }
}


let test = new loginTest();
test.ready(); // Output: "[LoginTest] Open browser and navigate to login page"
test.done(); // Output: "[LoginTest] Close browser"

let test1 = new APITest();
test1.ready(); // Output: "[APITest] Open browser and navigate to API page"
test1.done(); // Output: "[Base] Close browser"