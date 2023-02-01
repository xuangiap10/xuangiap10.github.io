const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let condition = true;

function ask(){

   readline.question('What is your number?', (number) =>{
        console.log(`your number: ${number}`);
        if (number === 'stop'){
            readline.close();
            console.log("End of asking")
        } else {
            ask();
        }
    });
}
ask();

