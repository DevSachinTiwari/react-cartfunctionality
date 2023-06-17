import React, { useState, useEffect } from "react";
import "../scss/styles.scss"
import Loading from '../components/Loading'
import Product from '../components/Product'
import CartProduct from '../components/CartProduct'
import Navbar from "../components/Navbar";
import SidebarComponent from "../components/Sidebar";
import Heading from "../components/Heading";
import PrintBill from "../components/PrintBill";

function App() {
  
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartdiscount, setCartdiscount] = useState(0);
  const [cartFinal, setCartFinal] = useState(0);
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
    const discount = (total*10)/100;
    setCartTotal(total.toFixed(2));
    setCartdiscount(discount.toFixed(2));
    setCartFinal((total.toFixed(2)-discount.toFixed(2)).toFixed(2));
    
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
                  <Product product={product} addToCart={addToCart} key={product.id} />
                ))): <Loading/>}
            </div>
            {
              cart.length>0? 
              <div className="cart_wrap">
                <h3>My Order</h3>
                {
                  cart.map((item) => (
                      <CartProduct 
                          item={item} 
                          incrementQuantity={incrementQuantity} 
                          decrementQuantity={decrementQuantity}
                          removeFromCart={removeFromCart}
                          key={item.id}
                      />
                  ))
                }
                <div className="cart_discount">
                    <p>Total: {cartTotal}</p>
                    <p>Discount 10%: {cartdiscount}</p>
                    <p>Final: {cartFinal}</p>
                </div>
                <PrintBill cart={cart} cartTotal={cartTotal} cartdiscount={cartdiscount} cartFinal={cartFinal}/>
              </div>:""
            }
        </div>
      </div>
    </section>  
    </>
  );
}

export default App;
