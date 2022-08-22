import * as cartConstant from '../constants/cartConstant';

export const addToCart = car => {
    return {
        type: cartConstant.ADD_TO_CART,
        payload: car
    }
};

export const updateQuantity = (id,status) => {
    return {
        type: cartConstant.UPDATE_QUANTITY,
        payload: {id,status},
    }
};

export const removeFromCart = id => {
    return {
        type: cartConstant.REMOVE_FROM_CART,
        payload: id,
    }
};