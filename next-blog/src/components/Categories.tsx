import React from "react";
import Category from "./Category";

function Categories({ categories }: any) {
  return (
    // Various categories for the blogs
    <div className="flex gap-6 mb-8 flex-wrap">
      {categories.map((item: any) => (
        <Category category={item} key={item.id} />
      ))}
    </div>
  );
}

export default Categories;
