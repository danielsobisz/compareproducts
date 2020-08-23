import React from "react";

const CompareTable = ({ products }) => {
  const isMobile = window.innerWidth < 750;

  return (
    <>
      {isMobile ? (
        products.map((product) => {
          const {
            id,
            name,
            type,
            frame,
            size,
            suspension,
            wheels,
            price,
          } = product;
          return (
            <div className="compare-product" id={id}>
              <div className="compare-product__parameter">
                <p className="parameter__value">Model</p>
                <p className="parameter__attribute">{name}</p>
              </div>
              <div className="compare-product__parameter">
                <p className="parameter__value">Type</p>
                <p className="parameter__attribute">{type}</p>
              </div>
              <div className="compare-product__parameter">
                <p className="parameter__value">Frame</p>
                <p className="parameter__attribute">{frame}</p>
              </div>
              <div className="compare-product__parameter">
                <p className="parameter__value">Size</p>
                <p className="parameter__attribute">{size}</p>
              </div>
              <div className="compare-product__parameter">
                <p className="parameter__value">Suspension</p>
                <p className="parameter__attribute">{suspension}</p>
              </div>
              <div className="compare-product__parameter">
                <p className="parameter__value">Wheels</p>
                <p className="parameter__attribute">{wheels}</p>
              </div>
              <div className="compare-product__parameter">
                <p className="parameter__value">Price</p>
                <p className="parameter__attribute">{price}</p>
              </div>
            </div>
          );
        })
      ) : (
        <table className="table">
          <thead className="thead">
            <tr>
              <th className="table__cell--product-name">Model</th>
              {products.map((product) => (
                <th className="table__cell--product-name" key={product.id}>
                  {product.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="table__row">
              <th className="table__row__head" scope="row">
                Type
              </th>
              {products.map((product) => (
                <td key={product.id} className="table__cell">
                  {product.type}
                </td>
              ))}
            </tr>
            <tr className="table__row">
              <th className="table__row__head" scope="row">
                Frame
              </th>
              {products.map((product) => (
                <td className="table__cell" key={product.id}>
                  {" "}
                  {product.frame}
                </td>
              ))}
            </tr>
            <tr className="table__row">
              <th className="table__row__head" scope="row">
                Size
              </th>
              {products.map((product) => (
                <td className="table__cell" key={product.id}>
                  {product.size}
                </td>
              ))}
            </tr>
            <tr className="table__row">
              <th className="table__row__head" scope="row">
                Suspension
              </th>
              {products.map((product) => (
                <td className="table__cell" key={product.id}>
                  {product.suspension}
                </td>
              ))}
            </tr>
            <tr className="table__row">
              <th className="table__row__head" scope="row">
                Wheels
              </th>
              {products.map((product) => (
                <td className="table__cell" key={product.id}>
                  {product.wheels}
                </td>
              ))}
            </tr>
            <tr className="table__row table__row--last">
              <th
                className="table__row__head table__row__head--price"
                scope="row"
              >
                Price
              </th>
              {products.map((product) => (
                <td className="table__cell" key={product.id}>
                  {product.price}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default CompareTable;
