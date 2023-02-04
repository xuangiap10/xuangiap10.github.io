const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs'); //main view engine is ejs
app.set('views', path.join(__dirname, 'view')); //views
app.use('/css', express.static(path.join(__dirname,"css")));


app.get('/', (req,res)=>{
    const date = new Date();
    const hour = date.getHours();
    res.render('index', {
        time: date.toTimeString(),
        hour: hour
    });
});
app.listen(3000);