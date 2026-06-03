// higher order functions are functions that can take other functions as arguments
// or return functions as their result. 

// They are a powerful tool in functional programming and allow for more
//  flexible and reusable code.


// example of a higher order function that takes another function as an argument

function higherOrderFunction(callback) {
    console.log('This is a higher order function.');
    callback();
}

function callbackFunction() {
    console.log('This is a callback function.');
}

higherOrderFunction(callbackFunction);


// example of a higher order function that returns another function

function multiplier(factor) {
    return function(number) {
        return number * factor;
    }
}

const double = multiplier(2);
console.log(double(5)); // 10

const triple = multiplier(3);
console.log(triple(5)); // 15

