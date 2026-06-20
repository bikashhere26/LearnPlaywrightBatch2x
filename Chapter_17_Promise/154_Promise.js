// Learning JavaScript Data Structures and Algorithm - Chapter 17: Promise

// Promise is a JavaScript object that represents the eventual completion
//  (or failure) of an asynchronous operation and its resulting value. 
// It allows you to write asynchronous code in a more synchronous and readable manner.

// Example of using Promise

let order = new Promise(function(resolve, reject) {
    let foodready = true;

    if(foodready){
        resolve("Food is ready!");
    }else{
        reject("Food is not ready yet.");
    }
})
console.log(order);



