const express = require('express');
const app = express();
const path = require('path');
const router = require('./router');
const cookieparser = require('cookie-parser');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/css", express.static(path.join(__dirname,"public", "css")))

app.use(cookieparser());

app.use("/", router);

app.get("/", (req, res)=>{
    res.send("Home Page")
});

app.listen(3000, ()=> console.log("Starting server ..."));