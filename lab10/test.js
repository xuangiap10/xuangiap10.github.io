function verify(){
    var acc = new Account(1);
    var savingacc = new SavingsAccount(2, 10);
    var checkingacc = new CheckingAccount(3, 500);
    var bank = new Bank();
    bank.addAccount();
    bank.addSavingsAccount(2.5);
    bank.addCheckingAccount(500);
    bank.addBalance(1000);
    //console.log(bank.endOfMonth());
    //bank.endOfMonth();
    console.log(bank.accountReport());
   

    describe("deposit", function(){
        it("deposit 1000$ money to account", function(){
            acc.deposit(1000);
            assert.equal(acc.getBalance(), 1000);
        });

    });
    describe("withdraw", function(){
        it("widthdraw 500$ from account having 1000$", function(){
            acc.withdraw(500);
            assert.equal(acc.getBalance(), 500);
        });

    });
    describe("addInterest", function(){
        it("add Interest 10% to 1000 balance", function(){
            savingacc.deposit(1000);
            savingacc.addInterest();
            assert.equal(savingacc.getBalance(), 1100);
        });

    });
    describe("withdraw", function(){
        it("widthraw amount money over balance", function(){
            checkingacc.deposit(1000);
            checkingacc.withdraw(1200);
            assert.equal(checkingacc.getBalance(), -200);
        });

    });
    describe("accountReport", function(){
        it("accountReport returns status of all accounts", function(){
            assert.deepEqual(bank.accountReport(), "Account 1: balance 1000;Account 2: balance 1000: Interest 2.5;Account 3: balance 1000: overdraft 500;");
        });

    });
    describe("endOfMonth", function(){
        it("endOfMonth returns status of all accounts", function(){
            bank.withdrawBalance(1200);
            console.log(bank.endOfMonth());
            assert.deepEqual(bank.endOfMonth(), 
            ";Interest added SavingsAccount 2: balance: 1050.625 interest: 2.5;Warning, low balance CheckingAccount 3: balance: -200 overdraft limit: 500;");
        });

    });




}