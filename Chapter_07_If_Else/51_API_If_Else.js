let statuscode = 500;  

if (statuscode === 200) {
    console.log("Success! The request was successful.");
}else if (statuscode === 404) {
    console.log("Error! The requested resource was not found.");
}else if (statuscode === 500) {
    console.log("Error! Internal Server Error.");
}else {
    console.log("Unknown status code: " + statuscode);
}
