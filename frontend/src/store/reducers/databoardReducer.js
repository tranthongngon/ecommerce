import * as databoardConstant from '../constants/databoardConstant';

const inittialState = {
    databoardProducts: [],
    currentPage: 1,
    postPerPage: 20,
    productEdit: {},
    type:'',
    dataForm: {name:"",urlImg:"", price:"",isStock:"", yearProduced:"",country:"", description:"",trademark:""}
}

const databoardReducer = (state = inittialState, action) => {
    switch (action.type) {
        case databoardConstant.GET_PRODUCTS:{
            return {...state,databoardProducts:action.payload}
        }
        case databoardConstant.SET_PAGE_NUMBER: {
            return {...state,currentPage:action.payload}
        }
        case databoardConstant.GET_PRODUCT_EDIT: {
            return {...state,productEdit:action.payload}
        }
        case databoardConstant.SET_TYPE_FORM: {
            return {...state,type:action.payload}
        }
        case databoardConstant.GET_DATA_FORM: {
            let newOb = {...state.dataForm}
            for (const key in newOb) {
                if (key === action.payload.nameF) {
                    newOb[key] = action.payload.valueF
                }
            }
            return {...state,dataForm:newOb}
        }
        default:
            return state;
    }
}
export default databoardReducer;