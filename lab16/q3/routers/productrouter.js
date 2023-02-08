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
const cart=[];
productRouter.post('/addToCart', (req, res)=>{
   

   let quantities = req.body.quantity;
   let productids = req.body.productid;

    for( let i = 0; i < quantities.length; i++){
        //if(quantities[i] != 0 ){
            let product = pCtl.getProductById(productids[i]);
            if(product){
                var num =  parseInt(quantities[i]);
                var id = product.getId();
                if (cart[id] ){
                    num += cart[id].quantity;
                } 
                cart[id] = {name: product.getName(),
                            price: product.getPrice(), 
                            quantity: num };
            }
       // }
    }
    res.status(200);
    res.end();
    //res.redirect("/");

});
productRouter.get('/addToCart', (req, res)=>{

    res.render('shoppingcart', {
        items: cart
    });
});



module.exports = productRouter;