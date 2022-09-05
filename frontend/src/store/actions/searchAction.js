import * as searchContant from '../constants/searchConstant';

export const setSearchParams = (param,status) => {
    return {
        type: searchContant.SET_PARAMS,
        payload: {param,status},
    }
};

export const resetParams = () => {
    return {
        type: searchContant.RESET_PARAMS,
    }
};

export const setPageNumber = number => {
    return {
        type: searchContant.SET_PAGE_NUMBER,
        payload: number
    }
};
