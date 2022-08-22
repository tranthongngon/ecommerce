import * as productsConstant from '../constants/productsConstant';
const inittialState = {
    products: [],
}

const productsReducer = (state = inittialState,action) => {
    switch (action.type) {
        case productsConstant.GET_CARS:{
            const newProducts = action.payload;
            return {...state,products:newProducts}
        }
        default:
            return state; 
    }
}

export default productsReducer;