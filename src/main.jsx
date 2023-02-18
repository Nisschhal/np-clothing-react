import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Routers } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import { ShopProvider } from "./context/shopContext";
import { CartProvider } from "./context/cartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Routers>
      <UserProvider>
        <ShopProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ShopProvider>
      </UserProvider>
    </Routers>
  </React.StrictMode>
);
