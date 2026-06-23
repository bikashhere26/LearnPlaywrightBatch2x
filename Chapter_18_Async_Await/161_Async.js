// Learning the concept of Async/Await in JavaScript

// Async/Await is a syntactic sugar built on top of Promises that allows 
// you to write asynchronous code in a more synchronous and readable manner. 
// It makes it easier to work with Promises by allowing you to use the 
// 'await' keyword to pause the execution of an async function until a 
// Promise is resolved or rejected.

// Example of using Async/Await using try catch and finally 

async function orderFood() {
    let foodready = true;

    try {
        if(foodready){
            return "Food is ready!";
        }else{
            throw new Error("Food is not ready yet.");
        }
    } catch (error) {
        console.log(error);
    }finally{
        console.log("Order process completed.");
    }
}

orderFood().then(function(response){
    console.log(response);
});



