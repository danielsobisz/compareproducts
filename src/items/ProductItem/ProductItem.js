import React from "react";

const ProductItem = ({ product, compare }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} className="product__image" />
      <div
        className={"product--onHover " + (product.compare ? "active" : null)}
      >
        <div
          className="product--onHover__button"
          onClick={() => compare(product)}
        >
          {product.compare ? "Remove" : "Compare"}
        </div>
      </div>

      <h2 className="product__name">{product.name}</h2>
      <p className="product__price">{product.price}</p>
    </div>
  );
};

export default ProductItem;
