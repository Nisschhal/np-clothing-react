import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import Product from "../product/product";
// import SHOP_DATA from "../../data/shopData.json";
import "./shop.style.scss";

const Shop = () => {
  const { shops } = useContext(ShopContext);
  console.log(shops);
  return (
    <div className="products-container">
      {shops.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </div>
  );
};

export default Shop;
