
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
// import Menu from './pages/Menu';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import { commerce } from  './lib/Commerce';
import  ProductList from './components/Products/ProductList'
import Cart from './components/Cart/Cart';
// import './styles/scss/styles.scss'


class App extends React.Component {
  constructor(props){
    super(props)


    this.state = {
      products : [],
      cart: {},
    }
    this.handleAddToCart = this.handleAddToCart.bind(this)
    this.handleUpdateCartQty = this.handleUpdateCartQty.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    // this.fetchProducts = this.fetchProducts.bind(this);
  }

  componentDidMount(){
    this.fetchProducts();
    this.fetchCart();
  }

  fetchProducts() {
    commerce.products.list().then((products) => {
      this.setState({
        products: products.data
      });
    }).catch((error) => {
      console.log("Error");
    })
    
  }


  fetchCart() {
    commerce.cart.retrieve().then((cart) => {
      this.setState({ cart });
    }).catch((error) => {
      console.error('There was an error fetching the cart', error);
    });
  }

  handleAddToCart(productId, quantity) {
    commerce.cart.add(productId, quantity).then((item) => {
      this.setState({ cart: item.cart })
    }).catch((error) => {
      console.error('There was an error adding the item to the cart', error);
    });
  }

  handleUpdateCartQty(lineItemId, quantity) {
    commerce.cart.update(lineItemId, { quantity }).then((resp) => {
      this.setState({ cart: resp.cart })
    }).catch((error) => {
      console.log('There was an error updating the cart items', error);
    });
  }

  handleRemoveFromCart(lineItemId) {
    commerce.cart.remove(lineItemId).then((resp) => {
      this.setState({
        cart: resp.cart
      })
    }).catch((error) => {
      console.error('There was an error removing the item from the cart', error);
    });
  }

  handleEmptyCart() {
    commerce.cart.empty().then((resp) => {
      this.setState({ cart: resp.cart })
    }).catch((error) => {
      console.error('There was an error emptying the cart', error);
    });
  }

  render(){

    const {products} = this.state;
    const {cart} = this.state;
    return (
      <Router>
        <div className="app">

          <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/ProductList" render={() => 
                <ProductList 
                  products={products} 
                  onAddToCart={this.handleAddToCart} />}  />
              <Route path="/About" component={About} />
              <Route path="/SignUp" exact component={SignUp} />
              <Route path="/Cart" exact render={() => <Cart cart={cart} 
                onUpdateCartQty={this.handleUpdateCartQty} 
                onRemoveFromCart={this.handleRemoveFromCart} 
                onEmptyCart={this.handleEmptyCart} />} 
              />
            </Switch>
            <Footer />
        </div>
        
    </Router>
    );
  }



}

export default App;
