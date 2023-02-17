import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./navbar.syle.scss";

import clothingLogo from "../../assets/crown.svg";

// import npLogo from "../assets/crown.svg";
const NavBar = () => {
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
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
