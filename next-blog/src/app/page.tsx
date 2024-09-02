import Blogs from "@/components/Blogs";
import Categories from "@/components/Categories";
import Image from "next/image";
import { useEffect } from "react";

//function to fetch all the blog categories via strapi
const fetchCategories = async () => {
  try {
    const categories = await fetch("http://localhost:1337/api/categories");
    const res = await categories.json();
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

// function to fetch all the blogs via strapi
const fetchBlogs = async () => {
  try {
    const blogs = await fetch("http://localhost:1337/api/blogs?populate=*");
    const res = await blogs.json();
    const data = res.data;
    return data;
    console.log("blogssss", res);
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const categories = await fetchCategories();
  const blogs = await fetchBlogs();

  return (
    <div className="">
      <Categories categories={categories} />
      <Blogs blogs={blogs} />
    </div>
  );
}
