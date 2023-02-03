const express = require('express');
const app = express();
const path = require('path');
//const bparser = require('body-parser');

app.use('/css', express.static(path.join(__dirname, 'css')))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.use(bparser.urlencoded());
//app.use(express.json());


app.get('/', (req, res)=>{
    let cssfile="";
    const date = new Date();
    const hour = date.getHours();
    if(hour > 6 && hour < 18){
       cssfile = "/css/day.css";
    } else {
        cssfile = "/css/night.css";
    }
    let html = `
    <html>
    <head>
        <title>Lab13</title>
        <link href="${cssfile}" rel="stylesheet"> 
    </head>
    <body>
    <form action="/result" method="post">
     Name <input type="text" name="name"> 
     Age <input type="text" name="age"> 
     <input type="submit" value="Submit Query"> 
     </form>
     </body>
     </html>`;

    res.send(html);
    //res.send(`Welcome ${name}, age: ${age}`);
})
app.post('/result', (req, res)=>{
    let name = req.body.name;
    let age = req.body.age;
    if (!name){
        name = "person"
    }
    if (!age){
        age = 18
    }
    console.log(req.body);
    res.send(`Welcome ${name}, age: ${age}`);
});

app.get('/output', (req, res)=>{
    let name = req.query.name;
    let age = req.query.age;
    if (!name){
        name = "person"
    }
    if (!age){
        age = 18
    }
    console.log(req.query);
    res.send(`Welcome ${name}, age: ${age}`);
});
app.listen(3000, ()=> console.log("running on local host "));