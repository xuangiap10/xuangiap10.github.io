const express = require('express');
const app = express();
const path = require('path');
const productRouter = require('./routers/productrouter');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use('/product', productRouter); //product

app.get('/', (req, res) => {
    res.send("Main Home Page");
});

app.listen(3000, ()=>console.log("starting server ...."))