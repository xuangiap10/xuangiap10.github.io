const express = require('express');
const app = express();
const path = require('path');
const ansctl = require("./controller/answer");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use('/js', express.static(path.join(__dirname, "views", "js")));
app.use('/css', express.static(path.join(__dirname, "public", "css")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res)=>{
    res.render("form");
});

app.get("/8ball", (req, res)=>{
    res.send({
        answer: ansctl(),
    });
});

app.listen(3000, ()=> console.log("server is running ..."));