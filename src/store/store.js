import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './cart/reducer';
import goodReducer from './good/reducer';

export default createStore(
    combineReducers({
        gooddata: goodReducer,
        cartdata: cartReducer
    }),
    applyMiddleware(thunk)
);