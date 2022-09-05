import axios from "axios";
class ProductServices {
    getProducts() {
        return axios.get("http://localhost:3000/cars");
    }
    postProducts(data){
        return axios.post("http://localhost:3000/cars",data);
    }
    getOneProduct(id) {
        return axios.get(`http://localhost:3000/cars/${id}`);
    }
    deleteProduct(id) {
        return axios.delete(`http://localhost:3000/cars/${id}`);
    }
    putProduct(id,data) {
        return axios.patch(`http://localhost:3000/cars/${id}`,data);
    }
    quickSearch(params) {
        return axios.get(`http://localhost:3000/cars?q=${params}`)
    }
    searchFilter(params) {
        return axios.get(`http://localhost:3000/cars?${params}`)
    }
    getDataByPrice() {
        return axios.get('http://localhost:3000/cars?_sort=price&_order=desc&price_gte=1000000&price_lte=9000000&_limit=16')
    }
}
export default new ProductServices();