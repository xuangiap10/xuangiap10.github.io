
class Bank{

    static nextNumber = 1;
    constructor(){
        this._accounts = [];
        //this._number = 0;
    }

    addBalance( amount){
        this._accounts.forEach(x=> x.deposit(amount));
    }
    withdrawBalance( amount){
        this._accounts.forEach(x=> x.withdraw(amount));
    }
    addAccount(){
        this._accounts.push( new Account (Bank.nextNumber++) );
    }
    addSavingsAccount(interest){
        this._accounts.push( new SavingsAccount (Bank.nextNumber++, interest) );
    }
    addCheckingAccount(overdraft){
        this._accounts.push( new CheckingAccount (Bank.nextNumber++, overdraft) );
    }
    closeAccount(number){
        let i = 0;
        for (i = 0; i < this._accounts.length; i++){
            if( this._accounts[i].getNumber() == number){
                //remove and break
                this._accounts.slice(i,1);
                break;
            }
        }
    }
    accountReport(){
        return this._accounts.reduce( (x,y)=> x  + y.toString() + ";" ,""
        );
    }
    endOfMonth(){
        return this._accounts.reduce( (x,y)=> x + y.endOfMonth() + ";" ,"" );
    }
}