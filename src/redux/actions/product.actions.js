import { getData } from '../../util/functons'
import { SET_IS_LOADING_PRODUCT, SET_PRODUCT } from '../constants'

export function setProduct(product) {
    return {
        type: SET_PRODUCT,
        product
    }
}

export function setIsProductLoading(is_product_loading) {
    return {
        type: SET_IS_LOADING_PRODUCT,
        is_product_loading
    }
}



export function getAndSetProduct() {
    return async (dispatch) => {
        try {
            const product = await getData()
            dispatch(setProduct(product));
        } catch (error) {
            console.error(error);
        }
    }
}