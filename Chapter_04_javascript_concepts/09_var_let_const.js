var v = 45;
let l = 75;
const c = 2.5;

var browser = "Chrome";
var browser = "Firefox"; // reassignment
browser = "edge" // redeclaration

var testcases = ["login", "logout", "signup"];

for (var i = 0; i < testcases.length; i++) {
    console.log("Running Test:", testcases[i]);
}

console.log("Loop counter leaked outside:", i);

console.log("Hi");
console.log("Hi");
console.log("Hi");

function say() {
    console.log("Hi again")
}

say();
say();
say();



