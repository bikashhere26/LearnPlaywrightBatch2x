var a = 20; // Global scoped

console.log(a);


function printHello() {
    console.log("Hello to the learners");
    var a = 50; // Local scoped
    console.log(a);

    if (true) {
        var a = 10;
        console.log(a);
    }


}

printHello();


