import React, { Component } from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";
import { Container, Row, Col } from "reactstrap";
import {Link} from 'react-router-dom'

class Cart extends Component {
  constructor(props) {
    super(props);

    this.handleEmptyCart = this.handleEmptyCart.bind(this);
  }

  handleEmptyCart() {
    this.props.onEmptyCart();
  }

  renderEmptyCart() {
    const { cart } = this.props;
    if (cart.total_unique_items > 0) {
      return;
    }

    return (
      <p className="cart__none">
        You have no items in your shopping cart, start adding some!
      </p>
    );
  }

  renderCart() {
    const { cart } = this.props;
    if (cart.total_unique_items === 0) {
      return;
    }

    if (cart === undefined) {
      return <p>Loading...</p>;
    }

    console.log(cart.line_items);
    return (
      <Container>
        <Row>
          {cart?.line_items?.map((lineItem) => (
            <Col sm="3">
              <CartItem
                item={lineItem}
                key={lineItem.id}
                {...this.props}
                className="cart__inner"
              />
            </Col>
          ))}
        </Row>
        <br />
        <Row>
          <div className="cart__total">
            <p className="cart__total-title">
              Subtotal:
              <p className="cart__total-price">
                {cart?.subtotal?.formatted_with_symbol}
              </p>
            </p>
          </div>
          <div className="cart__footer">
            <button className="cart__btn-empty" onClick={this.handleEmptyCart}>
              Empty cart
            </button>
            <Link className="cart__btn-checkout" to="/Checkout">
              Checkout
            </Link>
          </div>
        </Row>
      </Container>
    );
  }

  render() {
    // const { cart } = this.props;
    return (
      <div className="cart">
        <h4 className="cart__heading">Your Shopping Cart</h4>
        {this.renderEmptyCart()}
        {this.renderCart()}
      </div>
    );
  }
}

export default Cart;

Cart.propTypes = {
  cart: PropTypes.object,
  onUpdateCartQty: () => {},
  onRemoveFromCart: () => {},
  onEmptyCart: () => {},
  handleUpdateCartQty: PropTypes.func,
};
