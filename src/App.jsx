import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import categories from "./categories.json";
import Directory from "./pages/home/Directory";
import NavBar from "./pages/navbar/NavBar";
import Auth from "./pages/auth/Auth";

function Shop() {
  return <h1>I am shop page.</h1>;
}

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
