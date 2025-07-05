"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface BlogGridClientProps {
  posts: any[];
}

export default function BlogGridClient({ posts }: BlogGridClientProps) {
  const router = useRouter();

  const renderCard = (post: any, index: number) => {
    const isFeatured = index === 0;

    const cardClasses =   `relative cursor-pointer overflow-hidden rounded-lg h-full group border-2 border-[#0C5400] `

    const imageClasses = `w-full object-contain transition duration-500 ease-in-out transform group-hover:scale-102`;

    const onClick = () => router.push(`/blogs/${post.slug}`);

    return (
      <div key={post._id} className={cardClasses} onClick={onClick}>
        <Image
          src={post.mainImage || "/images/blogs/default.jpg"}
          alt={post.title}
          width={isFeatured ? 1200 : 600}
          height={isFeatured ? 600 : 300}
          className={imageClasses}
        />
        <div className="bg-white p-4 md:p-6 flex flex-col align-center ">
          <p className="text-sm text-[#0C5400] font-bold">
            Posted on {new Date(post.publishedAt).toLocaleString("en-IN")}
          </p>
          <h2 className={`font-semibold text-black mt-2 ${isFeatured ? "text-xl" : "text-base"}`}>
            {post.title}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            by {post.author?.name || post.author || "Unknown"}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Header */}
{/* Header */}
<div className=" py-12 px-4 sm:px-6 md:px-10 flex items-center justify-center">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0C5400] text-center">
    News & Blogs
  </h2>
</div>


      {/* Grid Layout */}
      <div className="container mx-auto py-12 md:py-16 px-3 " style={{scrollBehavior: "smooth"}}>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
          {/* Featured Post */}
          <div className="lg:col-span-3 ">{posts[0] && renderCard(posts[0], 0)}</div>

          {/* Top Right 2 Posts */}
          <div className="flex flex-col gap-6 ">
            {posts.slice(1, 3).map((post, idx) => renderCard(post, idx + 1))}
          </div>
        </div>

        {/* Remaining Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {posts.slice(3).map((post, idx) => renderCard(post, idx + 3))}
        </div>
      </div>
    </div>
  );
}
