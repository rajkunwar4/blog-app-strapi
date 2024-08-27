import React from "react";
import Category from "./Category";

function Categories() {
  return (
    // Various categories for the blogs
    <div className="flex gap-6 mb-8 ">
      <Category />
      <Category />
      <Category />
      <Category />
    </div>
  );
}

export default Categories;
