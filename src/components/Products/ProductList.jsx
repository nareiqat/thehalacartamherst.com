import React, { Component } from "react";

import ProductItem from "./ProductItem";

class ProductList extends Component {
  render() {
    const { products, onAddToCart } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          
            {products.map((product) => (
                <div className="col-sm-3" key={product.id}>
                    <ProductItem  product={product} onAddToCart={onAddToCart}/>
                </div>
            ))}
         
        </div>
      </div>
    );
  }
}

export default ProductList;
