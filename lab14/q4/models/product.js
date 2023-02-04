const products =[];
module.exports = class Product{
    constructor(name, price, description, id){
        this.name = name;
        this.price = price;
        this.description = description;
        this.id = id;
    }

    getInfo(){
        return {name: this.name, price: this.price, description: this.description, id: this.id};
    }
    getName(){return this.name};
    getPrice(){return this.price};
    getDescription(){return this.description};
    getId(){return this.id};
    save(){
        products.push(this);
    }
    static getAll(){
        return products;
    }

}