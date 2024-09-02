import Link from "next/link";
import Image from "next/image";

function BlogCard({ blog }: any) {
 
  const blogDescription = blog.attributes.Description[0].children[0].text;
   // Truncating the description if its too long for the card on the home page ...
  const truncatedBlogDescription =
    blogDescription.length > 80
      ? blogDescription.substring(0, 80) + "..."
      : blogDescription;


  //Image url for the blog
  const imgUrl= "http://localhost:1337"+blog.attributes.img.data.attributes.url;
  console.log("<-------------------------------------------------------------->");
  
  console.log(imgUrl);
  

  return (
    <div className="rounded-lg shadow-md p-4 mb-4 overflow-hidden border border-gray-600 cursor-pointer">
      <Link href={"/blog/1"}>
        {/* Image part of the blog card */}
        <div className="relative w-full h-1 " style={{paddingBottom:"100%"}}>
          <Image
            src={imgUrl}
            layout="fill"
            objectFit="cover"
            alt={"blog image"}
            className="rounded-t-lg "
          />
        </div>
        {/* Title and description part of the blog card */}
        <div className="p-2 ">
          <h2 className="text-xl font-semibold mb-2 overflow-ellipsis">
            {blog.attributes.Title}
          </h2>
          <p className="text-gray-600">{truncatedBlogDescription}</p>
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;
