import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import categories from "./data/categories.json";
import Directory from "./pages/home/Directory";
import NavBar from "./pages/navbar/NavBar";
import Auth from "./pages/auth/Auth";
import Shop from "./components/shop/shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Directory categories={categories} />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
  );
}

export default App;
