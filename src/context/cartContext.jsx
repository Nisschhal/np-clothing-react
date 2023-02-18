import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addToCart: () => {},
  cartCount: 0,
  decrementQty: () => {},
  removeFromCart: () => {},
  totalPrice: 0,
});

// ADD TO CART AND INCREMENT THE QUANTITY OF ITEM IF ALREADY EXIST
const addToCartByCheck = (cartItems, incomingProduct) => {
  // check if incoming product is in cart
  const itemExist = cartItems.find((item) => item.id === incomingProduct.id);
  // if found increment the quantity of it by 1
  if (itemExist) {
    return cartItems.map((item) =>
      item.id === itemExist.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  // return new modified array
  return [...cartItems, { ...incomingProduct, quantity: 1 }];
};

const removeFromCartByCheck = (cartItems, removeProduct) => {
  const itemExist = cartItems.find((item) => item.id === removeProduct.id);
  // if found increment the quantity of it by 1
  if (itemExist) {
    return cartItems.filter((item) => item.id !== itemExist.id);
  }
};

// DECREMENT THE QUANTITY OF ITEM
const decrementItemQty = (cartItems, decrementingProduct) => {
  return cartItems.map((item) =>
    item.id === decrementingProduct.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalItems = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const totalPrice = () => {
      return cartItems.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    };
    setTotalPrice(totalPrice);

    setCartCount(totalItems);
  }, [cartItems]);

  // ADD TO CART
  const addToCart = (productToCart) => {
    // check if productToCart is in Cart
    // if found then increment the quantity
    // if not then add the product to Cart with quantity: 1
    // debugger;

    setCartItems(addToCartByCheck(cartItems, productToCart));
  };

  // DECREMENT THE QUANTITY, REMOVE IF QUANTITY IS 1
  const decrementQty = (productFromCart) => {
    if (productFromCart.quantity == 1) return removeFromCart(productFromCart);

    setCartItems(decrementItemQty(cartItems, productFromCart));
  };

  // Remove CART ITEM
  const removeFromCart = (productToRemove) => {
    setCartItems(removeFromCartByCheck(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addToCart,
    cartCount,
    decrementQty,
    removeFromCart,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
