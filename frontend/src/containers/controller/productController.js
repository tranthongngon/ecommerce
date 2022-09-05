import { Product } from "../../core/model/productModel";
import productServices from "../../core/services/productServices";

class productController {
    getEle(el) {
        return document.querySelector(el);
    }
    postProducts(name,urlImg, price, isStock, description, yearProduced, country,trademark) {
        const car = new Product(name, urlImg, price, isStock, description, yearProduced, country,trademark);
        return productServices.postProducts(car)
    }
    putProduct(name,urlImg, price, isStock, description, yearProduced, country,trademark,id){
        const car = new Product(name,urlImg, price, isStock, description, yearProduced, country,trademark);
        return productServices.putProduct(id,car)
    }
    checkIsEmpty(data) {
        if(data === "" || data === null || data === undefined) {
            return true;
        }else {
            return false
        }
    }
    convertToCurrency(number) {
        return Number(number).toLocaleString('en-US',{
            style:'currency',
            currency:'USD',
        })
    }
}
export default new productController();
