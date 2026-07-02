// Learning concepts of encapsulation with the help of private fields and methods in JavaScript

class BankAccount {
    #balance = 0; // Private field to store the account balance

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount; // Increase balance by the deposited amount
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    getBalance() {
        return this.#balance; // Return the current balance
    }
}
    const account = new BankAccount();

    account.deposit(1000); // Deposit $1000 into the account
    console.log("Current balance:", account.getBalance()); // Output: Current balance: 1000

