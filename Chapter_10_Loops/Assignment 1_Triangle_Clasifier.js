// write a program for triangle classifier

let side1 = 5;
let side2 = 7;
let side3 = 10;

if (side1 === side2 && side2 === side3) {
    console.log("Equilateral Triangle");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("Isosceles Triangle");
} else {
    console.log("Scalene Triangle");
}

