/* Exercise 1 */
String.prototype.filter = function(str){
    let pattern = new RegExp(str, "g");
    return this.replace(pattern,'');
}
var s = "This house is not nice";
console.log(s.filter("not"));
/* Exercise 2 */
Array.prototype.bubbleSort = function(){
    //return this.sort((x,y)=>x-y);
    for(let i = 0; i < this.length-1; i++){
        let min = this[i];
        for(let j = i+1; j < this.length; j++){
            if(min > this[j]){
                min = this[j];
                this[j] = this[i];
                this[i] = min;
            }
        }
    }
    return this;
}
var arr = [6,4,0,3,-2,1];
console.log(arr.bubbleSort());
/*Exercise 3 */

var Person = function() {};
Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function()
{
    return this.name + ", " + this.age + " years old.";
}
var Student = function() {};
Student.prototype = new Person()
Student.prototype.learn = function(subject)
{
    console.log(this.name + " just learned " + subject);
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");
var Teacher = function(){};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject){
    //console.log(this.name + " is now teaching " + subject);
    return (this.name + " is now teaching " + subject);
}
var teacher = new Teacher();
teacher.initialize("Jason", 38);
console.log(teacher.describe());
teacher.teach("Big Data");