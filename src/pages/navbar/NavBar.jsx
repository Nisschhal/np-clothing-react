import React, { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navbar.syle.scss";

import clothingLogo from "../../assets/crown.svg";
import { UserContext } from "../../context/userContext";
import { auth, signOutUser } from "../../utils/firebase/firebase.util";
import CartIcon from "../../components/cart/cart-icon";
import CartDropdown from "../../components/cart/cart-dropdown";
import { CartContext } from "../../context/cartContext";

// import npLogo from "../assets/crown.svg";
const NavBar = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const { currentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={clothingLogo} alt="" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            HOME
          </Link>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <Link className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
