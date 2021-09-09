import React, { Component } from 'react';
import products from "./data/products.json"

class Searchbar extends Component {

    render() {
        return (
            <div>
                <h3>this is my ProductsList component</h3>
                {products.map(productDetails => {
                    return <div key={productDetails.gtin}>
                        <h1 >{productDetails.title}</h1>
                        <p>{productDetails.gender}</p>
                        <img src={productDetails.image_link} alt="product"></img>
                    </div>
                })}
            </div>
        );
    }
}

export default Searchbar;

