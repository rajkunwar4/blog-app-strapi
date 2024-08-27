import Link from "next/link";
import Image from "next/image";

function BlogCard() {
  return (
    <div className="rounded-lg shadow-md p-4 mb-4 overflow-hidden border border-gray-600 cursor-pointer">
      <Link href={"/blog/1"}>
        {/* Image part of the blog card */}
        <div>
          <Image
            src={""}
            layout="fill"
            objectFit="cover"
            alt={"blog image"}
            className="rounded-t-lg"
          />
        </div>
        {/* Title and description part of the blog card */}
        <div className="p-2 ">
          <h2 className="text-xl font-semibold mb-2 overflow-ellipsis">
            {"Title of the blog"}
          </h2>
          <p className="text-gray-600">{"This is the fucking Description"}</p>
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;
