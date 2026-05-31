// Functions with parameters but no return value

function greet(name) { // Parameter
    console.log("Hello, " + name);
}   
greet("Bikash"); // Calling argument - Hello, Bikash!



function begger(money) {
    console.log("Thanks", money);
}

let returnMesomething = begger(100);
console.log(returnMesomething);