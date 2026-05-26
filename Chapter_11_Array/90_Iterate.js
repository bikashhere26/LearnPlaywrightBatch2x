// iterate over an array using for loop and for...of loop 

let colors = ["Red", "Green", "Blue"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// for...of loop
for (let color of colors) {
    console.log(color);
}

// for...of loop with index
for (let [index, color] of colors.entries()) {
    console.log(index, color);
}


let tests = ["login", "checkout", "search"];
console.log("----");

tests.forEach((i, index) => {
    console.log(i, index);
});

console.log("----");

let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}

console.log("----");

for (let [i, test] of tests.entries()) {
    console.log(i, test);
}
 

