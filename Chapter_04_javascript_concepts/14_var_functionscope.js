var a = 10;
console.log(a);

// Defination of a function

function printHello() {
    console.log("Hello World");
    var a = 50; // Local Scope
    console.log(a);
    if (true) {

        var a = 100; // Local Scope
        console.log(a);
    }
    console.log("F->", a);


}

printHello();




