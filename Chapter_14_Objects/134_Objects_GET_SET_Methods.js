// Get Set methods in objects with examples


const user = {
    firstName: 'Bikash',
    lastName: 'Gupta',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(" ");
    }
}
console.log(user.fullName); // Output: "Bikash Gupta"
user.fullName = 'Aditya Gupta';
console.log(user.fullName); // Output: "Aditya Gupta"