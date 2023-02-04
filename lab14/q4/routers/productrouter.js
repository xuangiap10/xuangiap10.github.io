const express = require('express');
const app = express();
const path = require('path');
const pCtl = require('../controllers/productController');
const itemCtl = require('../controllers/itemController');
//const bparser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
//app.use(express.json());
//app.use(express.urlencoded({extended: false}));


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
    let quantities = req.body.quantiy;
    let productids = req.body.productid;

    itemCtl.clearAll();
    for( let i = 0; i < quantities.length; i++){
        if(quantities[i] != 0 ){
            let product = pCtl.getProductById(productids[i]);
            if(product){
                itemCtl.addItem(product.getName(), product.getPrice(), product.getId(), quantities[i]);
            }

        }
    }

     
    res.render('shoppingcart', {
        items: itemCtl.getAll()
    });
});


module.exports = productRouter;