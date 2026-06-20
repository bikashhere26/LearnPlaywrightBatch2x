let apicall = new Promise(function(resolve,reject){

reject("Error 500: Internal Server Error");

});

apicall.then(function(response){
    console.log(response);
    console.log(response.status);
}).catch(function(error){
    console.log(error);
});

// .catch() runs ONLY when the promise is rejected.
//  .then() is completely skipped.