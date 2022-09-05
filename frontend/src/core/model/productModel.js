import {v4 as uuidv4 } from 'uuid';
export class Product {
    constructor(name, urlImg, price, isStock, description, yearProduced,country,trademark) {
        this.id = uuidv4();
        this.date = new Date().toDateString();
        this.name = name;
        this.urlImg = urlImg;
        this.price = Number(price);
        this.isStock = isStock;
        this.description = description;
        this.yearProduced = Number(yearProduced);
        this.country = country;
        this.trademark = String(trademark).replace(/ /gi,'-');
    }
}