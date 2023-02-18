import { createContext, useState } from "react";
import SHOP_DATA from "../data/shopData.json";

// create context
export const ShopContext = createContext({});

// create provider and pass the value to children
export const ShopProvider = ({ children }) => {
  const [shops, setShops] = useState(SHOP_DATA);
  const value = { shops, setShops };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
