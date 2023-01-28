function verify(){
    var str = "This house is not nice";
    var arr = [6,4,0,3,-2,1];
    console.log(s.filter("not"));
    describe("filter", function(){
        it("Define a filter function on the String object to return the string after removing all the banned words(remove one)", function(){
            assert.equal(str.filter("not"), "This house is  nice");
        });
        it("Define a filter function on the String object to return the string after removing all the banned words(remove multiple items)", function(){
            assert.equal(str.filter("is"), "Th house  not nice");
        });
    });
    describe("bubbleSort", function(){
        it("Write a BubbleSort algorithm on the Array object", function(){
            assert.deepEqual(arr.bubbleSort(), [-2, 0, 1, 3, 4, 6]);
        });
    });
    describe("teacher", function(){
        it("Create an object called Teacher derived from the Person class, and implement a method called teach (describ)", function(){
            assert.equal(teacher.describe(), "Jason, 38 years old.");
        });
        it("Create an object called Teacher derived from the Person class, and implement a method called teach (teach) ", function(){
            assert.equal(teacher.teach("Big Data"), "Jason is now teaching Big Data");
        });
    });

}
