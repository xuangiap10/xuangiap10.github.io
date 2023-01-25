window.onload = load;
function load(){
    /*8.1*/
    console.log("8.1: " )
    x = 1
    var a = 5;
    var b = 10;
    var c = function(a,b,c){
        console.log(x); //x = undefined - hosted from var x=10
        console.log(a); //8 = parameter
        var f= function(a,b,c){
            b = a;
            console.log(b); // b = 8 //parameter
            b = c;
            var x = 5;
        }
        f(a,b,c);
        console.log(b); //b = 9 parameter
        var x = 10;
    }
    c(8,9,10);
    console.log(b); //b = 10 global
    console.log(x); //x = 1 global
    //document.getElementById("prob1").innerHTML = Object.keys(operation);
    /*8.2
    2. Define Global Scope and Local Scope in JavaScript

    */
    /*8.3*/

    /*8.4 */
    console.log("8.4: ") 
    var x = 9;
    function myFunction(){
        return x*x;
    }
    console.log(myFunction()); //81
    x = 5;
    console.log(myFunction()); //25
    

    /* 8.5 */
    console.log("8.5: ");
    var foo = 1;
    function bar(){
        if (!foo){ //undefined => true
            var foo = 10; //block scope, will be hoisted 
        }
        console.log( foo); //10
    }
    bar();

  
}
