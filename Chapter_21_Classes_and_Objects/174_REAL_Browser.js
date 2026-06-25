class TestCase{
    constructor(name, status, priority){

        this.name = name;
        this.status = status;
        this.priority = priority;
    
    }
    display(){
        console.log(this.name + "->" + this.status + "->" + this.priority)
    }
}
let login_Tc = new TestCase ("login", "Pass", "High")
let signup_TC = new TestCase ("Sign up", "Fail", "High")
// console.log(login_Tc.name)
// console.log(login_Tc.status)
// console.log(login_Tc.priority)

login_Tc.display()
signup_TC.display()