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

productRouter.get('/', (req,res)=>{ //under /product 
    
    res.render('product', {
        products: pCtl.getAll()
    })
});

productRouter.post('/addToCart', (req, res)=>{
    let cart=[];
    if( req.session.cart){
        cart = req.session.cart;
    }

   let quantities = req.body.quantiy;
   let productids = req.body.productid;

    for( let i = 0; i < quantities.length; i++){
        //if(quantities[i] != 0 ){
            let product = pCtl.getProductById(productids[i]);
            if(product){
                var tmp =  parseInt(quantities[i]);
                var id = product.getId();
                if (cart[id] ){
                    tmp += cart[id].quantity;
                } 
                cart[id] = {name: product.getName(),
                            price: product.getPrice(), 
                            quantity: tmp };
            }
       // }
    }
    req.session.cart = cart ;
     
    res.redirect("/");

});
productRouter.get('/addToCart', (req, res)=>{
    let cart=[];
    if( req.session.cart){
        cart = req.session.cart;
    }
    res.render('shoppingcart', {
        items: cart
    });
});



module.exports = productRouter;