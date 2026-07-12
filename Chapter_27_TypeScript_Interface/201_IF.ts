// interface is a contract which defines the structure of an object

interface user {
    name: string;
    age: number;
    email: string;
    isAdmin: boolean;
}
let user1: user = {
    name: "Bikash",
    age: 30,
    email: "bikash@example.com",
    isAdmin: true
}
console.log(user1);


interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
}

let test1: TestCase = {
    id: 1,
    name: "Login with valid credentials",
    status: "PASS",
    duration: 1500
}

console.log("TC-" + test1.id + ": " + test1.name + " → " + test1.status);

