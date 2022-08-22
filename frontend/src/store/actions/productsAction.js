import * as productsConstant from '../constants/productsConstant';

export const getProdcuts = products => {
    console.log(products);
    return {
        type: productsConstant.GET_CARS,
        payload: products,
    }
}