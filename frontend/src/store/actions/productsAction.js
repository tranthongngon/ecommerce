import * as productsConstant from '../constants/productsConstant';

export const getProdcuts = products => {
    return {
        type: productsConstant.GET_CARS,
        payload: products,
    }
}