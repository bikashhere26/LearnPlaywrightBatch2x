// please generate a code snippet that demonstrates the concept
//  of "callback hell" in JavaScript, where multiple nested callbacks 
// make the code difficult to read and maintain.

// Callback Hell Example

setTimeout(function () {
    console.log("Test 2: API response received");
    setTimeout(function () {
        console.log("Test 3: API response received");
        setTimeout(function () {
            console.log("Test 4: API response received");
        }, 2000);
    }, 2000);
}, 2000);

console.log("Test 1: started");
console.log("Test 5: moving to next test");
console.log("Test 6: moving to next test");
console.log("Test 7: moving to next test");