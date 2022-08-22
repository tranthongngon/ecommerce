import axios from "axios";
class CarServices {
    getCars() {
        return axios.get("http://localhost:3000/cars");
    }
    postCar(data){
        return axios.post("http://localhost:3000/cars",data);
    }
    getOneCar(id) {
        return axios.get(`http://localhost:3000/cars/${id}`);
    }
    deleteCar(id) {
        return axios.delete(`http://localhost:3000/cars/${id}`);
    }
    putCars(id,data) {
        return axios.patch(`http://localhost:3000/cars/${id}`,data);
    }
}
export default new CarServices();