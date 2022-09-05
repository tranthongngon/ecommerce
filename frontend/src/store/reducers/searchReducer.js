import * as searchContant from '../constants/searchConstant';

const inittialState = {
    params: [],
    currentPage: 1,
    postPerPage: 12,
}
const searchReducer = (state = inittialState,action) => {
    switch (action.type) {
        case searchContant.SET_PARAMS:{
            const newParams = [...state.params];
            if(action.payload.status) {
                newParams.push(action.payload.param)
            }else{
                for (let i = 0; i < newParams.length; i++) {
                    if(newParams[i] === action.payload.param) {
                        newParams.splice(i,1);
                    }
                }
            }
            return {...state,params:newParams}
        };

        case searchContant.RESET_PARAMS:
            return {...state,params:[]};

        case searchContant.SET_PAGE_NUMBER: 
            return {...state,currentPage:action.payload}
        

        default:
            return state;
    }
}
export default searchReducer;