import {createStore,combineReducers} from 'redux';
import productsReducer from './reducers/productsReducer';
import cartReducer from './reducers/cartReducer';
import databoardReducer from './reducers/databoardReducer';
import searchReducer from './reducers/searchReducer';
const rootReducer = combineReducers({
    productsReducer,
    cartReducer,
    databoardReducer,
    searchReducer
})
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;