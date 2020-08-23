import React from 'react';
import ProductItem from '../../items/ProductItem/ProductItem'



const ProductList = ({ products, compare }) => {
    return (
        <div className="products-container">
            {products.map(product =>
                <ProductItem key={product.id} product={product} compare={compare}></ProductItem>)}
        </div>);

}

export default ProductList;