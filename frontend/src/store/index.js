import {createStore,combineReducers} from 'redux';
import productsReducer from './reducers/productsReducer';
import cartReducer from './reducers/cartReducer';
const rootReducer = combineReducers({
    productsReducer,
    cartReducer
})
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;