const express = require('express');
const app = express();
const cookieparser = require('cookie-parser');

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieparser());

const options = {
    strict: false,
    caseSensitive: false
}
const Router = express.Router(options);

Router.get("/", (req, res)=>{

    res.locals = {cookies: req.cookies};
    res.render("cookieform"); 
    //res.render("cookieform", {cookies: req.cookies});

});

Router.post("/addcookie", (req, res)=>{
   
    res.cookie(req.body.key, req.body.value);
    res.redirect("/");
});
Router.get("/forget", (req, res)=>{

    for (item in req.cookies){
        res.clearCookie(item);
    }
    res.redirect('/');
});

module.exports = Router;