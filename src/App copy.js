import React, { useState, useEffect } from "react";
import "./scss/styles.scss"
import Loading from './components/Loading'
import Product from './components/Product'
import CartProduct from './components/CartProduct'
import Navbar from "./components/Navbar";
import SidebarComponent from "./components/Sidebar";
import Heading from "./components/Heading";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductPage from "./pages/ProductPage";

function App() {
  <Router>
    <Switch>
      <Route exact path="/" component={ProductPage} />
    </Switch>
  </Router>
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("api/products.json");
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  const incrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };
  useEffect(() => {
    const total = cart.reduce(
      (acc, item) => acc + parseFloat(item.price.replace("$", "")) * item.quantity,
      0
    );
    setCartTotal(total);
  }, [cart]);

  return (
    <>
    <section className="container">
      <div className="sidebar_wrap">
        <SidebarComponent/>
      </div>
      <div className="product_wrap">
        <Navbar/>
        <div className="products_info">
            <Heading/>
            <div className="products">
                {products.length>0? (products.map((product) => (
                  <Product product={product} addToCart={addToCart}/>
                ))): <Loading/>}
            </div>
            <div className="cart_wrap">
                {cart.length>0? (
                  cart.map((item) => (
                    <CartProduct 
                        item={item} 
                        incrementQuantity={incrementQuantity} 
                        decrementQuantity={decrementQuantity}
                        removeFromCart={removeFromCart}
                    />
                ))) :<div className="cart_blank">0 items available</div>}
                {cart.length>0? (<h2>Cart Total: ${cartTotal}</h2>):""}
            </div>
        </div>
      </div>
    </section>  
    </>
  );
}

export default App;
