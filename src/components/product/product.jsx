import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import Button from "../button/button";
import "./product.style.scss";
const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { name, imageUrl, price } = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <Button buttonType={"inverted"} onClick={() => addToCart(product)}>
        Add to Cart
      </Button>
    </div>
  );
};

export default Product;
