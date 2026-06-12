let config = {
    browser: "chrome",
    timeout: 5000,
    testname: "Login Test"
};
console.log(config);

if (config.browser === "chrome") {
    console.log("Running tests on Chrome");
} else  {
    console.log("Running tests on Firefox");
}

let config2 = {
    browser : "chrome",
    timeout : 3000,
    testname : "login test"
};
console.log(config2);