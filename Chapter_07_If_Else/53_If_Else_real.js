// logical operatrors + if-else statements

let age = 17;
let isstudent = false;
let ismarried = false;

if (age >= 18 && isstudent) {
    console.log("You are an adult student.");
} else if (age >= 18 && ismarried) {
    console.log("You are a married adult.");
} else if (age >= 18) {
    console.log("You are an adult.");
} else if (age < 18 && isstudent) {
    console.log("You are a minor student.");
} else if (age < 18 && ismarried) {
    console.log("You are a minor married.");
} else {
    console.log("You are a minor.");
}

