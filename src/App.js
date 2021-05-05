
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import { commerce } from  './lib/Commerce';
import  ProductList from './lib/components/ProductList'


class App extends React.Component {
  constructor(props){
    super(props)


    this.state = {
      products : []
    }
    // this.fetchProducts = this.fetchProducts.bind(this);
  }

  componentDidMount(){
    this.fetchProducts();
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

  render(){

    const {products} = this.state;
    return (
      <Router>
        <div className="homeStyles">
          <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/ProductList" render={() => <ProductList products={products}/>}  />
              <Route path="/About" component={About} />
              <Route path="/sign-up" exact component={SignUp} />
            </Switch>
            <Footer />
        </div>
        
      </Router>
    );
  }



}

export default App;
