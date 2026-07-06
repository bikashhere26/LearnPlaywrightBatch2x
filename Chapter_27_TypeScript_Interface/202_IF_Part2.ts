interface APIresponse {
    body: string;
    headers?: string; // ? indicates that the property is optional
    responsetime?: number;
}

let response1: APIresponse = {
    body: "Login Successful",
};

console.log(response1);

let response2: APIresponse = {
    body: "Login Failed",
    headers: "Content-Type: application/json",
    responsetime: 2000
};

console.log(response2);