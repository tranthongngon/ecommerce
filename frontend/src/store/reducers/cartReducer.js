import * as cartConstant from "../constants/cartConstant";

const inittialState = {
    cartProducts: []
};

const cartReducer = (state = inittialState, action) => {
    switch (action.type) {
        case cartConstant.ADD_TO_CART: {
            const cartProductsCopy = [...state.cartProducts];
            const newCar = { ...action.payload, quantity: 1 };
            const index = cartProductsCopy.findIndex(
                item => item.id === action.payload.id
            );
            if (index === -1) {
                cartProductsCopy.push(newCar);
            } else {
                cartProductsCopy[index].quantity += 1;
            }

            return { ...state, cartProducts: cartProductsCopy };
        }
        case cartConstant.UPDATE_QUANTITY: {
            const newCartProducts = state.cartProducts.map(item => {
                if (item.id === action.payload.id) {
                    if (action.payload.status) {
                        item.quantity += 1;
                    } else {
                        item.quantity -= 1;
                    }
                }
                return item;
            });
            return { ...state, cartProducts: newCartProducts };
        }
        case cartConstant.REMOVE_FROM_CART: {
            const cartProductsCopy = [...state.cartProducts];
            const index = cartProductsCopy.findIndex(
                item => item.id === action.payload
            );
            cartProductsCopy.splice(index, 1);

            return { ...state, cartProducts: cartProductsCopy };
        }
        default:
            return state;
    }
};

export default cartReducer;
