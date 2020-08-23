import * as types from './types'



export const getProducts = () => dispatch => {
    fetch(`products.json`).then(response => {
        console.log(response);
        return response.json();
    }).then(data => {
        // Work with JSON data here
        dispatch({
            type: types.FETCH_PRODUCTS,
            payload: data.products
        })
        console.log(data);
    }).catch(err => {
        console.log("Error Reading data " + err);
    });

}

export const compare = product => ({
    type: types.COMPARE_PRODUCT,
    product
})
