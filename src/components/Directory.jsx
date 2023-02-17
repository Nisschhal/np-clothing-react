import React from "react";
import Category from "./Category";
import "./directory.style.scss";
import { Outlet } from "react-router-dom";
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      <div className="categories-container">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Directory;
