const express = require('express');
const app = express();
const path = require('path');

app.use('/css', express.static(path.join(__dirname, 'css')))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



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

    <form action="/result" method="post">
     Name <input type="text" name="name"> 
     Age <input type="text" name="age"> 
     <input type="submit" value="Submit Query"> 
     </form>`;

    res.send(html);
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
app.listen(3000, ()=> console.log("running on local host "));