const Product = require('./product')
const items = [];

class Item extends Product{
    constructor(name, price, id, quantity){
        this.name = name;
        this.price = price;
        this.id = id;
        this.quantity = quantity;
    }
    getQuantity(){return this.quantity;}
    getName(){return this.name;}
    getPrice(){return this.price};
    getId(){return this.id};
    addItem(){
        items.push(this);
    }
    static getAll(){
        return items;
    }
}
module.exports = Item;