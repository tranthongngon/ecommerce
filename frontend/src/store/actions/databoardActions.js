import * as databoardConstant from '../constants/databoardConstant';


export const getProdcuts = products => {
    return {
        type: databoardConstant.GET_PRODUCTS,
        payload: products
    }
};

export const setPageNumber = number => {
    return {
        type: databoardConstant.SET_PAGE_NUMBER,
        payload: number
    }
};

export const getProductEdit = product => {
    console.log(product);
    return {
        type: databoardConstant.GET_PRODUCT_EDIT,
        payload: product,
    }
}

export const setTypeForm = type => {
    return {
        type: databoardConstant.SET_TYPE_FORM,
        payload: type,
    }
}

export const getDataForm = (nameF,valueF) => {
    return {
        type: databoardConstant.GET_DATA_FORM,
        payload: {nameF,valueF}
    }
}