import * as types from '../actions/types'


const initalState = {
    products: []
}

export default function (state = initalState, action) {
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload.map(product =>
                    ({ ...product, compare: false })
                )
            };
        case types.COMPARE_PRODUCT:
            return {
                ...state,
                products: state.products.map(product => product.id === action.product.id ?
                    ({ ...product, compare: !product.compare }) : product
                )
            }
        default:
            return state
    }
}
