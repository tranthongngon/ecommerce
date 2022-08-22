import {v4 as uuidv4 } from 'uuid';
export class Car {
    constructor(name, urlImg, price, isStock, description, yearProduced,country) {
        this.id = uuidv4();
        this.date = new Date().toDateString();
        this.name = name;
        this.urlImg = urlImg;
        this.price = price;
        this.isStock = isStock;
        this.description = description;
        this.yearProduced = yearProduced;
        this.country = country;
    }
}