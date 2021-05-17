import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {Card, CardImg,CardSubtitle, CardBody, CardTitle,  Button} from 'reactstrap'
import './styles.css'

class CartItem extends Component {
    constructor(props) {
        super(props);

        this.handleUpdateCartQty = this.handleUpdateCartQty.bind(this);
        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    }

    handleUpdateCartQty(lineItemId, quantity) {
        this.props.onUpdateCartQty(lineItemId, quantity);
    }

    handleRemoveFromCart(lineItemId) {
        this.props.onRemoveFromCart(lineItemId);
    }

    render() {
        const { item } = this.props;

        return (
            
            <Card className="cart-item">
                <CardImg className="cart-item__image" src={item.media.source} alt={item.name} />
                    <CardBody className="cart-item__details">
                        <CardTitle className="cart-item__details-name">{item.name}</CardTitle>
                        <div className="btn-wrapper">

                            <Button className="btn  "type="button" onClick={() => item.quantity > 1 ? this.handleUpdateCartQty(item.id, item.quantity - 1) : this.handleRemoveFromCart(item.id)}>-</Button>
                            <CardSubtitle className="card-sub">{item.quantity}</CardSubtitle>
                            <Button className="btn" type="button" onClick={() => this.handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                        </div>
                       
                        <CardSubtitle className="cart-item__details-price">{item.line_total.formatted_with_symbol}</CardSubtitle>
                        
                    </CardBody>
                    <Button type="button" className="cart-item__remove" onClick={() => this.handleRemoveFromCart(item.id)}>Remove</Button>
            </Card>
                   
        );
    };
};

export default CartItem;

