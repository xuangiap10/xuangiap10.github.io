class CheckingAccount extends Account{

    constructor(number, overdraft){
        super(number);
        this._overdraft = overdraft;
    }
    getOverdraft(){
        return this._overdraft;
    }
    setOverdraft(overdraft){
        this._overdraft = overdraft;
    }
    withdraw(amount){
        if (amount <= 0) {
            //throw new RangeError("Withdraw amount has to be greater than zero");
            console.log("Withdraw amount has to be greater than zero");
            return -1;
        }
        if (amount > (this._balance + this._overdraft)) {
            //throw Error("Insufficient funds");
            console.log("Insufficient funds");
            return -1;
        }
        this._balance -= amount;
        return this._balance;
    }
    toString() {
        return "Account " + this._number + ": balance " + this._balance + ": overdraft " + this._overdraft;
    }
    endOfMonth() {
        if (this.getBalance() < 0 ){
            return `Warning, low balance CheckingAccount ${this.getNumber()}: balance: ${this.getBalance()} overdraft limit: ${this.getOverdraft()}`; 
        } else {
            return "";
        }
    }
}