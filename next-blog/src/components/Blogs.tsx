import React from "react";
import BlogCard from "./BlogCard";

function Blogs({ blogs }: any) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {blogs.map((item: any) => (
        <BlogCard key={item.id} blog={item} />
      ))}
    </div>
  );
}

export default Blogs;
