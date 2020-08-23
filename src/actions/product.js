import * as types from './types'



export const getProducts = () => dispatch => {

    fetch('../products.json')
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: types.FETCH_PRODUCTS,
                payload: res.products
            })
        }
        )
}

export const compare = product => ({
    type: types.COMPARE_PRODUCT,
    product
})
