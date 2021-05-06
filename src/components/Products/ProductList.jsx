import React, {Component} from 'react';

import ProductItem from './ProductItem';

class ProductList extends Component {
    
    render(){

        const { products } = this.props
        return (
            <>
                <div className="products" id ="products">
                    {products.map((product) => (
                        <ProductItem
                        key={product.id}
                        product={product}
                        />
                    ))}
                </div>
            </>
        )
    }
}

export default ProductList