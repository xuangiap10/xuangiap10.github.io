window.onload = load;
function load(){
    /*7.1*/
    var operation = (function(){
        var counter=0; //free variable, not parameter and local variable in function
        
        return { 
            add:function(){
                return counter+=1;
            },
            reset: function(){
                counter = 0;
            },
            show: function(){
                return counter;
            }
        };
    })();
    document.getElementById("prob1").innerHTML = Object.keys(operation);
    /*7.2
    var counter: free variable, not parameter and local variable in function

    */
    document.getElementById("prob2").innerHTML = "var counter: free variable, not parameter and local variable in function";
    /*7.3*/
    function make_adder(inc){
        var gapcount = 0;
        return function(){
            return gapcount += inc;
        };
    }
    var add5 = make_adder(5);
    add5();add5(); console.log(add5());
    var add7 = make_adder(7);
    add7();add7(); console.log(add7());
    document.getElementById("prob3").innerHTML= "add5(): " + add5() + ", add7(): " + add7() ;
    /*7.4 
    Suppose you are given a file of JavaScript code containing a list of many function and variable
    declarations. All of these function and variable names will be added to the Global JavaScript
    namespace. What simple modification to the JavaScript file can remove all the names from the
    Global namespace?
    */
    document.getElementById("prob4").innerHTML= "What simple modification to the JavaScript file can remove all the names from the \
    Global namespace?==> put all names into new scope by using IIFE and assign to a global variable"
    /* revealing module pattern */

    const fmodule = (function(){
        var name="", age=0, salary=0; //private
        const getName = function(){ //private
            return name;
        };
        const getAge = function(){ //private
            return age;
        };
        const getSalary = function(){ //private
            return salary;
        };
        const setName = function(x){
            name = x;
        };
        const setAge = function(x){
            age = x;
        };
        const setSalary = function(x){
            salary = x;
        };
        const increaseSalary = function(percent){
            salary = getSalary()*(100+percent)/100;
        };
        const incrementAge = function(){
            getAge() = getAge() + 1;
        }
        const showinfo = function(){
            return {name, age, salary};
        };
        return {
            setName: setName,
            setAge: setAge,
            setSalary: setSalary,
            increaseSalary: increaseSalary,
            incrementAge: incrementAge,
            showinfo: showinfo
        };

    })();
    fmodule.setName("giap");
    fmodule.setAge(39);
    fmodule.setSalary(200000);
    fmodule.increaseSalary(20);
    console.log(fmodule.showinfo());
    document.getElementById("prob5").innerHTML= Object.keys(fmodule);
    fmodule.address="";
    fmodule.setAddress=function(x){
        address = x;
    };
    fmodule.getAddress=function(x){
        return address;
    };
    fmodule.setAddress("805 W Kirwood");
    console.log(fmodule.getAddress());
    document.getElementById("prob6").innerHTML= ""+ Object.keys(fmodule);
}
