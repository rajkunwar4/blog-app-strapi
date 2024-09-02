"use client";

function Category({ category }: any) {
 
  return (
    <div
      onClick={() => {}}
      className="bg-[#af8533] p-4 rounded-lg shadow-md cursor-pointer"
    >
      {category.attributes.Title}
    </div>
  );
}

export default Category;
