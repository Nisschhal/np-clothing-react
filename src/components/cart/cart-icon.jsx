import React, { useContext } from "react";
import CartBag from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cartContext";
import "./cart.style.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <img src={CartBag} className="shopping-cart" />
      <div className="item-count">{cartCount}</div>
    </div>
  );
};

export default CartIcon;
