import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import Button from "../button/button";
import "./cart.style.scss";
import CartItem from "./CartItem";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const nav = useNavigate();
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={() => nav("/checkout")}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
