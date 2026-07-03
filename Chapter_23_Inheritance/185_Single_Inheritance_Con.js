class BaseTest{

    setup(){
        console.log("Base: Open Browser");  
    }
}
class ApiTest extends BaseTest{
    setup(){
        console.log("API: Open Browser");
    }
}
let test = new ApiTest();
test.setup();