import React, { Component } from "react";

import ProductItem from "./ProductItem";

class ProductList extends Component {
  render() {
    const { products, handleAddToCart } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          
            {products.map((product) => (
                <div className="col-sm-3" key={product.id}>
                    <ProductItem  product={product} onAddToCart={handleAddToCart}/>
                </div>
            ))}
         
        </div>
      </div>
    );
  }
}

export default ProductList;
