class HDFC{

    #balance;
    constructor(name, balance){
        this.name = name;
        this.#balance = balance;
    }
    getBalance(){
        return this.#balance;
    }
    setBalance(balance,iscashier){
        if(iscashier){
            this.#balance = balance;
        }else{
            console.log("You are not authorized to change the balance.");
        }
    }

}

let hdfc = new HDFC("Bikash", 1000);
console.log(hdfc.getBalance());
hdfc.setBalance(2000, false);
console.log(hdfc.getBalance());
// hdfc.setBalance(2000, true);
// console.log(hdfc.getBalance());