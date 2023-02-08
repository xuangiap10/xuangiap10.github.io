const express = require('express');
const app = express();
const path = require('path');
const productRouter = require('./routers/productrouter');
const session = require('express-session');
const parseurl = require('parseurl');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/css', express.static(path.join(__dirname,"public","css")));
app.use('/js', express.static(path.join(__dirname,"view","js")));
app.use(session({
    secret: "question3-4",
    saveUninitialized: true,
    resave: false
}));

app.use('/', productRouter); //product

app.get('/', (req, res) => {
    res.send("Main Home Page");
});

app.listen(3000, ()=>console.log("starting server ...."))