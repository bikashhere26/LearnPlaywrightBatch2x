// functions without parameters but with return values

function getCurrentYear() {
    return new Date().getFullYear(); // Return current year
}

let year = getCurrentYear(); // Calling the function and storing return value
console.log("Current Year:", year); // Current Year: 2024


function goToRelativeHouse() {
    console.log('Hi');
    return "Hello";
}


let relative = goToRelativeHouse();
console.log(relative);