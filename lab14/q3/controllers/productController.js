const Product = require('../models/product');


let p1 = new Product("mango", 1.08 , "product of Peru", 1);
p1.save();

let p2 = new Product("papaya", 5.5 , "product of Mexico", 2);
p2.save();

let p3 = new Product("pineapple", 2.25 , "product of US", 3);
p3.save();

module.exports =  Product;