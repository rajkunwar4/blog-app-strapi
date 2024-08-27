import Link from "next/link";
import React from "react";
import Image from "next/image";

function page() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Home button */}
      <Link href={"/"}>{"< Back"}</Link>
      {/* image part */}
      <div className="relative w-full h-96 overflow-hidden rounded-lg mt-5">
        <Image src={""} layout="fill" objectFit="cover" alt={"blog image"} />
      </div>
      {/* Content part */}
      <div className="mt-4 ">
        <h1 className="text-3xl font-semibold">{"Title of the blog"}</h1>
        <p className="text-gray-600 mt-2">
          {"This is the fucking Description"}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-sm text-gray-500">Published on {"26-8-2024"}</span>
        </div>
      </div>
    </div>
  );
}

export default page;
