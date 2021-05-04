import React from 'react';
import stripHTML from 'string-strip-html'

const ProductItem = ({product}) => {

    const {result} = stripHTML(product.description);

    return (
        <div className="product__card">
            <img className="product__image" src={product.media.source} alt={product.name}/>
            <div className="product__info">
                <h3 className="product__name">{product.name}</h3>
                <p className="product__description">
                    {result}
                </p>
                <div className="products__details">
                    <p className="product__price">
                        {product.price.formatted_with_symbol}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductItem