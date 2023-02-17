import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import categories from "./categories.json";
import Category from "./components/Category";
import Directory from "./components/Directory";
import NavBar from "./components/NavBar";

function Shop() {
  return <h1>I am shop page.</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Directory categories={categories} />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
