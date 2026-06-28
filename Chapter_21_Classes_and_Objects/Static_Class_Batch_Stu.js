class Student {
    constructor(name_student, age, phoneNo) {
        this.name_student = name_student;
        this.age = age;
        this.phoneNo = phoneNo;
    }
    static batch_name = "Playwright2x";
    static mentor_name = "PrrammodDutta";

    static display() {
        console.log("Hi, Happy Learning to all the students");
    }

}

const s1 = new Student("Priya", 25, "7778889990");
const s2 = new Student("Sharad", 30, "8210910909");
const s3 = new Student("Rehsmi", 31, "8210915050");
const s4 = new Student("Rahul", 28, "6665554443");
const s5 = new Student("Sneha", 22, "9998887776");
const s6 = new Student("Amit", 35, "1112223334");
const s7 = new Student("Deepa", 29, "4443332221");
const s8 = new Student("Vikas", 31, "5556667778");
const s9 = new Student("Kavita", 26, "2221110009");
const s10 = new Student("Rajesh", 33, "3334445550");

console.log("Batch Name:" + Student.batch_name);
console.log("Batch Mentor:" + Student.mentor_name);

console.log("------------------------------------------------");


console.log("Name:" + s1.name_student,"" + "Age:" + s1.age,"" + "Phone No:" +s1.phoneNo);
console.log("Name:" + s2.name_student,"" + "Age:" + s2.age,"" + "Phone No:" +s2.phoneNo);
console.log("Name:" + s3.name_student,"" + "Age:" + s3.age,"" + "Phone No:" +s3.phoneNo);
console.log("Name:" + s4.name_student,"" + "Age:" + s4.age,"" + "Phone No:" +s4.phoneNo);
console.log("Name:" + s5.name_student,"" + "Age:" + s5.age,"" + "Phone No:" +s5.phoneNo);
console.log("Name:" + s6.name_student,"" + "Age:" + s6.age,"" + "Phone No:" +s6.phoneNo);
console.log("Name:" + s7.name_student,"" + "Age:" + s7.age,"" + "Phone No:" +s7.phoneNo);
console.log("Name:" + s8.name_student,"" + "Age:" + s8.age,"" + "Phone No:" +s8.phoneNo);
console.log("Name:" + s9.name_student,"" + "Age:" + s9.age,"" + "Phone No:" +s9.phoneNo);
console.log("Name:" + s10.name_student,"" + "Age:" + s10.age,"" + "Phone No:" +s10.phoneNo);


console.log(Student.display());