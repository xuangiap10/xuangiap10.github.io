const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set( 'views', path.join(__dirname,"view"));
app.use('/css', express.static(path.join(__dirname, 'css')))

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req,res)=>{
    const date = new Date();
    const hour = date.getHours();
    res.render('form', {
        hour: hour
    });
});

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
