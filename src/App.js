import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Menu from './pages/Menu';
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import { commerce } from "./lib/Commerce";
import ProductList from "./components/Products/ProductList";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
// import '~/styles/scss/styles.scss'
// import Confirmation from './components/Confirmation/Confirmation';
import { ThemeProvider } from '@material-ui/styles';
import theme from './constants/theme';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      merchant: {},
      products: [],
      cart: {},
      order: this.loadOrderFromLocalStorage() ?? {},
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleUpdateCartQty = this.handleUpdateCartQty.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.handleEmptyCart = this.handleEmptyCart.bind(this);
    // this.toggleCart = this.toggleCart.bind(this);
    this.handleCaptureCheckout = this.handleCaptureCheckout.bind(this);
    this.refreshCart = this.refreshCart.bind(this);
    // this.fetchProducts = this.fetchProducts.bind(this);
  }

  componentDidMount() {
    this.fetchMerchantDetails();
    this.fetchProducts();
    this.fetchCart();
  }

  /**
   * Fetch a saved order receipt from local storage so we can show the confirmation page
   * again between page refreshes.
   */
   loadOrderFromLocalStorage() {
    if (window.localStorage.getItem('order_receipt')) {
      return JSON.parse(window.localStorage.getItem('order_receipt'));
    }
  }

  fetchMerchantDetails() {
    commerce.merchants
      .about()
      .then((merchant) => {
        this.setState({ merchant: merchant });
      })
      .catch((error) => {
        console.log("There was an error fetch the merchant details", error);
      });
  }

  fetchProducts() {
    commerce.products
      .list()
      .then((products) => {
        this.setState({
          products: products.data,
        });
      })
      .catch((error) => {
        console.log("Error");
      });
  }

  fetchCart() {
    commerce.cart
      .retrieve()
      .then((cart) => {
        this.setState({ cart });
      })
      .catch((error) => {
        console.error("There was an error fetching the cart", error);
      });
  }

  handleAddToCart(productId, quantity) {
    commerce.cart
      .add(productId, quantity)
      .then((item) => {
        this.setState({ cart: item.cart });
      })
      .catch((error) => {
        console.error("There was an error adding the item to the cart", error);
      });
  }

  handleUpdateCartQty(lineItemId, quantity) {
    commerce.cart
      .update(lineItemId, { quantity })
      .then((resp) => {
        this.setState({ cart: resp.cart });
      })
      .catch((error) => {
        console.log("There was an error updating the cart items", error);
      });
  }

  handleRemoveFromCart(lineItemId) {
    commerce.cart
      .remove(lineItemId)
      .then((resp) => {
        this.setState({
          cart: resp.cart,
        });
      })
      .catch((error) => {
        console.error(
          "There was an error removing the item from the cart",
          error
        );
      });
  }

  handleEmptyCart() {
    commerce.cart
      .empty()
      .then((resp) => {
        this.setState({ cart: resp.cart });
      })
      .catch((error) => {
        console.error("There was an error emptying the cart", error);
      });
  }
  handleCaptureCheckout(checkoutTokenId, newOrder) {
    commerce.checkout
      .capture(checkoutTokenId, newOrder)
      .then((order) => {
        this.setState({
          order: order,
        });
        // Store the order in session storage so we can show it again
        // if the user refreshes the page!
        window.localStorage.setItem("order_receipt", JSON.stringify(order));
        // Clears the cart
        this.refreshCart();
        // Send the user to the receipt
        this.props.history.push("/confirmation");
      })
      .catch((error) => {
        console.log("There was an error confirming your order", error);
      });
  }

  refreshCart() {
    commerce.cart
      .refresh()
      .then((newCart) => {
        this.setState({
          cart: newCart,
        });
      })
      .catch((error) => {
        console.log("There was an error refreshing your cart", error);
      });
  }

  render() {
    const { products, cart} = this.state;
    
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Navbar totalItems={cart.total_items} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/ProductList"
              render={() => (
                <ProductList
                  products={products}
                  onAddToCart={this.handleAddToCart}
                />
              )}
            />
            <Route path="/About" component={About} />
            <Route path="/SignUp" exact component={SignUp} />
            <Route
              path="/Cart"
              exact
              render={() => (
                <Cart
                  cart={cart}
                  onUpdateCartQty={this.handleUpdateCartQty}
                  onRemoveFromCart={this.handleRemoveFromCart}
                  onEmptyCart={this.handleEmptyCart}
                />
              )}
            />
            <Route
              path="/Checkout"
              exact
              render={(props) => {
                return (
                  <Checkout
                  />
                );
              }}
            />
            
          </Switch>
          <Footer />
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
