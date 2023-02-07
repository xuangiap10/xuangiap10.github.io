const express = require('express');
const app = express();
const path = require('path');
const session = require("express-session");
const parseurl = require('parseurl');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use('/css', express.static(path.join(__dirname, 'css')))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: "question2",
    resave: false,
    saveUninitialized: true,
}));




app.get('/', (req, res)=>{
    let cssfile="";
    const date = new Date();
    const hour = date.getHours();
    if(hour > 6 && hour < 18){
       cssfile = "day.css";
    } else {
        cssfile = "night.css";
    }
    let info = [];
    if(req.session.info) info = req.session.info;
    res.render("form", {
        cssfile: cssfile,
        info: info,
    });
    //res.send(`Welcome ${name}, age: ${age}`);
})
app.post('/result', (req, res)=>{

    let info = [];
    if(req.session.info){
        info = req.session.info;
    }
    info.push({
        name: req.body.name,
        age: req.body.age
    });
    req.session.info = info; //update session info
    info.forEach(element => {
        console.log(element);
    });
    res.redirect("/");
});


app.listen(3000, ()=> console.log("running on local host "));