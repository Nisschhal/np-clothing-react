import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./checkout.style.scss";

const CheckoutItem = ({ item }) => {
  const { addToCart, decrementQty, removeFromCart } = useContext(CartContext);
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={() => decrementQty(item)}>
          {"<"}
        </span>
        {quantity}x
        <span className="arrow" onClick={() => addToCart(item)}>
          {">"}
        </span>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => removeFromCart(item)}>
        {"X"}
      </div>
    </div>
  );
};

export default CheckoutItem;
