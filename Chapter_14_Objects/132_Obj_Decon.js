// object deconstruction
// Object deconstruction is a convenient way to extract values from objects and
//  assign them to variables. 
// It allows you to unpack properties from an object into distinct variables. 
// Here is an example of how to use object deconstruction in JavaScript:

const person = {
    name: 'Bikash',
    age: 30,
    city: 'Kolkata'
};

const { name, age } = person;

console.log(name);
console.log(age);

const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'red'
};

const { make, model } = car;

console.log(make);
console.log(model);

// renaming variables during deconstruction
const { name: personName, age: personAge } = person;

console.log(personName);
console.log(personAge);

const { make: carMake, model: carModel } = car;

console.log(carMake);
console.log(carModel);

// default values
const { name: defaultName = 'Unknown', age: defaultAge = 0 } = person;

console.log(defaultName);
console.log(defaultAge);