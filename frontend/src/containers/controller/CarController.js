import { Car } from "../../core/model/carModel";
import carServices from "../../core/services/carServices";

class CarController {
    getEle(el) {
        return document.querySelector(el);
    }
    postCar(name,urlImg, price, isStock, description, yearProduced, country) {
        const car = new Car(name, urlImg, price, isStock, description, yearProduced, country);
        return carServices.postCar(car)
    }
}
export default new CarController();
