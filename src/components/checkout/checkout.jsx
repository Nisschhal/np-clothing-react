import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CheckoutItem from "./checkout-item";
import "./checkout.style.scss";
const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Name</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}

      <span className="total">Total: ${totalPrice}</span>
    </div>
  );
};

export default Checkout;
