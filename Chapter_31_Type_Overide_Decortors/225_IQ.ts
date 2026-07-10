class Father {
    home(): void {
        console.log("2BHK");
    }
}

class Bikash extends Father {
    override home(): void {
        console.log("3BHK");
    }
}

let property = new Bikash();
let parent = new Father();
property.home();

parent.home();