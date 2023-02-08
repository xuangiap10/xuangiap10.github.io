
const Item = require('../models/cart');


Item.addItem = (name, price, id, quantity) =>{
    let item = new Item(name, price, id, quantity);
    item.save();
};
module.exports = Item;