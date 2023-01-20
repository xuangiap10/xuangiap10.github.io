
function max(a, b){
    if ( a > b) return a;
    else return b;
}
function maxOfThree(a, b, c){
    return max(a, max(b,c));
}
function isVowel(a){
    if(parseInt(a) < 0) return true;
    return false;
}

function sum(arr) {
    var ret = 0;
    for(let i =0; i< arr.length; i++){
        ret += arr[i];
    }
    return ret;
}

function multiply(arr){
    var ret = 1;
    for(let i =0; i< arr.length; i++){
        ret *= arr[i];
    }
    return ret;
}

function reverse(arr){
    var ret="";
    for(let i=arr.length; i>=0; i--){
        ret += arr.charAt(i);
    }
    return ret;
}

function findLongestWord(arr){
    var ret = "";
    for( let i =0; i<arr.length; i++){
        if(arr[i].length > ret.length){
            ret = arr[i];
        }
    }
    return ret;
}

function filterLongWords(arr, minlen){
    var ret =[];
    for( let i =0; i<arr.length; i++){
        if(arr[i].length > minlen){
            ret.push(arr[i]);
        }
    }
    return ret.toString();
}

function test_map_filter_reduce(){
    const a = [1,3,5,3,3]; 
    const b = a.map(function(elem, i, array) {
    return elem*10;
    })
    //document.writeln(b.toString() + "<br/>");
    const c = a.filter(function(elem, i, array){
    return elem == 3;});
    //document.writeln(c.toString() + "<br/>");
    const d = a.reduce(function(prevValue, elem, i, array){
    return prevValue * elem;
    });
    //document.writeln(d+ "<br/>");
    console.log("doing map/filter/reduce with input array: ", a);
    console.log("output of multiplying each element by 10: ", b);
    console.log("output of filtering with all elements equal to 3: ", c);
    console.log("output of producing of all elements: ", d);
}