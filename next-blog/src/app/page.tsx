"use client";

import Blogs from "@/components/Blogs";
import Categories from "@/components/Categories";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const fetchCategories = async () => {
    const categories = await fetch("http://localhost:1337/api/categories");
    const res = await categories.json();
    res.data.map((item: any) => {
      console.log(item.attributes.Title);
    });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="">
      <Categories />
      <Blogs />
    </div>
  );
}
