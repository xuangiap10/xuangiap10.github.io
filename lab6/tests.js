
/*1 sum */
arr=[1,3,5,6,8];
console.log("sum(" + arr + "): " + lab6part1.sum(arr));
console.log("multiply(" + arr + "): " + lab6part1.multiply(arr));
s = "maharishi";
console.log("reverse(" + s + "): " + lab6part1.reverse(s));
list = ["jan", "feb", "march", "april", "may"];
console.log("filterlongWords([" + list + "], 3): " + lab6part1.filterlongWords(list,3));



function verify(){
    let arr=[1,3,5,6,8];
    let s = "maharishi";
    let list = ["jan", "feburary", "march", "april", "may"];;
    describe("sum", function(){
        it("sum all the numbers in an array of numbers", function(){
            assert.equal(lab6part1.sum(arr), 23);
        });
    });
    describe("multiply", function(){
        it("multiply all the numbers in an array of numbers", function(){
            assert.equal(lab6part1.multiply(arr), 720);
        });
    });
    describe("reverse", function(){
        it("compute the reversal of a string ", function(){
            assert.equal(lab6part1.reverse(s), "ihsiraham");
        });
    });

    describe("filterLongWords", function(){
        it("takes an array of words and an integer i and returns the array of words that are longer than i", function(){
            assert.deepEqual(lab6part1.filterlongWords(list,3),[ 'feburary', 'march', 'april' ]);
        });
    });
    mocha.run();
}
window.onload = verify;
