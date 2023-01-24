    const lab6part1 = {
        /* 4 Define a function sum() and a function multiply() that sums and multiplies 
        (respectively) all the numbers in an array of numbers*/
        sum: function (x){
            return x.reduce((x,y)=>x+y, 0);
        },
        multiply: function (x){
            return x.reduce((x,y)=>x*y, 1);
        },
        /* 5 Define a function reverse() that computes the reversal of a string.*/
        reverse: function (x){
            return x.split('').reduce( (a,b) => b+a,"" );
        },
        /* 7 Write a function filterLongWords() that takes an array of words and an integer i 
        and returns the array of words that are longer than i. */
        filterlongWords: function (x, i){
            return x.filter(s => s.length>i);
        }
    }