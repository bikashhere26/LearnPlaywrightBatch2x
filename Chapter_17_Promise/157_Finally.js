// Learning then , catch and finally

// The finally() method of a Promise object is used to specify a callback function
//  that will be executed regardless of whether the promise is fulfilled or rejected.
//  It is typically used for cleanup operations or to perform actions that should
//  occur after the promise has settled, regardless of its outcome.

let apicall = new Promise(function(resolve,reject){

    resolve({
        status:200, body: "user data"
    });
});

apicall.then(function(response){
    console.log(response);
    console.log(response.status);
    console.log("\n");
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("API call completed.");
    console.log("\n");
});



//Example 2

let order = new Promise(function(resolve, reject) {
    let foodready = true;
    if(foodready){
        resolve("Food is ready!");
    }else{
        reject("Food is not ready yet.");
    }
});
order.then(function(response){
    console.log(response);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Order process completed.");
});
