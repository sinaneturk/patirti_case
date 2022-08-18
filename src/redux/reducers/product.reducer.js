import { SET_IS_LOADING_PRODUCT, SET_PRODUCT } from "../constants";
const initialState = {
    product:{
        images : []
    },
    is_product_loading:false
};
const productReducer = (state = initialState, action) => {
switch(action.type) {
    case SET_IS_LOADING_PRODUCT:
    return {
        ...state,
        is_product_loading:action.is_product_loading
    };

    case SET_PRODUCT:
    return {
        ...state,
        product:action.product,
        is_product_loading:false
    };

    default:
    return state;
    }
}
export default productReducer;