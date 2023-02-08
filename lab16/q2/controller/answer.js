const ANS = require("../model/inventory");

 function generate_answer(){
    let i = Math.floor( Math.random()*ANS.length );
    return ANS[i];
};
module.exports = generate_answer;