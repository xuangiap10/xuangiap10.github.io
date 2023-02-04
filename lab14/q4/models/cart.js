const Product = require('./product')
const items = [];

class Item {
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
    save(){
        items.push(this);
    }
    static getAll(){
        return items;
    }
    static clearAll(){
        items.splice(0, items.length);
    }
}
module.exports = Item;