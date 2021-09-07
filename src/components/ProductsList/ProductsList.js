import React, { Component } from 'react';
import products from "../../data/products.json"

import './ProductsList.scss';

class ProductsList extends Component {
  render() {
    const productsList = products.slice(0, 50).map(product => (
      <div className="product-item-component" key={product.gtin}>
        <header>
          <h3>{product.title}</h3>
          <p>{product.gender}</p>
        </header>
        <div className="thumbnail-container">
          <img src={product.image_link} alt="product"></img>
        </div>
      </div>
    ));

    return (
      <div className="products-list-component">
        {productsList}
      </div>
    );
  }
}

export default ProductsList;

