import React from "react";
import Category from "./Category";

const Directory = () => {
  return (
    <div className="directory-container">
      <div className="categories-container">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>{" "}
    </div>
  );
};

export default Directory;
