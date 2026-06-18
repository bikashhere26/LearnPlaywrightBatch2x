//print stars in the below pattern
// *
// * *
// * * *


let n = 4; // Number of rows
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row.trim());
    }

console.log('\n');
//print stars in the below pattern


// * * *
// * *
// *

let n1 = 3; // Number of rows
for (let i = n1; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row.trim());
}

//print stars in the below pattern

//   *

//  ***

// ***** 

let n2 = 6; // Number of rows
for (let i = 1; i <= n2; i++) {
    let row = "";
    for (let j = 1; j <= n2 - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }
    console.log(row);
}



