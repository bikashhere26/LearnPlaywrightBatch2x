// ternary operator 
let age = 15;
let status = age >= 18 ? "adult" : "not adult";
console.log(status);

let score = 85;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            score >= 60 ? "D" : "F";
console.log(grade);

let responsetime = 150;
let performance = responsetime < 100 ? "good" :
                  responsetime < 200 ? "average" : "poor";
console.log(performance);

// greatest of 2 numbers

let num1 = 10;
let num2 = 20;
let big_num = num1>num2 ? num1 : num2;
console.log("biggest number is: " + big_num);

// greatest of 3 numbers

let x = 10;
let y = 20;
let z = 40;
let greatest = x > y ? ("x and the value is:" + x) :
                x > z ? ("x and the value is:" + x) :
                y > z ? ("y and the value is:" + y) : ("z and the value is:" + z);
console.log("greatest number is: " + greatest);








