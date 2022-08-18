import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import productReducer from './reducers/product.reducer';

const rootReducer = combineReducers(
    { 
        productReducer,
      
    }
);
const configureStore = () => {
return createStore(rootReducer, applyMiddleware(thunk));
}
export default configureStore;