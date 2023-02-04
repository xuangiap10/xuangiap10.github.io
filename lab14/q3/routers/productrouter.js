const express = require('express');
const app = express();
const path = require('path');
const pCtl = require('../controllers/productController');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const options = {
    caseSensitive: false,
    strict: false
};
const productRouter = express.Router(options);

productRouter.get('/info', (req,res)=>{ //under /product 
    //res.send('Main product page');

    res.render('product', {
        products: pCtl.getAll()
    })
});

productRouter.get('/info', (req,res)=>{ //under /product 
    //res.send('Main product page');

    res.render('product', {
        products: pCtl.getAll()
    })
});

productRouter.post('/addToCart', (req, res)=>{
    //console.log(req.body);

    res.render('shoppingcart', {

    });
});


module.exports = productRouter;