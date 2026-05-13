let a = 10;
console.log(a);

// Defination of a function

function printHello() {
    console.log("Hello World");
    let a = 50; // Local Scope
    console.log(a);
    if (true) {

        let a = 100; // block Scope
        console.log(a);
    }
    console.log("F->", a);


}

printHello();


