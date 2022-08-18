import { createStore, combineReducers } from 'redux';
import introReducer from '../reducers/intro.reducer';
import languagesReducer from '../reducers/languages.reducer';
import locationReducer from '../reducers/location.reducer';
import profileReducer from '../reducers/profile.reducer'
import branchTypesReducer from '@redux/reducers/branch-types.reducer';
import memberTypesReducer from '@redux/reducers/member-types.reducer';
import mainCategoriesReducer from '@redux/reducers/main-categories.reducer';
import tableReducer from '@redux/reducers/table.reducer';
import cartReducer from '@redux/reducers/cart.reducer';
import orderReducer from '@redux/reducers/order.reducer';
import businnessReducer from '@redux/reducers/businness.reducer';
import offersReducer from '@redux/reducers/offers.reducer';
import suggestionReducer from '@redux/reducers/suggestions.reducer';
import branchReducer from '@redux/reducers/branch.reducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers(
    { 
        introReducer,
        locationReducer,
        languagesReducer,
        profileReducer,
        branchTypesReducer,
        memberTypesReducer,
        mainCategoriesReducer,
        tableReducer,
        cartReducer,
        orderReducer,
        businnessReducer,
        offersReducer,
        suggestionReducer,
        branchReducer
    }
);
const configureStore = () => {
return createStore(rootReducer, applyMiddleware(thunk));
}
export default configureStore;